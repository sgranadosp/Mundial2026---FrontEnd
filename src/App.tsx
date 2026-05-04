import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn";
import Perfil from "./pages/Perfil";
import Pollas from "./pages/Pollas";
import MisPartidos from "./pages/MisPartidos";
import Partidos from "./pages/Partidos";

function App() {
  return (
    <Router>
      <div style={{ paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/logIn" element={<LogIn />} /> {/* Página principal */}
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Pollas" element={<Pollas   />} />
          <Route path="/MisPartidos" element={<MisPartidos   />} />
          <Route path="/Partidos" element={<Partidos   />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
