import { React } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";


function NavigationBar() {
  return (
    <div className="navigation-bar">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            <Navbar.Brand as={Link} to="/">
              BookSar
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="me-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="Search">Plan Booking</Nav.Link>
                <Nav.Link href="Callender">View Callender</Nav.Link>
                <Nav.Link href="content">Add Content</Nav.Link>
                <Nav.Link href="ContactPage">Contact us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </span>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
