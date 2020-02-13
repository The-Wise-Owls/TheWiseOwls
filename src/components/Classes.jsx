import Axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [username, setUsername] = useState('');
  const [open, setOpen] = useState(false);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {
    let newUsername = '';

    let cookies = document.cookie.split('; ');

    cookies = cookies.map(cookieString => {
      return cookieString.split('=');
    })

    cookies.forEach(cookieArray => {
      if (cookieArray[0] === 'username') {
        newUsername = cookieArray[1];
      }
    })

    setUsername(newUsername);
  }, []);

  useEffect(() => {
    //hard-coded for HRATX
    Axios.get(`/admin/${'thewiseowls.galvanize@gmail.com'}/allClasses`)
      .then(({ data }) => {
        setClasses(data.classes);
      })
  }, []);

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

          <h2>Classes</h2>
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
        <Menu
          open={open}
          username={username}
          setOpen={() => setOpen(false)}
          />

      <p style={{margin: 'auto', color: 'white'}}>**Class Removal coming soon</p>
      {classes.map((classObj, index) => {
        return (
          <div key={index} className="buttonContainer">
            <Fab id="requestButton" onClick={() => setCookie(classObj)} variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
              {classObj.course}
            </Fab>
          </div>
        )
      })}

      <div className="buttonContainer" onClick={() => history.push('/add-class')}>
        <div className="addButtonColor">
          <AddCircleIcon className="addButton" />
          <h3 className="addAssignmentTitle">Add Class</h3>
        </div>
      </div>
    </>
  );
};

export default withRouter(Classes);