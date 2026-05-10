import { useState } from "react";
import "./EventosRecientesForm.css";
import Sidebar from "./SideBar";

const EventosRecientesForm = () => {
  // Eventos recientes (luego vendrán del backend en tiempo real)
  const [eventos, setEventos] = useState([
    {
      id: 1,
      texto: "Gol de Argentina: Lionel Messi marca tras asistencia de Julián Álvarez (Argentina 1-0 Austria)",
      minuto: "Min 18",
      tiempo: "Hace 2 min",
      destacado: true,
    },
    {
      id: 2,
      texto: "Tarjeta amarilla para Cristian Romero",
      minuto: "Min 40",
      tiempo: "Hace 5 min",
      destacado: true,
    },
    {
      id: 3,
      texto: "Penal para Argentina tras falta sobre Messi",
      minuto: "Min 50",
      tiempo: "Hace 8 min",
      destacado: false,
    },
    {
      id: 4,
      texto: "Inicio del partido: España vs Uruguay",
      minuto: "",
      tiempo: "Hace 1 min",
      destacado: false,
    },
    {
      id: 5,
      texto: "Gol de Inglaterra: Jude Bellingham remata desde fuera del área (Inglaterra 1-1 Países Bajos)",
      minuto: "Min 55",
      tiempo: "Hace 6 min",
      destacado: false,
    },
  ]);

  const handleMarcarTodas = () => {
    setEventos(eventos.map((e) => ({ ...e, destacado: false })));
    // Aquí va la llamada al backend
  };

  const handleMarcarUno = (id: number) => {
    setEventos(
      eventos.map((e) =>
        e.id === id ? { ...e, destacado: false } : e
      )
    );
    // Aquí va la llamada al backend
  };

  return (
    <div className="eventos-container">

      <Sidebar/>

      {/* CONTENIDO */}
      <section className="content">

        {/* HEADER */}
        <div className="eventos-header">
          <h2>Eventos recientes</h2>
        </div>

        {/* PANEL DE EVENTOS */}
        <div className="eventos-panel">

          <div className="eventos-top">
            <h3>Recientes</h3>
            <button className="marcar-btn" onClick={handleMarcarTodas}>
              Marcar todas como leídas
            </button>
          </div>

          {eventos.length === 0 ? (
            <p className="vacio">No hay eventos recientes</p>
          ) : (
            <ul className="eventos-lista">
              {eventos.map((e) => (
                <li
                  key={e.id}
                  className={`evento-item ${e.destacado ? "destacado" : "normal"}`}
                  onClick={() => handleMarcarUno(e.id)}
                >
                  <p className="evento-texto">
                    {e.texto}
                    {e.minuto && <span className="evento-minuto"> · {e.minuto}</span>}
                    <span className="evento-tiempo"> · {e.tiempo}</span>
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

export default EventosRecientesForm;