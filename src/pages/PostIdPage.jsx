import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import PostServices from "../API/PostServices";

const PostIdPage = () => {

    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    const params = useParams();

    const [fetchPostById, isLoading, postError] = useFetching( async () => {
        const response = await PostServices.getByPostId(params.id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching( async () => {
        const response = await PostServices.getCommentsByPostId(params.id);
        setComment(response.data);
    });

    useEffect(()=> {
        fetchPostById();
        fetchComments();
    },[]);

    return (
        <div className='container single-post'>
            {
            /** Show posts */
            isLoading 
                ? <Loader />
                : postError 
                    ?   <p className='error-message'>Post not found ({postError})</p>
                    :   <div className='post-body'>
                            <h1>{post.id}. {post.title}</h1>
                            <p>{post.body}</p>
                        </div>
            }
            {
            /** Show Comments of posts */
            ( isComLoading || postError )
                ? <Loader />
                : comError 
                    ?   <p className='error-message'>Comments not found ({comError})</p>
                    :   <div className='comments'>
                            <h1> Comments:</h1>
                            {
                            comment.map(com => 
                                <div key={com.id} className="single-comment">
                                    <h5>{com.email}</h5>
                                    <div>{com.body}</div>
                                </div>
                            )
                            }
                        </div>
            }
           
        </div>
    )
}

export default PostIdPage;