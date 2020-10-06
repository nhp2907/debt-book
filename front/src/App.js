import React, { memo } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams, MemoryRouter } from 'react-router-dom';
import Home from './page/home/Home';
import Header from './page/header/Header'
import Login from './page/login/Login'
export default function App() {
  return (
    <Router>
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/members" component={Home} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router >
  );
}

