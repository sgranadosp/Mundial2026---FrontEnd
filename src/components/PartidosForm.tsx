import { useState } from "react";
import "./PartidosForm.css";
import Sidebar from "./SideBar";

type Fase = "Fase de grupos" | "Octavos" | "Cuartos" | "Semis" | "Final";

const partidosPorFase: Record<Fase, { local: string; visita: string; estado: string; info: string }[]> = {
  "Fase de grupos": [
    { local: "Colombia", visita: "Brasil", estado: "Programado", info: "15 Jun - 20:00 EST · MetLife, EE.UU." },
    { local: "Argentina", visita: "Francia", estado: "En vivo", info: "Hoy - 22:00 CST · Azteca, México" },
    { local: "España", visita: "Alemania", estado: "Programado", info: "16 Jun - 13:00 EST · Rose Bowl, EE.UU." },
  ],
  "Octavos": [
    { local: "Portugal", visita: "Marruecos", estado: "Programado", info: "18 Jun - 16:00 EST · MetLife, EE.UU." },
    { local: "Inglaterra", visita: "Senegal", estado: "Programado", info: "19 Jun - 14:00 EST · SoFi, EE.UU." },
  ],
  "Cuartos": [
    { local: "Brasil", visita: "Francia", estado: "Programado", info: "25 Jun - 18:00 EST · Azteca, México" },
  ],
  "Semis": [
    { local: "Colombia", visita: "Argentina", estado: "Programado", info: "30 Jun - 20:00 EST · MetLife, EE.UU." },
  ],
  "Final": [
    { local: "Por definir", visita: "Por definir", estado: "Programado", info: "15 Jul - 18:00 EST · MetLife, EE.UU." },
  ],
};

const PartidosForm = () => {
  const [faseActiva, setFaseActiva] = useState<Fase>("Fase de grupos");
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  const fases: Fase[] = ["Fase de grupos", "Octavos", "Cuartos", "Semis", "Final"];
  const filtros = ["Todos", "En vivo", "Programados", "Finalizados"];

  const partidosFiltrados = partidosPorFase[faseActiva].filter((p) => {
    if (filtroActivo === "Todos") return true;
    if (filtroActivo === "En vivo") return p.estado === "En vivo";
    if (filtroActivo === "Programados") return p.estado === "Programado";
    if (filtroActivo === "Finalizados") return p.estado === "Finalizado";
    return true;
  });

  return (
    <div className="partidos-container">
      <Sidebar />

      <section className="partidos-content">

        {/* FILTROS */}
        <div className="filtros">
          {filtros.map((f) => (
            <button
              key={f}
              className={`filtro-btn ${filtroActivo === f ? "active" : ""}`}
              onClick={() => setFiltroActivo(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* FECHA */}
        <div className="fecha-picker">
          <input type="date" />
        </div>

        {/* FASES */}
        <div className="fases">
          {fases.map((fase) => (
            <button
              key={fase}
              className={`fase-tab ${faseActiva === fase ? "active" : ""}`}
              onClick={() => setFaseActiva(fase)}
            >
              {fase}
            </button>
          ))}
        </div>

        {/* TABLA DE PARTIDOS */}
        <div className="tabla-partidos">
          {partidosFiltrados.length === 0 ? (
            <p className="sin-partidos">No hay partidos para este filtro.</p>
          ) : (
            partidosFiltrados.map((p, i) => (
              <div key={i}>
                <div className="partido-row">
                  <span className="partido-nombre">{p.local} vs {p.visita}</span>
                  <span className={`partido-estado ${p.estado === "En vivo" ? "envivo" : p.estado === "Finalizado" ? "finalizado" : "programado"}`}>
                    {p.estado}
                  </span>
                  <span className="partido-info">{p.info}</span>
                  {p.estado === "En vivo" || p.estado === "Finalizado" ? (
                    <button className="btn-detalles">Ver detalles</button>
                  ) : (
                    <button className="btn-pronosticar">Pronosticar</button>
                  )}
                </div>
                {i < partidosFiltrados.length - 1 && <hr />}
              </div>
            ))
          )}
        </div>

      </section>
    </div>
  );
};

export default PartidosForm;