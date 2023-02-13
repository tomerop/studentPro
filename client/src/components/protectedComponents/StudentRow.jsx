import { useState, useEffect } from "react";
const StudentRow = (props) => {
  const { firstName, lastName, email, phoneNumber, dateOfBirth, isTeacher } =
    props;
  //   let x = new Date();
  //   x.getVarDate;
  return (
    <div>
      <tr id="row1" style={{ width: 100 + "%" }}>
        <th className="me-5" style={{ width: 200 }}>
          {dateOfBirth.slice(8, 10) +
            "/" +
            dateOfBirth.slice(5, 7) +
            "/" +
            dateOfBirth.slice(0, 4)}
        </th>
        <th className="me-5" style={{ width: 200 }}>
          {email}
        </th>
        <th className="me-5" style={{ width: 200 }}>
          {phoneNumber}
        </th>
        <th className="me-5" style={{ width: 200 }}>
          {lastName}
        </th>
        <th className="ms-5" style={{ width: 200 }}>
          {firstName}
        </th>
      </tr>
    </div>
  );
};

export default StudentRow;
