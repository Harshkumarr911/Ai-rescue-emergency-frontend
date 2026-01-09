import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Layout/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import LgForm from "./pages/LgForm.jsx";      // Login Page
import Dashboard from "./pages/Dashboard.jsx"; // Create this file
import Card from "./components/common/Card.jsx";
import PrivateRoute from "./components/common/PrivateRoute.jsx";
import Contact from "./pages/Contact.jsx";
import Card2 from "./components/common/Card2.jsx";
import Tabs from "./pages/Tabs.jsx";

const App = () => {

  const [userData, setUserData] = useState(null);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<LgForm />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            {/* <Dashboard /> */}
            <Home />
          </PrivateRoute>
        }
        />

        <Route path="/gallery" element={<Tabs />} />


        <Route path="/home" element={<Home />} />
        <Route
  path="/contact"
  element={
    <>
      <Contact sendData={setUserData} />
      {userData && (
        <Card2
          name={userData.name}
          email={userData.email}
          message={userData.message}
        />
      )}
    </>
  }
/>

         

      </Routes>

      {/* Optional demo components */}
      {/* <div id="parent">
        <h1 id="child1">Hi Harsh</h1>
        <h2 id="child2">Hi Kumar</h2>
      </div>

      <Card usernm="Kumar" age={22} />
      <Card usernm="Nitesh" age={21} /> */}
    </BrowserRouter>
  );
};

export default App;
