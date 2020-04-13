import corvi from 'corvi';


class ThrowCounter {
  private counter: number;

  constructor(count: number) {
    this.counter = count;
  }

  async call(): Promise<number> {
    --this.counter;
    if (this.counter>0) {
      throw this.counter;
    }
    return this.counter;
  }
}

const PromiseRetry: 
<T>(promise: () => Promise<T>, attempt:number) => Promise<T> = 
<T>(promise: () => Promise<T>, attempt = 4) => {
  return new Promise<T>((resolve, reject) => {
    promise().then(resolve)
    .catch(() => {
      if (--attempt > 0) {
        PromiseRetry(promise, attempt).then(resolve);
      } else {
        reject(new Error(`Max attempts`));
      }
    });
  });
};


(async function ():Promise<null> {
  const a: string = await corvi.client({
    method: 'get',
  });
  console.log(a);

  const SixSteps = new ThrowCounter(6);
  try {
    const result = await PromiseRetry(async() => {
      return await SixSteps.call();
    }, 5);
    console.log(result);
  } catch (error) {
    console.warn(error);
  }



  return null;
})();

