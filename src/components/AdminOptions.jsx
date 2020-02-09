import React, { useState, useEffect, useContext } from 'react';
import { withRouter, NavLink, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';
import firebase from 'firebase/app';
import 'firebase/auth';
const auth = firebase.auth();

const AdminOptions = () => {
  const [course, setCourse] = useState('');
  const [username, setUsername] = useState('');
  const [open, setOpen] = useState(false);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      if (!user) {
        history.replace('/');
      }
    })
  }, [])

  useEffect(() => {
    let newCourse = '';
    let newUser = '';
    
    let tempCookie = document.cookie.split('; ')

    tempCookie.forEach(el => {
      let keyPair = el.split('=');

      if (keyPair[0] === 'courseName') {
        newCourse = keyPair[1];
      } 

      if (keyPair[0] === 'username') {
        newUser = keyPair[1];
      }
    })

    setCourse(newCourse);
    setUsername(newUser);
  },[]);

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
          id="testMenuAdminOptions"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          edge="start"
          className={`${theme.material_ui.menuButton} menuIconButton`}
        >
          <MenuIcon className={`${theme.material_ui.menuIcon} menuIcon`} />
        </IconButton>

        <h2>{course}</h2>
      </div>
      <Menu
        open={open}
        username={username}
        setOpen={() => setOpen(false)}
      />

      <div className="buttonContainer">
        <NavLink to='/assignHours'>
          <Fab id="requestButton" variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
            Assign Office Hours
          </Fab>
        </NavLink>
      </div>
      <div className="buttonContainer">
        <NavLink to='/classHistory'>
          <Fab id="requestButton" variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
            View History
          </Fab>
        </NavLink>
      </div>
    </>
  );
};

export default withRouter(AdminOptions);