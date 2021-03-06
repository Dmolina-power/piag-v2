import React from 'react'
import  Navbar from 'react-bootstrap/Navbar';
import  Nav from 'react-bootstrap/Nav';



function navbar() {
    return (
        <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">PIAG MUSEUM</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/ArtCubes">Art Cubes</Nav.Link>
      <Nav.Link href="/Workshops">Workshops</Nav.Link>
      <Nav.Link href="/Wheels">Museum on Wheels</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/Directors">Directors</Nav.Link>
      <Nav.Link eventKey={2} href="/Contact">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </>
    )
}

export default navbar
