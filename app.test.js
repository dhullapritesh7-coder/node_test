const request = require('supertest');
const app = require('./app');

test('GET /todos returns array', async () => {
  const res = await request(app).get('/todos');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});
