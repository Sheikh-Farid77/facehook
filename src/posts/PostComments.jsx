import { useState } from "react";
import useAvatar from "../hook/useAvatar";
import PostCommentList from "./PostCommentList";

export default function PostComments({post}) {
    const [showComments, setShowComments] = useState(false)
    const {avatarUrl} = useAvatar(post)
    return (
        <div>

            <div class="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    class="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                    src={avatarUrl}
                    alt="avatar"
                />

                <div class="flex-1">
                    <input
                        type="text"
                        class="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                        name="post"
                        id="post"
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
            showComments &&  <PostCommentList comments={post?.comments} />
           }

        </div>
    );
}