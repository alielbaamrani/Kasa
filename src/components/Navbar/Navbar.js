import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/">
        <img  src={logo} width={"100%"}
           height={"100%"}
        />
      </Link>

      <div className="link">
        <Link to="/">Accueil</Link>
        {/* <Link to="/logement/paris">Logement</Link> */}
        <Link to="/propos">A propos</Link>
      </div>
    </nav>
  );
}
