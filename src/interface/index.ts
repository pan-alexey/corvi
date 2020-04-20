export interface IOptions {
  method: string;
  url: string;
  attemps?: number;
  timeout?: number;
  promiseTimeout?: number;
  json?: <T>() => T; // default parser;
}

export interface IResult {
  ok: boolean;
  status: number;
  statusText: string;
  data: string;
  headers: string;
  elapsed: number;
}

export interface IClient {
  (options: IOptions): Promise<string>
}
