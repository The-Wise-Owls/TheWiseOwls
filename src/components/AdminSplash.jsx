import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink, useLocation } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Axios from 'axios'
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';

const AdminSplash = () => {
  const tempClasses = [{ course: 'MCSP 02', id: 1 }, { course: 'MCSP 03', id: 2 }, 
    { course: 'HRATX 44', id: 3 }, { course: 'HRATX 45', id: 4 }];
  const [classes, setClasses] = useState(tempClasses);
  const theme = useContext(globalTheme);
  const [open, setOpen] = React.useState(false);
  const [userName, setState] = useState('Jeff'); 
  window.testOpen = open;

  useEffect(() => {
    // const userEmail = //fetch email from cookie

    // Axios.get('/adminsplash', {
    //   params: {
    //     email: userEmail
    //   }
    // })
    // .then(({data}) => {
    //   setClasses(data)
    // })
  }, []);

  const setCookie = (obj) => {
    //set selected class object to cookie

  };

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
      
      {classes.map((classObj, index) => {
        return (
          <div key={index} className="buttonContainer">
            <NavLink to='/adminOptions'>
              <Fab id="requestButton" onClick={() => setCookie(classObj)} variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
                {classObj.course}
              </Fab>
            </NavLink>
          </div>
        )
      })}
    </>
  );
};

export default withRouter(AdminSplash);