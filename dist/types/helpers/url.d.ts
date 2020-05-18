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
export declare class UrlBuilder implements IUrlBuilder {
    private baseURL?;
    private patterns;
    constructor(baseURL?: string);
    baseUrl(baseURL?: string): void;
    resolve(source: string, relative: string): string;
    decodeUri(uri: IUri): string;
    parseUri(url: string): IUri;
}
