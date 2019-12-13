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
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AssignHours = () => {
  const [ course, setCourse ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ students, setStudents ] = useState([])
  const [studentSelected, setStudentSelected] = useState([{ id: 1, name: 'Student Name' }]);
  const [ instructors, setInstructors ] = useState([])
  const [ instructorSelected, setInstructorSelected ] = useState([{ id: 1, name: 'Instructor Name' }]);
  const [ open, setOpen ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ assessmentName, setAssessmentName ] = useState('');
  const [ assessmentDate, setAssessmentDate ] = useState(new Date());
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

    // Axios.get()
    // .then(({data}) => {
      let data = [{id: 1, name: 'Jeff Salinas'}, {id: 2, name: 'Julia Kim'}];
      setInstructors(data);
    // })

    
    //get course and name from cookie
    setCourse(newCourse);
    setUsername(newUser);
  }, []);

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

  const addStudentToList = (e, index) => {
    let tempStudentArray = studentSelected.slice();
    tempStudentArray[index] = e.target.value;

    setStudentSelected(tempStudentArray);
  };

  const addInstructorToList = (e, index) => {
    let tempInstructorArray = instructorSelected.slice();
    tempInstructorArray[index] = e.target.value;

    setInstructorSelected(tempInstructorArray);
  };

  const addSelectComponent = () => {
    let tempStudentArray = studentSelected.slice();
    let tempInstructorArray = instructorSelected.slice();
    tempInstructorArray.push({ id: 0, name: '' });
    tempStudentArray.push({ id: 0, name: '' });
    
    setStudentSelected(tempStudentArray);
    setInstructorSelected(tempInstructorArray);
    console.log('click');
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

      {studentSelected.map((studentObj, index) => {
        return (
          <div key={index} className="assignHoursInputs"> 
            <div className="assignemntInputContainer">
              <CancelIcon className="cancelAssignment" onClick={() => console.log('click')}/>
              <FormControl component="fieldset" className={theme.material_ui.formControl}>
                <InputLabel id="demo-simple-select-label">Select Student</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="assignHoursStudentSelect"
                  value={studentSelected[index]}
                  onChange={(e) => addStudentToList(e, index)}
                >
                  {students.map((el) => {
                    return (
                      <MenuItem key={el.name} value={el}>{el.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="calendarInputContainer">
              <FormControl component="fieldset" className={theme.material_ui.formControl}>
                <InputLabel id="demo-simple-select-label">Select Instructor</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="assignHoursInstructorSelect"
                  value={instructorSelected[index]}
                  onChange={(e) => addInstructorToList(e, index)}
                >
                  {instructors.map((el) => {
                    return (
                      <MenuItem key={el.name} value={el}>{el.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </div>
          </div>
        )
      })}

      <div className="buttonContainer" onClick={addSelectComponent}>
        <div className="addButtonColor">
          <AddCircleIcon className="addButton" />
          <h3 className="addAssignmentTitle">Add Assignment</h3>
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