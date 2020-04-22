import { IOptions } from '../interface';

const client = (options: IOptions): Promise<string> => {
  return new Promise<string> ((resolve, reject) => {
    const xhr:XMLHttpRequest = new XMLHttpRequest();
    let timeout: number;

    if (options.timeout) {
      setTimeout(()=>{
        reject(new Error(`Common timeout: ${options.timeout}ms`));
        xhr.abort();
      }, options.timeout);
    }

    // Default timeout in chrome is 120000 (divide by 2)
    xhr.timeout = Math.max( options.timeout|| 0, 120000/2);
    xhr.ontimeout = (): void => {
      clearTimeout(timeout);
      reject(new Error(`Client timeout: ${xhr.timeout}ms`));
    };

    xhr.onload = (): void => {
      clearTimeout(timeout);
      resolve(xhr.responseText);
    };

    // reject for http request
    // xhr.onreadystatechange = (): void => {
    //   clearTimeout(timeout);
    //   if (xhr.readyState == 4 && xhr.status !== 200) {
    //     reject(new Error(`Error onreadystatechange ${xhr.status}`));
    //   }
    // };

    xhr.open(options.method, options.url);
    xhr.send();
  });
};

export default client;
