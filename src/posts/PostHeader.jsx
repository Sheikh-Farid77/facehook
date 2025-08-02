import ThreeDotIcon from '../assets/icons/3dots.svg'
import TimeIcon from '../assets/icons/time.svg'
import EditIcon from '../assets/icons/edit.svg'
import DeleteIcon from '../assets/icons/delete.svg'
import { getDateDifferenceFromNow } from '../utility'
import useAvatar from '../hook/useAvatar'
import { useState } from 'react'
import useAuth from '../hook/useAuth'
import usePost from '../hook/usePost'
import { actions } from '../actions'
import useAxios from '../hook/useAxios'

export default function PostHeader({post}) {
    const [showAction, setShowAction] = useState(false);
    const {avatarUrl} = useAvatar(post);
    const {auth} = useAuth();
    const {dispatch} = usePost();
    const {api} = useAxios()
    const isMe = post?.author?.id === auth?.user?.id;

    const handleDeletePost = async () => {
        dispatch({
            type: actions.post.DATA_FETCHING,
        })

        try {
            const response = await api.delete(`${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?.id}`);

            if(response.status === 200) {
                dispatch({
                    type: actions.post.POST_DELETED,
                    data: post?.id,
                })
            }
            
        } catch (error) {
            dispatch({
                type: actions.post.DATA_FETCHED_ERROR,
                error: error.message,
            })
        }

    }
    return (
        <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <img
                    className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                    src={avatarUrl}
                    alt="avatar"
                />
                <div>
                    <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
                    <div className="flex items-center gap-1.5">
                        <img src={TimeIcon} alt="time" />
                        <span className="text-sm text-gray-400 lg:text-base"
                        >{`${getDateDifferenceFromNow(post?.createAt)} ago`}</span
                        >
                    </div>
                </div>
            </div>
            <div className="relative">
               {
                isMe &&  <button className='cursor-pointer'
                onClick={() => setShowAction(prev => !prev)}
                >
                    <img src={ThreeDotIcon} alt="3dots of Action" />
                </button>
               }

               {
                showAction && (
                     <div className="action-modal-container">
                    <button className="action-menu-item hover:text-lwsGreen">
                        <img src={EditIcon} alt="Edit" />
                        Edit
                    </button>
                    <button onClick={handleDeletePost} className="action-menu-item hover:text-red-500">
                        <img src={DeleteIcon} alt="Delete" />
                        Delete
                    </button>
                </div>
                )
               }
            </div>
        </header>
    );
}