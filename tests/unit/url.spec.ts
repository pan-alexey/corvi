
import corvi from '../../src/index';
import url from 'url';


const sheme = [
  '//',
  'http://',
  'https://',
];

const auth = [
  '',
  'admin:password@',
];

const domains = [
  'example.com/',
  'example.com',
];

const path = [];
for (let i = 0; i < 32; i++) {
  const arrBin = i.toString(2).split('');
  const arrPath = arrBin.map(e => {
    if (e) return '..';
    return 'x';
  });
  const str = arrPath.join('/');

  path.push(str);
  path.push('/' + str);
  path.push(str + '/');
}

const query = [
  '',
  '?a=a',
  '?a=a&b=c',
];

const hash = [
  '',
  '#hash',
  '#hash/',
  '#hash/a',
  '#hash/a/..',
  '#hash/a/../b',
];

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
