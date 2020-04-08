import { IOptions } from '~/types/request';

import options from '~/request/options';
import xhr from '~/client/xhr';

interface ICorvi {
  version: string;
}

class Corvi implements ICorvi {
  version = '0.1';

  private options: IOptions;

  public client: (options: IOptions) => Promise<string>;

  constructor() {
    this.options = options;

    // const client = typeof XMLHttpRequest !== 'undefined' ? xhr : http;
    this.client = xhr;
  }

  get(word: string): string {
    const date = new Date();
    return word + date.toUTCString();
  }
}

const corvi = new Corvi();

// eslint-disable-next-line no-undef
module.exports = corvi; // for js library

export default corvi;
