import React from 'react';
import css from "./PostDetails.module.css"

const PostDetails = ({postDetails}) => {
    const {id, title, userId, body} = postDetails;
    return (
        <div className={css.PostDetails}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>userId: {userId}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default PostDetails;