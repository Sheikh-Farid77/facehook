import { useState } from "react";
import useAvatar from "../hook/useAvatar";
import PostCommentList from "./PostCommentList";
import useAxios from "../hook/useAxios";
import useAuth from "../hook/useAuth";

export default function PostComments({ post }) {
    const [showComments, setShowComments] = useState(false);
    const {auth} = useAuth()
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const { api } = useAxios();

    const addComment = async (e) => {
        const keyCode = e.keyCode;

      try {
          if (keyCode === 13) {
            const response = await api.patch(`${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?.id}/comment`, { comment });
            if(response.status === 200){
                setComments([
                    ...response?.data?.comments
                ])
                setComment('')
            }
        }
      } catch (error) {
        console.log(error)
      }
    }
    return (
        <div>

            <div class="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    class="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${auth?.user?.avatar}`}
                    alt="avatar"
                />

                <div class="flex-1">
                    <input
                        type="text"
                        class="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                        name="post"
                        id="post"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        onKeyDown={(e) => addComment(e)}
                        placeholder="What's on your mind?"
                    />
                </div>
            </div>

            <div class="mt-4">
                <button class="text-gray-300 max-md:text-sm cursor-pointer"
                    onClick={() => setShowComments(prev => !prev)}
                >
                    All Comment ▾
                </button>
            </div>

            {
                showComments && <PostCommentList comments={comments} />
            }

        </div>
    );
}