import React from 'react';
import Input from './UI/Input/Input';
import Select from './UI/Select/Select';

const PostFilter = ({filter, setFilter}) => {

  return (
    <div>
        <hr style={{margin:'15px 0'}} />
        <Input 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Search..."
        />
        <Select 
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sort by:"
          options={[
            { value: 'title', name: 'Title' },
            { value: 'body', name: 'Description' }
          ]}
        />  
    </div>
  )
}

export default PostFilter