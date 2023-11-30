import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Register from "./components/register";
import Access from "./components/access";
import UserProfile from "./components/userProfile";
import PrivateRoute from "./components/privateRoute";

const App = () => {
  return (
      <div>
        <Navbar />
        <div style={{ margin: 20 }}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/access" element={<Access />} />
            <Route
              path="/profile/*"
              element={<PrivateRoute component={UserProfile} />}
            />
          </Routes>
        </div>
      </div>
  );
};

export default App;