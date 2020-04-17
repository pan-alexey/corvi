import { IOptions, IClient } from '../interface';
interface ICore {
    version: string;
    client: (options: IOptions) => Promise<string>;
}
declare class Core implements ICore {
    version: string;
    private _client;
    constructor(client: IClient);
    assign(): unknown;
    client(options: IOptions): Promise<string>;
    get(word: string): string;
}
export default Core;
