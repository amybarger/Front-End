import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';

let PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={() => {
        if (token) {
          //render component
          return <Dashboard />;
        } else {
          //redirect to login
          return <Redirect to='/' />; 
        }
      }}
    />
  );
};

export default PrivateRoute;
