import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink, useHistory } from 'react-router-dom';
import gobalTheme from '../ThemeContext.js';

import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';
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
  const history = useHistory()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    //axios request to fetch class names and user name
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
          <ListItem button onClick={() => {
            setOpen(false)
            history.replace('/adminsplash')
          }}>
            <ListItemText primary={'Home'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => {
            setOpen(false)
            history.push('/availability')
          }}>
            <ListItemText primary={'Availability'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => {
            setOpen(false)
            history.push('/staff')
          }}>
            <ListItemText primary={'Staff'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => {
            setOpen(false)
            history.push('/students')
          }}>
            <ListItemText primary={'Students'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => {
            setOpen(false)
            history.push('/classes')
          }}>
            <ListItemText primary={'Classes'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => {
            setOpen(false)
            history.push('/history')
          }}>
            <ListItemText primary={'History'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => {
            setOpen(false)
            history.push('/')
          }}>
            <ListItemText primary={'Logout'} />
          </ListItem>
        </List>
        <Divider />

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