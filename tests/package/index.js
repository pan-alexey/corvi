/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const corvi = require('corvi');

console.log(corvi.client);

(async function () {
  const result = await corvi.client({method: 'GET', url: 'http://node.vxv.me'});
  //const result = promise();

  console.log(result);
})();
