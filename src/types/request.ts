export interface IRequestOptions {
  url?: string;
  maxResponseSize: number; // вызывает исключение если тело ответа больше заданного значение
  // method?: Method;
  baseURL?: string;
  // transformRequest?: AxiosTransformer | AxiosTransformer[];
  // transformResponse?: AxiosTransformer | AxiosTransformer[];
  // headers?: any;
  // params?: any;
  // paramsSerializer?: (params: any) => string;
  // data?: any;
  timeout?: number;
  retry?: number; // count retry
  // withCredentials?: boolean;
  // adapter?: AxiosAdapter;
  // auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  maxContentLength?: number;
  maxBodyLength?: number;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;

  preHook?: () => void;
  postHook?: () => void;
  use?: (body: string) => string; // middleware
  // socketPath?: string | null;
  // httpAgent?: any;
  // httpsAgent?: any;
  // proxy?: AxiosProxyConfig | false;
  // cancelToken?: CancelToken;
  // decompress?: boolean;
}

export interface IRequestResult {
  ok: boolean;
  status: number;
  statusText: string;
  data: string;
  json: <T>() => T;
  headers: string;
}
