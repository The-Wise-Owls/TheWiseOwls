import React, { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Splash = () => {

  return (
    <div>
      <p>Hello from app.jsx!!</p>
      <NavLink to='/template'>
        <button id="testButton">change</button>
      </NavLink>
    </div>
  );
}

export default withRouter(Splash);