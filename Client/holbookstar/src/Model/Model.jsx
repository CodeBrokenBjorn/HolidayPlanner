import React, { useState , useRef, useEffect } from "react";
import './Model.css';
import { Modal , Container,Row , Col } from "react-bootstrap";
import {Button} from "react-bootstrap";
import loginPep from "../image/loginPep.png"

function Model(props) {
    const [show, setShow] = useState(false);



    return(
        <>
        <div className="modelWithings">
            <div className="d-grid p-4">
                <Button variant= "outline-light" size="lg" onClick ={() => setShow(true)}>
                Login in
              </Button>
            </div>
                
              {/* Modal goes here */}
              <Modal 
              show={show}
              onHide={() =>setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby = "example-custom-modal-styling-title"
              
              
               >
                <Modal.Header closeButton>
                    <Modal.Title>Login in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Row>
                        <Col lg={12} md={8}>
                            <div className="p-2">
                                



                            </div>
                              
         
                        </Col>
                        <Col lg={12} md={8}>
                            <div className="p2 justify-content-center">
                                <img className="d-block align-items-center w-60 px-15" src={loginPep} alt="hero" />
                                        <h1>Username</h1>
                                        <input type="Username"
                                        className="form-control mt-1"
                                        placeholder="Enter Username" />
                                        
                                        <h1>Password</h1>
                                        <input type="Password"
                                        className="form-control mt-1" />
                                        <Button variant= "dark" size="ls" onClick ={() => setShow(true)}>
                                            Does Nothing...
                                        </Button>
                                        
                         
                            </div>
                        </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
         


        </div>


        </>
    );
}
export default Model;