/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import corvi from 'corvi';
console.log(corvi.request);

(async function (): Promise<any> {
  const result: any = await corvi.request({method: 'GET', url: 'http://node.vxv.me'});

  console.log(result);
})();

