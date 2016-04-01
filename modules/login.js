import React from 'react'
import { render } from 'react-dom'
var Navigation = require('react-router').Navigation;
import { Modal, Button, Input, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


//Login = React.createClass({
//const Login = React.createClass({
   var Login = module.exports = React.createClass({


   handleSubmit: function(event) {
    event.preventDefault();
    this.props.history.push('/main')
  },

  render() {
    return (
      <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <form>
  <Input type="text" label="Text" placeholder="Enter text" />
  <Input type="email" label="Email Address" placeholder="Enter email" />
  <Input type="password" label="Password" />
  </form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.handleSubmit}>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
    )
  }
})

//module.exports = Login;
