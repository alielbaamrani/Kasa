import "./Logement.scss";
import LogementSlider from "src/components/LogementSlider/LogementSlider";
import LogementInfo from "src/components/LogementInfo/LogementInfo";
import data from "../../data/data.json";

import React from "react";
import { Routes, Route } from "react-router-dom";

export default function Logement() {
  return (
    <div className="Logement">
      <LogementSlider data={data} />
      <LogementInfo data={data} />
    </div>
  );
}
