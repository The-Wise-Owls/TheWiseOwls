import React, { useContext } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import gobalTheme from '../ThemeContext.js';

const Splash = (props) => {
  const theme = useContext(gobalTheme);

  return (
    <div>
      <h1>The<br/>
          Wise<br/>
          Owls
      </h1>
      <div className="buttonContainer">
        <NavLink to='/template'>
          <Fab id="button" variant="extended" aria-label="add" className={theme.material_ui.whiteButton}>
              Request Office Hours
          </Fab>
        </NavLink>
      </div>
    </div>
  );
}

export default withRouter(Splash);