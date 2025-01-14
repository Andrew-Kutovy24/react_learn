import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {apiService} from "../../services/api.service.ts";
import PostComponent from "./PostComponent/PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        apiService.getPosts()
            .then(({posts}) => setPosts(posts))
    }, [])

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;