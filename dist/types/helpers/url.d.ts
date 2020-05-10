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
    parse: (url: string) => void;
}
export declare class UrlBuilder implements IUrlBuilder {
    private baseURL?;
    private patterns;
    constructor(baseURL?: string);
    baseUrl(baseURL?: string): void;
    resolve(source: string, relative: string): string;
    parse(url: string): IUrl;
}
