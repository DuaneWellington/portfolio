// PATH: 'src/App.jsx'

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import useScrollToTop from "./utils/hooks/useScrollToTop";

// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// IMPORT PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  useScrollToTop();
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
