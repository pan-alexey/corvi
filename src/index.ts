import http from '~/request/node.ts';
import xhr from '~/request/xhr.ts';

interface ICorvi {
  version: string
}

const corvi: ICorvi = {
  version: '0.01.0',
}

module.exports = corvi;
module.exports.default = corvi;

export default corvi;
