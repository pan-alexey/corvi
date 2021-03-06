import { IOptions } from '../interface';

const client = (requestOptions: IOptions): Promise<string> => {
  const options = Object.assign({}, requestOptions);

  const promise = new Promise<string> ((resolve, reject) => {
    setTimeout(()=>{
      reject('Request timeout');
    }, options.timeout);

    const xhr:XMLHttpRequest = new XMLHttpRequest();

    xhr.ontimeout = (): null => {
      resolve('Request took longer than expected.');
      return null;
    };

    xhr.open(options.method, options.url);
    xhr.send();
  });



  return promise;
};

export default client;
