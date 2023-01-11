import React, {useState, useEffect} from "react";
import { Box, style} from "@mui/system";
import {Modal, Container, Row, Col} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { updateItems } from "../action/submitModelAction";
function ModelUpdate() {
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const updateModelItems = async (items, index) => {
        try {
          let response = await updateItems(items);
          if (response) {
            setSuccess(true);
            submitUpdate(index);
          }
        } catch (e) {
          setError(e.message);
        }
      };
      const submitUpdate = (e) => {
        e.preventDefault();
        setSuccess(false);
        if (id && title && body && image) {
          let items = {
            id: id,
            title: title,
            body: body,
            image: image,
          };
          updateModelItems(items);
        } else {
          setError("All fields must contain a value!");
        }
      };
    return (
        <div className="ModelUpdate">

        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="simple-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="model-Style">
            <Container>
              <Row>
           
                <Col lg={12} md={16}>
                  <div className="p-50 justify-content-center w-screen">
                    {/* <img
                      className="d-block w-40 px-50"
                      src={"bob"}
                      alt="hero"
                    /> */}
                    <div className="mb-3">

                    <h1>Title</h1>
                    <Box sw={{...style, width:200, height:150}}>
                    <input
                      type="text"
                      className="form-control mt-25"
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter Title"
                      required
                    />
                    </Box>
                    </div>

                    <div className="mb-3">

                    <h1>Body</h1>
                    <Box sw={{...style, width:200, height:40}}>
                    <input
                      type="text"
                      placeholder="Description"
                      onChange={(e) => setBody(e.target.value)}
                      className="form-control mt-25"
                      required
                    />
                    {/* <AuthCheck {this.username, this.password} /> */}
                    </Box>
                    </div>
                    <Box sx={{...style, height:100}}>

                    <Button
                      variant="dark"
                      size="ls"
                      onClick={submitUpdate}
                      disabled={!title || !body}
                    >
                      Add item
                    </Button>
                    </Box>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </div>


  );
}

export default ModelUpdate;


