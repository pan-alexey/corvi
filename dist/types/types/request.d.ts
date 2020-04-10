export interface IOptions {
    method: string;
    url?: string;
    headers?: {
        [key: string]: string;
    };
    params?: any;
    timeout?: number;
    isStatusOk?: (status: number) => boolean;
    maxContentLength?: number;
    maxBodyLength?: number;
    maxRedirects?: number;
    retry?: number;
    preHook?: () => void;
    postHook?: () => void;
    maxSize?: number;
    totalTimeout?: number;
}
export interface IResult {
    ok: boolean;
    status: number;
    statusText: string;
    data: string;
    json: <T>() => T;
    headers: string;
}
