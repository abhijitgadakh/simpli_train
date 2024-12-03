import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/categories" element={<div>Categories Page</div>} />
        <Route path="/chat" element={<div>Chat Page</div>} />
        <Route path="/forum" element={<div>Forum Page</div>} />
        <Route path="/notifications" element={<div>Notifications Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
