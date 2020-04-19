import {
  IOptions,
  IClient,
} from '../interface';

import {
  PromiseTimeout,
  PromiseRetry,
} from './helpers/promise';

interface ICore {
  version: string;
  client: (options:IOptions) => Promise<string>;
}

class Core implements ICore {
  version = '0.1';

  private _client: IClient;

  public options: IOptions = {
    url: '/',
    method: 'GET',
    attemps: 1000,
    timeout: 500,
  };

  constructor(client: IClient) {
    this._client = client;
  }

  client(options:IOptions): Promise<string> {
    const _options = Object.assign({}, this.options, options);
    const timeout: number = _options.timeout || 0;
    const attemps: number = _options.attemps || 0;

    return PromiseRetry(()=>{
      return PromiseTimeout( () => {
        return this._client(_options);
      }, timeout);
    }, attemps);
  }
}

export default Core;
