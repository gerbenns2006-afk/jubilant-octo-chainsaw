type SimulationInput = {
  age: number;
  bmi: number;
  outdoorHours: number;
  dietaryVitaminD: number;
  supplementUse: boolean;
  comorbidities: number;
  testingCapacity: number;
};

const MAX_BODY_BYTES = 2048;
const bounds = {
  age: [18, 120],
  bmi: [10, 80],
  outdoorHours: [0, 168],
  dietaryVitaminD: [0, 100],
  comorbidities: [0, 30],
  testingCapacity: [5, 50],
} as const;

function json(body: unknown, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
}

function validInput(value: unknown): value is SimulationInput {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const input = value as Record<string, unknown>;
  const keys = [...Object.keys(bounds), "supplementUse"];
  if (Object.keys(input).length !== keys.length || Object.keys(input).some((key) => !keys.includes(key))) return false;
  if (typeof input.supplementUse !== "boolean") return false;
  for (const [key, [min, max]] of Object.entries(bounds)) {
    const number = input[key];
    if (typeof number !== "number" || !Number.isFinite(number) || number < min || number > max) return false;
  }
  return Number.isInteger(input.comorbidities) && Number.isInteger(input.testingCapacity);
}

export async function POST(request: Request) {
  // Browser-origin checks reduce cross-site invocation; they are not authentication.
  const origin = request.headers.get("origin");
  if ((origin && origin !== new URL(request.url).origin) || request.headers.get("sec-fetch-site") === "cross-site") {
    return json({ error: "Cross-site requests are not allowed." }, 403);
  }
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return json({ error: "Send application/json." }, 415);
  }
  const declaredLength = request.headers.get("content-length");
  if (declaredLength && Number(declaredLength) > MAX_BODY_BYTES) return json({ error: "Request is too large." }, 413);
  // Enforce the real byte limit even when Content-Length is absent or inaccurate.
  const reader = request.body?.getReader();
  if (!reader) return json({ error: "A JSON body is required." }, 400);
  let input: unknown;
  try {
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        return json({ error: "Request is too large." }, 413);
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    input = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  } finally {
    reader.releaseLock();
  }
  if (!validInput(input)) return json({ error: "Invalid simulation inputs." }, 400);
  const factors = [
    { label: "Limited outdoor activity", points: Math.max(0, 18 - input.outdoorHours * 4) },
    { label: "Low dietary vitamin D", points: Math.max(0, 16 - input.dietaryVitaminD * 3) },
    { label: "BMI-related vulnerability", points: Math.max(0, (input.bmi - 24) * 1.6) },
    { label: "Age and survivorship context", points: Math.max(0, (input.age - 35) * 0.28) },
    { label: "Comorbidity burden", points: input.comorbidities * 4.5 },
    { label: "No reported supplement use", points: input.supplementUse ? 0 : 8 },
  ].map((factor) => ({ ...factor, points: Math.round(factor.points) }));

  const score = Math.min(96, Math.max(8, 18 + factors.reduce((sum, factor) => sum + factor.points, 0)));
  const sortedFactors = factors.filter((factor) => factor.points > 0).sort((a, b) => b.points - a.points).slice(0, 3);
  const capacity = Math.min(80, Math.max(5, input.testingCapacity));
  const reached = Math.min(capacity, Math.round(capacity * (0.68 + score / 500)));
  const randomReached = Math.round(capacity * 0.39);

  return json({
    simulation: true,
    modelVersion: "illustrative-rules-v1",
    intendedUse: "Fictional demonstration only; not a validated clinical model.",
    score,
    priority: score >= 70 ? "Higher simulated priority" : score >= 45 ? "Moderate simulated priority" : "Lower simulated priority",
    factors: sortedFactors,
    allocation: {
      testsUsed: capacity,
      prioritizedReached: reached,
      randomReached,
      potentiallyMissed: Math.max(0, 36 - reached),
    },
  });
}
