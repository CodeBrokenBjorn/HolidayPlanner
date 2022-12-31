import React, { useState, useRef, useEffect } from "react";
import "./Model.css";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import loginPep from "../image/loginPep.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthCheck from "../action/auth.check";
import useLoginHook from "../action/useLoginHook";

function Model(props) {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState(""); //Username
  const [password, setPassword] = useState(""); //Password
  const [msg, setMsg] = useState("");
  const history = useNavigate();
  const [user, login, logout] = useLoginHook()

  const sumbitFunc = () => {
    login(username, password);
    // const newAuthCheck = new AuthCheck(username, password);
    // newAuthCheck.login();
  }
// reminder not to add class
  const AuthCheck = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8900/login", {
        Username: username,
        Password: password,
      });
      history.push("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="modelWithings">
      <div className="d-grid p-4">
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => setShow(true)}
        >
          Login in
        </Button>
      </div>

      {/* Modal goes here */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Login in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={12} md={8}>
                <div className="p-2"></div>
              </Col>
              <Col lg={12} md={8}>
                <div className="p2 justify-content-center">
                  <img
                    className="d-block align-items-center w-60 px-15"
                    src={loginPep}
                    alt="hero"
                  />
                  <h1>Username</h1>
                  <input
                    type="username"
                    className="form-control mt-1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Username"
                  />

                  <h1>Password</h1>
                  <input
                    type="Password"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control mt-1"
                  />
                  {/* <AuthCheck {this.username, this.password} /> */}

                  <Button
                    variant="dark"
                    size="ls"
                    onClick={sumbitFunc}
                  >
                    Login In
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Model;
