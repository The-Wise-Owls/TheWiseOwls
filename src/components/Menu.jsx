import React, { useState, useContext, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import gobalTheme from '../ThemeContext.js';

const Menu = (props) => {
  const history = useHistory()
  const theme = useContext(gobalTheme);

  return (
    <Drawer
      className={theme.material_ui.drawer}
      variant="persistent"
      anchor="left"
      open={props.open}
      classes={{
        paper: theme.material_ui.drawerPaper,
      }}
    >
      <div className={theme.material_ui.drawerHeader}>
        <IconButton onClick={() => props.setOpen(false)}>
          <MenuOpenIcon style={{ margin: '0 20 0 0 0', padding: '0' }} className={theme.material_ui.menuIcon} />
          <p>{`Hello, ${props.userName}!`}</p>
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={() => {
          props.setOpen(false)
          history.replace('/adminsplash')
        }}>
          <ListItemText primary={'Home'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => {
          props.setOpen(false)
          history.push('/availability')
        }}>
          <ListItemText primary={'Availability'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => {
          props.setOpen(false)
          history.push('/staff')
        }}>
          <ListItemText primary={'Staff'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => {
          props.setOpen(false)
          history.push('/students')
        }}>
          <ListItemText primary={'Students'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => {
          props.setOpen(false)
          history.push('/classes')
        }}>
          <ListItemText primary={'Classes'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => {
          props.setOpen(false)
          history.push('/history')
        }}>
          <ListItemText primary={'History'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => {
          props.setOpen(false)
          history.push('/')
        }}>
          <ListItemText primary={'Logout'} />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );

}

export default withRouter(Menu);