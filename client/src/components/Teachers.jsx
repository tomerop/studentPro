import React from "react";
import "../styles/teachers.css";
import pic1 from "../assets/teacher1.jpg";
import pic2 from "../assets/teacher2.jpg";
import pic3 from "../assets/teacher3.jpg";
import pic4 from "../assets/teacher4.jpg";

export default function Teachers() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="con1">
          <img className="tab1" src={pic1} alt="" />
          <article>מעיין - מורה לג'אז ופלמנקו לגילאים 10 עד 18</article>
        </div>
        <div className="con1">
          <img className="tab2" src={pic2} alt="" />
        </div>
        <div className="con1">
          <img className="tab3" src={pic3} alt="" />
        </div>
        <div className="con1">
          <img className="tab4" src={pic4} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}
