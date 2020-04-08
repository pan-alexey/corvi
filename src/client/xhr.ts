import { IOptions } from '~/types/request';

const client = (options: IOptions): Promise<string> => {
  const promise = new Promise<string> ((resolve, reject) => {
    console.log(options);

    setTimeout(()=>{
      reject();
    }, 100);
    resolve('123');
  });
  return promise;
};

export default client;
