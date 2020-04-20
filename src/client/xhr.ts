import { IOptions } from '../interface';

const client = (options: IOptions): Promise<string> => {
  return new Promise<string> ((resolve, reject) => {
    const xhr:XMLHttpRequest = new XMLHttpRequest();

    xhr.timeout = options.timeout || 120000; // 120000 is a default timeout

    xhr.ontimeout = (): null => {
      resolve('Request took longer than expected.');
      return null;
    };

    xhr.onload = (): void =>{
      resolve(xhr.responseText);
    };

    xhr.onreadystatechange = (): void => {
      if (xhr.readyState == 4 && xhr.status !== 200) {
        reject(xhr);
      }
    };

    // xhr.abort();

    xhr.onerror = (e): void => {
      reject(e);
    };

    xhr.open(options.method, options.url);
    xhr.send();
  });
};

export default client;
