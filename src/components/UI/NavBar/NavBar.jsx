import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context/context';
import Button from '../Button/Button';
import classes from './NavBar.module.css';

const NavBar = () => {

  const {setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();

    setIsAuth(false);
    localStorage.removeItem('auth');
    
    navigate('/login');
  }

  return (
    <div className={classes.navbar}>
      <Button onClick={logoutHandler}>Logout</Button>
      
      <div className={classes.navbar__links}>
        <Link to="/blog-posts"> Posts </Link>
        <Link to="/about"> About </Link>
      </div>
    </div>
  )
}

export default NavBar