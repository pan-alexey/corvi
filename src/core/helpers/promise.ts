export const PromiseSleep: (timeout: number) => Promise<unknown> = (timeout) => {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(timeout);
    },timeout);
  });
};

export const PromiseRetry:
  <T>(promise: () => Promise<T>, attempt: number, rejectCallback?: (e: unknown) => void) => Promise<T> =
  <T>(promise: () => Promise<T>, attempt: number, rejectCallback?: (e: unknown) => void) => {
    return new Promise<T>((resolve, reject) => {
      promise().then(resolve)
        .catch((err) => {
          if (rejectCallback) {
            rejectCallback(err);
          }
          if (--attempt > 0) {
            PromiseRetry(promise, attempt, rejectCallback).then(resolve);
          } else {
            reject(err);
          }
        });
    });
  };

export const PromiseTimeout:
<T>(promise: () => Promise<T>, ms:number) => Promise<T> = <T>(promise: () => Promise<T>, ms: number) => {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Promise Timeout: ${ms}ms`));
    }, ms);
    promise().then(resolve)
    .catch((err)=>{
      reject(err);
    });
  });
};
