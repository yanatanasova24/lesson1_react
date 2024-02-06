import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {postService} from "../../services/postService";
import PostDetails from "../PostDetails/PostDetails";
import css from "./Posts.module.css"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts(value));
    }, []);
    const getCurrentPost = (post)=>{
       setPostDetails(post);
    }
    return (
        <div className={css.Posts}>
            <div>{posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}</div><hr/>
            {postDetails !== null && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export default Posts;