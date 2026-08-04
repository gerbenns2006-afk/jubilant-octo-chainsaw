type SimulationInput = {
  age: number;
  bmi: number;
  outdoorHours: number;
  dietaryVitaminD: number;
  supplementUse: boolean;
  comorbidities: number;
  testingCapacity: number;
};

export async function POST(request: Request) {
  const input = (await request.json()) as SimulationInput;
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

  return Response.json({
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
