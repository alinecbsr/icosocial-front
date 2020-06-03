import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Main from './pages/Main';
// import Register from './pages/Register';
// import RegisterConfirmation from './components/RegisterConfirmation';
// import Login from './pages/Login';
// import ProfileSelection from './components/ProfileSelection';
// import UserHome from './pages/UserHome';
// import ProfilePJ from './components/ProfilePJ';
import ProfilePF from './components/ProfilePF';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/*  <Route path="/" exact component={Main} /> */}
        <Route path="/" exact component={ProfilePF} />
      </Switch>
    </BrowserRouter>
  );
}
