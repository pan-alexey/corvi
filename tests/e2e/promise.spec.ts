/* eslint-disable @typescript-eslint/no-explicit-any */
import { PromiseSleep, PromiseRetry, PromiseTimeout} from '../../src/core/helpers/promise';
import HandlerWidthThrow from './mock/throw';

describe('Helper', () => {
  it('sleep', async() => {
    const timeout = 1000;
    const start:number = new Date().valueOf();
    const result = await PromiseSleep(timeout);
    const end:number = new Date().valueOf();

    expect(timeout).toBe(result);
    expect( (end - start) >= 1000).toBe(true);
  });

  it('retry[rejects]', async () => {
    const handler = new HandlerWidthThrow(5);
    await expect(PromiseRetry(()=>handler.call(), 1)).rejects.toThrowError('reject');
  });

  it('retry[resolve]', async () => {
    const handler = new HandlerWidthThrow(5);
    await expect(PromiseRetry(()=>handler.call(), 6)).resolves.toBe('ok');;
  });

  it('retry[rejects callback]', async () => {
    const mockCallback = jest.fn();
    const handler = new HandlerWidthThrow(5);
    await expect(PromiseRetry(()=>handler.call(), 6, mockCallback)).resolves.toBe('ok');
    expect(mockCallback.mock.calls.length).toBe(5);
  });

  it('retry[rejects callback]', async () => {
    const mockCallback = jest.fn();
    const handler = new HandlerWidthThrow(5);
    await expect(PromiseRetry(()=>handler.call(), 4, mockCallback)).rejects.toThrowError('reject');
  });

  it('timeout [resolve ]', async () => {
    await expect(PromiseTimeout(() => {
      return new Promise((resolve) => {
        setTimeout(()=>{
          resolve('ok');
        }, 500);
      });
    }, 1000)).resolves.toBe('ok');;
  });

  it('timeout [rejects timeout]', async () => {
    await expect(PromiseTimeout(() => {
      return new Promise((resolve) => {
        setTimeout(()=>{
          resolve('ok');
        }, 1500);
      });
    }, 1000)).rejects.toThrowError('Timeout: 1000ms');;
  });

  it('timeout [rejects timeout]', async () => {
    await expect(PromiseTimeout(() => {
      return new Promise((resolve, reject) => {
        reject(new Error('reject'));
      });
    }, 1000)).rejects.toThrowError('reject');;
  });

});
