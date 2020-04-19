import Core from './core/';
import { IClient } from './interface';
import node from './client/node';

class Corvi extends Core {
  constructor() {
    const client:IClient = node;
    super(client);
  }
}

const corvi = new Corvi();

// eslint-disable-next-line no-undef
module.exports = corvi; // for js library

export default corvi;
