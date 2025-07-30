import { useReducer } from "react";
import { ProfileContext } from "../context";
import { initialState, profileReducer } from "../reducers/profileReducer";

export default function ProfileProvider({ children }) {
    const [state, dispatch] = useReducer(profileReducer, initialState)



    const value = {
        state,
        dispatch

    }
    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}