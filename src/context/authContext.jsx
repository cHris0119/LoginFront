import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider ({children}) {
    const authStorage = JSON.parse(localStorage.getItem('auth'))
    
 

    const [auth, setAuth] = useState(authStorage || {login: false, user: null}) // { login: true, user: {name: 'pepe'...}  }
    return(
        <AuthContext.Provider
        value={{
            auth, 
            setAuth
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}