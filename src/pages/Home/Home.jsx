import "./Home.scss";
import React from "react";
import CardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import data from "../../data/data.json";
import image from '../../assets/header-img.png'

export default function Home() {
  const text = "Chez vous, partout et ailleurs";
  return (
    <div className="home">
      <Header data={text} image={image} />
      <CardList data={data} />
      <Footer />
    </div>
  );
}
