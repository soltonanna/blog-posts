import React, { useState, useEffect } from "react";

import Modal from "../components/UI/Modal/Modal";
import Button from "../components/UI/Button/Button";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/Pagination/Pagination";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";

import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";

import PostServices from "../API/PostServices";
import { getPageCount } from "../utils/page";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort:'', query:''})
  const [modal, setModal] = useState(false);
  
  /** For Pagination */
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  

  const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
    const response = await PostServices.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit));
  });
  
  const changePage = (page) => {
    setPage(page);
  }

  /** Get Posts using AXIOS */
  useEffect( ()=>{
    fetchPosts()
  },[page]);


  /** Add and remove new items in list */
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  /** Sorting and Search */
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  
  return (
    <div className="container posts">
      
      <Button onClick={() => setModal(true)} style={{ margin: "20px 0 5px" }}> 
        Create 
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      
      <PostFilter 
        filter={filter}
        setFilter={setFilter}  
      />

      {
        postError && 
          <h1 className="error-message">Some error: <span>${postError}</span></h1>
      }
      { 
      isPostLoading 
        ? <Loader />
        : <PostList 
            title="Posts"
            posts={sortedAndSearchedPosts} 
            remove={removePost}
          />
      }
      
      <Pagination 
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
