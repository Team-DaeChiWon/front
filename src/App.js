import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./login/Login.js";
import Register from "./login/Register.js";
import Header from "./Header.js";
import Main from "./main/Main.js";
import Profile from "./profile/Profile.js";
import Writing from "./writing/Writing.js";
import Share from "./share/Share.js";
import EducationPlan from "./educationplan/EducationPlan.jsx";

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
        <Route path="/share" element={<Share />} />
        <Route path="/educationplan" element={<EducationPlan />} />
      </Routes>
    </div>
  );
}

export default App;
