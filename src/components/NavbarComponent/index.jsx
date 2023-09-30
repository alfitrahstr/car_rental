import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './index.scss'
import { Button } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar-main">
            <Container>
              <Link style={{ textDecoration: 'none' }} to={'/'}>
              <Navbar.Brand>Logo</Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                  <Nav.Link href="#ourservices">Our Service</Nav.Link>
                  <Nav.Link href="#memes">Why Us</Nav.Link>
                  <Nav.Link href="#memes">Testimonial</Nav.Link>
                  <Nav.Link href="#memes">FAQ</Nav.Link>
                </Nav>
                <Link to="/register">
                  <button type="button" class="btn btn-success">Register</button>
                </Link>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavbarComponent