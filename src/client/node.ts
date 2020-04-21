/* eslint-disable @typescript-eslint/no-explicit-any */
import { IOptions } from '../interface';
import https from "https";
import { ClientRequest } from 'http';

const client = (options: IOptions): Promise<string> => {
  return new Promise<string> ((resolve, reject) => {
    let data = '';

    // const _options = {
    //   origin: 'https://node.vxv.me',
    //   protocol: 'https:',
    //   username: '',
    //   password: '',
    //   host: 'node.vxv.me',
    //   hostname: 'node.vxv.me',
    //   port: '',
    //   pathname: '/',
    //   search: '',
    //   hash: '',
    // };
    
    const req: ClientRequest = https.request(options, (res:any) => {
      const timeout: number = setTimeout(()=>{
        req.abort();
        reject('Request timeout');
      }, options.timeout);

      res.on('data', (chunk: string) => {
        data += chunk;
      });
    
      res.on('end', () => {
        clearTimeout(timeout);
        resolve(data);
      });
    });
    
    req.end();
  });
};

export default client;
