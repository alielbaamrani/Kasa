import "./Header.scss";
import React from "react";
import HeaderImg from "./header-img.png";
const text = "Chez vous,partout et ailleurs";

export default function Header() {
  return (
    <div className="header">
      <img className="headerImg" src={HeaderImg}></img>
      <h2>{text}</h2>
    </div>
  );
}
