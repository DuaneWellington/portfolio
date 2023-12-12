// PATH: 'src/components/Header.jsx'

import React from "react";
import { Link } from "react-router-dom";

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

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
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
          </Link>
          <Link to="/skills">
          <div>SKILLS</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
        <Link to="/contact">
          <div>CONTACT</div>
          </Link>
      </nav>
    </header>
  );
}

export default Header;
