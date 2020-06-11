/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import isAuthenticated, { isFirstAccess } from './auth';

import Main from './pages/Main';
import Login from './pages/Login';
import UserHome from './pages/UserHome';
import Register from './pages/Register';
import ConfirmEmail from './pages/ConfirmEmail';
import ProfileSelection from './pages/ProfileSelection';
import RegisterConfirmation from './pages/RegisterConfirmation';

import ProfilePJ from './components/ProfilePJ';
import ProfilePF from './components/ProfilePF';
import Confirmation from './components/Confirmation';

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

const LoggedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        isFirstAccess() ? (
          <Redirect
            to={{
              pathname: '/profile-selector',
              state: { from: props.location },
            }}
          />
        ) : (
          <Redirect
            to={{ pathname: '/dashboard', state: { from: props.location } }}
          />
        )
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <LoggedRoute path="/signin" component={Login} />
        <Route path="/signup" exact component={Register} />
        <Route path="/account/confirmation/:email" component={ConfirmEmail} />
        <Route path="/signup/confirmation" component={RegisterConfirmation} />

        <PrivateRoute path="/profile-selector" component={ProfileSelection} />
        <PrivateRoute path="/dashboard" component={UserHome} />
        <PrivateRoute path="/user/profilepj" component={ProfilePJ} />
        <PrivateRoute path="/user/profilepf" component={ProfilePF} />
        <PrivateRoute path="/user/confirmation" component={Confirmation} />
      </Switch>
    </BrowserRouter>
  );
}
