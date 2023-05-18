import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>

      <div className="link">
        <Link to="/">Accueil</Link>
        {/* <Link to="/logement/paris">Logement</Link> */}
        <Link to="/propos">A propos</Link>
      </div>
    </nav>
  );
}
