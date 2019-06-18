//Libraries
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//Style
import "./Header.scss";
import logo from "../../assets/pokeball.png";

const Header = () => {
  return (
    <Navbar bg="dark">
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
