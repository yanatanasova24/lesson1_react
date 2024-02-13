import React, {useEffect, useState} from 'react';
import {commentService} from "../../services/commentService";
import {Comments} from "./Comments";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll().then(({data})=>setComments(data))
    }, []);
    return (
        <div>
            <Comments comments={comments} />
        </div>
    );
};

export {CommentsContainer};