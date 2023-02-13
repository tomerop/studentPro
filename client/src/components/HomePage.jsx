import React from "react";
import NavBar from "./reusableComponents/NavBar";
import "../styles/homePage.css";
import pic1 from "../assets/IMPACT-817-Edit.jpg";
import pic2 from "../assets/IMPACT-881-Edit.jpg";
import pic3 from "../assets/IMPACT-989-Edit.jpg";
import pic4 from "../assets/IMPACT-1109-Edit.jpg";
import pic5 from "../assets/IMPACT-1280-Edit.jpg";
import pic6 from "../assets/IMPACT-1910-Edit.jpg";

function HomePage() {
  return (
    <React.Fragment>
      <body className="body">
        <div className="title">
          <span className="title-letters le-1">I</span>
          <span className="title-letters le-2">m</span>
          <span className="title-letters le-3">p</span>
          <span className="title-letters le-4">a</span>
          <span className="title-letters le-5">c</span>
          <span className="title-letters le-6">t</span>

          <span className="title-letters2 l-1">S</span>
          <span className="title-letters2 l-2">t</span>
          <span className="title-letters2 l-3">u</span>
          <span className="title-letters2 l-4">d</span>
          <span className="title-letters2 l-5">i</span>
          <span className="title-letters2 l-6">o</span>
        </div>

        <div className="tabsContainer">
          <img className="c-image img1" src={pic1} alt="" />
          <img className="c-image img2" src={pic6} alt="" />
          <img className="c-image img3" src={pic3} alt="" />
          <img className="c-image img4" src={pic4} alt="" />
          <img className="c-image img5" src={pic5} alt="" />
          <img className="c-image img6" src={pic2} alt="" />
        </div>
      </body>
    </React.Fragment>
  );
}

export default HomePage;

{
  /* <div className="bg-image img1"></div>
<div className="bg-image img2"></div>
<div className="bg-image img3"></div>
<div className="bg-image img4"></div>
<div className="bg-image img5"></div>
<div className="bg-image img6"></div> */
}
