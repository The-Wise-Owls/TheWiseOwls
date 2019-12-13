import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink, useLocation, useHistory } from 'react-router-dom';
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

const RequestForm = () => {
  const theme = useContext(globalTheme);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState('');
  const [allStaff, setAllStaff] = useState([]);
  const [staff, setStaff] = useState('');
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');
  const [cohortId, setCohortId] = useState('');
  const history = useHistory();

  useEffect(() => {
    let cookie = document.cookie;
    cookie = cookie.split('=');
    let cookieId = cookie[1];
    setCohortId(cookieId);

    Axios.get(`/admin/classes/${cookieId}/students`)
      .then(({ data }) => {
        setStudents(data);
      })
      .catch(err => console.log(err));

    // Axios.get()
    // .then(({data}) => {
      setAllStaff([{id: 0, name: ''}, {id: 2, name: 'Jeff Salinas'}]);

    // });
  }, []);

  const submitForm = () => {
    console.log('click')
    // Axios.post('', {
    //   studentId: student.id,
    //   staffId: staff.id === '' ? -1 : staff.id,
    //   date: new Date(),
    //   cohortId: cohortId,
    //   topic: topic,
    //   details: details
    // })
  }

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
        <InputLabel id="demo-simple-select-label">Select Student</InputLabel>
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
          label="General Topic" 
          multiline={true} 
          onChange={(e) => setTopic(e.target.value)} 
          value={topic} 
        />
      </form>
      
      <form noValidate autoComplete="off">
        <TextField 
          id="requestDetailsInput" 
          label="Additional Details" 
          multiline={true} 
          onChange={(e) => setDetails(e.target.value)} 
          value={details} 
        />
      </form>

      <FormControl >
        <InputLabel id="demo-simple-select-label">Staff Preference</InputLabel>
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
        <NavLink to='/requestSubmitted'>
          <Fab id="testScheduleButton" onClick={submitForm} variant="extended" aria-label="add" className={theme.material_ui.orangeButton}>
          Consult The Owls
          </Fab>
        </NavLink>
      </div>
    </>
  );
};

export default withRouter(RequestForm);