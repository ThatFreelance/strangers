import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div id="container">
      <Navbar />
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
