import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Jazz() {
  const [jazzGroup, setjazzGroup] = useState([
    {
      group: "לירי ד-ו",
      grouplink: "JazzDF",
    },
    {
      group: "לירי ז-ט",
      grouplink: "JazzGI",
    },
    {
      group: "אקרו י-יב",
      grouplink: "JazzJM",
    },
  ]);
  return (
    <React.Fragment>
      <body>
        {jazzGroup.map((g) => (
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
