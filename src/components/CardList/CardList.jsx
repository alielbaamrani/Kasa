import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

export default function CardList({ data }) {
  console.log(data)
  return (
    <div className="CardList">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}

    </div>
  );
}
