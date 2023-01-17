import React, { useEffect, useState } from "react";
import placeholderError from "../../image/placeholderError.jpg";
import {
  Row,
  Col,
  Container,
  Card,
  Carousel,
  Form,
  Button,
  Modal,
  Alert,
} from "react-bootstrap";
import "./DisplayGrid.css";
import {
  retrieveAllItems,
  deleteItems,
  addNewItems,
} from "../../action/submitModelAction";
import { useRef } from "react";

function DisplayGrid() {
  const [queryItems, setQueryItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [show, setShow] = useState(false);
  const [retrieveContent, setRetrieveContent] = useState(true);
  const [succes, setSuccess] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [images, setImages] = useState(null);
  const carousel = useRef();

  const submitModelData = async (items) => {
    try {
      let response = await addNewItems(items);
      if (response) {
        setSuccess(true);
      }
    } catch (e) {
      setError(e.message);
    }
  };
  const submitModelItems = (e) => {
    setShow(false);
    e.preventDefault();
    setSuccess(false);
    if (title && body) {
      let items = {
        id: id,
        title: title,
        body: body,
        images: images,
      };
      console.log("bob");
      submitModelData(items);
      setRetrieveContent(true);
    } else {
      setError("All fields must contain a value!");
    }
  };
  const handleModel = () => {
    setShow(true);
  };
  function handleDelete(selected) {
    setId(selected);
    setRetrieveContent(true);
    let temp = queryItems.filter((item) => item.id !== selected);
    setQueryItems(temp);
    setCurrentSlide(currentSlide - 1);

    deleteItems(selected);
  }

  const handleSelect = (selectedIndex, e) => {
    setCurrentSlide(selectedIndex);
    setRetrieveContent(false);
  };

  useEffect(() => {
    async function collectData() {
      console.log(
        "If able to get paid for every little react mess up: seriously I will be rich...."
      );
      const data = await retrieveAllItems();
      setQueryItems(data);
      setRetrieveContent(false);
    }
    if (retrieveContent) {
      collectData();
      setRetrieveContent(false);
    }
  }, [retrieveContent]);

  return (
    <div className="DisplayGrid">
      <h1>Add your Amazing Holiday Plans</h1>
      <button onClick={handleModel}>Add Holiday</button>
      <Container fluid="md">
        <Carousel
          ref={carousel}
          activeIndex={currentSlide}
          onSelect={handleSelect}
          className="carousel-design"
        >
          {queryItems.map(({ id, title, body, images }, index) => {
            if (queryItems.length <= 0) {
              return (
                <Alert variant="danger">
                  <Alert.Heading> An Error as Occurred</Alert.Heading>
                  <p>
                    {error !== null
                      ? error
                      : "You currently have no Card available in your website please contact admin so this issue would be resolved"}
                  </p>
                </Alert>
              );
            } else {
              return (
                <Carousel.Item key={index}>
                  <div className="p-15">
                    <Container fluid="md">
                      <Row className="justify-content-md-center">
                        <Col lg="12">
                          <Card lg={{ maxWidth: 325 }}>
                            <Card.Img
                              variant="left"
                              src={images}
                              alt="Broken Image of camera"
                              onError={(e) => {
                                e.target.src = placeholderError;
                              }}
                            />
                            <Card.Body>
                              <Card.Title>{title}</Card.Title>
                              <Card.Text>{body}</Card.Text>
                              <button onClick={(e) => handleDelete(id, index)}>
                                DELETE
                              </button>{" "}
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Carousel.Item>
              );
            }
          })}
        </Carousel>
      </Container>
      <div className="modelWithings">
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
          <form id="editmodel" className="w-full max-w-sm">
            <div className="model-Style">
 
                <div className="p-50 justify-content-center w-screen">
                  <Form.Control
                    type="file"
                    onChange={(e) => setImages(e.target.src)}
                    required
                  />

                  <div className="mb-3">
                    <h1>Title</h1>

                    <input
                      type="text"
                      className="form-control mt-25"
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter Title"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <h1>Body</h1>
                    <input
                      type="text"
                      placeholder="Description"
                      onChange={(e) => setBody(e.target.value)}
                      className="form-control mt-25"
                      required
                    />
                  </div>

                  <Button variant="dark" size="ls" onClick={submitModelItems}>
                    Add item
                  </Button>
                </div>

            </div>
          </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
export default DisplayGrid;
