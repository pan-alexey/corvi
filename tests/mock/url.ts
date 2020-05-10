
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


const urls = [];


console.log(path);
