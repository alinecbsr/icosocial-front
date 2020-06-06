import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileSelection from './components/ProfileSelection';
import RegisterConfirmation from './components/RegisterConfirmation';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" exact component={Register} />
        <Route path="/profile-selector" component={ProfileSelection} />
        <Route path="/signup/confirmation" component={RegisterConfirmation} />
      </Switch>
    </BrowserRouter>
  );
}
