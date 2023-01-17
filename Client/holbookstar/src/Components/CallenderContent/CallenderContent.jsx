import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CallenderContent.css";
import { Modal, Container, Row, Col, ModalDialog } from "react-bootstrap";
import ModelUpdate from "../../Model/ModelUpdate";
import { imageToUrl } from "../../utilities/utility";
import { Grid, TextField, CardContent } from "@mui/material";
import { retrieveAllItems, updateItems } from "../../action/submitModelAction";

import { Button } from "react-bootstrap";
import {
  updateEvent,
  retrieveLocationDate,
  addDate,
  deleteLocationDate,
} from "../../action/submitDate";
import { Alert } from "react-bootstrap";
function CallenderContent() {
  const [refreash, setRefresh] = useState(true);
  const[formError, setFormError] = useState(false);
  const [locationQuery, setLocationQuery] = useState([]);
  const [selectUpdate, setSelectUpdate] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);
  const[itemId , setItemId] = useState(0);
  const [selectedDate, setSelectedDate] = useState([]);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);
  const [selectDate, setSelectDate] = useState([]);
  const [queries, setQueries] = useState([]);
  const [destination, setDestination] = useState("");
  const [amount, setAmount] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleEventDelete = async (items, selectedDate) => {
    try {
      await deleteLocationDate(items.id);
      setRefreshPage(true);
      const updateEvent = await retrieveLocationDate(locationQuery);
      setEvents(updateEvent);
    } catch (error) {
      console.error(error);
    }
    setSelectedDate(null);
  };
  const handleEventUpdate = () => {};

  useEffect(() => {
    retrieveLocationDate().then((items) => {
      const retrieveEvent = items.map((data) => ({
        id: data.id,
        title: data.Destination,
        start: data.StartDate,
        end: data.EndDate,
        amount: data.Amount,
      }));
      retrieveAllItems().then((bookItems) => {
        const retrieveBookEvent = bookItems.map((data) => ({
          id: data.id,
          title: data.title,
          body: data.body,
          image: data.image,
        }));
        console.log(retrieveEvent);
        setLocationQuery(retrieveEvent);
        // setBookPlanQuery(retrieveBookEvent);
      });
    });
  }, [refreshPage]);

  const handleSubmitUpdate = async (locationQuery, itemId) => {
    console.log(itemId);
    if (itemId) {
      const updatedLocation = locationQuery.map(item => {
        if (item.id === itemId) {
          return { ...item, id : itemId ,Destination: destination, StartDate: startDate, EndDate: endDate, Amount: amount }
        } else {
          return item;
        }
      });
      setLocationQuery(updatedLocation);
      updateModelItems(updatedLocation, itemId);
      updateItems(updatedLocation).then(() => {
        setRefreshPage(true);
        setShow(false);
      });
    }
  };
  
  const updateModelItems = async (items, itemId) => {
    try {
      const response = await updateEvent(items,itemId, { Destination: destination, StartDate: startDate, EndDate: endDate, Amount: amount });
      if (response) {
        setSuccess(true);
        setRefresh(true);
      }
    } catch (e) {
      setError(e.message);
    }
  };
  const CallenderQuery = {
    plugins: [dayGridPlugin, interactionPlugin],
    events: locationQuery,
    eventDrop: handleEventDelete,
    eventResize: handleEventUpdate,
    eventContent: (items) => {
      return (
        <>
          <div className="fc-event-title">{items.event.title}</div>
        </>
      );
    },
    eventClick: (locationQuery) => {
      setSelectDate(locationQuery.event);
      setItemId(locationQuery.event.id);
      setSelectUpdate(true);
      console.log(selectDate);
    },
  };
  return (
    <div className="CallenderContainer">
      <div className="CallenderRow">
        <div className="CallenderWrapper">
          {selectUpdate && (
            <div>
              <Button
                variant="dark"
                color="success"
                size="sm"
                onClick={() => setShow(true)}
              >
                {" "}
                Edit Date
              </Button>
              <Button 
                variant="dark"
                color="success"
                size="sm"
              onClick={(e) => handleEventDelete(selectDate)}>
                Delete Selected Date
              </Button>
            </div>
          )}
          <h2> Your Holiday Dates</h2>
          <FullCalendar height="700px" {...CallenderQuery} />
        </div>
      </div>

      {locationQuery.map(({ title, start, end, amount }) => {
        if(selectDate.title === title){
          return (
          
              <Modal
                className="Modal-Body"
                size="xl"
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="simple-modal-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Update Calender</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form id="editmodel" className="w-full max-w-sm">
                    <div className="Upload Button">
                      <div className="md:flex md:items-center mb-3">
                        <div className="md:w-1/3">
                        </div>
                        <h1>Destination</h1>
                        <input
                          required
                          className="style-row"
                          id="role"
                          type="text"
                          defaultValue={title}
                          onChange={(e) => setDestination(e.target.value)}
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h1>Start Date</h1>
                        <input
                          required
                          className="style-row"
                          type="date"
                          defaultValue={start}
                          onChange={(e) => setStartDate(e.target.value)}
                          onblur={()=> {
                            if(start > end){
                              setFormError(true);
                            }
                            else {
                              setFormError(false);
                            }
                          }
                          }
                        />
                      </div>
                      {formError && <p className="error-message">Start date can't able to be greater than end date!</p>}

                      <div className="md:w-2/3">
                        <h1>End Date</h1>
                        <input
                          required
                          className="style-row"
                          type="date"
                          defaultValue={end}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>

                      <div className="md:w-2/3">
                        <h1>Amount</h1>
                        <input
                          required
                          className="style-row"
                          id="role"
                          type="text"
                          defaultValue={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        ></input>
                      </div>
                      <div className="md:w-2/3">
                        <button onClick={() => handleSubmitUpdate(locationQuery, selectDate.id)}>
                          Sumbit Change
                        </button>
                      </div>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
        
          );
        }
        
      })}
    </div>
  );
}

export default CallenderContent;