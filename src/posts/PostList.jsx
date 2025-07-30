import PostCard from "./PostCard";

export default function PostList({posts}){
    console.log(posts)
    return (
        <>
        {
            !!posts && posts.map(post => <PostCard key={post.id} post={post} />)
        }
        </>
    );
}