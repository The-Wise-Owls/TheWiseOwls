import React, { useContext } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import gobalTheme from '../ThemeContext.js';

const Splash = (props) => {
  const theme = useContext(gobalTheme);

  return (
    <>
      <div id="splashHeaderContainer">
        <h1 id="splashTitle">The<br/>
            Wise<br/>
            Owls
        </h1>
        <div id="splashParContainer">
          <p className="splashPar splashParText">of</p>
          <div id="logoContainer">
            <img src="./images/hack-reactor-logo.png" id="hack-reactor-logo" alt="Hack Reactor logo"></img>
          </div>
        </div>
      </div>
      <p className="splashParText" style={{margin: '0 auto 80px auto'}}>A Calendar Management Service</p>
      <div className="buttonContainer">
        <NavLink to='/request'>
          <Fab id="testRequestButton" variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
              Request Office Hours
          </Fab>
        </NavLink>
      </div>
      <div className="buttonContainer">
        <NavLink to='/login'>
          <Fab id="testLoginButton" variant="extended" aria-label="add" className={theme.material_ui.orangeButton}>
            Staff Login
          </Fab>
        </NavLink>
      </div>
    </>
  );
};

export default withRouter(Splash);