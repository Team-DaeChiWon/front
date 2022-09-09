import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./login/Login.js";
import Register from "./login/Register.js";
import Header from "./Header.js";
import Main from "./main/Main.js";
import Profile from "./profile/Profile.js";
import Writing from "./writing/Writing.js";
import EducationPlan from "./educationplan/EducationPlan.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/header" element={<Header></Header>} />
        <Route path="/" element={<Main></Main>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/educationplan" element={<EducationPlan />} />
      </Routes>
    </div>
  );
}

export default App;
