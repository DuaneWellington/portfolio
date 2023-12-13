// PATH: 'src/components/Header/Header.jsx'

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };

  return (
    <header className="header">
      <h1 className="hi">HELLO!</h1>
        <h4 className="myName">my name is</h4>
      <h1 className="nameDuane">Duane Wellington</h1>
      <h4 className="and">& I'm a</h4>
      <h1 className="job">Full Stack Developer</h1>
      <nav style={navStyle}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
          <Link to="/skills">SKILLS</Link>
        <Link to="/projects">PROJECTS</Link>
      </nav>
    </header>
  );
}

export default Header;
