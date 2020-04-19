/* eslint-disable @typescript-eslint/no-explicit-any */
import { IOptions } from '../interface';
import https from "https";
//const https = require('https');

const client = (options: IOptions): Promise<string> => {
  return new Promise<string> ((resolve, reject) => {

    const timeout: number = setTimeout(()=>{
      reject('Request timeout');
    }, options.timeout);

    let data = '';

    const _options = {
      href: 'https://node.vxv.me/',
      origin: 'https://node.vxv.me',
      protocol: 'https:',
      username: '',
      password: '',
      host: 'node.vxv.me',
      hostname: 'node.vxv.me',
      port: '',
      pathname: '/',
      search: '',
      hash: '',
    };
    
    const req = https.request(_options, (res:any) => {
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
