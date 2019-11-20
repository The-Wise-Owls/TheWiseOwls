import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from './components/Splash.jsx';
import Template from './components/Template.jsx';

function RouteManager() {
  return (
    <Router>
      <Route exact path="/" component={Splash} />
      <Route exact path="/template" component={Template} />
    </Router>
  );
}

export default RouteManager;
