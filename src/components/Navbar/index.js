import React from 'react'
import  Navbar from 'react-bootstrap/Navbar';
import  Nav from 'react-bootstrap/Nav';



function navbar() {
    return (
        <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">PIAG MUSEUM</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Art Cubes</Nav.Link>
      <Nav.Link href="#pricing">Workshops</Nav.Link>
      <Nav.Link href="#pricing">Museum on Wheels</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Directors</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </>
    )
}

export default navbar
