import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Ballet() {
  const [balletGroup, setBalletGroup] = useState([
    {
      group: "בלט א-ג",
      grouplink: "BalletAC",
    },
    {
      group: "בלט ד-ה",
      grouplink: "BalletDE",
    },
    {
      group: "בלט ה-ו",
      grouplink: "BalletEF",
    },
    {
      group: "בלט ז-ט",
      grouplink: "BalletGI",
    },
    {
      group: "בלט י-יב",
      grouplink: "BalletJM",
    },
    {
      group: "פוינט",
      grouplink: "BalletPoint",
    },
  ]);
  return (
    <React.Fragment>
      <body>
        {balletGroup.map((g) => (
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
