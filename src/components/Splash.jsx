import React, { useContext } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import gobalTheme from '../ThemeContext.js';

const Splash = (props) => {
  const theme = useContext(gobalTheme);

  return (
    <>
      <div id="splashHeader">
        <h1>The<br/>
            Wise<br/>
            Owls
        </h1>
      </div>
      <div className="buttonContainer">
        <NavLink to='/request'>
          <Fab id="requestButton" variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
              Request Office Hours
          </Fab>
        </NavLink>
      </div>
      <div className="buttonContainer">
        <NavLink to='/login'>
          <Fab id="loginButton" variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
            Staff Login
          </Fab>
        </NavLink>
      </div>
    </>
  );
}

export default withRouter(Splash);