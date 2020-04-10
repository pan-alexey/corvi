import { IOptions } from '../interface/request';
import { IClient } from '../interface/client';


import options from '../request/options';


interface ICore {
  version: string;
}

class Core implements ICore {
  version = '0.1';

  private options: IOptions;

  public client: IClient;

  constructor(client: IClient) {
    this.options = options;
    this.client = client;
  }

  get(word: string): string {
    const date = new Date();
    return word + date.toUTCString();
  }
}
export default Core;
