import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import "./CallenderContent.css";
function CallenderContent() {

    return (
        <div className="CallenderContainer">
            
           
            <div className="CallenderRow">
             
                <div className="CallenderWrapper">
                <h2> Your Holiday Dates</h2>
                    <FullCalendar
                      plugins={[dayGridPlugin]}
                      initialView="dayGridMonth"
                    />
                </div>
            </div>
        </div>
    );
    
} 
export default CallenderContent;