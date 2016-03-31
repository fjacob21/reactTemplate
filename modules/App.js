var React = require('react');
var {Link, RouteHandler} = require('react-router');
import { Button } from 'react-bootstrap';

require('./App.css');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </header>
<Button bsStyle="primary" bsSize="large" active>Primary button</Button>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
