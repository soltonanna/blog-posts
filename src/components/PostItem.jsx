import React from 'react';
import { useNavigate } from 'react-router-dom'
import Button from './UI/Button/Button';


const PostItem = (props) => {
    
    const navigate = useNavigate();

    return (
    <div className="post">
        <div className="post__content">
            <h2 className='sub-title'>
                {props.post.id}. {props.post.title}
            </h2>
            <div>
                {props.post.body}
            </div>
        </div>
        <div className="post__btns">
            <Button onClick={()=> navigate(`/posts/${props.post.id}`)}>
                Open
            </Button>
            <Button onClick={()=> props.remove(props.post)}>
                Delete
            </Button>
        </div>
    </div>
    )
}

export default PostItem;