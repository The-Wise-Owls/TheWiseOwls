import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink, useLocation } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Axios from 'axios'
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';

const AdminSplash = () => {
  const [classes, setClasses] = useState([]);
  const theme = useContext(globalTheme);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(''); 
  window.testOpen = open;

  useEffect(() => {
    const userEmail = 'kk@galvanize.com'

    Axios.get(`/admin/${userEmail}/classes`)
      .then(({ data }) => {
        let firstName = data.name.split(' ');
        firstName = firstName[0]
        setUsername(firstName);
        setClasses(data.classes);
      })
      .catch(err => console.log(err));
  }, []);

  const setCookie = (obj) => {
    document.cookie = `courseID=${obj.id};`
    document.cookie = `courseName=${obj.course};`
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
      username={username}
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