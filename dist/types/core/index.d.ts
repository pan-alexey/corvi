import { IClient } from '../interface/client';
interface ICore {
    version: string;
}
declare class Core implements ICore {
    version: string;
    private options;
    client: IClient;
    constructor(client: IClient);
    get(word: string): string;
}
export default Core;
