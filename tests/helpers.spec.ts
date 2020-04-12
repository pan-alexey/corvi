import { PromiseSleep } from '../src/core/helpers';

function round(val: number, dig: number):number {
  return Math.round(val / dig ) * dig;
}

describe('Helper', () => {
  it('PromiseSleep', async() => {
    const timeout = 1000;

    const start:number = new Date().valueOf();
    const result = await PromiseSleep(timeout);
    const end:number = new Date().valueOf();

    expect(timeout).toBe(result);
    expect(round(end - start, 100)).toEqual(round(timeout, 100));
  });
});
