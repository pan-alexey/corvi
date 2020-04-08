export interface IOptions {
  method: string;
  url?: string;
  headers?: {[key:string]: string};
  params?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  timeout?: number;
  isStatusOk?: (status: number) => boolean;
  maxContentLength?: number;
  maxBodyLength?: number;
  maxRedirects?: number;

  retry?: number;
  preHook?: () => void;
  postHook?: () => void;
  maxSize?: number;
  totalTimeout?: number;

  // url?: string;
  // maxResponseSize: number; // вызывает исключение если тело ответа больше заданного значение
  // // method?: Method;
  // baseURL?: string;
  // // transformRequest?: AxiosTransformer | AxiosTransformer[];
  // // transformResponse?: AxiosTransformer | AxiosTransformer[];
  // // headers?: any;
  // // params?: any;
  // // paramsSerializer?: (params: any) => string;
  // // data?: any;
  // timeout?: number;
  // retry?: number; // count retry
  // // withCredentials?: boolean;
  // // adapter?: AxiosAdapter;
  // // auth?: AxiosBasicCredentials;
  // responseType?: ResponseType;
  // xsrfCookieName?: string;
  // xsrfHeaderName?: string;
  // maxContentLength?: number;
  // maxBodyLength?: number;
  // validateStatus?: (status: number) => boolean;
  // maxRedirects?: number;

  // preHook?: () => void;
  // postHook?: () => void;
  // use?: (body: string) => string; // middleware
  // socketPath?: string | null;
  // httpAgent?: any;
  // httpsAgent?: any;
  // proxy?: AxiosProxyConfig | false;
  // cancelToken?: CancelToken;
  // decompress?: boolean;
}

export interface IResult {
  ok: boolean;
  status: number;
  statusText: string;
  data: string;
  json: <T>() => T;
  headers: string;
}
