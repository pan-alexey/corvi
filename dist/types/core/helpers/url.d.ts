export interface IUrlBuilder {
    encode: (url: string) => string;
    toString: () => string;
}
export declare class UrlBuilder implements IUrlBuilder {
    private url;
    private baseURL?;
    private patterns;
    private prototcols;
    constructor(baseURL?: string);
    encode: (str: string) => string;
    toString: () => string;
}
