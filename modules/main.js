var App = require('./App');
var Home = require('./Home');
var About = require('./About');
var Login = require('./login');


import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

render((
  <Router>
    <Route path="/" component={Login} />
    <Route path="/main" component={App}>
      <Route path="/main/home" component={Home} />
      <Route path="/main/about" component={About} />
    </Route>
  </Router>
), document.body)
