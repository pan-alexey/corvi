/* eslint-disable @typescript-eslint/no-explicit-any */
import { PromiseSleep, PromiseRetry} from '../../src/core/helpers';

class HandlerWidthThrow {
  private counter: number;

  constructor(count: number) {
    this.counter = count;
  }

  call(): Promise<string> {
    --this.counter;
     return new Promise((resolve, reject)=>{
      if (this.counter>0) {
        reject(new Error('reject'));
      } else {
        resolve('ok');
      }
     });
  }
}

describe('Helper', () => {
  it('sleep', async() => {
    const timeout = 1000;
    const start:number = new Date().valueOf();
    const result = await PromiseSleep(timeout);
    const end:number = new Date().valueOf();

    expect(timeout).toBe(result);
    expect( (end - start) > 1000).toBe(true);
  });

  it('retry[rejects]', async () => {
    const handler = new HandlerWidthThrow(5);
    await expect(PromiseRetry(()=>handler.call(), 1)).rejects.toThrowError('reject');;
  });
  
  it('retry[resolve]', async () => {
    const handler = new HandlerWidthThrow(5);
    await expect(PromiseRetry(()=>handler.call(), 5)).resolves.toBe('ok');;
  });
});
