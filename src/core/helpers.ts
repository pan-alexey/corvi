// /* eslint-disable @typescript-eslint/no-explicit-any */
// export const promiseTimeout: (ms: number, promise: Promise<any>) => Promise<any>= function(ms, promise){
//   const timeout = new Promise((resolve, reject) => {
//     const timer = setTimeout(() => {
//       clearTimeout(timer);
//       reject('Timed out in '+ ms + 'ms.');
//     }, ms);
//   });

//   return Promise.race([
//     promise,
//     timeout,
//   ]);
// };

export const PromiseSleep: (timeout: number) => Promise<number> = (timeout = 0) => {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(timeout);
    },timeout);
  });
};

export const PromiseRetry: 
<T>(promise: () => Promise<T>, attempt:number) => Promise<T> = 
<T>(promise: () => Promise<T>, attempt = 4) => {
  return new Promise<T>((resolve, reject) => {
    promise().then(resolve)
    .catch(() => {
      if (--attempt > 0) {
        PromiseRetry(promise, attempt).then(resolve);
      } else {
        reject('max attempt');
      }
    });
  });
};
