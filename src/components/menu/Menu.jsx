import React from 'react'
import { Navbar,Container,Nav  } from 'react-bootstrap'
import Logo from "../../assets/logo 1.png"
import "./menu.css"
const Menu = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#banner">Home</Nav.Link>
            <Nav.Link href="#About">About Us</Nav.Link>
            <Nav.Link href="#view">Service</Nav.Link>
            <Nav.Link href="#design">Blog</Nav.Link>
            <Nav.Link href="#client">Portfolio</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
      
          </Nav>
        </Navbar.Collapse>
        <div className="menu-btn">
        <a href="#footer">Contact Us</a>
        </div>
      </Container>
    </Navbar>
  )
}

export default Menu