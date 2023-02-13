import React from "react";
import "../styles/groups.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import jazz from "../assets/Jazz.jpg";
import hiphop from "../assets/HipHop.jpg";
import ballet from "../assets/Ballet.jpg";
import flamenko from "../assets/Flamenko.jpg";

export default function Groups() {
  const [groupList, setGroupList] = useState([
    {
      group: "היפ-הופ",
      grouplink: "HipHop",
      picture: hiphop,
    },
    {
      group: "בלט",
      grouplink: "Ballet",
      picture: ballet,
    },
    {
      group: "פלמנקו",
      grouplink: "Flamenko",
      picture: flamenko,
    },
    {
      group: "ג'אז",
      grouplink: "Jazz",
      picture: jazz,
    },
  ]);
  return (
    <React.Fragment>
      <body>
        <div className="cardsContainer">
          <div className="description">
            <article>אלו הקבוצות ריקוד שלנו</article>
          </div>
          <div className="imgContainer">
            {groupList.map((g) => (
              <Link to={`${g.grouplink}`}>
                <img className="groupImg" src={`${g.picture}`} />
                <div className="overlay">
                  <div className="text">{g.group}</div>
                </div>
              </Link>
            ))}
            ;
          </div>
        </div>
      </body>
    </React.Fragment>
  );
}
