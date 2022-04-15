import { useAuth} from "../../context/AuthProvider/useAuth"
import React from "react"

export const ProtectedLayout = ({ children }: { children: JSX.Element}) => {

    const auth = useAuth()

    if(!auth.cnpj) {
        return <h1>É preciso informar o CNPJ</h1>;
    }

    return children

}