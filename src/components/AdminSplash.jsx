import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';
import gobalTheme from '../ThemeContext.js';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';

const AdminSplash = () => {
  const tempClasses = ['MCSP 02', 'MCSP 03', 'HRATX 44', 'HRATX 45'];
  
  const [classes, setClasses] = useState(tempClasses)
  const [open, setOpen] = React.useState(false);
  const [userName, setState] = useState('Jeff');
  const theme = useContext(gobalTheme);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    //axios request to fetch class names
  }),[]

  return (
    <>
    <div className="menuContainer">
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={theme.material_ui.menuButton}
      >
      </IconButton>
      <MenuIcon className={`${theme.material_ui.menuIcon} menuIcon`}/>
        <h2>Select Class</h2>
    </div>

      <Drawer
        className={theme.material_ui.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: theme.material_ui.drawerPaper,
        }}
      >
        <div className={theme.material_ui.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <MenuOpenIcon style={{margin: '0 20 0 0 0', padding: '0'}} className={theme.material_ui.menuIcon}/>
          <p>{`Hello, ${userName}!`}</p>
          </IconButton>
        </div>
      <Divider />
        <List>
            <ListItem button>

              <ListItemText primary={'Home'} />
            </ListItem>
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
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