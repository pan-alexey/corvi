export interface IOptions {
    method: string;
    url: string;
    retry?: number;
    timeout?: number;
    requestIimeout?: number;
}
export interface IResult {
    ok?: boolean;
    status?: number;
    statusText?: string;
    data?: string;
    json?: <T>() => T;
    headers?: string;
}
export interface IClient {
    (options: IOptions): Promise<string>;
}