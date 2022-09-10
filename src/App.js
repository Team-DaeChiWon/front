import React from "react";
import { Routes, Route, Link } from "react-router-dom";

<<<<<<< baejin1018
import Login from "./login/Login.js";
import Register from "./login/Register.js";
import Header from "./Header.js";
import Main from "./main/Main.js";
import Profile from "./profile/Profile.js";
import Writing from "./writing/Writing.js";

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
         <Route path="/share" element={<Share/>}/>
      </Routes>
    </div>
  );
}

export default App;
