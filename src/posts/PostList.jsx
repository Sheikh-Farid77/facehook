import PostCard from "./PostCard";

export default function PostList({posts}){
    return (
        <>
        {
            !!posts && posts.toReversed().map(post => <PostCard key={post.id} post={post} />)
        }
        </>
    );
}