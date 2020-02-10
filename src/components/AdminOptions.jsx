import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { withRouter, NavLink, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';

const AdminOptions = () => {
  const [ course, setCourse ] = useState('');
  const [ courseID, setCourseID ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ open, setOpen ] = useState(false);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {
    let newCourse = '';
    let newUser = '';
    let newCourseID = '';
    
    let tempCookie = document.cookie.split('; ')

    tempCookie.forEach(el => {
      let keyPair = el.split('=');

      if (keyPair[0] === 'courseName') {
        newCourse = keyPair[1];
      } 

      if (keyPair[0] === 'username') {
        newUser = keyPair[1];
      }

      if (keyPair[0] === 'courseID') {
        newCourseID = keyPair[1];
      }
    })

    setCourse(newCourse);
    setUsername(newUser);
    setCourseID(newCourseID);
  },[]);

  const handleAssignHours = () => {
    Axios.post(`admin/${1}/${'14:30'}/${'17:00'}/${1}/availability`)
    .then(() => {
      history.push('/assignHours');
    })
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
        <Fab id="requestButton" variant="extended" aria-label="add" onClick={handleAssignHours} className={theme.material_ui.whiteButton}>
          Assign Office Hours
        </Fab>
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