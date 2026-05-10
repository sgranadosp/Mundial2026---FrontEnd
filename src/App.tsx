import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn";
import Inicio from "./pages/Inicio";
import Perfil from "./pages/Perfil";
import Pollas from "./pages/Pollas";
import MisPartidos from "./pages/MisPartidos";
import PagoTiquetes from "./pages/PagoTiquetes";
import Partidos from "./pages/Partidos";
import RankingPollas from "./pages/RankingPollas";
import Album from "./pages/Album";
import PacksLaminas from "./pages/PacksLaminas";
import CambioLaminas from "./pages/CambioLaminas";
import Notificaciones from "./pages/Notificaciones";
import EventosRecientes from "./pages/EventosRecientes";



function App() {
  return (
    <Router>
      <div style={{ paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/logIn" element={<LogIn />} /> {/* Página principal */}
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Pollas" element={<Pollas   />} />
          <Route path="/MisPartidos" element={<MisPartidos   />} />
          <Route path="/PagoTiquetes" element={<PagoTiquetes   />} />
          <Route path="/Partidos" element={<Partidos   />} />
          <Route path="/RankingPollas" element={<RankingPollas   />} />
          <Route path="/Album" element={<Album   />} />
          <Route path="/PacksLaminas" element={<PacksLaminas   />} />
          <Route path="/CambioLaminas" element={<CambioLaminas   />} />
          <Route path="/Notificaciones" element={<Notificaciones   />} />
          <Route path="/EventosRecientes" element={<EventosRecientes   />} />
          <Route path="/Perfil" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
