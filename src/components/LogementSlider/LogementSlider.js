import "./LogementSlider.scss";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function HeaderLogement({ data }) {
  return (
    <Carousel showThumbs={false} showStatus={false}  className="Carousel">
      {data.pictures.map((data) => (
        <div key={data.pictures}>
          <img key="slide" src={data} alt="images" />
        </div>
      ))}
    </Carousel>
  );
}
