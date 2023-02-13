import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HipHop() {
  const [hipHopGroup, sethipHopGroup] = useState([
    {
      group: "וויב א-ג",
      grouplink: "HipHopAC",
    },
    {
      group: "סנאפ ד-ו",
      grouplink: "HipHopDF",
    },
    {
      group: "סייקל ז-ט",
      grouplink: "HipHopGI",
    },
    {
      group: "ג'אמפ י-יב",
      grouplink: "HipHopJM",
    },
  ]);
  return (
    <React.Fragment>
      <body>
        {hipHopGroup.map((g) => (
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
