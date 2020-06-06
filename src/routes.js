/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import isAuthenticated from './auth';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import ConfirmEmail from './components/ConfirmEmail';
import ProfileSelection from './components/ProfileSelection';
import RegisterConfirmation from './components/RegisterConfirmation';
import UserHome from './pages/UserHome';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" exact component={Register} />
        <Route path="/account/confirmation/:email" component={ConfirmEmail} />
        <Route path="/profile-selector" component={ProfileSelection} />
        <Route path="/signup/confirmation" component={RegisterConfirmation} />
        <PrivateRoute path="/dashboard" exact component={UserHome} />
      </Switch>
    </BrowserRouter>
  );
}
