export declare const PromiseSleep: (timeout: number) => Promise<unknown>;
export declare const PromiseRetry: <T>(promise: () => Promise<T>, attempt: number) => Promise<T>;
export declare const promiseTimeout: <T>(promise: () => Promise<T>, ms: number) => Promise<T>;
