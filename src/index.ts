import Core from './core/';
import { IClient } from './interface/client';
import xhr from './client/xhr';

class Corvi extends Core {

  private _client: IClient;

  constructor() {
    const client:IClient = typeof XMLHttpRequest !== 'undefined' ? xhr : xhr;
    super(client);

    this._client = client;
  }

  create():Core  {
    return new Core(this._client);
  }
}

const corvi = new Corvi();

// corvi.prototype.create = (): Corvi => {
//   return new Corvi();
// };
// eslint-disable-next-line no-undef
module.exports = corvi; // for js library
// module.exports.create = (): Corvi => {
//   return new Corvi();
// };

export default corvi;
