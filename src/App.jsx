import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Erreur from "./pages/Erreur/Erreur";
import Logement from "./pages/Logement/Logement";
import Propos from "./pages/Propos/Propos";
import React from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/logement/*" element={<Erreur />} />
      </Routes>
    </Router>
  );
}

export default App;
