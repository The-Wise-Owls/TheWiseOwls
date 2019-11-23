import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import gobalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx'

const AdminSplash = () => {
  const tempClasses = ['MCSP 02', 'MCSP 03', 'HRATX 44', 'HRATX 45'];
  const theme = useContext(gobalTheme);
  const [classes, setClasses] = useState(tempClasses)
  const [open, setOpen] = React.useState(false);
  const [userName, setState] = useState('Jeff');

  useEffect(() => {
    //axios request to fetch class names and user name
  }),[]

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
    <div className="menuContainer">
      <IconButton
        aria-label="open drawer"
        onClick={() => setOpen(true)}
        edge="start"
        className={theme.material_ui.menuButton}
      >
      </IconButton>
      <MenuIcon className={`${theme.material_ui.menuIcon} menuIcon`}/>
        <h2>Select Class</h2>
    </div>
    <Menu 
      open={open}
      userName={userName}
      setOpen={handleClose}
    />
      
      {classes.map((className, index) => {
        return (
          //add onclick to set name to local storage cookie
          <div key={index} className="buttonContainer">
            <NavLink to='/adminoptions'>
              <Fab id="requestButton" variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
                {className}
              </Fab>
            </NavLink>
          </div>
        )
      })}
    </>
  );
}

export default withRouter(AdminSplash);