import { PromiseSleep, PromiseRetry } from '../src/core/helpers';


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


describe('Helper', () => {
  // it('PromiseSleep', async() => {
  //   const timeout = 1000;

  //   const start:number = new Date().valueOf();
  //   const result = await PromiseSleep(timeout);
  //   const end:number = new Date().valueOf();

  //   expect(timeout).toBe(result);
  //   expect( (end - start) > 1000).toBe(true);
  //   expect( (end - start) > 1000).toBe(true);
  // });

  // it('PromiseRetry resolve', () => {
  //   const ThrowCounter3 = new ThrowCounter(3);
  //   return expect(PromiseRetry( async()=>{
  //     return ThrowCounter3.call();
  //   }, 4)).resolves.toBe(0);
  // });
  const FiveSteps = new ThrowCounter(5);
  const SixSteps = new ThrowCounter(6);

  it('PromiseRetry', async () => {

    await expect(PromiseRetry(async() => {
      return await FiveSteps.call();
    }, 5)).resolves.toBe(0);
    // await expect(PromiseRetry(async() => {
    //   return await SixSteps.call();
    // }, 5)).rejects.toThrow('max attempt');
  });

  it('terminates the test prematurely', async () => {
    // const promise = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Oops')), 0));
    const promise = PromiseRetry(async() => {
      return await SixSteps.call();
    }, 5);
    await expect(promise).rejects.toThrow('Max attempts');
  });
});
