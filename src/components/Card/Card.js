import "./Card.scss";

import React from "react";

export default function Card({ item }) {
  console.log(item);
  return (
    <div className="card">
      <a href={'/logement/' + item.id}>
        <img src={item.cover}></img>
        <h2>{item.title}</h2>
      </a>
    </div>
  );
}
