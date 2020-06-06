import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import ConfirmEmail from './components/ConfirmEmail';
import ProfileSelection from './components/ProfileSelection';
import RegisterConfirmation from './components/RegisterConfirmation';
import UserHome from './pages/UserHome';

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
        <Route path="/dashboard" exact component={UserHome} />
      </Switch>
    </BrowserRouter>
  );
}
