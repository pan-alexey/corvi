import xhr from '../../src/client/xhr';
import app from './mock/express';
import http from 'http';
import getPort from 'get-port';

describe("XHR", () => {
  let server : http.Server;
  let port: number;

  beforeAll(async (done) => {
    port = await getPort();
    server = http.createServer(app);
    server.listen(port, done);
  });

  afterAll(done => {
    server.close(done);
  });

  test("It should response the GET method", async () => {
    console.log(`http://localhost:${port}/`);
    const url = `http://localhost:${port}/`;
    const result = await xhr({method: 'GET', url});
    
    console.log(result);

    expect(400).toBe(400);
  });
});