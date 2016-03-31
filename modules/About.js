var React = require('react');
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

class Example extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <div>
              <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

var About = React.createClass({
  render: function() {
    return (
      <div>
              <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
              <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
});

module.exports = Example;
