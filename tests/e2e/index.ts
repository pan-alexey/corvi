/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import corvi from 'corvi';

const instanse = corvi.create();
instanse.options.baseURL = '1';
corvi.options.baseURL = '2';

console.log(corvi.options, instanse.options);

// (async function (): Promise<any> {
//   const result: any = await corvi.request({method: 'GET', url: 'http://node.vxv.me'});

//   console.log(result);
// })();

