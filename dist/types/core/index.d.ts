import { IRequest, IClient, IClientOptions } from '../interface/client';
import { IUrlBuilder } from './helpers/url';
interface ICore {
    version: string;
    request?: (options: IRequest) => string;
    urlBuilder: (url?: string) => IUrlBuilder;
}
declare class Core implements ICore {
    version: string;
    private client;
    options: IClientOptions;
    constructor(client: IClient);
    urlBuilder(url?: string): IUrlBuilder;
    request(options: IRequest): string;
}
export default Core;
