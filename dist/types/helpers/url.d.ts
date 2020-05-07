export interface IUrl {
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
    encode: (url: string) => string;
    parse: (url: string) => void;
    resolve: (from: string, to?: string) => string;
    combineURLs: (baseURL: string, relativeURL: string) => string;
    combinePath: (basePath: string, relativePath: string) => string;
}
export declare class UrlBuilder implements IUrlBuilder {
    private baseURL?;
    private patterns;
    constructor(baseURL?: string);
    baseUrl(baseURL?: string): void;
    resolve(from: string, to?: string): string;
    combineURLs(baseURL: string, relativeURL: string): string;
    combinePath(basePath: string, relativePath: string): string;
    normalizePath(path: Array<string>): string;
    encode(str: string): string;
    decodeUri(uri: IUrl): string;
    parse(url: string): IUrl;
}
