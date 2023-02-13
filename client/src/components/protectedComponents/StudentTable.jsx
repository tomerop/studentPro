import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import StudentRow from "./StudentRow";

export default function StudentTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const startIn = (currentPage - 1) * 10;
  const endIn = startIn + 10;
  const theUsers = users.slice(startIn, endIn);
  useEffect(
    () => async () => {
      console.log("object");
      getallusers();
    },
    []
  );

  async function getallusers() {
    let token = localStorage.getItem("x-auth-token");
    let id;
    if (token) {
      const { _id } = jwtDecode(token);
      id = _id;
    }
    const result = await axios.get(`http://localhost:3500/api/users/${id}`);
    console.log(result.data);
    setUsers(result.data);
  }

  return (
    <div className="container-fluid">
      <table className="table">
        <tr>
          <th>תאריך לידה</th>
          <th>מייל</th>
          <th style={{ width: 150 }}>מספר טלפון</th>
          <th>משפחה</th>
          <th>שם פרטי</th>
        </tr>
      </table>
      <table className="table">
        <tbody>
          {theUsers.map((value) => {
            return (
              <StudentRow
                firstName={value.firstName}
                lastName={value.lastName}
                email={value.email}
                phoneNumber={value.phoneNumber}
                dateOfBirth={value.dateOfBirth}
                isTeacher={value.isTeacher}
              />
            );
          })}
        </tbody>
      </table>
      <div className="btn-group " role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        >
          -
        </button>
        <button type="button" className="btn btn-outline-primary" disabled>
          {currentPage}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            getallusers();
            if (users.length / 10 > currentPage)
              setCurrentPage(currentPage + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
