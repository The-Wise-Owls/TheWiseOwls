import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from './components/Splash.jsx';
import Request from './components/Request.jsx';
import Login from './components/Login.jsx';
import AdminSplash from './components/AdminSplash.jsx';
import AdminOptions from './components/AdminOptions.jsx';
import Availability from './components/Availability.jsx';
import Students from './components/Students.jsx';
import Staff from './components/Staff.jsx';
import Classes from './components/Classes.jsx';
import History from './components/History.jsx';
import ClassHistory from './components/ClassHistory.jsx';
import AssignHours from './components/AssignHours.jsx';
import Assigned from './components/Assigned.jsx';
import GlobalTheme from './GlobalTheme.jsx';

const RouteManager = (props) => {
  return (
    <GlobalTheme>
      <Router>
        <Route exact path="/" component={Splash} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminSplash" component={AdminSplash} />
        <Route exact path="/adminOptions" component={AdminOptions} />
        <Route exact path="/availability" component={Availability} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/classes" component={Classes} />
        <Route exact path="/history" component={History} />
        <Route exact path="/classHistory" component={ClassHistory} />
        <Route exact path="/assignHours" component={AssignHours} />
        <Route exact path="/assigned" component={Assigned} />

      </Router>
    </GlobalTheme>
  );
};

export default RouteManager;
