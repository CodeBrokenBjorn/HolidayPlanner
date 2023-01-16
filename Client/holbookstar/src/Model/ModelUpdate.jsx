import React, { useState, useEffect } from "react";
import "./ModelUpdate.css";
import { Box, style } from "@mui/system";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { retrieveLocationDate } from "../action/submitDate";
import { retrieveAllItems, updateItems } from "../action/submitModelAction";
import { imageToUrl } from "../utilities/utility";
import { Grid, TextField, CardContent } from "@mui/material";
function ModelUpdate() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookPlanQuery, setBookPlanQuery] = useState([]);
  const [eventDaterQuery, setEventDaterQuery] = useState([]);
  const [refreash, setRefresh] = useState(true);
  const[destination, setDestination] = useState("");
  const[startDate, setStartDate] = useState("");
  const[endDate, setEndDate] = useState("");
  const[amount, setAmount] = useState(0);
  const[bookPlan_id , setBookPlan_id] = useState(0);
  const [error, setError] = useState("");
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (refreash) {
      retrieveLocationDate().then((items) => {
        const retrieveEvent = items.map((data) => ({
          id: data.id,
          Destination: data.destination,
          StartDate: data.startDate,
          EndDate: data.endDate,
          Amount: data.amount,
          bookPlan_id: data.bookPlan_id,
        }));
        setEventDaterQuery(retrieveEvent);
        console.log(eventDaterQuery[destination]);
      });
      retrieveAllItems().then((bookItems) => {
        const retrieveBookEvent = bookItems.map((data) => ({
          id: data.id,
          title: data.title,
          body: data.body,
          image: data.image,
        }));
        setBookPlanQuery(retrieveBookEvent);
      });
      setRefresh(false);
    }
  }, [refreash]);

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
    if (
      id &&
      title &&
      body &&
      image &&
      id&&
      destination &&
      startDate &&
      endDate &&
      amount &&
      bookPlan_id
    ) {
      let items = {
        id: id,
        title: title,
        body: body,
        image: image,
      };

      let eventDater = {
        id: id,
        Destination: destination,
        StartDate: startDate,
        EndDate: endDate,
        Amount: amount,
        bookPlan_id: bookPlan_id,
      };

      updateModelItems(items, eventDater);
    } else {
      setError("All fields must contain a value!");
    }
  };
  
  return (
    <div className="ModelUpdate">
      <div className="justify-content-center p-2">
        <Button
          variant="dark"
          color="success"
          size="sm"
          onClick={() => setShow(true)}
        >
          Update Date
        </Button>
      </div>

      <Modal
        className="Modal-Body"
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="simple-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Card</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CardContent>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Grid xs={6} sm={6} item>
                <img
                  className="d-block"
                  src={imageToUrl(eventDaterQuery)}
                  alt="Card Images"
                  onError={(e) => {
                    e.target.src = "localhost";
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Grid xs={6} sm={6} item>
                <h1>Destination</h1>
                <TextField
                  label="Destination"
                  variant="outlined"
                  defaultValue={eventDaterQuery[destination]}
                  onChange={(e) => setDestination(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid xs={6} sm={6} item>
                <h1>Start Date</h1>
                <input
                  required
                  type="date"
                  defaultValue={eventDaterQuery.startDate}
                  fullWidth
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid xs={6} sm={6} item>
                <h1>End Date</h1>
                <input
                  required
                  type="date"
                  defaultValue={eventDaterQuery.startDate}
                  fullWidth
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid xs={6} sm={6} item>
                <h1>Amount</h1>
                <TextField
                  label="Message"
                  multiline
                  defaultValue={eventDaterQuery.endDate}
                  onChange={(e) => setAmount(e.target.value)}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={8}
            >
              <Grid xs={9} sm={6} item>
                <Button
                  variant="dark"
                  size="ls"
                  onClick={submitUpdate}
                  disabled={!title || !body}
                >
                  Update Button
                </Button>
        
              </Grid>
            </Grid>
          </CardContent>
 
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModelUpdate;
