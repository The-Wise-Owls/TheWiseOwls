import Axios from 'axios'
import React, { useState, useContext, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import globalTheme from '../ThemeContext.js';
import moment from 'moment';
import { CLIENT_ID, API_KEY } from './API_Config';

const Request = () => {
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events";
  const [classes, setClasses] = useState([]);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {
    window.gapi.load('client:auth2', initClient)
  }, []);

  useEffect(() => {
    //hard-coded for HRATX
    Axios.get(`/admin/${'thewiseowls.galvanize@gmail.com'}/allClasses`)
    .then(({data}) => {
      setClasses(data.classes);
    })
  }, []);

  const setCookie = (obj) => {
    //set selected class object to cookie
    document.cookie = `id=${obj.id}`;
    document.cookie = `courseName=${obj.course}`;

    Axios.get(`/admin/classes/${obj.id}/staff`)
      .then(({ data }) => {

        data.forEach(el => {
          Axios.delete(`admin/${el.id}/availability/remove`)
            .catch(err => {
              console.error(err);
            })
        });

        data.forEach(el => {
          getEvents(el.calendar_id)
            .then((events) => {
              events.forEach(event => {
                let day = new Date(event.start.dateTime).getDay();
                let start = moment(new Date(event.start.dateTime)).format("HH:mm");
                let end = moment(new Date(event.end.dateTime)).format("HH:mm");
                let staff_id = el.id;
                let title = event.summary;
                let event_id = event.id;
                let regTest = /^open/i

                //if event is available (open)
                if (regTest.test(title)) {
                  Axios.post(`/admin/${day}/${start}/${end}/${staff_id}/${event_id}/availability`)
                }
              })
            })
        })
      })
      .then(() => {
        history.push('/requestForm');
      })
      .catch(err => {
        console.error(err);
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

  return (
    <>
      <div className="menuContainer">
        <IconButton
          id="testBackAdminOptions"
          aria-label="back"
          onClick={() => history.goBack()}
          edge="start"
          className={`${theme.material_ui.menuButton} leftMenuIconButton`}
        >
          <ChevronLeftIcon style={{ margin: '0' }} className={`${theme.material_ui.menuIcon} menuIcon`} />
        </IconButton>
        <h2>Select Class</h2>
      </div>

      {classes.map((classObj, index) => {
        return (
          <div key={index} className="buttonContainer">
            <Fab id="requestButton" onClick={() => setCookie(classObj)} variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
              {classObj.course}
            </Fab>
          </div>
        )
      })}
    </>
  );
};

export default withRouter(Request);