import { React } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Model from "../../Model/Model";
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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="Search">Booking</Nav.Link>
                <Nav.Link href="#features">Booking</Nav.Link>
                <Nav.Link href="ContactPage">Contact us</Nav.Link>
                <Nav.Link href="content">Content</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </span>
          <span>
            <Model />
            
            {/* <h2 style={{ color: "white" }}>Example login goes here</h2> */}
          </span>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
