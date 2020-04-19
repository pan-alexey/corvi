import { IOptions, IClient } from '../interface';
interface ICore {
    version: string;
    client: (options: IOptions) => Promise<string>;
}
declare class Core implements ICore {
    version: string;
    private _client;
    options: IOptions;
    constructor(client: IClient);
    client(options: IOptions): Promise<string>;
}
export default Core;
