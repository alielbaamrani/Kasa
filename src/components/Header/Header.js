import "./Header.scss";
import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <img className="headerImg" src={props.image}></img>
      <h2>{props.data}</h2>
    </div>
  );
}
