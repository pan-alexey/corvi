/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import corvi from 'corvi';

import corvi from '../../src/index';
// import url from 'url';

const instanse = corvi.create();
const urlBuilder = instanse.urlBuilder();


const url = '//домен.рф';
const uri = urlBuilder.parseUri(url);


const regexp = /^(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)(\?[^#]*)?(#.*)?/i;

const urlMatch = regexp.exec(url) || [];

console.warn(uri);

const from = '//example.com';
const to = '../x/../';
// console.log(urlBuilder.resolve(from, to) , ' != ', url.resolve(from, to));

// const show = false;


// const paths: Array<string> = [];
// for (let i = 0; i < 8; i++) {
//   const arrBin = i.toString(2).split('');
//   const arrPath = arrBin.map(e => {
//     if (e === '1') return '..';
//     return 'x';
//   });
//   const path = arrPath.join('/');

//   paths.push(path);
//   paths.push('/' + path);
//   paths.push(path + '/');
// }

// const domains = [
//   '//example.com/',
//   '//example.com',
// ];

// const result:Array<string> = [];
// domains.forEach(domain=>{
//   result.push(domain);
//   paths.forEach((path)=>{
//     result.push(path);
//     if(domain[domain.length - 1] === '/' && path[0]==='/') {
//       result.push(domain + path.slice(-1));
//     } else if (domain[domain.length - 1] !== '/' && path[0] !=='/') {
//       result.push(domain + '/' + path);
//     }
//   });
// });

// result.forEach( (check: string, i: number) => {
//   const from = result[i];
//   const to = result[result.length - 1 - i];
//   if(urlBuilder.resolve(from, to) !== url.resolve(from, to)) {
//     console.log(`[from: ${from}]`, `[to: ${to}]`, `[${urlBuilder.resolve(from, to)} != ${url.resolve(from, to)}]`);
//   };
// });


// let total = 0;
// let no = 0;
// for (let i = 0; i < result.length; i++) {
//   for (let j = 0; j < result.length; j++) {
//     total++;
//     const from = result[i];
//     const to = result[j];
//     if(urlBuilder.resolve(from, to) !== url.resolve(from, to)) {
//       no++;
//       if (show) {
//         console.log(`[from: ${from}]`, `[to: ${to}]`, `[${urlBuilder.resolve(from, to)} != ${url.resolve(from, to)}]`);
//       }
//     };
//   }
// }

// console.log(no/total);