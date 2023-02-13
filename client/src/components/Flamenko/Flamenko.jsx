import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Flamenko() {
  const [flamenkoGroup, setflamenkoGroup] = useState([
    {
      group: "פיטוס א-ג",
      grouplink: "FlamenkoAC",
    },
    {
      group: "ריטמו ד-ו",
      grouplink: "FlamenkoDF",
    },
    {
      group: "טיימפו ז-ט",
      grouplink: "FlamenkoGI",
    },
    {
      group: "קונטרה י-יב",
      grouplink: "FlamenkoJM",
    },
  ]);
  return (
    <React.Fragment>
      <body>
        {flamenkoGroup.map((g) => (
          <Link to={`${g.grouplink}`}>
            <button key={g.grouplink} className="groupTab">
              {g.group}
            </button>
          </Link>
        ))}
      </body>
    </React.Fragment>
  );
}
