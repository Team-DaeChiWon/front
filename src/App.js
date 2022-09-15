import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./login/Login.js";
import Register from "./login/Register.js";
import Header from "./Header.js";
import Main from "./main/Main.js";
import Profile from "./profile/Profile.js";
import Writing from "./writing/Writing.js";
import Post from "./post/Post.js";
import EducationPlan from "./educationplan/EducationPlan.jsx";
import Notebook from "./notice_notebook/Notebook.js";
import WriteNotebook from "./notice_notebook/WriteNotebook.js";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/post" element={<Post />} />
        <Route path="/educationplan" element={<EducationPlan />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/writenotebook" element={<WriteNotebook />} />
      </Routes>
    </div>
  );
}

export default App;
