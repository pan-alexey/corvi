import { IOptions } from '../interface';

const client = (options: IOptions): Promise<string> => {
  const promise = new Promise<string> ((resolve, reject) => {

    setTimeout(()=>{
      reject();
    }, 100);

    console.log(options);
    resolve('123');
  });
  return promise;
};

export default client;
