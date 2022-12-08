import React, { useState } from "react";
import { Row, Col, Container, ListGroup, Badge, Card } from "react-bootstrap";
import "./grid.css";
import wallpaper2 from "../../image/wallpaper2.png";
import { TextField } from "@mui/material";
function Grid() {
  const [cards, setCards] = useState([
    {
      card: {
        id: 1,
        title: "lorem lipsum",
        images: [wallpaper2],
        body: "pandas are cool, but red pandas are cooler",
        list: [
          { text: "reviews" },
          { text: "stuff to add" },
          { text: "Stuff" },
        ],
      },
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewCard = () => {
    const newCard = {
      card: {
        id: 1,
        title: title,
        images: [wallpaper2],
        body: body,
        list: [
          { text: "reviews" },
          { text: "stuff to add" },
          { text: "Stuff" },
        ],
      },
    };
    setCards([...cards, newCard]);
    setTitle("");
    setBody("");
  }

  const deleteCard = (index) => {
    const newCards = [...cards.slice(0, index), ...cards.slice(index + 1)];
    setCards(newCards);
  }

  return (
    <Container fluid="md">
      <div className="d-flex flex-row mb-2">
        <div className="md-2 p-2">
          <Row justify-content-md-center>
            <Col xs lg="2">
              <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
              <input type="text" onChange={(e) => setBody(e.target.value)} value={body} />
              <button onClick={addNewCard} disabled={!title || !body}>Add Card</button>
              <div className="search">
                <TextField
                  id="outline-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                />
              </div>
              {/* <ListGroup as = "ol" numbered>
                            <div className="d-flex flex-row bd-highlight mb-3">



                            <ListGroup.Item
                            as = "li"
                            className=" d-flex justify-content-between align-items-start"
                            >
                                <img className="d-block w-100" src={wallpaper2} alt="Bob" />
                            </ListGroup.Item>

                            <ListGroup.Item
                            as = "li"
                            className="d-flex justify-content-between align-items-start">   
                                
                                
                                
                            <div className=" ms-5 me-auto p-8">
                                <div className="fw-bold mt-8">
                                    First add version to display simple image
                                </div>
                                
                                
                                
                                
                                //API key for Hol stuff : f2055714-6e32-489b-a18e-40b79e38e192
                                
                                </div> 
                            </ListGroup.Item>
                            </div>
                        </ListGroup> */}

              {cards.map(({ card }, index) => {
                const { title, body, list, images } = card;

                return (
                  <Card>
                    {images.map((image) => (
                      <Card.Img variant="left" src={image} />
                    ))}
                    <Card.Body>
                      <Card.Title>{title} <button onClick={() => deleteCard(index)}>DELETE</button> </Card.Title>
                      <Card.Text>{body}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      {list.map(({text: listItem}) => (
                        <ListGroup.Item> {listItem} </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card>
                );
              })}

              {/*               <Card style={{ width: "18rem" }}>
                <Card.Img variant="left" src={wallpaper2} />
                <Card.Body>
                  <Card.Title>Title goes here</Card.Title>
                  <Card.Text>Text example</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Reviews</ListGroup.Item>
                  <ListGroup.Item>Stuff to add</ListGroup.Item>
                  <ListGroup.Item>Stuff</ListGroup.Item>
                </ListGroup>
              </Card> */}
            </Col>
            <Col xs lg="2">
              Test content stuff goes here
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
export default Grid;
