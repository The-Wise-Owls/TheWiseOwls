import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink, useLocation } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';

const AdminSplash = () => {
  const tempClasses = ['MCSP 02', 'MCSP 03', 'HRATX 44', 'HRATX 45'];
  const [classes, setClasses] = useState(tempClasses);
  const theme = useContext(globalTheme);
  const [open, setOpen] = React.useState(false);
  const [userName, setState] = useState('Jeff');
  window.testOpen = open;

  useEffect(() => {
    //axios request to fetch class names and user name
  }, []);

  return (
    <>
    <div className="menuContainer">
      <IconButton
        id="testMenuAdminSplash"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
        edge="start"
        className={theme.material_ui.menuButton}
      >
        <MenuIcon className={`${theme.material_ui.menuIcon} menuIcon`} />
      </IconButton>
      <h2>Select Class</h2>
    </div>
    <Menu 
      open={open}
      userName={userName}
      setOpen={() => setOpen(false)}
    />
      
      {classes.map((className, index) => {
        return (
          //add onclick to set name to local storage cookie
          <div key={index} className="buttonContainer">
            <NavLink to='/adminoptions'>
              <Fab id="requestButton" variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
                {className}
              </Fab>
            </NavLink>
          </div>
        )
      })}
    </>
  );
};

export default withRouter(AdminSplash);