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

// ─── Páginas ADMIN ────────────────────────────────────────────
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsuarios from "./pages/admin/AdminUsuarios";
import AdminPartidos from "./pages/admin/AdminPartidos";
import AdminNotificaciones from "./pages/admin/AdminNotificaciones";
import AdminAuditoria from "./pages/admin/AdminAuditoria";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div style={{ paddingTop: "64px" }}>
        <Routes>
          {/* ── Rutas públicas y de usuario ── */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Pollas" element={<Pollas />} />
          <Route path="/MisPartidos" element={<MisPartidos />} />
          <Route path="/PagoTiquetes" element={<PagoTiquetes />} />
          <Route path="/Partidos" element={<Partidos />} />
          <Route path="/RankingPollas" element={<RankingPollas />} />
          <Route path="/Album" element={<Album />} />
          <Route path="/PacksLaminas" element={<PacksLaminas />} />
          <Route path="/CambioLaminas" element={<CambioLaminas />} />
          <Route path="/Notificaciones" element={<Notificaciones />} />
          <Route path="/EventosRecientes" element={<EventosRecientes />} />
          <Route path="/Perfil" element={<Perfil />} />

          {/* ── Rutas de ADMIN ── */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/usuarios" element={<AdminUsuarios />} />
          <Route path="/admin/partidos" element={<AdminPartidos />} />
          <Route
            path="/admin/notificaciones"
            element={<AdminNotificaciones />}
          />
          <Route path="/admin/auditoria" element={<AdminAuditoria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
