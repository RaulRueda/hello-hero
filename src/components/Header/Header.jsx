//Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faSignOutAlt,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

//Style
import "./Header.scss";
import logo from "../../assets/pokemon_logo.png";

const Header = () => {
  const [getState, setState] = useState({
    isLogged: localStorage.getItem("token") !== null ? true : false
  });
  //Hint: My crazy idea of 0/flase is swith off (dark) and 1/true is on (light)
  const [getColorMode, setColorMode] = useState(0);

  const handleColorMode = () => {
    setColorMode(!getColorMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setState({
      isLogged: false
    });
  };

  return (
    <Navbar fixed="top" bg={getColorMode ? "light" : "dark"}>
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="80"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      {getState.isLogged ? (
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
          <Nav.Item>
            <Link to="/login">
              <FontAwesomeIcon
                className={!getColorMode ? "icon-light" : "icon-dark"}
                icon={faSignOutAlt}
                onClick={handleLogout}
              />
            </Link>
          </Nav.Item>
        </Navbar.Collapse>
      ) : (
        <Navbar.Collapse className="justify-content-end">
          <Nav.Item>
            <FontAwesomeIcon
              className={!getColorMode ? "icon-light" : "icon-dark"}
              icon={faAdjust}
              onClick={handleColorMode}
            />
          </Nav.Item>
          <Nav.Item>
            <Link to="/login">
              <FontAwesomeIcon
                className={!getColorMode ? "icon-light" : "icon-dark"}
                icon={faSignInAlt}
              />
              {" Login"}
            </Link>
          </Nav.Item>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

export default Header;
