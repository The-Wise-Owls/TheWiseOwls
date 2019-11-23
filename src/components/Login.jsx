import React, { useState, useContext, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import { withRouter, useHistory } from 'react-router-dom';
import gobalTheme from '../ThemeContext.js';

const Login = (props) => {
  const theme = useContext(gobalTheme)
  const [isAuth, setAuth] = useState(false)
  const history = useHistory()
  
  const authenticate = () => {
    setAuth(true)
  };

  useEffect(() =>{
    if (isAuth) history.replace({ pathname: "/adminsplash" })
  }),[isAuth]

  return (
    <>
      <div className="buttonContainer">
        <Fab id="requestButton" onClick={authenticate} variant="extended" aria-label="add" className={theme.material_ui.loginButton}>
          Login
        </Fab>
      </div>
    </>
  );
};

export default withRouter(Login);