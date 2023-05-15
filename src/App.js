import React from "react";
import Navbar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router";
import Home from "./Components/Pages/Home/Home";
import AddScenario from "./Components/Pages/AddScenario/AddScenario";
import AddVechile from "./Components/Pages/AddVechile/AddVechile";
import AllScenario from "./Components/Pages/AllScenario/AllScenario";
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddScenario" element={<AddScenario />} />
        <Route path="/AddVechile" element={<AddVechile />} />
        <Route path="/AllScenario" element={<AllScenario />} />
      </Routes>
    </div>
  );
}

export default App;
