import {
  IOptions,
  IClient,
} from '../interface';

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
    attemps: 1,
    timeout: 5000,
    requestIimeout: 5000,
  };

  constructor(client: IClient) {
    this._client = client;
  }

  client(options:IOptions): Promise<string> {
    return this._client(Object.assign({}, this.options, options));
  }
}
export default Core;
