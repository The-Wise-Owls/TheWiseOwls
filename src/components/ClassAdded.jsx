import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink, useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import EventIcon from '@material-ui/icons/Event';
import globalTheme from '../ThemeContext.js';

const ClassAdded = () => {
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

        <IconButton
          style={{ marginLeft: 'auto', marginRight: '0px' }}
          id="testCalendarRedirect"
          aria-label="redirect to google calendar"
          onClick={() => window.open("https://calendar.google.com/calendar/r", "_blank")}
          edge="start"
          className={`${theme.material_ui.menuButton} leftMenuIconButton`}
        >
          <EventIcon style={{ margin: '0' }} className={`${theme.material_ui.menuIcon} menuIcon`} />
        </IconButton>
      </div>
      <div >
        <p className="assignStaffNames">Class Added</p>
        <p id="hoot">Hoot</p>
      </div>

      <div className="buttonContainer">
        <NavLink to='/add-class'>
          <Fab id="requestButton" variant="extended" aria-label="add another class" className={theme.material_ui.whiteButton}>
            Add Another Class
          </Fab>
        </NavLink>
      </div>

      <div className="buttonContainer">
        <NavLink to='/adminSplash'>
          <Fab id="requestButton" variant="extended" aria-label="add" className={theme.material_ui.orangeButton}>
            Home
          </Fab>
        </NavLink>
      </div>
    </>
  );
};

export default withRouter(ClassAdded);