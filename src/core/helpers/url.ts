//console.log(url.toString());
// var fullPath = buildFullPath(config.baseURL, config.url);
// var parsed = url.parse(fullPath);
// var protocol = parsed.protocol || 'http:';

export interface IUrlBuilder {
  encode: (url:string) => string;
  toString: () => string;
}

export class UrlBuilder implements IUrlBuilder {
  private url = '';

  private baseURL?: string;

  private patterns = {
    protocol: '(?:([^:/?#]+):)',
    authority: '(?://([^/?#]*))',
    path: '([^?#]*)',
    query: '(\\?[^#]*)',
    hash: '(#.*)',
    authentication: '(?:([^:]*)(?::([^@]*))?@)',
    hostname: '([^:]+)',
    port: '(?::(\\d+))',
  };

  private prototcols = {
    ftp: 21,
    file: 0,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443,
  }

  constructor(baseURL?: string) {
    if (baseURL) {
      this.baseURL = this.encode(baseURL);
    }
  }

  encode: (str: string) => string = (str) => {
    return str ? encodeURIComponent(str).
      replace(/%40/gi, '@').
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%2E/gi, '[').
      replace(/%5D/gi, ']') : str;
  };

  toString:() => string = () =>{
    return this.url;
  }
}
