import React, { useState } from 'react';

import Input from './UI/Input/Input';
import Button from './UI/Button/Button';

const PostForm = ({create}) => {
    
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            ...post
        }
        create(newPost);

        setPost({
            title: '',
            body: ''
        });
    }  

    return (
        <form>
            <Input
                type="text"  
                value={post.title}
                onChange={e => setPost({...post, title:e.target.value})}
                placeholder="Add title"
            />
            <Input 
                type="text" 
                value={post.body}
                onChange={e => setPost({...post, body:e.target.value})}
                placeholder="Add description"
            />
            <Button onClick={addNewPost}>
                    Create
            </Button>
        </form>
    )
}

export default PostForm;