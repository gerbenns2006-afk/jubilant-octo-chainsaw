import test from 'node:test';
import assert from 'node:assert/strict';
import { POST } from '../app/api/simulate/route.ts';

const valid = { age: 52, bmi: 31, outdoorHours: 1, dietaryVitaminD: 1, supplementUse: false, comorbidities: 2, testingCapacity: 20 };
const request = (body, headers = {}) => new Request('https://onqiva.example/api/simulate', {
  method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body),
});

test('valid fictional request preserves output and labels its provenance', async () => {
  const response = await POST(request(valid, { Origin: 'https://onqiva.example' }));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  const result = await response.json();
  assert.equal(result.score, 78);
  assert.equal(result.allocation.testsUsed, 20);
  assert.equal(result.simulation, true);
});

test('bad shapes, coercion, unexpected fields, and out-of-range values are rejected', async () => {
  for (const input of [null, [], {}, { ...valid, age: '52' }, { ...valid, age: 17 }, { ...valid, bmi: 500 }, { ...valid, outdoorHours: -1 }, { ...valid, supplementUse: 'false' }, { ...valid, comorbidities: 1.5 }, { ...valid, testingCapacity: 51 }, { ...valid, extra: true }]) {
    assert.equal((await POST(request(input))).status, 400);
  }
});

test('invalid JSON and wrong content type return controlled errors', async () => {
  assert.equal((await POST(new Request('https://onqiva.example/api/simulate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' }))).status, 400);
  assert.equal((await POST(request(valid, { 'Content-Type': 'text/plain' }))).status, 415);
});

test('cross-site browser calls are rejected', async () => {
  assert.equal((await POST(request(valid, { Origin: 'https://other.example' }))).status, 403);
  assert.equal((await POST(request(valid, { 'Sec-Fetch-Site': 'cross-site' }))).status, 403);
});

test('actual streamed size is checked, not just the declared length', async () => {
  const body = new ReadableStream({ start(controller) { controller.enqueue(new TextEncoder().encode(' '.repeat(2049))); controller.close(); } });
  const response = await POST(new Request('https://onqiva.example/api/simulate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, duplex: 'half' }));
  assert.equal(response.status, 413);
  assert.equal((await POST(request(valid, { 'Content-Length': '5000' }))).status, 413);
});
