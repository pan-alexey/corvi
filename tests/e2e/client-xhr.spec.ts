import app from './mock/express';
import http from 'http';
import getPort from 'get-port';

import HandlerWidthThrow from './mock/throw';

import { PromiseTimeout, PromiseRetry } from '../../src/core/helpers/promise';
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

  test("[rejects] client timeout", async () => {
    const timeout = 500;
    const {promise} = xhr({method: 'GET', url: `${url}/timeout/${timeout*4}`, timeout});
    await expect(promise).rejects.toThrowError(`Client timeout: ${timeout}ms`);
  });


  // it('retry[rejects]', async () => {
  //   const call = (): Promise<string> => {
  //     return new Promise((resolve, reject)=>{
  //        reject(new Error(`reject call`));
  //        resolve('ok');
  //     });
  //  };

  //   await expect(PromiseRetry(()=>call(), 2)).rejects.toThrowError('reject');
  // });

});