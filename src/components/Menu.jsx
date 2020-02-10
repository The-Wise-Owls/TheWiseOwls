import React, { useState, useContext, useEffect } from 'react';
import { withRouter, useHistory, useLocation, Redirect } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import gobalTheme from '../ThemeContext.js';
import firebase from 'firebase/app';
import 'firebase/auth';
const auth = firebase.auth();
import { CLIENT_ID, API_KEY } from './API_Config';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events";

const Menu = (props) => {
  const history = useHistory();
  const location = useLocation();
  const theme = useContext(gobalTheme);
  const menuListObj = [
    {
      name: 'Home',
      url: '/adminSplash'
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

  const handleLogout = () => {
    auth.signOut()
    .then(() => {
      history.push('/');
    })
    .catch((err) => {
      console.log(err)
    })
  };

  const initClient = () => {
    window.gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    .catch(err => {
      console.log(err)
    })
  };

  useEffect(() => {
    window.gapi.load('client:auth2', initClient)
  }, []);

  return (
    <Drawer
      id="testDrawer"
      className={theme.material_ui.drawer}
      variant="persistent"
      anchor="left"
      open={props.open}
      classes={{
        paper: theme.material_ui.drawerPaper
      }}
    >
      <div id="testClose" className={theme.material_ui.drawerHeader} onClick={() => props.setOpen(false)}>
        <IconButton>
          <MenuOpenIcon style={{ margin: '0 20 0 0 0', padding: '0' }} className={theme.material_ui.menuIcon} />
        </IconButton>
        <p>{`Campus: ${props.username}`}</p>
      </div>
      <Divider />

      {menuListObj.map((menuList, index) => {
        return (
          <div key={index}>
            <List>
              <ListItem button id={`test${menuList.name}`} onClick={() => {
                if (location.pathname === menuList.url) {
                  props.setOpen(false);
                  history.replace(menuList.url);
                } else {
                  history.push(menuList.url);
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
        <ListItem button id="testLogout" onClick={handleLogout}>
          <ListItemText primary={'Logout'} />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default withRouter(Menu);