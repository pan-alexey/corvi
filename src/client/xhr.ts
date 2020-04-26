/* eslint-disable @typescript-eslint/no-empty-function */
import { IResponse, IClient } from '../interface/client';


const client: IClient = (options) => {
  console.log(options);
  
  let abort = (): void => {};
  const promise = new Promise<IResponse> ((resolve, reject) => {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    const response: IResponse = {
      ok: true,
      status: 200,
      statusText: 'string',
      data: "string",
      headers: "string",
      elapsed: 0,
      attemps: 0,
    };

    xhr.timeout =  options.timeout && options.timeout > 0 ? options.timeout : 120000;
    xhr.ontimeout = (): void => {
      abort = (): void => {};
      reject(new Error(`Client timeout: ${xhr.timeout}ms`));
    };

    xhr.onload = (): void => {
      abort = (): void => {};
      response.data = xhr.responseText;
      resolve(response);
    };

    // reject for http request
    // xhr.onreadystatechange = (): void => {
    //   clearTimeout(timeout);
    //   if (xhr.readyState == 4 && xhr.status !== 200) {
    //     reject(new Error(`Error onreadystatechange ${xhr.status}`));
    //   }
    // };
    abort = (): void => {
      xhr.abort();
    };
    xhr.open(options.method, options.url);
    xhr.send();
  });
  return {promise, abort};
};

export default client;
