import React, { useState, useContext, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import { withRouter, useHistory } from 'react-router-dom';
import gobalTheme from '../ThemeContext.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
import { CLIENT_ID, API_KEY } from './API_Config';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const Login = (props) => {
  const theme = useContext(gobalTheme);
  const [isAuth, setAuth] = useState(false);
  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState('thewiseowls.galvanize@gmail.com');
  const [loginPassword, setLoginPassword] = useState('jeffisawesome');
  const [showPassword, setShowPassword] = useState(false);
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events";
  useEffect(() => {
    window.gapi.load('client:auth2', initClient)
  }, [])
  
  useEffect(() =>{
    if (isAuth) history.replace({ pathname: "/adminSplash" })
  }, [isAuth]);
  
  const authenticate = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(loginEmail, loginPassword)
    .then((data) => {
      window.gapi.auth2.getAuthInstance().signIn()
        .then(() => {
          setAuth(true);
        })
    })
    .catch(() => {
      console.log('incorrect username or password');
    });

    setLoginEmail('');
    setLoginPassword('');
  };

  const initClient = () => {
    window.gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div id="login_page_container">
      <div className="menuContainer">
        <IconButton
          id="testBackAdminOptions"
          aria-label="back"
          onClick={() => history.goBack()}
          edge="start"
          className={`${theme.material_ui.menuButton} leftMenuIconButton`}
        >
          <ChevronLeftIcon style={{ margin: '0' }} className={`${theme.material_ui.menuIcon} menuIcon`} />
        </IconButton>
        <h2>Staff Login</h2>
      </div>

      <div id="login_container">
        <form id="adminLoginInput" noValidate autoComplete="off">
          <Input 
            id="adminEmailInput"
            className={theme.material_ui.login_input }
            style={{margin: '30px 0 15px 0', width: '210px', color: 'black !important' }}
            label="Email"
            onChange={(e) => setLoginEmail(e.target.value)}
            value={loginEmail}
            placeholder="Email"
          />
          <br/>
          <Input
            id="adminPasswordInput"
            className={theme.material_ui.login_input}
            style={{ margin: '15px 0 30px 0', width: '210px' }}
            type={showPassword ? 'text' : 'password'}
            value={loginPassword}
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </form>
        <div className="buttonContainer">
          <Fab id="testLoginButton2" onClick={authenticate} variant="extended" aria-label="add" style={{width: '250px'}} className={theme.material_ui.loginButton}>
            Login
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);