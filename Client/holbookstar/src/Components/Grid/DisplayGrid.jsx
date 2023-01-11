import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  ListGroup,
  Badge,
  Card,
  Carousel,
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
  const[retrieveContent, setRetrieveContent] = useState(false);
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

  const handleSubmit =() => {
    async function collectData() {
      
      retrieveAllItems().then((items) => {
        if (!items) {
          console.log(countThirunning + 1);
          
          
        }
        setQueryItems(items);
        //setCountThirunning([...countThirunning, newlist]);
        console.log(items);
        
      });
      
    }
    collectData();
  }
  useEffect(() => {
    async function collectData() {
      
      retrieveAllItems().then((items) => {
        setQueryItems(items);
        setRetrieveContent(false);
        
      });

    }
    collectData();
  }, [retrieveContent, queryItems.id]);

  return (

    <div className="DisplayGrid">
      <h1>"Tx"</h1>
      <h1>{queryItems.items}</h1>
      <ModelAdd />
    <Container fluid="md">
      <Carousel ref={carousel} activeIndex={currentSlide} onSelect={handleSelect} className="carousel-design">
        {queryItems.map(({id, title, body }, index) => {
          return (
            <Carousel.Item key={index}>
            <h3>{title}</h3>
              <div className="p-15">
                <Container fluid="md">
                  <Row className="justify-content-md-center">
                    <Col lg="6">
                      <Card lg={{ maxWidth: 345 }}>
                        {/* {images.map((image) => (
                          <Card.Img variant="left" src={image} />
                        ))} */}
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
