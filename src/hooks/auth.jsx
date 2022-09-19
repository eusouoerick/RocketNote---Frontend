import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({})


function AuthProvider({children}) {
    const [data, setData] = useState({})

    async function signIn({email, password}) {
        try {
            const response = await api.post("/session", {email, password})
            const { token, user } = response.data


            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)

            api.defaults.headers.authorization = `Beare ${token}`
            setData({token,user})
              
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel fazer o login")
            }
        }

    }

    return (
        <AuthContext.Provider value={{signIn, user: data.user}}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {

 const context = useContext(AuthContext)

 return context
}

export { AuthProvider, useAuth}