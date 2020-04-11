import corvi from '../src/index';

test("simple test", () =>{
  expect(2+2).toBe(4);
  expect(corvi.version).toBe('0.1');
});
