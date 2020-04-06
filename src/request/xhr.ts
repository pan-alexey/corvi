// var http = require('http');
// var https = require('https');


const request = (reject, resolve) => {
  // error
  // errorResponse // for retry

  const xhr = new XMLHttpRequest();
  reject();
  resolve();

  xhr.send();
};

// import { IRequestResult, } from '~/types/request';
const client = (): Promise<string> => {
  const promise = new Promise<string> ((resolve, reject) => {
    request(resolve, reject);

    const timeout = setTimeout( () => {
      resolve('123');

    }, 100);

    if (!timeout) {
      reject();
    }
    // reject = rejectFromPromise;
  });
  // console.log('XMLHttpRequest');
  // var request = new XMLHttpRequest();

  // request.open('GET', 'https://node.vxv.me');

  // request.send();
  return promise;
};

export default client;
