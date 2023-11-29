import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Register from "./components/register";
import Access from "./components/access";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/access" element={<Access />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;