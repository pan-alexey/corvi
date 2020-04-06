// import http from '~/request/node.ts';
import xhr from '~/request/xhr.ts';

/*
corvi.use() // like express syntax

corvi.request.header
corvi.request.timeout
*/


interface ICorvi {
  version: string;
}

class Corvi implements ICorvi {
  version = '0.1';

  private client: Promise<string> | null = null;

  constructor() {
    this.client = typeof XMLHttpRequest !== 'undefined' ? xhr : xhr;
  }

  get(word: string,): string {
    const date = new Date();
    return word + date.toUTCString();
  }
}

const corvi = new Corvi();

// eslint-disable-next-line no-undef
module.exports = corvi; // for js library

export default corvi;
