import {
  IRequest,
  // IOptions,
  IClient,
  //IResponse,
  IClientOptions,
} from '../interface/client';

import {UrlBuilder, IUrlBuilder} from './helpers/url';
// import {
//   PromiseTimeout,
//   PromiseRetry,
// } from './helpers/promise';

interface ICore {
  version: string;
  //request?: (options:IRequest) => Promise<IResponse>;
  request?: (options:IRequest) => string;
  urlBuilder: (url?: string) => IUrlBuilder;
}

class Core implements ICore {
  version = '0.1';
  private client: IClient;
  public options: IClientOptions = {
    client: this.client,
  };

  constructor(client: IClient) {
    this.client = client;
  }

  urlBuilder(url?: string): IUrlBuilder {
    return new UrlBuilder(url);
  }

  request(options:IRequest) : string{
    const clientOptions: IClientOptions = Object.assign({}, this.options, options);

    const url: IUrlBuilder = new UrlBuilder(clientOptions.baseURL);

    console.log(url);
    console.log(clientOptions.baseURL);

    const reuestOptions: IRequest = Object.assign({}, options);

    console.log(reuestOptions);
    return 'string';
  }
}

export default Core;
