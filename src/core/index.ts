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
    timeout: 1000,
  };

  constructor(client: IClient) {
    this._client = client;
  }

  client(options:IOptions): Promise<string> {
    const _options = Object.assign({}, this.options, options);
    const attemps: number = _options.attemps || 0;
    const clientTimeout: number = _options.clientTimeout || 0;

    const client = attemps > 0 ? PromiseRetry( () => {
      return this._client(_options);
    }, attemps) : this._client(_options);;

    return clientTimeout ? PromiseTimeout (()=>{
      return client;
    }, clientTimeout) : client;
  }
}

export default Core;
