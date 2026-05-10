import { useState } from "react";
import "./CambioLaminasForm.css";
import Sidebar from "./SideBar";

const CambioLaminasForm = () => {
  // Solicitudes recibidas (luego vendrán del backend)
  const [solicitudes, setSolicitudes] = useState([
    {
      id: 1,
      usuario: "Carlos M.",
      ofrece: "STK-045",
      pide: "STK-112",
    },
    {
      id: 2,
      usuario: "Sofía R.",
      ofrece: "STK-078",
      pide: "STK-033",
    },
  ]);

  // Usuarios disponibles para enviarles solicitud
  const usuarios = [
    { id: 1, nombre: "Carlos M." },
    { id: 2, nombre: "Sofía R." },
    { id: 3, nombre: "Pedro F." },
    { id: 4, nombre: "Ariana V." },
    { id: 5, nombre: "Laura S." },
  ];

  // Estado del formulario "Crear solicitud"
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState("");
  const [laminaDeseada, setLaminaDeseada] = useState("");

  const handleAceptar = (id: number) => {
    console.log("Aceptar solicitud:", id);
    setSolicitudes(solicitudes.filter((s) => s.id !== id));
    // Aquí va la llamada al backend
  };

  const handleRechazar = (id: number) => {
    console.log("Rechazar solicitud:", id);
    setSolicitudes(solicitudes.filter((s) => s.id !== id));
    // Aquí va la llamada al backend
  };

  const handleEnviarSolicitud = () => {
    if (!usuarioSeleccionado || !laminaDeseada) {
      console.log("Faltan datos");
      return;
    }
    console.log("Enviar solicitud a:", usuarioSeleccionado, "lámina:", laminaDeseada);
    // Aquí va la llamada al backend
    setUsuarioSeleccionado("");
    setLaminaDeseada("");
  };

  return (
    <div className="cambio-container">

      <Sidebar/>

      {/* CONTENIDO */}
      <section className="content">

        {/* HEADER */}
        <div className="cambio-header">
          <h2>Intercambios</h2>
          <p>Realiza intercambios de láminas con otros usuarios</p>
        </div>

        {/* PANELES */}
        <div className="paneles">

          {/* SOLICITUDES RECIBIDAS */}
          <div className="panel">
            <h3>Solicitudes recibidas</h3>

            {solicitudes.length === 0 ? (
              <p className="vacio">No tienes solicitudes pendientes</p>
            ) : (
              solicitudes.map((s) => (
                <div key={s.id} className="solicitud">
                  <p className="solicitud-texto">
                    {s.usuario} te ofrece {s.ofrece}
                    <br />
                    a cambio de tu {s.pide}
                  </p>
                  <div className="solicitud-acciones">
                    <button
                      className="aceptar-btn"
                      onClick={() => handleAceptar(s.id)}
                    >
                      aceptar
                    </button>
                    <button
                      className="rechazar-btn"
                      onClick={() => handleRechazar(s.id)}
                    >
                      rechazar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* CREAR SOLICITUD */}
          <div className="panel">
            <h3>Crear solicitud</h3>

            <select
              className="select-usuario"
              value={usuarioSeleccionado}
              onChange={(e) => setUsuarioSeleccionado(e.target.value)}
            >
              <option value="">Selecciona un usuario</option>
              {usuarios.map((u) => (
                <option key={u.id} value={u.nombre}>
                  {u.nombre}
                </option>
              ))}
            </select>

            <div className="inputs-row">
              <input
                type="text"
                placeholder="Lámina deseada"
                value={laminaDeseada}
                onChange={(e) => setLaminaDeseada(e.target.value)}
              />
            </div>

            <button className="enviar-btn" onClick={handleEnviarSolicitud}>
              Enviar solicitud
            </button>
          </div>

        </div>

      </section>
    </div>
  );
};

export default CambioLaminasForm;