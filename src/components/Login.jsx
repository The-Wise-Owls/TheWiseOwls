import React, { useState, useContext, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import { withRouter, useHistory } from 'react-router-dom';
import gobalTheme from '../ThemeContext.js';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
import { CLIENT_ID, API_KEY } from './API_Config';

const Login = (props) => {
  const theme = useContext(gobalTheme);
  const [isAuth, setAuth] = useState(false);
  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState('thewiseowls.galvanize@gmail.com');
  const [loginPassword, setLoginPassword] = useState('jeffisawesome');
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
    <>
      <form id="adminLoginInput" noValidate autoComplete="off">
        <TextField id="standard-basic"
          id="adminEmailInput"
          label="Email"
          onChange={(e) => setLoginEmail(e.target.value)}
          value={loginEmail}
        />
        <br/>
        <TextField id="standard-basic"
          id="adminPasswordInput"
          label="Password"
          onChange={(e) => setLoginPassword(e.target.value)}
          value={loginPassword}
        />
      </form>
      <div className="buttonContainer">
        <Fab id="testLoginButton2" onClick={authenticate} variant="extended" aria-label="add" className={theme.material_ui.loginButton}>
          Login
        </Fab>
      </div>
    </>
  );
};

export default withRouter(Login);