import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Hero from './components/Hero';
import About from './components/About';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/." component={Hero} />
        <Route path="/.." component={Hero} />
        <Route path="/about_us" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
