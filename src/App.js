import React, { useState, useEffect } from "react";

import { AuthContext } from "./context/context";
import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./components/AppRouter";

import './styles/App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    if ( localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false)
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <NavBar />
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
