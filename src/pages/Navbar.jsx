import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Navbar.Brand href="/home" className="m-4 mt-1 mb-1">
        TITAWAN.UDH
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/skills">SKILLS</Nav.Link>
        <Nav.Link href="/experience">EXPERIENCES</Nav.Link>
        <Nav.Link href="/contact">CONTACT</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
