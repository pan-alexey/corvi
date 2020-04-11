import { IOptions, IClient } from '../interface';
interface ICore {
    version: string;
}
declare class Core implements ICore {
    version: string;
    private options;
    private _client;
    constructor(client: IClient);
    client(options: IOptions): Promise<string>;
    get(word: string): string;
}
export default Core;
