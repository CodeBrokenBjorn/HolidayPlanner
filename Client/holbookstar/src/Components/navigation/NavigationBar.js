import { React } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Router, Outlet, BrowserRouter } from "react-router-dom";

import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            BookSar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Booking</Nav.Link>
                <Nav.Link href="#conttact">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
