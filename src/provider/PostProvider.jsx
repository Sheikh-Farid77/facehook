import { useReducer } from "react";
import { PostContext } from "../context";
import { initialState, postReducer } from "../reducers/postReducer";

export default function PostProvider({ children }) {
    const [state, dispatch] = useReducer(postReducer, initialState);

    const value = {
        state,
        dispatch
    }
    return (
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    );
}