import React, { useState, useContext, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EventIcon from '@material-ui/icons/Event';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';

const History = () => {
  const [course, setCourse] = useState('');
  const [username, setUsername] = useState('');
  const [open, setOpen] = useState(false);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {
    let newUsername = '';
    let newCourseName = '';

    let cookies = document.cookie.split('; ');

    cookies = cookies.map(cookieString => {
      return cookieString.split('=');
    })

    cookies.forEach(cookieArray => {
      if (cookieArray[0] === 'username') {
        newUsername = cookieArray[1];
      } else if (cookieArray[0] === 'courseName') {
        newCourseName = cookieArray[1];
      }
    })

    setCourse(newCourseName);
    setUsername(newUsername);
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

        <h2>History</h2>
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
      <div style={{ color: 'white', fontSize: '50px' }} id="testHistory">History Comming Soon!</div>
    </>
  );
};

export default withRouter(History);