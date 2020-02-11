import React, { useState, useEffect, useContext } from 'react';
import { withRouter, NavLink, useHistory } from 'react-router-dom';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';
import Axios from 'axios';
import { CLIENT_ID, API_KEY } from './API_Config';

const Assigned = () => {
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events";
  const [course, setCourse] = useState('');
  const [username, setUsername] = useState('');
  const [postObj, setPostObj] = useState('');
  const [open, setOpen] = useState(false);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {
    window.gapi.load('client:auth2', initClient)
  }, []);

  useEffect(() => {
    let newUsername = '';
    let newCourseName = '';
    let postObj = {};

    let cookies = document.cookie.split('; ');

    cookies = cookies.map(cookieString => {
      return cookieString.split('=');
    })

    cookies.forEach(cookieArray => {
      if (cookieArray[0] === 'username'){
        newUsername = cookieArray[1];
      } else if (cookieArray[0] === 'courseName') {
        newCourseName = cookieArray[1];
      } else if (cookieArray[0] === 'postObject') {
        postObj = JSON.parse(cookieArray[1]);
      }
    })

    setPostObj(postObj);
    setCourse(newCourseName);
    setUsername(newUsername);
  },[]);

  const dateStyle = (date) => {
    let dateNumbers = date.split('-');
    return dateNumbers[1] + '/' + dateNumbers[2] + '/' + dateNumbers[0];
  }

  const confirmOmniscience = () => {
    postObj.staff.forEach(staff => {
      staff.assignments.forEach(student => {
        const event = {
          summary: `[**${student.name} ${postObj.class_name}**] - Office Hours`,
          location: 'TBD',
          description: postObj.topic,
          attendees: [
            { 'email': student.email }
          ]
        };
        var request = window.gapi.client.calendar.events.patch({
          calendarId: staff.calendar_id,
          eventId: student.event_id,
          resource: event,
          sendUpdates: 'all'
        });
    
        request.execute(function (newEvent) {
          console.log('Event created: ' + newEvent.htmlLink);
        });

        Axios.post(`/admin/confirm/${Number(postObj.class_id)}/${staff.id}/${student.id}/${student.dateAssigned}/${moment(new Date()).format("YYYY-MM-DD")}/${student.time24Hour}/${student.timeEnd}/${postObj.topic}/0`)
      });
    });
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

      {!!postObj.staff && 
        <div className="assignContainer">
        <h2 id="assignTopic">{postObj.topic + ' - ' + dateStyle(postObj.date)}</h2>
          {postObj.staff.map((staffObj, index1) => {
            return (
              <div key={index1} className="assignContainer">
                <h3 className="assignStaffNames">{staffObj.name}</h3>
                <div className="assignStudentData">
                  <p className="assignLeft assignTitleStyle">Student</p>
                  <p className="assignCenter assignTitleStyle">Date</p>
                  <p className="assignRight assignTitleStyle">Time</p>
                </div>
              {staffObj.assignments.map((assignment, index2) => {
                return (
                  <div key={index2} className="assignStudentData">
                    <p className="assignLeft assignStudentStyle">{assignment.name}</p>
                    <p className="assignCenter assignStudentStyle">{dateStyle(assignment.dateAssigned)}</p>
                    <p className="assignRight assignStudentStyle">{assignment.timeAssigned}</p>
                  </div>
                );
              })}
              </div>
            );
          })}
        </div>
      }
      <div className="buttonContainer">
        <NavLink to='/submitted'>
          <Fab id="testScheduleButton" onClick={confirmOmniscience} variant="extended" aria-label="add" className={theme.material_ui.orangeButton}>
            Confirm Omniscience
          </Fab>
        </NavLink>
      </div>
    </>
  );
};

export default withRouter(Assigned);