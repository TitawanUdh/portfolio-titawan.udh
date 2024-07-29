// import React from "react";
// import { Nav, Navbar } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// function NavBar() {
//   return (
//     <Navbar bg="light" data-bs-theme="light">
//       <Navbar.Brand href="/home" className="m-4 mt-1 mb-1 nav-brand">
//         TITAWAN.UDH
//       </Navbar.Brand>
//       <Nav className="me-auto nav-menu">
//         <Nav.Link href="/skills">SKILLS</Nav.Link>
//         <Nav.Link href="/experience">EXPERIENCES</Nav.Link>
//         <Nav.Link href="/contact">CONTACT</Nav.Link>
//       </Nav>
//     </Navbar>
//   );
// }

// export default NavBar;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const NavigationBar = () => {
  const location = useLocation(); // Get the current location

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Navbar.Brand as={Link} to="/home" className="m-4 mt-1 mb-1 nav-brand">
        TITAWAN.UDH
      </Navbar.Brand>
      <Nav className="me-auto nav-menu">
        <Nav.Link
          as={Link}
          to="/skills"
          className={location.pathname === '/skills' ? 'font-weight-bold' : ''}
        >
          SKILLS
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/experience"
          className={location.pathname === '/experience' ? 'font-weight-bold' : ''}
        >
          EXPERIENCES
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/contact"
          className={location.pathname === '/contact' ? 'font-weight-bold' : ''}
        >
          CONTACT
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;

