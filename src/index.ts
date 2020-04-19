import Core from './core/';
import { IClient } from './interface';
import xhr from './client/xhr';
import node from './client/node';
class Corvi extends Core {
  constructor() {
    const client:IClient = typeof XMLHttpRequest !== 'undefined' ? xhr : node;
    super(client);
  }
}

const corvi = new Corvi();

// eslint-disable-next-line no-undef
module.exports = corvi; // for js library

export default corvi;
