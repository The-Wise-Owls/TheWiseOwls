import Axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';

/* Material UI */
import 'date-fns';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DateFnsUtils from '@date-io/date-fns';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const AssignHours = () => {
  const [ course, setCourse ] = useState('');
  const [ courseID, setCourseID ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ students, setStudents ] = useState([])
  const [ studentSelected, setStudentSelected ] = useState([{ id: 1, name: 'Student Name', email:'' }]);
  const [ instructors, setInstructors ] = useState([])
  const [ instructorsSelected, setInstructorsSelected ] = useState([{ id: 1, name: 'Instructor Name', calendar_id: '' }]);
  const [ open, setOpen ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ topic, setTopic ] = useState('');
  const [ assessmentDate, setAssessmentDate ] = useState(new Date());
  const theme = useContext(globalTheme);
  const history = useHistory();
  
  useEffect(() => {
    let newUsername = '';
    let newCourseName = '';
    let classID = '';

    let cookies = document.cookie.split('; ');

    cookies = cookies.map(cookieString => {
      return cookieString.split('=');
    })

    cookies.forEach(cookieArray => {
      if (cookieArray[0] === 'username') {
        newUsername = cookieArray[1];
      } else if (cookieArray[0] === 'courseName') {
        newCourseName = cookieArray[1];
      } else if (cookieArray[0] === 'courseID') {
        classID = cookieArray[1];
      }
    })

    setUsername(newUsername);
    setCourse(newCourseName);
    setCourseID(classID);

    Axios.get(`/admin/classes/${classID}/students`)
      .then(({ data }) => {
        setStudents(data);
      })
      .catch(err => console.log(err));

    Axios.get(`admin/classes/${classID}/staff`)
    .then(({data}) => {
      setInstructors(data);
    })
  }, []);

  const schedule = () => {
    let pairs = [];

    setLoading(true);
    //grab class id from cookie

    let staffAssignments = {};

    for (let i = 0; i < studentSelected.length; i++) {
      if (instructorsSelected[i].name === '') {
        continue;
      } else if (!staffAssignments[instructorsSelected[i].id]) {
        staffAssignments[instructorsSelected[i].id] = { id: instructorsSelected[i].id, name: instructorsSelected[i].name, calendar_id: instructorsSelected[i].calendar_id, pairs: [{ id: studentSelected[i].id, name: studentSelected[i].name, email: studentSelected[i].email}]};
      } else {
        staffAssignments[instructorsSelected[i].id].pairs.push({ id: studentSelected[i].id, name: studentSelected[i].name, email: studentSelected[i].email });
      }
    }

    for (let staffID in staffAssignments) {
      pairs.push({ staff: { id: staffAssignments[staffID].id, name: staffAssignments[staffID].name, calendar_id: staffAssignments[staffID].calendar_id}, students: staffAssignments[staffID].pairs});
    }

    // need to add assessmentDate: assessmentDate,
    Axios.get(`/admin/schedule/class/${course}/class_id/${courseID}/topic/${topic}/${JSON.stringify(pairs)}`)
    .then(({data}) => {
      document.cookie = `postObject=${JSON.stringify(data)}`
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
    let tempInstructorArray = instructorsSelected.slice();
    tempInstructorArray[index] = e.target.value;

    setInstructorsSelected(tempInstructorArray);
  };

  const addSelectComponent = () => {
    if (studentSelected === '') {
      setStudentSelected([{ id: 0, name: '' }]);
      setInstructorsSelected([{ id: 0, name: '' }]);
    } else {
      let tempStudentArray = studentSelected.slice();
      let tempInstructorArray = instructorsSelected.slice();
      tempInstructorArray.push({ id: 0, name: '' });
      tempStudentArray.push({ id: 0, name: '' });
      
      setStudentSelected(tempStudentArray);
      setInstructorsSelected(tempInstructorArray);
    }
  };

  const removeSelectComponent = (index) => {
    let tempStudentArray = studentSelected.slice();
    let tempInstructorArray = instructorsSelected.slice();
    tempInstructorArray.splice(index, 1);
    tempStudentArray.splice(index, 1);

    setStudentSelected(tempStudentArray);
    setInstructorsSelected(tempInstructorArray);
  }

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
            <TextField id="standard-basic" 
            label="Topic" 
            onChange={(e) => setTopic(e.target.value)} 
            value={topic}
            />
          </form>
        </div>
        <div className="calendarInputContainer">
          <MuiPickersUtilsProvider utils={ DateFnsUtils }>
            <KeyboardDatePicker
                id="calendar"
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                label="Date of Assessment"
                value={ assessmentDate }
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
              <CancelIcon className="cancelAssignment" onClick={() => {removeSelectComponent(index)}}/>
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
                  value={instructorsSelected[index]}
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
        <Fab id="testScheduleButton" 
          onClick={() => schedule()} 
          variant="extended" 
          aria-label="add" 
          className={theme.material_ui.orangeButton}
          >
          {!loading ? 'Consult The Owls' : <img id="scheduleLoading" src="./images/loadingTrans.gif"></img>}
        </Fab>
      </div>
    </>
  );
};

export default withRouter(AssignHours);