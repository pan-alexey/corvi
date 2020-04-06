// var http = require('http');
// var https = require('https');

// import { IRequestResult, } from '~/types/request';

const request = (): Promise<string> => {
  const promise = new Promise<string> ((resolve, reject,) => {

    // const xhr = new XMLHttpRequest();
    const timeout = setTimeout( () => {
      resolve('123',);

    }, 100,);

    if (!timeout) {
      reject();
    }
    // reject = rejectFromPromise;
  },);
  // console.log('XMLHttpRequest');
  // var request = new XMLHttpRequest();

  // request.open('GET', 'https://node.vxv.me');

  // request.send();
  return promise;
};

export default request;
