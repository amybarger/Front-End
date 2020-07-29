import React from 'react';
import Nav from "./components/Nav"
import Signup from "./components/Signup"
import Login from "./components/Login"
// import Home from "./components/Home"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';


function App() {
  return (
    <div>
      <Router>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path ="/" component={Nav} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
