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
      {/* <div>
        <img
        src= "https://dx6iy6yk2x0g.cloudfront.net/images/0c6/c4b/0c6c4b57a9e105389df77fee735648af0f99107b-640x360.jpg?compressionQuality=80&id=51c386f06747df592c000006&op=cropThumbnail&version=1"
        />
      </div> */}
    </div>
  );
}

export default App;
