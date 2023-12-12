// PATH: 'src/App.jsx'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
