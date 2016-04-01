import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const App = React.createClass({

  //this.state = {
//    navExpanded: false
//},
getInitialState: function() {
    return {navExpanded: false};
  },
  onNavItemClick: function(event)  {
    this.setState({ navExpanded: false });
},

  onNavbarToggle: function(event)  {
    this.setState({ navExpanded: ! this.state.navExpanded });
},


  render() {
    return (
      <div>
         <Navbar inverse expanded={ this.state.navExpanded } onToggle={ this.onNavbarToggle } >
   <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/main/home"><a href="#">React-Bootstrap</a></LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/main/home"><NavItem eventKey={1} onClick={ this.onNavItemClick }>Home</NavItem></LinkContainer>
        <NavItem eventKey={2}>Predictions</NavItem>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/main/about"><NavItem eventKey={1} href="#">About</NavItem></LinkContainer>
      </Nav>
   </Navbar.Collapse>
   </Navbar>
        {this.props.children}
      </div>
    )
  }
})

module.exports = App;
