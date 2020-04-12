/* eslint-disable @typescript-eslint/no-explicit-any */
export const promiseTimeout: (ms: number, promise: Promise<any>) => Promise<any>= function(ms, promise){
  const timeout = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      reject('Timed out in '+ ms + 'ms.');
    }, ms);
  });

  return Promise.race([
    promise,
    timeout,
  ]);
};

// https://gist.github.com/briancavalier/842626/c0eb8816486a95d907ca1cd754c9f6e17f68d589

// function tryAtMost(otherArgs, maxRetries, promise) {
// 	promise = promise||new Promise();
// 	// try doing the important thing
// 	if(success) {
// 		promise.resolve(result);
// 	} else if (maxRetries > 0) {
// 		tryAtMost(otherArgs, maxRetries - 1, promise);
// 	} else {
// 		promise.reject(error);
// 	}
// }