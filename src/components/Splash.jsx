import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Hello from app.jsx!!</p>
        <NavLink to='/template'>
          <button>change</button>
        </NavLink>
      </div>
    );
  }
}

export default withRouter(Splash);