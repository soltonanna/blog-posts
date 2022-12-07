import React from 'react';
import PostItem from './PostItem';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const PostList = ({title, posts, remove}) => {

  if (!posts.length) {
    return (
      <h1 className='error-message'>No posts!</h1>
    )
  };
  
  return (
    <div>
        <h1 className='title'> 
          {title} 
        </h1>
        <TransitionGroup>
          {
              posts.map( (post, index) => 
                <CSSTransition
                  key={post.id}
                  timeout={500}
                  classNames="post"
                >
                  <PostItem 
                    
                    number={index +1} 
                    post={post}
                    remove={remove}
                  />
                </CSSTransition>  
              ) 
          }
        </TransitionGroup>
    </div>
  )
}

export default PostList;