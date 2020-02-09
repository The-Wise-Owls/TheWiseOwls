import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink, useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import globalTheme from '../ThemeContext.js';

const Submitted = () => {
  const theme = useContext(globalTheme);
  const history = useHistory();

  return (
    <>
      <div className="menuContainer">
        <IconButton
          id="testBackAdminOptions"
          aria-label="open drawer"
          onClick={() => history.goBack()}
          edge="start"
          className={`${theme.material_ui.menuButton} leftMenuIconButton`}
        >
          <ChevronLeftIcon style={{ margin: '0' }} className={`${theme.material_ui.menuIcon} menuIcon`} />
        </IconButton>
      </div>
      <div >
        <p className="assignStaffNames">Calendar Events Sent</p>
        <p id="hoot">Hoot</p>
      </div>
      
      <div className="buttonContainer">
        <NavLink to='/adminSplash'>
          <Fab id="requestButton" variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
            Home
          </Fab>
        </NavLink>
      </div>
    </>
  );
};

export default withRouter(Submitted);