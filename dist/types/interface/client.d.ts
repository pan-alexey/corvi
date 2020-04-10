import { IOptions } from './request';
export interface IClient {
    (options: IOptions): Promise<string>;
}
