import React from 'react';
import ThemeContext from './ThemeContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  whiteButton: {
    background: '#F4F4F5',
    border: 0,
    borderRadius: 20,
    boxShadow: '0 0 0 0 #000000',
    color: 'black',
    padding: '0 30px',
    width: 345,
    height: 63,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Helvetica',
    textTransform: "none"
  },
  login_input:{
    color: 'black !important'
  },
  assign_input:{
    color: '#f4f4f5 !important'
  },
  orangeButton: {
    background: '#EA882C',
    border: 0,
    borderRadius: 20,
    boxShadow: '0 0 0 0 #000000',
    color: 'black',
    padding: '0 30px',
    width: 345,
    height: 63,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Helvetica',
    textTransform: "none"
  },
  loginButton: {
    background: '#EA882C',
    border: 0,
    borderRadius: 20,
    boxShadow: '0 4px 4px 0 #000000',
    color: 'black',
    padding: '0 30px',
    width: 345,
    height: 63,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Helvetica',
    textTransform: "none"
  },
  drawer: {
    width: 270,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 270,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menuButton: {
    width: '65px',
    height: '65px',
    margin: 'auto 20px'
  },
  menuIcon: {
    fontSize: '66px',
    color: '#EA882C',
    margin: 'auto 20px',
  },
  formControl: {
    margin: 0,
  }
});

const GlobalTheme = (props) => {
  const makeStyles = useStyles();

  return (
    <ThemeContext.Provider value={{
      material_ui: makeStyles
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default GlobalTheme;