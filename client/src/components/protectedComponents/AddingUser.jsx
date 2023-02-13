import React from "react";
import { useState } from "react";
import "../../styles/addingUser.css";
import axios from "axios";
import jwtDecode from "jwt-decode";

function AddingUser() {
  const [data, setData] = useState([]);

  let token = localStorage.getItem("x-auth-token");
  let id;
  console.log(token);
  if (token) {
    const { _id } = jwtDecode(token);
    console.log({ _id });
    id = _id;
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    console.log(id);
    const resulte = await axios.post(
      `http://localhost:3500/api/users/${id}`,
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
          <label>שם פרטי</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          ></input>
          <br></br>
          <label>שם משפחה</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          ></input>
          <br></br>
          <label>אימייל</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          ></input>
          <br></br>
          <label>מספר טלפון</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
          ></input>
          <br></br>
          <label>תאריך לידה</label>
          <input
            type="date"
            name="dateOfBirth"
            onChange={(e) => setData({ ...data, dateOfBirth: e.target.value })}
          ></input>
          <br></br>
          <label>האם מורה</label>
          <input
            type="checkbox"
            name="isTeacher"
            onChange={(e) => {
              if (e.target.value === "on") {
                setData({ ...data, isTeacher: true });
              } else setData({ ...data, isTeacher: false });
            }}
          ></input>
          <br></br>

          <button type="submit" className="btn">
            הכנס משתמש
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddingUser;
