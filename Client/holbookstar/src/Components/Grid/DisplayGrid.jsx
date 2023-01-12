import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  ListGroup,
  Badge,
  Card,
  Carousel,
  Form,
} from "react-bootstrap";
import "./DisplayGrid.css";

import {
  updateItems,
  retrieveAllItems,
  deleteItems,
} from "../../action/submitModelAction";
import ModelAdd from "../../Model/ModelAdd";
import ModelUpdate from "../../Model/ModelUpdate";
import { useRef } from "react";
function DisplayGrid() {
  const[retrieveContent, setRetrieveContent] = useState(true);
  const [countThirunning, setCountThirunning] = useState();
  const [queryItems, setQueryItems] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carousel = useRef();

  function openModal (){
    setModalOpen(true);
  }

  function handleDelete(selected) {
    console.log("fucker")
    setId(selected)
    setRetrieveContent(true)
    let temp = queryItems.filter(item => item.id !== selected);
    setQueryItems(temp);
    setCurrentSlide(currentSlide - 1);

    deleteItems(selected)
  }

  const handleSelect = (selectedIndex, e) => {
    setCurrentSlide(selectedIndex);
  }

  useEffect(() => {
    async function collectData() {
      
      console.log("bob was here test");
      const data = await retrieveAllItems();
      setQueryItems(data)
      setRetrieveContent(false);

    }
    if (retrieveContent)
    {

      collectData();
    }

    
  }, [retrieveContent]);

  return (

    <div className="DisplayGrid">
      <h1>"Tx"</h1>
      <h1>{queryItems.items}</h1>
      <ModelAdd />
    <Container fluid="md">
      <Carousel ref={carousel} activeIndex={currentSlide} onSelect={handleSelect} className="carousel-design">
        {queryItems.map(({id, title, body, images }, index) => {
          return (
            <Carousel.Item key={index}>
            <h3>{title}</h3>
            //accpet = "image/png, image/jpeg " "
            <Form.Control
            type="file"
            onChange={e => setImage(e.target.file[0])}
            required/>
            
              <div className="p-15">
                <Container fluid="md">
                  <Row className="justify-content-md-center">
                    <Col lg="6">
                      <Card lg={{ maxWidth: 345 }}>
                        {ImageTrue: 
                        {images.map((image) => (
                          <Card.Img variant="left" src={image} />
                          ))}
                        }
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>{body}</Card.Text>
                           
                          <button onClick={(e) => handleDelete(id, index)}>
                            DELETE
                          </button>{" "}
                          <Card.Text>
                            <div className="stf">

                          <ModelUpdate/>
                            </div>
                          </Card.Text>
                          <h1><ModelUpdate /></h1>
                          <button onClick={openModal}>Add Update<ModelUpdate/></button>
                          {modalOpen && <ModelUpdate />}
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
    </div>
  );
}
export default DisplayGrid;
