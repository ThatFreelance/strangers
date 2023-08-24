import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Posts from "./Components/Posts";
//import Login from "./Components/Login";
import Footer from "./Components/Footer";
import "./App.css";


function App() {
  return (
    <div id="container">
      <Navbar />
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Posts" element={<Posts />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
