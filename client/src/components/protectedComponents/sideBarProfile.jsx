import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sideBarProfile.css";

function SideBarProfile() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="userTab">
          <Link to="AddingUser">
            <button className="btn btn-tab">הוספת משתמש</button>
          </Link>
        </div>
        <div className="userDelTab">
          <Link to="EditingUser">
            <button className="btn btn-tab">מחיקת משתמש</button>
          </Link>
        </div>
        <div className="eventTab">
          <Link to="AddingEvent">
            <button className="btn btn-tab">הוספת אירוע</button>
          </Link>
        </div>
        <div>
          <Link to="ChatRoom">
            <button className="btn btn-tab">צ'אט</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideBarProfile;
