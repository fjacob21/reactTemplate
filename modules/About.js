var React = require('react');
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Router, Route, Link } from 'react-router'


var About = React.createClass({
  render: function() {
    return (
      <div>
              <LinkContainer to="inbox"><Button bsStyle="primary" bsSize="large" active>Primary button</Button></LinkContainer>
              <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
});

module.exports = About;
