interface ICorvi {
    version: string;
}
declare class Corvi implements ICorvi {
    version: string;
    get(): Date;
}
declare const corvi: Corvi;
export default corvi;
