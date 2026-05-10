import { useState } from "react";
import "./PerfilForm.css";
import Sidebar from "./SideBar";

const PerfilForm = () => {
  // Datos del usuario
  const [nombreCompleto, setNombreCompleto] = useState("Juan Díaz Caicedo");
  const [correo, setCorreo] = useState("juan.diaz@gmail.com");

  // Preferencias
  const [equipoFavorito, setEquipoFavorito] = useState("Colombia (COL)");
  const [ciudadPreferida, setCiudadPreferida] = useState("Miami, EE.UU.");
  const [notifPush, setNotifPush] = useState(true);
  const [notifEmail, setNotifEmail] = useState(false);

  // Opciones disponibles
  const equipos = [
    "Colombia (COL)",
    "Argentina (ARG)",
    "Brasil (BRA)",
    "España (ESP)",
    "Francia (FRA)",
    "Alemania (GER)",
    "Inglaterra (ENG)",
    "México (MEX)",
  ];

  const ciudades = [
    "Miami, EE.UU.",
    "Nueva York, EE.UU.",
    "Los Ángeles, EE.UU.",
    "CDMX, México",
    "Toronto, Canadá",
    "Bogotá, Colombia",
  ];

  const handleActualizar = () => {
    console.log("Actualizar perfil:", { nombreCompleto, correo });
    // Aquí va la llamada al backend
  };

  const handleReservar = () => {
    console.log("Reservar preferencias:", {
      equipoFavorito,
      ciudadPreferida,
      notifPush,
      notifEmail,
    });
    // Aquí va la llamada al backend
  };

  return (
    <div className="perfil-container">

      <Sidebar/>

      {/* CONTENIDO */}
      <section className="content">

        {/* HEADER */}
        <div className="perfil-header">
          <h2>Mi perfil</h2>
        </div>

        {/* PANELES */}
        <div className="paneles">

          {/* DATOS DEL USUARIO */}
          <div className="panel">
            <div className="usuario-top">
              <div className="avatar">
                <span>👤</span>
              </div>
              <div className="usuario-info">
                <h3>Juan Díaz</h3>
                <span className="badge">Usuario</span>
              </div>
            </div>

            <label className="campo-label">Nombre completo</label>
            <input
              type="text"
              className="campo-input"
              value={nombreCompleto}
              onChange={(e) => setNombreCompleto(e.target.value)}
            />

            <label className="campo-label">Correo electrónico</label>
            <input
              type="email"
              className="campo-input"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />

            <button className="actualizar-btn" onClick={handleActualizar}>
              Actualizar
            </button>
          </div>

          {/* PREFERENCIAS */}
          <div className="panel">
            <h3 className="panel-titulo">Preferencias</h3>

            <label className="campo-label">Equipo favorito</label>
            <select
              className="campo-select"
              value={equipoFavorito}
              onChange={(e) => setEquipoFavorito(e.target.value)}
            >
              {equipos.map((eq) => (
                <option key={eq} value={eq}>
                  {eq}
                </option>
              ))}
            </select>

            <label className="campo-label">Ciudad preferida</label>
            <select
              className="campo-select"
              value={ciudadPreferida}
              onChange={(e) => setCiudadPreferida(e.target.value)}
            >
              {ciudades.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <button className="reservar-btn" onClick={handleReservar}>
              Reservar
            </button>

            <div className="checkboxes">
              <label className="check-item">
                <input
                  type="checkbox"
                  checked={notifPush}
                  onChange={(e) => setNotifPush(e.target.checked)}
                />
                <span>Notificaciones push</span>
              </label>

              <label className="check-item">
                <input
                  type="checkbox"
                  checked={notifEmail}
                  onChange={(e) => setNotifEmail(e.target.checked)}
                />
                <span>Notificaciones email</span>
              </label>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default PerfilForm;