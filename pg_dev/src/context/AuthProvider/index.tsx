import { useForm } from "rc-field-form";
import React, { createContext } from "react";

export const AuthContext = createContext <IContext> ({} as IContext);

export constAuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser>()
}

async function authenticate(cnpj: string, password: string) {

}

const logout = () => {

}

return (
    <AuthContext.Provider value = {{...user, authenticate, logout }}>
        { children}
    </AuthContext.Provider>
)