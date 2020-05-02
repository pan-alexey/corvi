/* eslint-disable @typescript-eslint/no-explicit-any */
import { PromiseSleep, PromiseRetry, PromiseTimeout} from '../../src/helpers/promise';
import HandlerWidthThrow from '../mock/throw';

describe('promise', () => {
  it('sleep', async() => {
    const timeout = 1000;
    const start:number = new Date().valueOf();
    const result = await PromiseSleep(timeout);
    const end:number = new Date().valueOf();

    expect(timeout).toBe(result);
    expect( (end - start) >= 1000).toBe(true);
  });

  it('promise retry [resolve]', async () => {
    const mockCallback = jest.fn();
    const attemps = 5;
    const handler = new HandlerWidthThrow(attemps);
    await expect(PromiseRetry(()=>handler.call(), attemps, mockCallback)).resolves.toBe('ok');
    expect(mockCallback.mock.calls.length).toBe(attemps);
  });

  it('promise retry + 1 [resolve]', async () => {
    const mockCallback = jest.fn();
    const attemps = 5;
    const handler = new HandlerWidthThrow(attemps);
    await expect(PromiseRetry(()=>handler.call(), attemps + 1, mockCallback)).resolves.toBe('ok');
    expect(mockCallback.mock.calls.length).toBe(attemps);
  });

  it('promise retry 0 [resolve]', async () => {
    const mockCallback = jest.fn();
    const attemps = 5;
    const promise: Promise<string> = new Promise((resolve) => resolve('promise retry 0 [resolve]'));
    await expect(PromiseRetry(()=> promise, attemps, mockCallback)).resolves.toBe('promise retry 0 [resolve]');
    expect(mockCallback.mock.calls.length).toBe(0);
  });

  it('promise retry + 1 [resolve]', async () => {
    const mockCallback = jest.fn();
    const attemps = 5;
    const handler = new HandlerWidthThrow(attemps);
    await expect(PromiseRetry(()=>handler.call(), attemps + 1, mockCallback)).resolves.toBe('ok');
    expect(mockCallback.mock.calls.length).toBe(attemps);
  });

  it('promise retry [rejects 5]', async () => {
    const mockCallback = jest.fn();
    const attemps = 5;
    const promise: Promise<string> = new Promise((resolve, reject) => {reject(new Error('promise retry [rejects 5]')); });
    await expect(PromiseRetry(()=>promise, attemps, mockCallback)).rejects.toThrowError('promise retry [rejects 5]');
    expect(mockCallback.mock.calls.length).toBe(attemps + 1);
  });

  it('promise retry [rejects 1]', async () => {
    const mockCallback = jest.fn();
    const attemps = 0;
    const promise: Promise<string> = new Promise((resolve, reject) => {reject(new Error('promise retry [rejects 1]')); });
    await expect(PromiseRetry(()=>promise, attemps, mockCallback)).rejects.toThrowError('promise retry [rejects 1]');
    expect(mockCallback.mock.calls.length).toBe(attemps + 1);
  });

  it('promise retry [rejects]', async () => {
    const attemps = 0;
    const promise: Promise<string> = new Promise((resolve, reject) => {reject(new Error('promise retry [rejects 1]')); });
    await expect(PromiseRetry(()=>promise, attemps)).rejects.toThrowError('promise retry [rejects 1]');
  });

  it('promise timeout [resolve]', async () => {
    const timeout = 1000;
    await expect(PromiseTimeout(() => {
      return new Promise((resolve) => {
        setTimeout(()=>{
          resolve('ok');
        }, timeout/2);
      });
    }, timeout)).resolves.toBe('ok');
  });

  it('promise timeout [resolve]', async () => {
    const timeout = 1000;
    await expect(PromiseTimeout(() => {
      return new Promise((resolve) => {
        setTimeout(()=>{
          resolve('ok');
        }, timeout*2);
      });
    }, timeout)).rejects.toThrowError(`Promise Timeout: ${timeout}ms`);
  });

});
