import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button';
import { AuthContext } from '../context/context';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    setIsAuth(true);
    localStorage.setItem('auth', 'true');
    
    navigate('/blog-posts');
  }

  return (
    <div className='container'>
        <h1 className='title'>Login Page</h1>
        <form onSubmit={loginHandler} >
            <Input type="text" placeholder='login...' />
            <Input type="password" placeholder='password...' />
            <Button>LogIn</Button>
        </form>
    </div>
  )
}

export default Login;