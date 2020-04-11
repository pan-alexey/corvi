// import { IOptions } from '../interface/request';
// import { IClient } from '../interface/client';
import {
  IOptions,
  IClient,
} from '../interface';

import options from './options';


interface ICore {
  version: string;
  // client: IClient;
}

class Core implements ICore {
  version = '0.1';

  private options: IOptions;

  private _client: IClient;

  constructor(client: IClient) {
    this.options = options;
    this._client = client;
  }

  client(options:IOptions): Promise<string> {
    const _options: IOptions = Object.assign({},options,this.options);
    return this._client(_options);
  }

  get(word: string): string {
    const date = new Date();
    return word + date.toUTCString();
  }
}
export default Core;
