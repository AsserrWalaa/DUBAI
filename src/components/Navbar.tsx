import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/1-removebg-preview (3) 1.png";
import { NavDropdown } from "react-bootstrap";

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="shadow-none">
      {/* Container with full width and vertical centering */}
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo aligned to the left */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" width="112" height="42" />
        </Navbar.Brand>

        {/* Navbar Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Collapse for Links */}
        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-center text-center">
          <Nav className="d-flex align-items-center mx-auto justify-content-center">
            {/* Navbar Links */}
            <Nav.Link as={Link} to="/" className="text-light fs-5 me-2 ms-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light fs-5 me-2">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light fs-5 me-2">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/our-team" className="text-light fs-5 me-2">
              Our Team
            </Nav.Link>
          </Nav>

          {/* Dropdown aligned to the right */}
          <Nav className="ms-auto">
            <NavDropdown
              className="fs-5"
              title={<span className="text-light">Language</span>}
              menuVariant="light">
              <NavDropdown.Item href="#action/3.1" className="text-dark">
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-dark">
                Arabic
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
