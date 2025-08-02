import { useState } from 'react';
import CommentIcon from '../assets/icons/comment.svg'
import LikeIcon from '../assets/icons/like.svg'
import FilledLikeIcon from '../assets/icons/like-filled.svg'
import ShareIcon from '../assets/icons/share.svg'
import useAxios from '../hook/useAxios';
import useAuth from '../hook/useAuth';

export default function PostActions({post, commentCount }) {
    const {auth} = useAuth();
    const [liked, setLiked] = useState(post?.likes?.includes(auth?.user?.id));
    const {api} = useAxios();
    

    const handleLike = async() => {
      try {
          const response = await api.patch(`${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?.id}/like`)

        if(response.status === 200){
         setLiked(true)   
        }
      } catch (error) {
        console.log(error)
      }

    }
    return (
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            <button
            onClick={handleLike}
                className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm cursor-pointer"
            >
                <img className='w-6' src={liked ? FilledLikeIcon : LikeIcon} alt="Like" />
             {!liked &&    <span>Like</span>}
            </button>
            <button
                className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm cursor-pointer"
            >
                <img src={CommentIcon} alt="Comment" />
                <span>Comment({commentCount ?? 0})</span>
            </button>
            <button
                className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm cursor-pointer"
            >
                <img src={ShareIcon} alt="Share" />
                <span>Share</span>
            </button>
        </div>
    );
}