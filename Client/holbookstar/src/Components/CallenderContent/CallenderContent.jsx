import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CallenderContent.css";
import {
  retrieveLocationDate,
  addDate,
  deleteLocationDate,
} from "../../action/submitDate";
function CallenderContent() {
  const [locationQuery, setLocationQuery] = useState([]);
  const [refreshPage, setRefreshPage] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(null);

  const [events, setEvents] = useState([]);
  const [id, setId] = useState(0);
  const[deleteItem, setDeleteItem] = useState(false);
  const[updateItem, setUpdateItem] = useState(false);
  const [selectDate, setSelectDate] = useState([]);
  const [queries, setQueries] = useState([]);
  const [destination, setDestination] = useState("");
  const [dateSelected, setdateSelected] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const handleDateSelector = (selectInfo) => {
    console.log(selectInfo);
  };
  const handleCalender = (retrieveEvent, id) => {
    console.log(id);
    setSelectedDate(id);

 
    
  };
  const handleEventDelete = async (items) => {
    try {
      console.log(items);
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
        // description: data.Destination, need grab from other notes
    }));
    console.log(retrieveEvent);
    setLocationQuery(retrieveEvent);
    setRefreshPage(false);
    });
  }, [refreshPage]);

  const CallenderQuery = {
    plugins: [dayGridPlugin, interactionPlugin],
    select: handleCalender,
    events: locationQuery,
    eventDrop: handleEventDelete,
    eventResize: handleEventUpdate,
    selectable: true,


    eventContent:(items) => {
      return(<>
        <div className="fc-event-title">{items.event.title}</div>
        <div className="fc-event-amount">{items.event.amount}</div>
        
      </>);
    },
    eventClick:(items) => {
      setSelectDate(items.event);
      
      console.log(selectDate);
      // if(updateItem == true){

      // }
    }
  };
  return (
    <div className="CallenderContainer">
      <div className="CallenderButton">
      </div>

      <div className="CallenderRow">
        <div className="CallenderWrapper">
        <button onClick={(e) => handleEventDelete(selectDate)}>Delete Selected Date</button>
          <h2> Your Holiday Dates</h2>
          <FullCalendar height="700px" {...CallenderQuery} />

        </div>
      </div>
    </div>
  );
}
export default CallenderContent;
