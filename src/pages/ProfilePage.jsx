import { useEffect } from "react";
import useAuth from "../hook/useAuth";
import useAxios from "../hook/useAxios";
import useProfile from "../hook/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../components/profile/ProfileInfo";
import MyPosts from "../components/profile/MyPosts";

export default function ProfilePage() {
   const {state, dispatch} = useProfile();
    const { auth } = useAuth();
    const { api } = useAxios();

    useEffect(() => {
        const fetchProfile = async () => {
            dispatch({
                type: actions.profile.DATA_FETCHING,
            })
            try {
             const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`);
           if(response.status === 200){
            dispatch({
                type: actions.profile.DATA_FETCHED,
                data: response.data
            })
           }
            } catch (error) {
                console.log(error)
                dispatch({
                    type: actions.profile.DATA_FETCHED_ERROR,
                    error: error.message
                })
            }
        }
        fetchProfile();
    }, [api, auth?.user?.id, dispatch])

    if(state?.loading) return <div>Your profile data is loading....</div>
    return (
       <>
       <ProfileInfo />
       <MyPosts />
       </>
    );
}