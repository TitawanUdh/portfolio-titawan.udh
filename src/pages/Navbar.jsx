import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar
      bg="light"
      expand="md"              // ตั้งให้เริ่มพับเมื่อจอเล็กกว่า md
      className="w-100"
      fixed="top"              // หรือเอาออก ถ้าไม่อยากให้ลอยติดบนสุด
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/home"
          className="m-4 mt-1 mb-1 nav-brand"
        >
          TITAWAN.UDH
        </Navbar.Brand>

        {/* ปุ่มสามขีดบน mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* เมนูที่จะพับ/ขยาย */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto nav-menu">
            <Nav.Link
              as={Link}
              to="/skills"
              className={location.pathname === "/skills" ? "font-weight-bold" : ""}
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/experience"
              className={location.pathname === "/experience" ? "font-weight-bold" : ""}
            >
              EXPERIENCES
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={location.pathname === "/contact" ? "font-weight-bold" : ""}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
