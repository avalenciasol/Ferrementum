
import React from "react";
import {  Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Register from "./components/register";
import Access from "./components/access"
import Profile from "./components/profile";
import EditProfile from "./components/editProfile";
import Cart from "./components/cart";
import AdminDashboard from "./components/adminDashboard";
// import CategoriesGrid from "./components/categories";


const App = () => {
  return (
      <div>
        <Navbar />
        <div style={{ margin: 0 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/admin" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/access" element={<Access />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* <Route path="/categories-grid" element={<CategoriesGrid/>} /> */}
          </Routes>
        </div>
      </div>
  );
};

export default App;
