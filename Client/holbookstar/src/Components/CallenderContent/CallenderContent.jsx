import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CallenderContent.css";
import {
  retrieveLocationDate,
  deleteLocationDate,
} from "../../action/submitDate";
function CallenderContent() {
  const [locationQuery, setLocationQuery] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [id, setId] = useState(0);
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
  const handleEventDelete = async (id) => {
    try {
      console.log(id);
      await deleteLocationDate(id);
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
        start: data.Date,
        end: data.EndDate,
        destination: data.Amount,
        // description: data.Destination, need grab from other notes
    }));
    setLocationQuery(retrieveEvent);
   
      
      console.log(locationQuery);
      
    });
  }, []);

  const CallenderQuery = {
    plugins: [dayGridPlugin, interactionPlugin],
    select: handleCalender,
    events: locationQuery,
    eventDrop: handleEventDelete,
    eventResize: handleEventUpdate,
    selectable: true,

    selectable: (id) => {
      return id.getDay() === 0 || id.getDay() === 6;
    },
  };
  return (
    <div className="CallenderContainer">
      <div className="CallenderButton">
        {selectedDate ? (
          <button onClick={handleEventDelete(id)}>Delete Selected Date</button>
        ) : null}
      </div>

      <div className="CallenderRow">
        <div className="CallenderWrapper">
          <h2> Your Holiday Dates</h2>
          <FullCalendar height="700px" {...CallenderQuery} />
        </div>
      </div>
    </div>
  );
}
export default CallenderContent;
