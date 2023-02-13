import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../styles/profile.css";
import AddingEvent from "./AddingEvent";
import AddingUser from "./AddingUser";
import SideBarProfile from "./sideBarProfile";
import EditingUser from "./EditingUser";
import Chat from "./Chat";
import ChatRoom from "./ChatRoom";
import StudentTable from "./StudentTable";

function Profile() {
  return (
    <React.Fragment>
      <body className="body">
        <div className="sidebar">
          <SideBarProfile />
        </div>
        <div className="container">
          <Routes>
            <Route path="AddingUser" element={<AddingUser />} />
            <Route path="AddingEvent" element={<AddingEvent />} />
            <Route path="EditingUser" element={<EditingUser />} />
            <Route path="ChatRoom" element={<ChatRoom />} />
            <Route path="Chat" element={<Chat />} />
            <Route path="Users" element={<StudentTable />} />
          </Routes>
        </div>
      </body>
    </React.Fragment>
  );
}

export default Profile;
