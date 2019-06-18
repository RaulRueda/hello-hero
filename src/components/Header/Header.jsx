import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Navbar bg="dark">
      <Navbar.Brand href="/">Pokemon</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/list">Pokemons</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
