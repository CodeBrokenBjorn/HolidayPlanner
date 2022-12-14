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
import { Grid, item, unstable_composeClasses } from "@mui/material";
import "./DisplayGrid.css";
import wallpaper2 from "../../image/wallpaper2.png";
import { TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";

function DisplayGrid() {
  const BACKEND_PATH = "https://localhost:8900";
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
    /*     setCards([...cards, newCard]);
    setStuff([...cards, newCard]);
    userSave().then(() => {
      setTitle("");
      setBody("");
    }); */

    setCards([...cards, newCard]);
    postNewCard(newCard);

    setTitle("");
    setBody("");

    //don't need it now
    //
    // setTitle("");
    //setBody("");
  };

  function postNewCard(newCard) {
    if (!newCard) return;

    return axios
      .post(`${BACKEND_PATH}/useBook`, { data: JSON.stringify(newCard) })
      .then((response) => response)
      .catch((error) => console.error(error));
  }

  const userSave = async () => {
    const checkIfContentExist = () => !!localStorage.getItem("cards");
    console.log("Test");

    if (checkIfContentExist) {
      const localStorageUser = localStorage.getItem("cards");
      return setCards(localStorageUser);
    }
    return axios
      .post(`${BACKEND_PATH}/useBook`, { title, body })
      .then((response) => {
        if (response.data && response.data.accessToken) {
          localStorage.setItem("cards", response.data);
          cards(response.data);
        } else {
          throw Error("no access token");
        }
      })
      .catch((err) => console.warn(err));
  };

  const deleteCard = (index) => {
    const newCards = [...cards.slice(0, index), ...cards.slice(index + 1)];
    setCards(newCards);
  };

  return (
    <Container fluid="md">
      <div className="mb-2">
        <div className="md-2 p-2">
          <div className="p-2">
            <Stack direction="row" justifyContent="end">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing>
                  <Grid item xs="auto">
                    <item>
                      <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                    </item>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type="text"
                      onChange={(e) => setBody(e.target.value)}
                      value={body}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <button onClick={addNewCard} disabled={!title || !body}>
                      Add Card
                    </button>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
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
                        
          <div className="d-flex flex-row md-5">

          {cards.map(({ card }, index) => {
            const { title, body, list, images } = card;

            return (
              
                <div className="p-5">
                  <Container fluid="md">
                    <Row className="justify-content-md-center">
                      <Col xs lg="6">
                        <Card>
                          {images.map((image) => (
                            <Card.Img variant="left" src={image} />
                          ))}
                          <Card.Body>
                            <Card.Title>
                              {title}{" "}
                              <button onClick={() => deleteCard(index)}>
                                DELETE
                              </button>{" "}
                            </Card.Title>
                            <Card.Text>{body}</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            {list.map(({ text: listItem }) => (
                              <ListGroup.Item> {listItem} </ListGroup.Item>
                            ))}
                          </ListGroup>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
              
            );
          })}

          </div>
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
        </div>
      </div>
    </Container>
  );
}
export default DisplayGrid;
