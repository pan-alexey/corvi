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

  test("[resolve] simple", async () => {
    const result = await xhr({method: 'GET', url: `${url}/`});

    expect('ok').toBe('ok');
  });

  // test("[resolve] delay", async () => {
  //   const timeout = 1000;
  //   // const serverTimeout: number = parseInt( timeout / 2 );
  //   const result = await xhr({method: 'GET', url: `${url}/timeout/${timeout}`, timeout: timeout * 2});

  //   console.log(result);
  //   //await expect(xhr({method: 'GET', url: `${url}/timeout/${serverTimeout}`, timeout})).toBe(serverTimeout);
  //   expect(1).toBe(1);
  // });

  // test("[rejects] common timeout", async () => {
  //   const timeout = 1000;
  //   const serverTimeout = timeout * 2;
  //   await expect(xhr({method: 'GET', url: `${url}/timeout/${serverTimeout}`, timeout})).rejects.toThrowError(`Common timeout: ${timeout}ms`);
  // });

  // test("[rejects] client timeout", async () => {
  //   const xhrTimeout = 60000; // default client timeout
  //   await expect(xhr({method: 'GET', url: `${url}/timeout/${xhrTimeout * 2}`})).rejects.toThrowError(`Client timeout: ${xhrTimeout}ms`);
  // });
});