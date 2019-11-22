import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from './components/Splash.jsx';
import Request from './components/Request.jsx';
import Login from './components/Login.jsx';
import GlobalTheme from './GlobalTheme.jsx';

function RouteManager(props) {
  return (
    <GlobalTheme>
      <Router>
        <Route exact path="/" component={Splash} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/login" component={Login} />
      </Router>
    </GlobalTheme>
  );
}

export default RouteManager;
