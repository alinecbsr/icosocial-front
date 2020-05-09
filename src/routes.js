import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Hero from './components/Hero';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/." component={Hero} />
        <Route path="/.." component={Hero} />
      </Switch>
    </BrowserRouter>
  );
}
