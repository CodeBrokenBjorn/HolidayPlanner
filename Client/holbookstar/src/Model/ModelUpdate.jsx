import React, { useState, useEffect } from "react";
import { Box, style } from "@mui/system";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { retrieveLocationDate } from "../action/submitDate";
import { retrieveAllItems, updateItems } from "../action/submitModelAction";
import { imageToUrl } from "../utilities/utility";

function ModelUpdate() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookPlanQuery, setBookPlanQuery] = useState([]);
  const [eventDaterQuery, setEventDaterQuery] = useState([]);
  const[refreash, setRefresh] = useState(true);
  const[bookPlan_id, setBookPlan_id] = useState(0);
  const [destination, setDestination] = ("");
  const [start, setStart] = ("");
  const [amount, setAmount] = ("");
  const [end, setEnd] = ("");
  const [error, setError] = useState('');
  const [bookId, setBookId] = useState(0);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);


  useEffect(() => {
    if (refreash)
    {
      retrieveLocationDate().then((items) => {
        const retrieveEvent = items.map((data) => ({
          id: data.id,
          destination: data.destination,
          start: data.start,
          end: data.end,
          amount: data.amount,
          bookPlan_id: data.bookPlan_id
        }));
        setEventDaterQuery(retrieveEvent);
      })
      retrieveAllItems().then((bookItems) => {
        const retrieveBookEvent = bookItems.map((data) => ({
          id: data.id,
          title: data.title,
          body: data.body,
          image: data.image
        }));
        setBookPlanQuery(retrieveBookEvent);
      })
      setRefresh(false);
    }

  }, [refreash])

  const updateModelItems = async (items) => {
    try {
      let response = await updateItems(items);
      if (response) {
        setSuccess(true);
        setRefresh(true);
      }
    } catch (e) {
      setError(e.message);
    }
  };
  const submitUpdate = (e) => {
    e.preventDefault();
    setSuccess(false);
    if (id && title && body && image && bookId && destination && start && end && amount && bookPlan_id) {
      let items = {
        id: id,
        title: title,
        body: body,
        image: image,
      };

      let eventDater = {
        id: id,
        destination: destination,
        start: start,
        end: end,
        amount: amount,
        bookPlan_id: bookPlan_id,
      };

      updateModelItems(items, eventDater);
    }


    else {
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
          <Modal.Title>Update Card
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="model-Style">
            <Container>
              <Row>

                <Col lg={12} md={16}>
                  <div className="p-50 justify-content-center w-screen">
                    <img
                      className="d-block w-40 px-50"
                      src={imageToUrl(bookPlanQuery.image)}
                      alt="hero"
                      onError={(e) => {e.target.src = 'localhost'}}
                    />
                    <div className="mb-3">
                      <h1>Callendar Event</h1>

                      <h1>Title</h1>
                      <Box sw={{ ...style, width: 200, height: 150 }}>
                        <input
                          type="text"
                          className="form-control mt-25"
                          defaultValue={bookPlanQuery.title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Enter Title"
                          required
                        />
                      </Box>
                    </div>

                    <div className="mb-3">

                      <h1>Body</h1>
                      <Box sw={{ ...style, width: 200, height: 40 }}>
                        <input
                          type="text"
                          placeholder="Description"
                          onChange={(e) => setBody(e.target.value)}
                          className="form-control mt-25"
                          required
                        />
                      </Box>
                    </div>
                    <div className="mb-3">

                      <h1>Body</h1>
                      <Box sw={{ ...style, width: 200, height: 40 }}>
                        <input
                          type="text"
                          placeholder="Description"
                          onChange={(e) => setBody(e.target.value)}
                          className="form-control mt-25"
                          required
                        />
                      </Box>
                    </div>
                    <div className="mb-3">

                      <h1>Body</h1>
                      <Box sw={{ ...style, width: 200, height: 40 }}>
                        <input
                          type="text"
                          placeholder="Description"
                          onChange={(e) => setBody(e.target.value)}
                          className="form-control mt-25"
                          required
                        />
                      </Box>
                    </div>
                    <div className="mb-3">

                      <h1>Body</h1>
                      <Box sw={{ ...style, width: 200, height: 40 }}>
                        <input
                          type="text"
                          placeholder="Description"
                          onChange={(e) => setBody(e.target.value)}
                          className="form-control mt-25"
                          required
                        />

                      </Box>
                    </div>
                    <Box sx={{ ...style, height: 100 }}>

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


