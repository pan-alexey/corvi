/* eslint-disable no-useless-escape */

// document.URL
// 


export interface IUrlBuilder {
  encode: (url:string) => string;
  toString: () => string;
  match: (url: string) => void;
}

export class UrlBuilder implements IUrlBuilder {
  private url = '';

  private baseURL?: string;

  private URI : {
    protocol?: string,
    authority?: string,
    path?: string,
    query?: {
      [key: string] : string
    },
    hash?: string,
    authentication?: {
      login?: string;
      password?: string;
    },
    hostname?: string,
    port?: string,
  } = {};

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

  constructor(baseURL?: string) {
    if (baseURL) {
      this.baseURL = baseURL;//this.encode(baseURL);
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

  match: (url: string) => void = (url) => {
    const urlRegExp = new RegExp('^' + this.patterns.protocol + '?' + this.patterns.authority + '?' + this.patterns.path + this.patterns.query + '?' + this.patterns.hash + '?');
    const authRegExp = new RegExp('^' + this.patterns.authentication + '?' + this.patterns.hostname + this.patterns.port + '?$');
    const urlMatch = urlRegExp.exec(url) || [];
    const authMatch = urlMatch[2] ? authRegExp.exec(urlMatch[2]) || [] : [];

    return  {
      protocol: urlMatch[1] || '',
      username: authMatch[1] || '',
      password: authMatch[2] || '',
      hostname: authMatch[3] || '',
      port: authMatch[4] || '',
      path: urlMatch[3] || '',
      query: urlMatch[4] || '',
      hash: urlMatch[5] || '',
    };
  }
}
