import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div id="container">
      <Navbar />
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
