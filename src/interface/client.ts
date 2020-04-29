/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAuth {
  username: string;
  password: string;
}

export interface IProxy {
  host: string;
  port: string;
  auth?: IAuth;
}

export interface IOptions {
  headers?: {
    [key: string] : string
  },
  params?: {
    [key: string] : any;
  };
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
  auth?: IAuth;
  responseType?: string,
  responseEncoding?: string,
  xsrfCookieName?: string,
  xsrfHeaderName?: string,
  onUploadProgress?: () => void,
  onDownloadProgress?: () => void,
  maxContentLength?: number,
  maxBodyLength?: number,
  validateStatus?: (status: number) => boolean,
  maxRedirects?: number,
  socketPath?: null| string,
  proxy?: IProxy,
  decompress?: boolean,
}

export interface IClient {
  (options: IRequest): {
    promise: Promise<IResponse>;
    abort: (err: Error) => void;
  };
}

export interface IClientOptions extends IOptions {
  baseURL?: string,
  clientTimeout?: number;
  attemps?: number;
  client: IClient;
}

export interface IRequest extends IOptions {
  url: string,
  method: string,
}

export interface IResponse {
  ok: boolean;
  status: number;
  statusText: string;
  data: string;
  headers: string;
  elapsed: number;
}
