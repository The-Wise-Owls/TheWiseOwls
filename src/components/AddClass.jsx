import Axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Fab from '@material-ui/core/Fab';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

const AddClasses = () => {
  const [students, setStudents] = useState([{name: '', email: ''}]);
  const [cohortNumber, setCohortNumber] = useState('');
  const [username, setUsername] = useState('');
  const [programs, setPrograms] = useState([{ name: 'bla' }, { name: 'bla2' }]);
  const [programSelected, setProgramSelected] = useState('');
  const [open, setOpen] = useState(false);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {
    let tempCookie = document.cookie.split('; ');
    let email = ''

    tempCookie.forEach(el => {
      let keyPair = el.split('=');

      if (keyPair[0] === 'campus') {
        email = keyPair[1];
      }
    })

    Axios.get(`/admin/programs/${email}`)
    .then(({data}) => {
      setPrograms(data);
    })
  }, []);

  useEffect(() => {
    let newUsername = '';

    let cookies = document.cookie.split('; ');

    cookies = cookies.map(cookieString => {
      return cookieString.split('=');
    })

    cookies.forEach(cookieArray => {
      if (cookieArray[0] === 'username') {
        newUsername = cookieArray[1];
      }
    })

    setUsername(newUsername);
  }, []);

  const handleInput = (field, index, data) => {
    let newData = students.slice();

    newData[index][field] = data;

    setStudents(newData);
  };

  const addStudent = () => {
    let newData = students.slice();

    newData.push({name: '', email: ''});

    setStudents(newData);
  };

  const removeStudent = (index) => {
    let newData = students.slice();

    newData.splice(index, 1);

    setStudents(newData);
  };

  const checkFields = () => {
    if (cohortNumber === '' || programSelected[0] === '') {
      alert('Please Complete All Fields.');
      return;
    } else {
      addToDB();
    }
  };

  const addToDB = () => {
    Axios.post(`/admin/classes/${programSelected.program_id}/${cohortNumber}/`)
    .then(({data}) => {
      students.forEach(obj => {
        Axios.post(`/admin/student/${obj.name}/${obj.email}/${data.insertId}`)
      });
      history.push('/class-added')
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

        <h2>Add Class</h2>
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

      <FormControl style={{ margin: '0 auto' }} component="fieldset" className={theme.material_ui.formControl}>
        <InputLabel id="demo-simple-select-label">Select Program</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="assignHoursStudentSelect"
          className={theme.material_ui.assign_input}
          value={programSelected}
          onChange={(e) => setProgramSelected(e.target.value)}
        >
          {programs.map((el) => {
            return (
              <MenuItem key={el.name} value={el}>{el.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>

      <form style={{ margin: '0 auto' }} id="assessmentNameInput" noValidate autoComplete="off">
        <Input
          id="standard-basic"
          className={theme.material_ui.assign_input}
          aria-label="Cohort Number"
          placeholder="Cohort Number"
          onChange={(e) => setCohortNumber(e.target.value)}
          value={cohortNumber}
        />
      </form>

      {students.map((studentObj, index) => {
        return (
          <div key={index} className="assignHoursInputs">
            <div className="assignemntInputContainer">
              <CancelIcon className="cancelAssignment" onClick={() => { removeStudent(index) }} />
              <p style={{margin: '0 5px 7px 0', color: 'white', fontSize: '18px'}}>{(index + 1) + '. '}</p>
                <Input
                  id="standard-basic"
                  autoComplete="off"
                  className={theme.material_ui.assign_input}
                  aria-label="Student Name"
                  placeholder="Student Name"
                  onChange={(e) => handleInput('name', index, e.target.value)}
                  value={students[index].name}
                />
            </div>
            <div className="calendarInputContainer">
              <Input
                id="standard-basic"
                autoComplete="off"
                className={theme.material_ui.assign_input}
                aria-label="Student Email"
                placeholder="Student Email"
                onChange={(e) => handleInput('email', index, e.target.value)}
                value={students[index].email}
              />
            </div>
          </div>
        )
      })}

      <div className="buttonContainer" onClick={() => addStudent()}>
        <div className="addButtonColor">
          <AddCircleIcon className="addButton" />
          <h3 className="addAssignmentTitle">Add Student</h3>
        </div>
      </div>

      <div className="buttonContainer">
        <Fab id="testScheduleButton" onClick={checkFields} variant="extended" aria-label="add" className={theme.material_ui.orangeButton}>
            Save Class
          </Fab>
      </div>
    </>
  );
};

export default withRouter(AddClasses);