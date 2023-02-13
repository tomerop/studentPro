import React from "react";
import { useState } from "react";
import "../../styles/sideBarProfile.css";
import axios from "axios";
import jwtDecode from "jwt-decode";

function AddingEvent() {
  const [data, setData] = useState([]);

  let token = localStorage.getItem("x-auth-token");
  let id;
  if (token) {
    const { _id } = jwtDecode(token);
    id = _id;
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    console.log(id);
    const resulte = await axios.post(
      `http://localhost:3500/api/events/${id}`,
      data
    );
    e.target.reset();
  };
  return (
    <React.Fragment>
      <div className="container">
        <form
          className="formContainer"
          onSubmit={(e) => {
            handelSubmit(e);
          }}
        >
          <label>שם האירוע</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          ></input>
          <br></br>
          <label>תאריך התחלה</label>
          <input
            type="date"
            name="lastName"
            onChange={(e) => setData({ ...data, start: e.target.value })}
          ></input>
          <br></br>
          <label>תאריך סיום</label>
          <input
            type="date"
            name="email"
            onChange={(e) => setData({ ...data, end: e.target.value })}
          ></input>
          <br></br>
          <br></br>

          <button type="submit" className="btn">
            הוסף אירוע
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddingEvent;
