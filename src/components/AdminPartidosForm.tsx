import { useState } from "react";
import SidebarAdmin from "./SidebarAdmin";
import "./AdminPartidosForm.css";

type EstadoPartido = "Programado" | "En vivo" | "Finalizado" | "Pospuesto";
type DataStatus = "Confirmado" | "Pendiente";

interface Partido {
  id: number;
  local: string;
  visita: string;
  fecha: string;
  estadio: string;
  estado: EstadoPartido;
  data: DataStatus;
  homeScore: number | null;
  awayScore: number | null;
}

const partidosIniciales: Partido[] = [
  {
    id: 1001,
    local: "Colombia",
    visita: "Brasil",
    fecha: "15 Jun 01:00 UTC",
    estadio: "MetLife",
    estado: "Programado",
    data: "Confirmado",
    homeScore: null,
    awayScore: null,
  },
  {
    id: 1002,
    local: "Argentina",
    visita: "Francia",
    fecha: "15 Jun 03:00 UTC",
    estadio: "Azteca",
    estado: "En vivo",
    data: "Confirmado",
    homeScore: 2,
    awayScore: 1,
  },
  {
    id: 1003,
    local: "España",
    visita: "Alemania",
    fecha: "14 Jun 23:00 UTC",
    estadio: "Rose Bowl",
    estado: "Finalizado",
    data: "Confirmado",
    homeScore: 1,
    awayScore: 1,
  },
  {
    id: 1004,
    local: "Portugal",
    visita: "Marruecos",
    fecha: "16 Jun 20:00 UTC",
    estadio: "SoFi",
    estado: "Programado",
    data: "Pendiente",
    homeScore: null,
    awayScore: null,
  },
];

const AdminPartidosForm = () => {
  const [partidos, setPartidos] = useState<Partido[]>(partidosIniciales);
  const [editando, setEditando] = useState<number | null>(null);
  const [scores, setScores] = useState<{ home: string; away: string }>({
    home: "",
    away: "",
  });
  const [nuevoEstado, setNuevoEstado] = useState<EstadoPartido>("Finalizado");
  const [sincronizando, setSincronizando] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleSincronizar = () => {
    setSincronizando(true);
    setTimeout(() => {
      setSincronizando(false);
      showToast("Sincronización completada: 4 partidos actualizados.");
    }, 1500);
  };

  const handleActualizar = (id: number) => {
    setPartidos((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        return {
          ...p,
          estado: nuevoEstado,
          homeScore: scores.home !== "" ? parseInt(scores.home) : p.homeScore,
          awayScore: scores.away !== "" ? parseInt(scores.away) : p.awayScore,
          data: "Confirmado" as DataStatus,
        };
      }),
    );
    setEditando(null);
    setScores({ home: "", away: "" });
    showToast("Resultado actualizado correctamente.");
  };

  const estadoClass: Record<EstadoPartido, string> = {
    Programado: "estado-programado",
    "En vivo": "estado-envivo",
    Finalizado: "estado-finalizado",
    Pospuesto: "estado-pospuesto",
  };

  return (
    <div className="admin-container">
      <SidebarAdmin />

      <section className="admin-content">
        {toast && <div className="admin-toast">{toast}</div>}

        <div className="admin-header">
          <div>
            <h2>Gestión de partidos</h2>
            <p>Sincronización con API externa y actualización de resultados</p>
          </div>
        </div>

        {/* ACCIONES GLOBALES */}
        <div className="partidos-acciones">
          <button
            className="btn-sync"
            onClick={handleSincronizar}
            disabled={sincronizando}
          >
            {sincronizando
              ? "Sincronizando..."
              : "⟳  Sincronizar desde API externa"}
          </button>
          <span className="sync-hint">football-data.org / WireMock Cloud</span>
        </div>

        {/* TABLA */}
        <div className="admin-card" style={{ marginBottom: 0 }}>
          <div className="admin-card-title">Partidos del torneo</div>

          <div className="partidos-thead">
            <span>Partido</span>
            <span>Fecha (UTC)</span>
            <span>Estadio</span>
            <span>Marcador</span>
            <span>Estado</span>
            <span>Datos</span>
            <span>Acciones</span>
          </div>

          {partidos.map((p) => (
            <div key={p.id}>
              <div className="partidos-row">
                <span className="p-nombre">
                  {p.local} vs {p.visita}
                </span>
                <span className="p-fecha">{p.fecha}</span>
                <span className="p-estadio">{p.estadio}</span>
                <span className="p-score">
                  {p.homeScore !== null && p.awayScore !== null
                    ? `${p.homeScore} - ${p.awayScore}`
                    : "—"}
                </span>
                <span className={`p-estado ${estadoClass[p.estado]}`}>
                  {p.estado}
                </span>
                <span
                  className={`p-data ${p.data === "Confirmado" ? "data-ok" : "data-pending"}`}
                >
                  {p.data}
                </span>
                <span className="p-acciones">
                  {p.estado !== "Finalizado" && (
                    <button
                      className="btn-editar"
                      onClick={() => {
                        setEditando(editando === p.id ? null : p.id);
                        setScores({ home: "", away: "" });
                        setNuevoEstado("Finalizado");
                      }}
                    >
                      {editando === p.id ? "Cancelar" : "Actualizar"}
                    </button>
                  )}
                </span>
              </div>

              {/* PANEL EDICIÓN INLINE */}
              {editando === p.id && (
                <div className="edit-panel">
                  <div className="edit-row">
                    <label>Estado:</label>
                    <select
                      value={nuevoEstado}
                      onChange={(e) =>
                        setNuevoEstado(e.target.value as EstadoPartido)
                      }
                      className="edit-select"
                    >
                      <option>Programado</option>
                      <option>En vivo</option>
                      <option>Finalizado</option>
                      <option>Pospuesto</option>
                    </select>
                    <label>Local:</label>
                    <input
                      className="edit-input"
                      type="number"
                      min={0}
                      placeholder="0"
                      value={scores.home}
                      onChange={(e) =>
                        setScores((s) => ({ ...s, home: e.target.value }))
                      }
                    />
                    <span>-</span>
                    <label>Visita:</label>
                    <input
                      className="edit-input"
                      type="number"
                      min={0}
                      placeholder="0"
                      value={scores.away}
                      onChange={(e) =>
                        setScores((s) => ({ ...s, away: e.target.value }))
                      }
                    />
                    <button
                      className="btn-guardar"
                      onClick={() => handleActualizar(p.id)}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              )}

              <hr className="partidos-hr" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPartidosForm;
