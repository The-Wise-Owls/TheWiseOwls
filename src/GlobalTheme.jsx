import React from 'react';
import ThemeContext from './ThemeContext';
import { makeStyles } from '@material-ui/core/styles';

  let useStyles = makeStyles({
    whiteButton: {
      background: '#F4F4F5',
      border: 0,
      borderRadius: 20,
      boxShadow: '0 0 0 0 #000000',
      color: 'black',
      height: 48,
      padding: '0 30px',
    },
  })

const GlobalTheme = (props) => {
  const makeStyles = useStyles();

  return (
    <ThemeContext.Provider value={{
      classes: makeStyles,
      message: 'hello'
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default GlobalTheme;