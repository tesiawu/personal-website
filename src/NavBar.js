import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import './css/style.css'

export default class Navigation extends React.Component {
  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
    	<div className	="baseClass">

      <Navbar bg="navbar transparent navbar-inverse justify-content-between" expand="lg" sticky="top">

  <Navbar.Brand href="home" id="brand">Tesia Wu</Navbar.Brand>
  <Navbar >
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="profile">Profile</Nav.Link>

      <NavDropdown title="Interests" className="dropdown">
        <NavDropdown.Item href="photography" style={{color:'white'}}>Photography</NavDropdown.Item>
        <NavDropdown.Item href="marvel" style={{color:'white'}}>Marvel</NavDropdown.Item>
      </NavDropdown>

  </Navbar>
      
    

</Navbar>
      </div>
    );
  }
}
