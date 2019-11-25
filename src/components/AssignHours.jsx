import React, { useState, useEffect, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';

const AssignHours = () => {
  const [course, setCourse] = useState('');
  const [username, setUsername] = useState('');
  const [students, setStudents] = useState([])
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const theme = useContext(globalTheme);
  const history = useHistory();
  
  useEffect(() => {
    const newCourse = 'MCSP 02';
    const newUser = 'Jeff';
    const newStudents = [{ id: 1, name: 'Alice McMac', checked: false }, { id: 2, name: '2quack', checked: false}, 
    {id:3, name: 'Bob The Builder', checked: false}, {id: 4, name: 'The Green Power Ranger', checked: false}, 
    {id: 5, name: 'Tom Andjerry', checked: false}]
    //get course and name from cookie
    //get all student names from course
    
    setCourse(newCourse);
    setUsername(newUser);
    setStudents(newStudents);
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
        studentIds: scheduledStudents
      }
    })
    .then(({data}) => {
      //set data into local cookie
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
      <div className="radioButtonContainer">
        <FormControl component="fieldset" className={theme.material_ui.formControl}>
          <FormGroup>
            {students.map((student, index) => {
              return (
                <FormControlLabel
                  key={student.name}
                  label={student.name}
                  control={
                    <Checkbox icon={<RadioButtonUncheckedIcon />} 
                    checkedIcon={<RadioButtonCheckedIcon />} 
                    checked={student.checked} 
                    onChange={() => handleCheck(index)} 
                    value={student.name} />
                  }
                />
              );
            })}
          </FormGroup>
        </FormControl>
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