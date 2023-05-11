import './Erreur.scss';

import React from 'react'
import {Routes, Route} from "react-router-dom"

export default function error() {
  return (
    <div className="Erreur">
      <header className="App-header-erreur">
<h1> 404 </h1>
<h2> Oups! La page que vous demandez n existe pas.</h2>

      </header>
    </div>
  );
}
