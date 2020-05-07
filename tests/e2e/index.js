/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const corvi = require('corvi');
const url = require('url');

// const instanse = corvi.create();
// instanse.options.baseUrl = '1';
// corvi.options.baseURL = '2';

// console.log(corvi.options, instanse.options);

// console.log(corvi.client, instanse.client);

// console.log(url.resolve('/one/two/three', 'four'));
// console.log(url.resolve('one/two/three', 'four'));
//console.log(url.resolve('one/two/three', '//four'));

// console.log(url.resolve('/one/two/three', 'four'));
//console.log(url.resolve('//vxv.me/1/2/3/4/5/6', '../../a/b/../'));

//console.log(url.resolve('//vxv.me/1/2/3/4/5/6/', '/../../a/b/c/../..'));


const base = 'vxv.me/1/2/3/4/5/6/../';
const relative = '../a/b/c/';
const relolve = url.resolve(base, relative);

console.log(base, '+' ,relative, '=' , relolve);
console.log(base.split('/').join('/'));
// console.log(base.split('/'));
// console.log(relative.split('/'));
// console.log(relolve.split('/'));

// console.log(url.resolve('one/two/three', '../../four'));
// console.log(url.resolve('//eda.one/two/three/', 'four'));
// console.log(url.resolve('//eda.one/two/three', 'vxv.me/four'));
// console.log(url.resolve('//eda.one/two/three', '//vxv.me/four'));
// console.log(url.resolve('eda.one/two/three', '//vxv.me/four'));

// (async function () {
//   const result = await corvi.client({method: 'GET', url: 'http://node.vxv.me/?rand=1'});
//   //const result = promise();

//   console.log(result);
// })();
