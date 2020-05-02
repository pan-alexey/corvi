export interface IUrlBuilder {
    encode: (url: string) => string;
    toString: () => string;
    match: (url: string) => void;
}
export declare class UrlBuilder implements IUrlBuilder {
    private url;
    private baseURL?;
    private URI;
    private patterns;
    constructor(baseURL?: string);
    encode: (str: string) => string;
    toString: () => string;
    match: (url: string) => void;
}
