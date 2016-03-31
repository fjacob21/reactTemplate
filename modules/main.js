//var App = require('./App');
//var Home = require('./Home');
var About = require('./About');
import React from 'react'
import { render, findDOMNode } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, History, Route, IndexRoute, Link, hashHistory } from 'react-router'


render((
  <Router history={hashHistory}>
    <Route path="/" component={About}>
    </Route>
  </Router>
), document.getElementById('app'))
