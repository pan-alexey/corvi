/* eslint-disable no-useless-escape */

export interface IUri {
  protocol: string;
  username: string;
  password: string;
  hostname: string;
  port: string;
  path: string;
  query: string;
  hash: string;
}

export interface IUrlBuilder {
  parseUri: (url: string) => IUri;
  decodeUri: (url: IUri) => string;
  resolve: (source: string, relative: string) => string;
}

export class UrlBuilder implements IUrlBuilder {
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

  constructor(baseURL?: string) {
    this.baseUrl(baseURL);
  }

  baseUrl(baseURL?: string): void {
    if (baseURL) {
      this.baseURL = baseURL;
    }
  }

  // resolve(from: string, to?: string): string {
  //   if (to) {
  //     return this.combineURLs(from, to);
  //   }
    
  //   if (this.baseURL){
  //     return this.combineURLs(this.baseURL, from);
  //   }

  //   return from;
  // }

  // combineURLs(baseURL: string, relativeURL: string): string {
  //   const baseUri: IUrl = this.parse(baseURL);
  //   const relativeUri: IUrl = this.parse(relativeURL);

  //   if (relativeUri.hostname) {
  //     return relativeURL;
  //   }

  //   if (!relativeUri.path) {
  //     return baseURL;
  //   }

  //   baseUri.path = this.combinePath(baseUri.path, relativeUri.path);

  //   return this.decodeUri(baseUri);
  // }

  // combinePath(basePath: string, relativePath: string): string {
  //   const base: Array<string>= basePath.split('/');
  //   const relative: Array<string> = relativePath.split('/');

  //   if( !relative[0] ) return this.normalizePath(relative);

  //   base.pop();

  //   console.warn(base.concat(relative));

  //   return this.normalizePath(base.concat(relative));
  // }

  // normalizePath(path: Array<string>): string {
  //   let result!: Array<string>;

  //   path.forEach( (el: string) => {
  //     if (el === '..' && result) {
  //       result.pop();
  //       return;
  //     } 
  //     if (!result) {
  //       result = [];
  //     } 
  //     result.push(el);
  //   });

  //   return result !==null ? result.join('/') : '';
  // }

  // encode(str: string) : string {
  //   return str ? encodeURIComponent(str).
  //     replace(/%40/gi, '@').
  //     replace(/%3A/gi, ':').
  //     replace(/%24/g, '$').
  //     replace(/%2C/gi, ',').
  //     replace(/%20/g, '+').
  //     replace(/%5B/gi, '[').
  //     replace(/%2E/gi, '[').
  //     replace(/%5D/gi, ']') : str;
  // };

  // decodeUri(uri: IUrl): string {
  //   let url = '';
  //   if (uri.hostname) {
  //     if (uri.protocol) {
  //       url += uri.protocol + ':';
  //     }
  
  //     url += '//';

  //     if (uri.username && uri.password) {
  //       url += uri.username + ':' + uri.password + '@';
  //     }

  //     url += uri.hostname;

  //     if (uri.port) {
  //       url += '+' +uri.port;
  //     }

  //     url += '/';
  //   }

  //   if (uri.path) {
  //     url += url ? uri.path[0] === '/' ? uri.path.slice(1): uri.path : uri.path;
  //   }

  //   if (uri.query) {
  //     url += uri.query;
  //   }

  //   if (uri.hash) {
  //     url += uri.hash;
  //   }
  //   return url;
  // }

  resolve(source: string, relative: string) : string {
    const sourceUri = this.parseUri(source);
    const relativeUri = this.parseUri(relative);

    const uri: IUri = Object.assign({}, sourceUri);

    return 'str';
  }

  decodeUri(uri: IUri) : string {
    return '';
  }

  parseUri(url: string): IUri {

    // RFC 3986 https://tools.ietf.org/html/rfc3986#page-50
    const isAbsolute = /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    const urlRegExp = new RegExp('^' + this.patterns.protocol + '?' + this.patterns.authority + '?' + this.patterns.path + this.patterns.query + '?' + this.patterns.hash + '?');
    const authRegExp = new RegExp('^' + this.patterns.authentication + '?' + this.patterns.hostname + this.patterns.port + '?$');
    const urlMatch = urlRegExp.exec(url) || [];
    const authMatch = urlMatch[2] ? authRegExp.exec(urlMatch[2]) || [] : [];

    console.warn(urlRegExp);

    const uri: IUri = {
      protocol: urlMatch[1] || '',
      username: authMatch[1] || '',
      password: authMatch[2] || '',
      hostname: authMatch[3] || '',
      port: authMatch[4] || '',
      path: urlMatch[3] || '',
      query: urlMatch[4] || '',
      hash: urlMatch[5] || '',
    };

    uri.protocol = uri.protocol || isAbsolute ? uri.protocol + '://' : uri.protocol;

    return uri;
  }
}
