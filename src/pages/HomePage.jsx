import { useEffect } from "react";

import useAxios from "../hook/useAxios";
import PostList from "../posts/PostList";
import { actions } from "../actions";
import usePost from "../hook/usePost";
import NewPost from "../posts/NewPost";



export default function HomePage() {
    const { state, dispatch } = usePost();
    const { api } = useAxios();

    useEffect(() => {
        dispatch({
            type: actions.post.DATA_FETCHING
        })
        const fetchPost = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/posts`);

                if (response.status === 200) {
                    dispatch({
                        type: actions.post.DATA_FETCHED,
                        data: response.data
                    })
                }

            } catch (error) {
                dispatch({
                    type: actions.post.DATA_FETCHED_ERROR,
                    error: error.message
                })
            }
        }

        fetchPost()
    }, [])

    if (state?.loading) return <div>Loading Posts....</div>
    if (state?.error) return <div>Error in fetching posts</div>

    return (

        <div>
            <NewPost />
            <PostList posts={state?.posts} />
        </div>
    );
}