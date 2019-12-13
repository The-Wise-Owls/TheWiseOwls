import React, { useState, useEffect, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';
import CancelIcon from '@material-ui/icons/Cancel';

const AssignHours = () => {
  const [course, setCourse] = useState('');
  const [username, setUsername] = useState('');
  const [students, setStudents] = useState([])
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [assessmentName, setAssessmentName] = useState('');
  const [assessmentDate, setAssessmentDate] = useState(new Date());
  const [studentSelected, setStudentSelected] = useState('');
  const theme = useContext(globalTheme);
  const history = useHistory();
  
  useEffect(() => {
    const newCourse = 'MCSP 02';
    const newUser = 'Jeff';
    const classID = 3;

    Axios.get(`/admin/classes/${classID}/students`)
      .then(({ data }) => {
        setStudents(data);
      })
      .catch(err => console.log(err));

    //get course and name from cookie
    //get all student names from course

    setCourse(newCourse);
    setUsername(newUser);
  }, []);

  const handleCheck = (index) => {
    let studentsCopy = students.slice();
    studentsCopy[index].checked = !studentsCopy[index].checked;
    setStudents(studentsCopy);
  };

  const schedule = () => {
    let scheduledStudents = [];
    setLoading(true);

    students.forEach((studentObj) => {
      if (studentObj.checked) {
        scheduledStudents.push(studentObj.id);
      }
    });

    Axios.get('/assigned', {
      params: {
        studentIds: scheduledStudents,
        assessmentName: assessmentName,
        assessmentDate: assessmentDate
      }
    })
    .then(({data}) => {
      //set data into local cookie
      //set students object in local cookie
    })
    .then(() => {
      history.push('/assigned');
    })
  };

  return (
    <>
      <div className="menuContainer">
        <IconButton
          id="testBackAssignHours"
          aria-label="open drawer"
          onClick={() => history.goBack()}
          edge="start"
          className={`${theme.material_ui.menuButton} leftMenuIconButton`}
        >
          <ChevronLeftIcon style={{ margin: '0' }} className={`${theme.material_ui.menuIcon} menuIcon`} />
        </IconButton>
        <IconButton
          id="testMenuAssignHours"
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

      <div className="assignHoursInputs">
      <div className="assignemntInputContainer">
        <form id="assessmentNameInput" noValidate autoComplete="off">
          <TextField id="standard-basic" label="Assessment Name" onChange={(e) => setAssessmentName(e.target.value)} value={assessmentName}/>
        </form>
      </div>
      <div className="calendarInputContainer">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
              id="calendar"
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Assessment Date"
              value={assessmentDate}
              onChange={(date) => setAssessmentDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
        </MuiPickersUtilsProvider>
      </div>
    </div>

      <div className="assignHoursInputs"> 
        {/* <div className="assignLeftSelectContainer"> */}
        <div className="assignemntInputContainer">
          <CancelIcon className="cancelAssignment" onClick={() => console.log('click')}/>
          <FormControl component="fieldset" className={theme.material_ui.formControl}>
            <InputLabel id="demo-simple-select-label">Select Student</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="assignHoursStudentSelect"
              value={studentSelected}
              onChange={(e) => setStudentSelected(e.target.value)}
            >
              {students.map((el) => {
                return (
                  <MenuItem key={el.name} value={el}>{el.name}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </div>
        {/* <div className="assignRightSelectContainer"> */}
        <div className="calendarInputContainer">
          <FormControl component="fieldset" className={theme.material_ui.formControl}>
            <InputLabel id="demo-simple-select-label">Select Instructor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="assignHoursInstructorSelect"
              value={studentSelected}
              onChange={(e) => setStudentSelected(e.target.value)}
            >
              {students.map((el) => {
                return (
                  <MenuItem key={el.name} value={el}>{el.name}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </div>
      </div>


      <div className="buttonContainer">
        <Fab id="testScheduleButton" onClick={() => schedule()} variant="extended" aria-label="add" className={theme.material_ui.orangeButton}>
          {!loading ? 'Schedule' : <img id="scheduleLoading" src="./images/loadingTrans.gif"></img>}
        </Fab>
      </div>
    </>
  );
};

export default withRouter(AssignHours);