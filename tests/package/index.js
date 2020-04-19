/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const corvi = require('corvi');

console.log(corvi.version);

(async function () {
  const result = await corvi.client({method: 'GET', url: 'http://node.vxv.me'});

  console.log(result);
})();
