import { useState } from "react";
import "./NotificacionesForm.css";
import Sidebar from "./SideBar";

const NotificacionesForm = () => {
  // Notificaciones (luego vendrán del backend)
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      texto: "Laura V. te envió una solicitud de intercambio: STK-073",
      tiempo: "hoy",
      seccion: "Álbum",
      leida: false,
    },
    {
      id: 2,
      texto: "Tu pronóstico Francia 3-0 Croacia fue exacto. +3 puntos",
      tiempo: "Hace 2 horas",
      seccion: "Polla",
      leida: false,
    },
    {
      id: 3,
      texto: "Carlos M. te envió una solicitud de intercambio: STK-045",
      tiempo: "Ayer",
      seccion: "Álbum",
      leida: true,
    },
    {
      id: 4,
      texto: "Paquete de inicio de sesión disponible para abrir",
      tiempo: "Ayer",
      seccion: "Álbum",
      leida: true,
    },
    {
      id: 5,
      texto: "Colombia vs Brasil · Recordatorio: partido en 30 minutos · MetLife 20:00 EST",
      tiempo: "Hace 2 días",
      seccion: "Partidos",
      leida: true,
    },
  ]);

  const handleMarcarTodas = () => {
    setNotificaciones(
      notificaciones.map((n) => ({ ...n, leida: true }))
    );
    // Aquí va la llamada al backend
  };

  const handleMarcarUna = (id: number) => {
    setNotificaciones(
      notificaciones.map((n) =>
        n.id === id ? { ...n, leida: true } : n
      )
    );
    // Aquí va la llamada al backend
  };

  return (
    <div className="notificaciones-container">

      <Sidebar/>

      {/* CONTENIDO */}
      <section className="content">

        {/* HEADER */}
        <div className="notif-header">
          <h2>Notificaciones</h2>
        </div>

        {/* PANEL DE NOTIFICACIONES */}
        <div className="notif-panel">

          <div className="notif-top">
            <h3>Recientes</h3>
            <button className="marcar-btn" onClick={handleMarcarTodas}>
              Marcar todas como leídas
            </button>
          </div>

          {notificaciones.length === 0 ? (
            <p className="vacio">No tienes notificaciones</p>
          ) : (
            <ul className="notif-lista">
              {notificaciones.map((n) => (
                <li
                  key={n.id}
                  className={`notif-item ${n.leida ? "leida" : "no-leida"}`}
                  onClick={() => handleMarcarUna(n.id)}
                >
                  <p className="notif-texto">{n.texto}</p>
                  <p className="notif-meta">
                    {n.tiempo} · {n.seccion}
                  </p>
                </li>
              ))}
            </ul>
          )}

        </div>

      </section>
    </div>
  );
};

export default NotificacionesForm;