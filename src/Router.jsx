import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from './components/Splash.jsx';
import Template from './components/Template.jsx';
import GlobalTheme from './GlobalTheme.jsx';

function RouteManager(props) {
  return (
    <GlobalTheme>
      <Router>
        <Route exact path="/" component={Splash} />
        <Route exact path="/template" component={Template} />
      </Router>
    </GlobalTheme>
  );
}

export default RouteManager;
