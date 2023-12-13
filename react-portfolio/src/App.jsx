// PATH: 'src/App.jsx'

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/global.css";

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
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
