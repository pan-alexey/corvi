import http from 'http';
import app from './mock/express';
// import corvi from '../../src/index';


const server = http.createServer(app);

describe("Test the root path", () => {
  //  console.log(server);

  test("It should response the GET method", async () => {
    expect(1).toBe(1);

    // await corvi.client({
    //   app.re
    // })
  });
});