import { IOptions } from '~/interface/request';
export interface IClient {
    (options: IOptions): Promise<string>;
}
