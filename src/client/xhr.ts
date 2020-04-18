import { IOptions } from '../interface';

const client = (options: IOptions): Promise<string> => {
  console.log(options);

  return new Promise<string> ((resolve, reject) => {
    setTimeout(()=>{
      reject('Request timeout');
    }, options.timeout);

    const xhr:XMLHttpRequest = new XMLHttpRequest();

    xhr.ontimeout = (): null => {
      resolve('Request took longer than expected.');
      return null;
    };

    xhr.onload = (): void =>{
      resolve(xhr.responseText);
    };

    // = () => {
    //   const result = {
    //     headers: xhr.getAllResponseHeaders(),
    //     data: xhr.responseText,
    //   };
    // };


    xhr.open(options.method, options.url);
    xhr.send();
  });
};

export default client;
