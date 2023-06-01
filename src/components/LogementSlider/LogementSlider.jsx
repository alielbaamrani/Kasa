import "./LogementSlider.scss";
import React from "react";

export default function HeaderLogement({ data }) {
  return (
    <div className="Carousel">
      {data.pictures.map((data) => (
        <div key={data.pictures}>
          <img key="slide" src={data} alt="images" />
        </div>
      ))}
    </div>
  );
}
