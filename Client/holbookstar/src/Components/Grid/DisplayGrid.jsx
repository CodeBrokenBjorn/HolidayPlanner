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
import { Grid } from "@mui/material";
import "./DisplayGrid.css";
import wallpaper2 from "../../image/wallpaper2.png";
import { TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import ModelDisplay from "../../Model/ModelDisplay";
function DisplayGrid() {
  const BACKEND_PATH = "http://localhost:8900/";
  const [stuff, setStuff] = useState([]);

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
  const [id, setId] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateBody, setUpdateBody] = useState("");
  const [lastID, setLastID] = useState(0);
  const addNewCard = (event, counter) => {
    event.preventDefault();
    if(!title || !body) {
      return;
    }

    const newCard = {
      card: {
        id: counter,
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
    //cards and newlink stored at one
    setCards([...cards, newCard]);
    console.log("Bob");
    postNewCard(newCard, counter);
    setId("");
    setTitle("");
    setBody("");

    //don't need it now
    //
    // setTitle("");
    //setBody("");
  };

  function postNewCard(newCard) {
    
    if (!newCard) return;
    const addCard = {
      id: null,
      text: newCard,
    };

    const storedContent = JSON.stringify(localStorage.setItem("cards" , cards)) || [];
    console.log(storedContent);

    const updateCards = [...storedContent, addCard];
    return axios
      .post(`${BACKEND_PATH}useBook`, { data: JSON.stringify(updateCards) })
      .then((response) => storedContent.response)
      .catch((error) => console.error(error));
  };

  // const userSave = async () => {
  //   const checkIfContentExist = () => !!localStorage.getItem("cards");
  //   console.log("Test");

  //   if (checkIfContentExist) {
  //     const localStorageUser = localStorage.getItem("cards");
  //     debugger;
  //     return setStuff(localStorageUser);
  //   }
  //   return axios
  //     .post(`${BACKEND_PATH}/useBook`, { title, body })
  //     .then((response) => {
  //       if (response.data && response.data.accessToken) {
  //         storedContent = localStorage.setItem("stuff", response.data);
  //         stuff(response.data);
  //       } else {
  //         throw Error("no access token");
  //       }
  //     })
  //     .catch((err) => console.warn(err));
  // };

  const deleteCard = (index) => {
    const newCards = [...cards.slice(0, index), ...cards.slice(index + 1)];
    return axios
      .delete(`${BACKEND_PATH}useBook`, { id, title, body })
      .then((response) => {
        window.localStorage.delete("cards", response.data);
        setCards(newCards);
        window.location.reload();
      })
      .catch((err) => console.warn(err));
  };

  const updateCard = (newCard, index) => {
    //I have no  idea what me is doing
    // const findCard = cards.findIndex((index) => index.id === (index + 1));
    // const updateCards = [...cards];
    //   updateCards[findCard] = {
    //     ...cards[findCard],
    //     title: updateTitle,
    //     body: updateBody,
    //   };
    // setCards(updateCards);]
    let newCards = cards;
    newCards[index] = newCards;
    cards = newCards;

    // const findCard = cards.map((card, i)=> {
    //   if(i === index) {
    //     return {
    //       ...card,
    //       title: updateTitle,
    //       body: updateBody,
    //     };
    //   }
    //   return card;
    // });
    // console.log(findCard);
    // setCards(findCard);
  };

  useEffect(() => {
    const storeCards = window.localStorage.getItem(
      "cards",
      JSON.stringify(cards)
    );
    if (storeCards) {
      setStuff(storeCards);
    }

    localStorage.getItem("cards", cards);
    console.log(cards);
    // return axios
    // .get(`${BACKEND_PATH}useBook`, { data: JSON.stringify(cards) })
    // .then((response) => storedContent.response)
    // .catch((error) => console.error(error));
  }, [cards]);

  return (
    <Container fluid="md">
      <div className="mb-2">
        <div className="md-2 p-2">
          <div className="p-2">
            <Stack direction="row" justifyContent="end">
              <Box sx={{ flexGrow: 1 }}>
                <Grid item xs="auto">
                  <item>
                    <input
                      type="text"
                      onChange={(e) => setUpdateTitle(e.target.value)}
                      value={updateTitle}
                    />
                  </item>
                </Grid>
                <Grid item xs={6}>
                  <input
                    type="text"
                    onChange={(e) => setUpdateBody(e.target.value)}
                    value={updateBody}
                  />
                </Grid>
                <Grid item xs={6}>
                  <button
                    onClick={updateBody}
                    disabled={!updateTitle || !updateBody}
                  >
                    Update Card
                  </button>
                </Grid>
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
          {/* Move to new page */}
          {/* <div className="search">
            <TextField
              id="outline-basic"
              variant="outlined"
              fullWidth
              label="Search"
            />
          </div> */}

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
          <Carousel className="carousel-design" interval={6000}>
            {cards.map(({ card }, index) => {
              const { title, body, list, images } = card;

              return (
                <Carousel.Item>
                  <div className="p-5">
                    <Container fluid="md">
                      <Row className="justify-content-md-center">
                        <Col xs lg="6">
                          <Card>
                            {images.map((image) => (
                              <Card.Img variant="left" src={image} />
                            ))}
                            <Card.Body>
                              <Card.Title>{title} </Card.Title>
                              <Card.Text>{body}</Card.Text>
                              <button onClick={() => deleteCard(index)}>
                                DELETE
                              </button>{" "}
                              <button onClick={updateCard}>UPDATE</button>{" "}
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
                </Carousel.Item>
              );
            })}
          </Carousel>
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