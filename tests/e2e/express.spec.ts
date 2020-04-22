import request from 'supertest';

import app from './mock/express';

describe("Test the root path", () => {
  test("/", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  test("code 404", async () => {
    const response = await request(app).get("/code/404");
    expect(response.status).toBe(404);
  });

  test("code 400", async () => {
    const response = await request(app).get("/code/400");
    expect(response.status).toBe(400);
  });

  test("timeout 1000", async () => {
    const timeout = 1000;
    const start:number = new Date().valueOf();
    const response = await request(app).get(`/timeout/${timeout}`);
    const end:number = new Date().valueOf();

    expect(response.status).toBe(200);

    expect(response.text).toBe(`timeout ${timeout}`);

    expect( (end - start) >= timeout).toBe(true);
  });

  test("timeout 2000", async () => {
    const timeout = 2000;
    const start:number = new Date().valueOf();
    const response = await request(app).get(`/timeout/${timeout}`);
    const end:number = new Date().valueOf();

    expect(response.status).toBe(200);

    expect(response.text).toBe(`timeout ${timeout}`);

    expect( (end - start) >= timeout).toBe(true);
  });

});