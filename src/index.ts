import http from '~/request/node.ts';
import xhr from '~/request/xhr.ts';

interface ICorvi {
  version: string
}

class Corvi implements ICorvi {
  version: string = '0.1'

  get() {
    return new Date()
  }
}

const corvi = new Corvi()

module.exports = corvi;
module.exports.default = corvi;

export default corvi;
