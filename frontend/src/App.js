import React from "react";
import {  Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/navbar";
import Register from "./components/register";
import Access from "./components/access"
import Profile from "./components/profile";
import Home from "./components/home";

const App = () => {
  return (
      <div>
        <Navbar />
        <div style={{ margin: 20 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/access" element={<Access />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/editProfile" element={<EditProfile />} />  */}
          </Routes>
        </div>
      </div>
  );
};

export default App;