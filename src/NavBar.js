import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import './css/navbar.css'

export default class Navigation extends React.Component {
  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
    	<div className	="baseClass">

      <Navbar bg="navbar transparent navbar-inverse justify-content-between" expand="lg" fixed="top">

  <Navbar.Brand href="home" id="brand">Tesia Wu</Navbar.Brand>
  <Navbar >
      <Nav.Link href="home" style={{color:'white'}}>Home</Nav.Link>
      <Nav.Link href="profile" style={{color:'white'}}>Profile</Nav.Link>
      <Nav.Link href="hobbies" style={{color:'white'}}>Hobbies</Nav.Link>
      <Nav.Link href="contact" style={{color:'white'}}>Contact Me</Nav.Link>
  </Navbar>
      
    

</Navbar>
      </div>
    );
  }
}
