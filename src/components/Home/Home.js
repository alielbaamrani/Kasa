import './Home.scss';
import React from 'react'
import {Routes, Route} from "react-router-dom"
import HeaderImg from "./header-img.png"

export default function home() {
  return (
    <div className='header'>
      <img  className='headerImg' src={HeaderImg}></img>
      <h2>Chez vous,partout et ailleurs</h2>
    </div>
    )
}
