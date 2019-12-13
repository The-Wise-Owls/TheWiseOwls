import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink, useLocation, useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Axios from 'axios'
import globalTheme from '../ThemeContext.js';

const Request = () => {
  const [classes, setClasses] = useState([]);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {

  }, []);

  const setCookie = (obj) => {
    //set selected class object to cookie
    document.cookie = `id=${obj.id}`;
  };

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
        <p>Request Submitted</p>
        <p>You should receive an email shortly with a Google Calendar Invitation</p>
      </div>
      <div className="buttonContainer">
          <Fab id="requestButton" onClick={() => history.goBack()} variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
            Additional Hours
          </Fab>
      </div>
      
      <div className="buttonContainer">
        <NavLink to='/'>
          <Fab id="requestButton" variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
            Home
          </Fab>
        </NavLink>
      </div>
    </>
  );
};

export default withRouter(Request);