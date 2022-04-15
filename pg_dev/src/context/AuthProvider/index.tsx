import { useForm } from "rc-field-form";
import React, { createContext } from "react";

export const AuthContext = createContext <IContext> ({} as IContext);
export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        const user = getLocalStorage()

        if(user) {
            setUser(user);
        }
    }, [])
}

async function authenticate(cnpj: string, password: string) {
    const response = await LoginRequest(cnpj, password)

    const payload = {token: response.token }

    setUser(payload);
    setUserLocalStorage(payload)
}

const logout = () => {
    setUser(null);
    setUserLocalStorage(null);
}

return (
    <AuthContext.Provider value = {{...user, authenticate, logout }}>
        { children}
    </AuthContext.Provider>
)