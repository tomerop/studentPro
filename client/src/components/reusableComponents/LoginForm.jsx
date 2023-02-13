import React from "react";
import "../../styles/loginForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const LoginForm = ({ isShowLogin, setIsShowLogIn }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const resulte = await axios.post("http://localhost:3500/api/logIn", data);
    localStorage.setItem("x-auth-token", resulte.headers["x-auth-token"]);
    setIsShowLogIn(!isShowLogin);
    navigate("/Profile");
  };

  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form
            onSubmit={(e) => {
              handelSubmit(e);
            }}
          >
            <button onClick={`${isShowLogin ? "active" : ""} show`}>X</button>
            <h1 className="login-text">התחבר</h1>
            <label>אי-מייל</label>
            <br></br>
            <input
              type="text"
              name="email"
              className="login-box"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <br></br>
            <label>מספר טלפון</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box"
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
            />
            <br></br>
            <input
              type="submit"
              value="התחבר"
              className="btn login-btn"
              onClick={handelSubmit()}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
