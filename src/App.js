import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Service from "./pages/Service";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/service" element={<Service />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
