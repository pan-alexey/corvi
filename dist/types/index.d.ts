import Core from './core/';
import { IClient } from './interface/client';
declare class Corvi extends Core {
    private _client;
    clients: {
        [key: string]: IClient;
    };
    constructor();
    create(): Core;
    _test(): IClient;
}
declare const corvi: Corvi;
export default corvi;
