import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Register from "./components/register";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;