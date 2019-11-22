import React, { useState, useContext } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Theme from '../ThemeContext.js';

const Splash = (props) => {
  const globalTheme = useContext(Theme)

  return (
    <div>
      <p>Hello from app.jsx!!</p>
      <NavLink to='/template'>
        <Fab variant="extended" aria-label="add" className={globalTheme.classes.whiteButton}>
            Request Office Hours
        </Fab>
      </NavLink>
    </div>
  );
}

export default withRouter(Splash);