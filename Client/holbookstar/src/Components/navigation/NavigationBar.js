import { React }  from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap'; 
import {Link , Router} from 'react-router-dom';

import './NavigationBar.css';

function NavigationBar() {
    return (
        <>
            <Navbar bg ="dark" expand="lg" variant ="dark">
                <Container>
                    <Navbar.Brand href="#home">BookSar</Navbar.Brand> 
                    <Navbar.Toggle aria-controls = "navbar-toggle"> = </Navbar.Toggle>
                    <Navbar.Collapse id ="navbar-toggle">
                        <Nav className="me-auto">
                            
                            <Router><Link href = "#home">Home</Link></Router>
                            <Router><Link href = "#features">Booking</Link></Router>
                            <Router><Link href = "#conttact">Contact us</Link></Router>
                            
                        </Nav>
                   </Navbar.Collapse>
                </Container>
            </Navbar>   
        </>
        
    );
}
export default NavigationBar;
