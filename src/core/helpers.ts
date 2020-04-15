export const PromiseSleep: (timeout: number) => Promise<unknown> = (timeout = 0) => {
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
    .catch((err) => {
      if (--attempt > 0) {
        PromiseRetry(promise, attempt).then(resolve);
      } else {
        reject(err);
      }
    });
  });
};


export const promiseTimeout:
<T>(promise: () => Promise<T>, ms:number) => Promise<T> = <T>(promise: () => Promise<T>, ms: number) => { 
  let timer: ReturnType<typeof setTimeout> ;

  const timeout = new Promise<never>((resolve, reject)=>{
    timer = setTimeout(()=> {
      reject(new Error(`Timeout: ${ms}ms`));
    },ms);
  });

  return Promise.race([ 
    promise(), 
    timeout, 
  ]).then((result) => {
    clearTimeout(timer);
    return result;
  }); 
};
