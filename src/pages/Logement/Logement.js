import "./Logement.scss";
import LogementSlider from "src/components/LogementSlider/LogementSlider";
import LogementInfo from "src/components/LogementInfo/LogementInfo";
import Footer from "src/components/Footer/Footer";
import data from "../../data/data.json";
import React from "react";
import { useParams } from "react-router-dom";
import Erreur from "../Erreur/Erreur";

export default function Logement() {
  const { id } = useParams();
  console.log("id:", id);

  const findDataById = data.find((item) => item.id === id);

  console.log(findDataById);
  return findDataById ? (
    <div className="Logement">
      <LogementSlider data={findDataById} />
      <LogementInfo data={findDataById} />
      <Footer />
    </div>
  ) : (
    <Erreur />
  );
}
