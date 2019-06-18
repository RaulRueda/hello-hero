//Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

//Style
import "./Header.scss";
import logo from "../../assets/pokeball.png";

const Header = () => {
  //Hint: My crazy idea of 0/flase is swith off (dark) and 1/true is on (light)
  const [getColorMode, setColorMode] = useState(0);

  const handleColorMode = () => {
    setColorMode(!getColorMode);
  };

  return (
    <Navbar bg={getColorMode ? "light" : "dark"}>
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Pokeball"
        />
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Item>
          <FontAwesomeIcon
            className={!getColorMode ? "icon-light" : "icon-dark"}
            icon={faAdjust}
            onClick={handleColorMode}
          />
        </Nav.Item>
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/list">Pokemons</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about">About</Link>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
