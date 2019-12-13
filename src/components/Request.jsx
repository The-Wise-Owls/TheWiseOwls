import Axios from 'axios'
import React, { useState, useContext, useEffect } from 'react';
import { withRouter, NavLink, useLocation, useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import globalTheme from '../ThemeContext.js';

const Request = () => {
  const [classes, setClasses] = useState([]);
  const theme = useContext(globalTheme);
  const history = useHistory();

  useEffect(() => {
    setClasses([{ id: 1, course: "HRATX 45" }, { id: 2, course: "HRATX 46" }, { id: 3, course: "MCSP 02" }, { id: 4, course: "MCSP 03" }]);
   //axios.get() get active classes
  }, []);

  const setCookie = (obj) => {
    //set selected class object to cookie
    document.cookie = `id=${obj.id}`;
  };

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
        <h2>Select Class</h2>
      </div>

      {classes.map((classObj, index) => {
        return (
          <div key={index} className="buttonContainer">
            <NavLink to='/requestForm'>
              <Fab id="requestButton" onClick={() => setCookie(classObj)} variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
                {classObj.course}
              </Fab>
            </NavLink>
          </div>
        )
      })}
    </>
  );
};

export default withRouter(Request);