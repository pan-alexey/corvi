import { IOptions } from '~/types/request';
interface ICorvi {
    version: string;
}
declare class Corvi implements ICorvi {
    version: string;
    private options;
    client: (options: IOptions) => Promise<string>;
    constructor();
    get(word: string): string;
}
declare const corvi: Corvi;
export default corvi;
