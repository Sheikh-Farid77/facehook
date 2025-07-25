import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

export default function useAuth() {
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "user logged in" : "user logged out")
    return (
        useContext(AuthContext)
    );
}