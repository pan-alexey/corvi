import app from './mock/express';
import http from 'http';
import getPort from 'get-port';

import xhr from '../../src/client/xhr';

describe("XHR", () => {
  let server : http.Server;
  let port: number;
  let url: string;

  beforeAll(async (done) => {
    port = await getPort();
    server = http.createServer(app);
    url = `http://localhost:${port}`;
    server.listen(port, done);
  });

  afterAll(done => {
    server.close(done);
  });

  test("It should response the GET method", async () => {
    const result = await xhr({method: 'GET', url: `${url}/`});

    expect(result).toBe('/root/');
  });
});