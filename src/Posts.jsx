import { use } from "react"
import Post from "./Post"

export default function Posts ({postsPromise}){
    const posts = use(postsPromise)

    console.log(posts)
    return(
        <div className="card1">
            <p>post: {posts.length}</p>
            {
                 posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}