import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Erreur from "./components/Erreur/Erreur"
import Logement from "./components/Logement/Logement"
import Propos from "./components/Propos/Propos"
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './color.scss'

function App() {
  return (
    <div className="App">
<Navbar />
<Routes> 
<Route path="/" element={<Home />} />
<Route path="/logement/:id" element={<Logement />} />
<Route path="/propos" element={<Propos />} />



<Route path="*" element={<Erreur />} />
<Route path="/logement/*" element={<Erreur />} />


</Routes>
</div>
  );
}

export default App;
