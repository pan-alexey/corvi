
import corvi from '../../src/index';
import url from 'url';

describe('resolve', () => {
  const Url = corvi.urlBuilder();

  it('[/a] + [b]', async() => {
    const from = '/a';
    const to = 'b';
    expect(Url.resolve(from, to)).toBe(url.resolve(from, to));
  });

  it('[/] + []', async() => {
    const from = '/';
    const to = '';
    expect(Url.resolve(from, to)).toBe(url.resolve(from, to));
  });

  it('[//vxv.me/] + [/]', async() => {
    const from = '//vxv.me/';
    const to = '/';
    expect(Url.resolve(from, to)).toBe(url.resolve(from, to));
  });

  it('[https://vxv.me/] + [/]', async() => {
    const from = 'https://vxv.me/';
    const to = '/';
    expect(Url.resolve(from, to)).toBe(url.resolve(from, to));
  });
});
