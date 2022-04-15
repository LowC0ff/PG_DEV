export interface IUser {
    cnpj: string;
    token?: string;
}
export interface IContext extends IUser {
    authenticate: (cnpj: string, password: string) => Promise<void>;
    logout: () => void;
}
export interface IAuthProvider {
    children: JSX.Element;
}