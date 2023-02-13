import React from "react";
import "../styles/competitions.css";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import axios from "axios";

export default function Competitions() {
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState([]);

  useEffect(
    () => async () => {
      getallevents();
    },
    []
  );

  async function getallevents() {
    const result = await axios.get("http://localhost:3500/api/events");
    console.log(result.data);
    setEvent(result.data);
  }

  const handleDateClick = () => {
    alert(" date is clicked");
  };

  return (
    <React.Fragment>
      <div className="calendarContainer">
        <h1 className="title">התחרויות שלנו</h1>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventColor="orange"
          events={
            event.map((ev) => ({
              title: ev.title,
              start: ev.start,
              end: ev.end,
              // display: "background",
              // textColor: "black",
              // className: "calText",
            }))

            //   [
            //   {
            //     title: "תחרות בלט קבוצת לירי",
            //     start: "2023-02-02",
            //     end: "2023-02-04",
            //     display: "background",
            //     textColor: "black",
            //     className: "calText",
            //   },
            // ]
          }
          dateClick={handleDateClick}
        />
      </div>
    </React.Fragment>
  );
}
