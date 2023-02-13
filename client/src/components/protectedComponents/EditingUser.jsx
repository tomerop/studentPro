import React from "react";
import { useState } from "react";
import "../../styles/addingUser.css";
import axios from "axios";
import jwtDecode from "jwt-decode";

function EditingUser() {
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
    const resulte = await axios.delete(
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
          <label>שם המשתמש</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          ></input>
          <br></br>
          <label>מספר טלפון</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
          ></input>
          <br></br>
          <br></br>

          <button type="submit" className="btn">
            מחק משתמש
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default EditingUser;
