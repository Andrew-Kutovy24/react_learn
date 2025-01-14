import {IPost} from "../../../models/IPost.ts";
import {FC} from "react";

type Props = {
    post: IPost
}

const PostComponent:FC<Props> = ({post}) => {
    return (
        <div>
            {post.title}
            <hr/>
        </div>
    );
};

export default PostComponent;