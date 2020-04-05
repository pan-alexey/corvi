interface ICorvi {
    version: string;
}
declare class Corvi implements ICorvi {
    version: string;
    get(word: string): string;
}
declare const corvi: Corvi;
export default corvi;
