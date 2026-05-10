import { useState } from "react";
import "./AlbumForm.css";
import Sidebar from "./SideBar";

const AlbumForm = () => {
  // Filtros disponibles
  const filtros = ["Todos", "En vivo", "Programados", "Finalizados"];
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  // Láminas (luego vendrán del backend)
  // estado: "pegada" | "repetida" | "faltante"
  const laminas = [
    { id: "STK-001", jugador: "Vinicius Jr.", imagen: "/laminas/lam1.png", estado: "pegada" },
    { id: "STK-002", jugador: "Lautaro Martínez", imagen: "/laminas/lam2.png", estado: "repetida" },
    { id: "STK-003", jugador: "Yerry Mina", imagen: "/laminas/lam3.png", estado: "faltante" },
    { id: "STK-004", jugador: "Luis Díaz", imagen: "/laminas/lam4.png", estado: "pegada" },
    { id: "STK-005", jugador: "Kylian Mbappé", imagen: "/laminas/lam5.png", estado: "pegada" },
    { id: "STK-006", jugador: "Lionel Messi", imagen: "/laminas/lam6.png", estado: "repetida" },
    { id: "STK-007", jugador: "Vinícius", imagen: "/laminas/lam7.png", estado: "faltante" },
    { id: "STK-008", jugador: "James Rodríguez", imagen: "/laminas/lam8.png", estado: "pegada" },
  ];

  return (
    <div className="album-container">

      <Sidebar/>

      {/* CONTENIDO */}
      <section className="content">

        {/* HEADER + FILTROS */}
        <div className="album-header">
          <h2>Mi colección</h2>

          <div className="filtros">
            {filtros.map((f) => (
              <button
                key={f}
                className={`filtro-btn ${filtroActivo === f ? "activo" : ""}`}
                onClick={() => setFiltroActivo(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* LEYENDA DE ESTADOS */}
        <div className="leyenda">
          <div className="leyenda-item">
            <span className="cuadro pegada"></span> Pegada
          </div>
          <div className="leyenda-item">
            <span className="cuadro repetida"></span> Repetida
          </div>
          <div className="leyenda-item">
            <span className="cuadro faltante"></span> Faltante
          </div>
        </div>

        {/* GRID DE LÁMINAS */}
        <div className="laminas-grid">
          {laminas.map((lam) => (
            <div key={lam.id} className={`lamina ${lam.estado}`}>
              <img src={lam.imagen} alt={lam.jugador} />
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default AlbumForm;