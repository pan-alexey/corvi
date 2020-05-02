/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import corvi from 'corvi';

const instanse = corvi.create();
instanse.options.baseURL = '1';
corvi.options.baseURL = '2';

const urlBuilder = instanse.urlBuilder('https://vxv.me');

// console.log(urlBuilder.isAbsolute('https://vxv.me'), 'https://vxv.me');
// console.log(urlBuilder.isAbsolute('//vxv.me'), 'vxv.me');
// console.log(urlBuilder.isAbsolute('//vxv.me/query'), '//vxv.me/query');
// console.log(urlBuilder.isAbsolute('ftp://127.0.0.1'), 'ftp://127.0.0.1');

// console.log(urlBuilder.isAbsolute('vxv.me'), 'vxv.me');
// console.log(urlBuilder.isAbsolute('vxv.me/query'), 'vxv.me/query');
// console.log(urlBuilder.isAbsolute('vxv.me'), 'vxv.me');


console.log('/a/a.php?a=0&b=2', urlBuilder.match('/a/a.php?a=0&b=2'));

//console.log(corvi.options, instanse.options);

// (async function (): Promise<any> {
//   const result: any = await corvi.request({method: 'GET', url: 'http://node.vxv.me'});

//   console.log(result);
// })();

