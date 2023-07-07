import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import linkedin from '../assets/img/linkedin.png';
import github from '../assets/img/github.png';

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <h1 className="Logo"> Ron. </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ron-moyal-361b07247/?originalSubdomain=il" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://github.com/ronmoyal" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
