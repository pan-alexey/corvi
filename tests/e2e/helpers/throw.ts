class HandlerWidthThrow {
  private counter: number;

  constructor(count: number) {
    this.counter = count;
  }

  call(): Promise<string> {
     return new Promise((resolve, reject)=>{
      if (this.counter>0) {
        reject(new Error(`reject ${this.counter}`));
        this.counter = this.counter - 1;
      } else {
        resolve('ok');
      }
     });
  }
}

export default HandlerWidthThrow;
