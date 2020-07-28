import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={() => {
        if (token) {
          //render component
          return <Component />;
        } else {
          //redirect to login
          return <Redirect to='login' />; //Change one we get the actual route from react 1
        }
      }}
    />
  );
};

export default PrivateRoute;
