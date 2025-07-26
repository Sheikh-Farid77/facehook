import { useState } from "react";
import { AuthContext } from "../context";

export default function AuthProvider({children}){
    const [auth, setAuth] = useState({});



    const state = {
        auth,
        setAuth
    }
    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
}