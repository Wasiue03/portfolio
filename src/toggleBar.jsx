import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      expanded={expanded}
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand href="#">Wasiue</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/casest">
              CaseStudies
            </NavLink>
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
            <NavLink className="nav-link" to="/skills">
              Skills
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/work">
              Work Exposure
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
