import React, { useState, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import globalTheme from '../ThemeContext.js';
import Menu from './Menu.jsx'

const Availability = () => {
  const theme = useContext(globalTheme);
  const [open, setOpen] = React.useState(false);
  const [userName, setState] = useState('Jeff');
  const history = useHistory();
  window.testOpen = open

  return (
    <>
      <div className="menuContainer">
        <IconButton
          id="testBackAvailability"
          aria-label="open drawer"
          onClick={() => history.goBack()}
          edge="start"
          className={`${theme.material_ui.menuButton} leftMenuIconButton`}
        >
          <ChevronLeftIcon style={{ margin: '0' }} className={`${theme.material_ui.menuIcon} menuIcon`} />
        </IconButton>

        <IconButton
          id="testMenuAvailability"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          edge="start"
          className={`${theme.material_ui.menuButton} menuIconButton`}
        >
          <MenuIcon className={`${theme.material_ui.menuIcon} menuIcon`} />
        </IconButton>

        <h2>Availability</h2>
      </div>
      <Menu
        open={open}
        userName={userName}
        setOpen={() => setOpen(false)}
      />
    </>
  );
};

export default withRouter(Availability);