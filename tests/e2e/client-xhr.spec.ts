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
    server.setTimeout(500000);
    jest.setTimeout(120000);

    url = `http://localhost:${port}`;
    server.listen(port, done);
  });

  afterAll(done => {
    server.close(done);
  });

  test("GET Success", async () => {
    const result = await xhr({method: 'GET', url: `${url}/`});

    expect(result).toBe('/root/');
  });

  test("Common timeout [rejects]", async () => {
    const timeout = 1000;
    const serverTimeout = timeout * 2;
    await expect(xhr({method: 'GET', url: `${url}/timeout/${serverTimeout}`, timeout})).rejects.toThrowError(`Common timeout: ${timeout}ms`);
  });

  // test("Common timeout [resolve]", async () => {
  //   const timeout = 1000;
  //   const serverTimeout = timeout / 2;
  //   await expect(xhr({method: 'GET', url: `${url}/timeout/${serverTimeout}`, timeout})).toBe(`ok`);
  // });

  test("Client timeout [rejects]", async () => {
    const xhrTimeout = 60000; // default client timeout
    await expect(xhr({method: 'GET', url: `${url}/timeout/`})).rejects.toThrowError(`Client timeout: ${xhrTimeout}ms`);
  });
});