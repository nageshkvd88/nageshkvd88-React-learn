import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MainMenu = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg">
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Products -1 </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Products -2 </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Products -3 </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Products -4 </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Category</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default MainMenu