import React from 'react';

const Post = ({post, getCurrentPost}) => {
    const {id, title} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>getCurrentPost(post)}>Details</button>
        </div>
    );
};

export default Post;