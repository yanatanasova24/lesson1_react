import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {postService} from "../../services/postService";

const Post = () => {
    const {state:{postId}} = useLocation();

    const [post, setPost] = useState([])

    const {id, userId, title, body} = post;

    useEffect(() => {
        postService.getById(postId).then(({data})=>setPost(data))
    }, [postId]);

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};