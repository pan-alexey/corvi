/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const corvi = require('corvi');

const instanse = corvi.create();
instanse.options.baseUrl = '1';
corvi.options.baseURL = '2';

console.log(corvi.options, instanse.options);

console.log(corvi.client, instanse.client);

// (async function () {
//   const result = await corvi.client({method: 'GET', url: 'http://node.vxv.me/?rand=1'});
//   //const result = promise();

//   console.log(result);
// })();
