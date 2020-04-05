import http from '~/request/node.ts';
import xhr from '~/request/xhr.ts';

interface ICorvi {
  version: string
}

class Corvi implements ICorvi {
  version: string = '0.1'

  get(word: string): string {
    const date = new Date()
    return word + date.toUTCString()
  }
}

const corvi = new Corvi()

module.exports = corvi;

export default corvi;
