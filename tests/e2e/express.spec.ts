import request from 'supertest';

import app from './mock/express';

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
  test("It should response the GET method", async () => {
    const response = await request(app).get("/test");
    expect(response.status).toBe(404);
  });
  test("It should response the GET method", async () => {
    const response = await request(app).get("/400");
    expect(response.status).toBe(400);
  });
});