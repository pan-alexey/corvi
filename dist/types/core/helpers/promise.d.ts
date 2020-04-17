export declare const PromiseSleep: (timeout: number) => Promise<unknown>;
export declare const PromiseRetry: <T>(promise: () => Promise<T>, attempt: number, rejectCallback?: (e: unknown) => void) => Promise<T>;
export declare const PromiseTimeout: <T>(promise: () => Promise<T>, ms: number) => Promise<T>;
