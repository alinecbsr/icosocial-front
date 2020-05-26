import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Main from './pages/Main';
import Register from './pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/*  <Route path="/" exact component={Main} /> */}
        <Route path="/" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
