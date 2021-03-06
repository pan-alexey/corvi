import {
  IOptions,
  IClient,
} from '../interface';

import configOptions from './config/options';

interface ICore {
  version: string;
  client: (options:IOptions) => Promise<string>;
}

class Core implements ICore {
  version = '0.1';

  private _client: IClient;

  constructor(client: IClient) {
    this._client = client;
  }

  client(options:IOptions): Promise<string> {
    return this._client(options, Object.assign({}, configOptions));
  }

  get(word: string): string {
    const date = new Date();
    return word + date.toUTCString();
  }
}
export default Core;
