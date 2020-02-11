import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
import RequestForm from './components/RequestForm.jsx';
import RequestSubmitted from './components/RequestSubmitted.jsx';
import Submitted from './components/Submitted.jsx';
import GlobalTheme from './GlobalTheme.jsx';
import firebase from 'firebase/app';
import 'firebase/auth';
const auth = firebase.auth();

const RouteManager = (props) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      if (user) setIsLoggedIn(true);
    })
  }, []);

  return (
    <GlobalTheme>
      <Router>
        <Route exact path="/" component={Splash} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminSplash">
          {isLoggedIn ? <AdminSplash /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/adminOptions">
          {isLoggedIn ? <AdminOptions /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/availability">
          {isLoggedIn ? <Availability /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/staff">
          {isLoggedIn ? <Staff /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/students">
          {isLoggedIn ? <Students /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/classes">
          {isLoggedIn ? <Classes /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/history">
          {isLoggedIn ? <History /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/classHistory">
          {isLoggedIn ? <ClassHistory /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/assignHours">
          {isLoggedIn ? <AssignHours /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/assigned">
          {isLoggedIn ? <Assigned /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/submitted">
          {isLoggedIn ? <Submitted /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/requestForm">
          <RequestForm />
        </Route>
        <Route exact path="/requestSubmitted">
          <RequestSubmitted />
        </Route>
      </Router>
    </GlobalTheme>
  );
};

export default RouteManager;
