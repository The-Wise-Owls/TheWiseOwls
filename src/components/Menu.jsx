import React, { useState, useContext, useEffect } from 'react';
import { withRouter, useHistory, useLocation } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import gobalTheme from '../ThemeContext.js';

const Menu = (props) => {
  const history = useHistory();
  const location = useLocation();
  const theme = useContext(gobalTheme);
  const menuListObj = [
    {
      name: 'Home',
      url: '/adminsplash'
    }, 
    {
      name: 'Availability',
      url: '/availability'
    },
    {
      name: 'Staff',
      url: '/staff'
    },
    {
      name: 'Students',
      url: '/students'
    },
    {
      name: 'Classes',
      url: '/classes'
    },
    {
      name: 'History',
      url: '/history'
    }
  ];

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

      {menuListObj.map((menuList, index) => {
        return (
          <div key={index}>
            <List>
              <ListItem button onClick={() => {
                if (location.pathname === menuList.url) {
                  props.setOpen(false)
                  history.replace(menuList.url)
                } else {
                  history.push(menuList.url)
                }
              }}>
                <ListItemText primary={menuList.name} />
              </ListItem>
            </List>
            <Divider />
          </div>
        )
      })}

      <List>
        <ListItem button onClick={() => {
          history.push('/')
        }}>
          <ListItemText primary={'Logout'} />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default withRouter(Menu);