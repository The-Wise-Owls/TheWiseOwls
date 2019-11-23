import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from './components/Splash.jsx';
import Request from './components/Request.jsx';
import Login from './components/Login.jsx';
import AdminSplash from './components/AdminSplash.jsx'
import AdminOptions from './components/AdminOptions.jsx'
import GlobalTheme from './GlobalTheme.jsx';

function RouteManager(props) {
  return (
    <GlobalTheme>
      <Router>
        <Route exact path="/" component={Splash} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminsplash" component={AdminSplash} />
        <Route exact path="/adminoptions" component={AdminOptions} />

      </Router>
    </GlobalTheme>
  );
}

export default RouteManager;
