import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import moment from 'moment';
import { withRouter, NavLink, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';
import { CLIENT_ID, API_KEY } from './API_Config';

const AdminOptions = () => {
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events";
  const [ course, setCourse ] = useState('');
  const [ courseID, setCourseID ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ open, setOpen ] = useState(false);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {
    window.gapi.load('client:auth2', initClient)
  }, []);

  useEffect(() => {
    let newCourse = '';
    let newUser = '';
    let newCourseID = '';
    
    let tempCookie = document.cookie.split('; ');

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
    Axios.get(`/admin/classes/${courseID}/staff`)
    .then(({data}) => {
      data.forEach(el => {
        getEvents(el.calendar_id)
        .then((events) => {
          events.forEach(event => {
            let day = new Date(event.start.dateTime).getDay();
            let start = moment(new Date(event.start.dateTime)).format("HH:mm");
            let end = moment(new Date(event.end.dateTime)).format("HH:mm");
            let staff_id = el.id;
            
            Axios.post(`/admin/${day}/${start}/${end}/${staff_id}/availability`)
            .then(() => {
              console.log('posted')
            })
          })
        })
      })
    })
    .then(() => {
      history.push('/assignHours');
    })
    .catch(err => {
      console.error(err);
    })
  };

  const getEvents = (calendar_id) => {
    return window.gapi.client.calendar.events.list({
      calendarId: calendar_id,
      timeMin: (new Date()).toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime'
    })
      .then(response => {
        return response.result.items
      })
    .catch(err => {
      console.log(err);
    })
  };

  const initClient = () => {
    window.gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    .catch(err => {
      console.error(err)
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