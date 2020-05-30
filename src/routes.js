import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Main from './pages/Main';
// import Register from './pages/Register';
import RegisterConfirmation from './components/RegisterConfirmation';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/*  <Route path="/" exact component={Main} /> */}
        <Route path="/" exact component={RegisterConfirmation} />
      </Switch>
    </BrowserRouter>
  );
}
