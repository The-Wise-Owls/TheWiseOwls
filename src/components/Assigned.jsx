import React, { useState, useEffect, useContext } from 'react';
import { withRouter, NavLink, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx';

const Assigned = () => {
  const [course, setCourse] = useState('');
  const [username, setUsername] = useState('');
  const [open, setOpen] = React.useState(false);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {
    const newCourse = 'MCSP 02';
    const newUser = 'Jeff';
    //get course and name from cookie

    setCourse(newCourse);
    setUsername(newUser);
  },[]);

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
    </>
  );
};

export default withRouter(Assigned);