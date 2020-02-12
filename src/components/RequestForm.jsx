import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink, useHistory } from 'react-router-dom';
import moment from 'moment';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Axios from 'axios';
import globalTheme from '../ThemeContext.js';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { CLIENT_ID, API_KEY } from './API_Config';


const RequestForm = () => {
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events";
  const theme = useContext(globalTheme);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState('');
  const [allStaff, setAllStaff] = useState([]);
  const [staff, setStaff] = useState('');
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');
  const [courseName, setCourseName] = useState('');
  const [cohortId, setCohortId] = useState('');
  const history = useHistory();

  useEffect(() => {
    window.gapi.load('client:auth2', initClient)
  }, []);

  useEffect(() => {
    let cookieId = '';
    let cookies = document.cookie.split('; ');

    cookies = cookies.map(cookieString => {
      return cookieString.split('=');
    })

    cookies.forEach(cookieArray => {
      if (cookieArray[0] === 'id') {
        cookieId = cookieArray[1];
        setCohortId(cookieId);
      } 
      if (cookieArray[0] === 'courseName') {
        setCourseName(cookieArray[1]);
      } 
    })

    Axios.get(`/admin/classes/${cookieId}/students`)
      .then(({ data }) => {
        setStudents(data);
      })
      .catch(err => console.error(err));

    Axios.get(`/admin/classes/${cookieId}/staff`)
      .then(({data}) => {
        setAllStaff(data);
      });
  }, []);

  const checkFields = () => {
    if (staff === '' || student === '' || topic === '' || details === '') {
      alert('Please Complete All Fields.');
      return;
    } else {
      schedule();
    }
  };

  const schedule = () => {
    let pairs = [{ 
      staff: { 
        id: staff.id, 
        name: staff.name, 
        calendar_id: staff.calendar_id }, 
      students: [{
        id: student.id,
        name: student.name,
        email: student.email
      }] 
    }];

    Axios.get(`/admin/schedule/class/${courseName}/class_id/${cohortId}/topic/${topic}/${JSON.stringify(pairs)}`)
      .then(({ data }) => {
        submitForm(data);
      })
  };

  const submitForm = (eventObject) => {
    const event = {
      summary: `[**${student.name} ${courseName}**] - Office Hours`,
      location: 'TBD',
      description: topic + ' - ' + details,
      attendees: [
        { 'email': student.email }
      ]
    };

    const request = window.gapi.client.calendar.events.patch({
      calendarId: staff.calendar_id,
      eventId: eventObject.staff[0].assignments[0].event_id,
      resource: event,
      sendUpdates: 'all'
    });

    request.execute(function (newEvent) {
      // console.log('Event created: ' + newEvent.htmlLink);
    });

    Axios.post(`/admin/confirm/${Number(cohortId)}/${staff.id}/${student.id}/${moment(new Date()).format("YYYY-MM-DD")}/${moment(new Date()).format("YYYY-MM-DD")}/${eventObject.staff[0].assignments[0].time24Hour}/${eventObject.staff[0].assignments[0].timeEnd}/${topic}/1`)
    .then(() => {
      history.push('/requestSubmitted');
    })
  }

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
          id="testRequestForm"
          aria-label="open drawer"
          onClick={() => history.goBack()}
          edge="start"
          className={`${theme.material_ui.menuButton} leftMenuIconButton`}
        >
          <ChevronLeftIcon style={{ margin: '0' }} className={`${theme.material_ui.menuIcon} menuIcon`} />
        </IconButton>
        <h2>Request Form</h2>
      </div>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Select Student *</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="requestStudentSelect"
          value={student}
          onChange={(e) => setStudent(e.target.value)}
        >
          {students.map((el) => {
            return (
              <MenuItem key={el.name} value={el}>{el.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>

      <form className="RequestFormInput" noValidate autoComplete="off">
        <TextField 
          id="requestTopicInput" 
          label="General Topic *" 
          multiline={true} 
          onChange={(e) => setTopic(e.target.value)} 
          value={topic} 
        />
      </form>
      
      <form noValidate autoComplete="off">
        <TextField 
          id="requestDetailsInput" 
          label="Additional Details *" 
          multiline={true} 
          onChange={(e) => setDetails(e.target.value)} 
          value={details} 
        />
      </form>

      <FormControl >
        <InputLabel id="demo-simple-select-label">Staff Preference *</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={staff}
          onChange={(e) => setStaff(e.target.value)}
        >
          {allStaff.map((el) => {
            return (
              <MenuItem key={el.name} value={el}>{el.name}</MenuItem>
            )
          })}
        </ Select>
      </FormControl>

      <div className="buttonContainer">
        <Fab id="testScheduleButton" onClick={checkFields} variant="extended" aria-label="add" className={theme.material_ui.orangeButton}>
        Consult The Owls
        </Fab>
      </div>
    </>
  );
};

export default withRouter(RequestForm);