import React from 'react';
// import Nav from './components/Nav';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    // Wrapping in Router & adding links
    // placing "exact" on Route to make it go to the specific path
    <Router>
    <div className='App'>
      {/* <Nav /> */}
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard} />

          <Route exact path='/Signup'>
            <Signup />
          </Route>

          <Route path='/Login'>
            <Login />
          </Route>

          {/* <Route exact path='/Additem'/>
            
            <AddItem />
          </Route> */}
          
        </Switch>
      </div>

     </Router>
  );
}
