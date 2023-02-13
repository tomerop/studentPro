import React from "react";
import "../../styles/navBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import impactlogo from "../../assets/impactlogo.png";

function NavBar({ handleLoginClick }) {
  const [tokken, setTokken] = useState();
  const [data, setData] = useState({});

  const handleClick = () => {
    let token = localStorage.getItem("token");
    setTokken(token);
    handleLoginClick();
  };
  return (
    <React.Fragment>
      <div className="navBar col-3">
        <div className="logoContainer">
          <Link to="/">
            <img className="impactlogo" src={impactlogo} />
          </Link>
        </div>

        <div className="menuContainer">
          <Link to="/About">
            <button className="button btn p-4">אודות</button>
          </Link>
          <Link to="/Teachers">
            <button className="button btn p-4">מורות</button>
          </Link>
          <Link to="/Competitions">
            <button className="button btn p-4">תחרויות</button>
          </Link>
          <Link to="/Groups">
            <button className="button btn p-4">קבוצות</button>
          </Link>
        </div>

        {tokken ? (
          <Link to="/Profile">
            <button className="button btn p-4">פרופיל</button>
          </Link>
        ) : (
          <button className="button btn p-4" onClick={handleClick}>
            {" "}
            התחבר{" "}
          </button>
        )}
      </div>
    </React.Fragment>
  );
}

export default NavBar;
