import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./navbar.scss";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav>
      <Link className="logo" to="/">
        <img src={logo} width={"100%"} height={"100%"} />
      </Link>

      <div className="link">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Accueil
        </Link>
        {/* <Link to="/logement/paris">Logement</Link> */}
        <Link
          className={location.pathname === "/propos" ? "active" : ""}
          to="/propos"
        >
          A propos
        </Link>
      </div>
    </nav>
  );
}
