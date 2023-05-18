import "./Home.scss";
import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import data from '../../data/data.json'

export default function Home() {
  // const getAllData = () => {
  //   const response = fetch(url);
  //   return response;
  // };
  // useEffect(() => {
  //   getAllData();
  // }, []);

  return (
    <div className="home">
      <Header />
      <CardList data={data}/>
      <Footer />
    </div>
  );
}
