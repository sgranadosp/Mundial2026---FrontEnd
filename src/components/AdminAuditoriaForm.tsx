import { useState } from "react";
import SidebarAdmin from "./SidebarAdmin";
import "./AdminAuditoriaForm.css";

type Resultado = "SUCCESS" | "FAILURE" | "BLOCKED";

interface Evento {
  id: number;
  tipo: string;
  usuario: string;
  correlationId: string;
  descripcion: string;
  resultado: Resultado;
  ip: string;
  hace: string;
}

const eventosData: Evento[] = [
  {
    id: 1,
    tipo: "USER_LOGIN",
    usuario: "juan.d",
    correlationId: "—",
    descripcion: "Inicio de sesión desde 192.168.1.1",
    resultado: "SUCCESS",
    ip: "192.168.1.1",
    hace: "2 min",
  },
  {
    id: 2,
    tipo: "TICKET_RESERVED",
    usuario: "sofia.r",
    correlationId: "a1b2c3d4",
    descripcion: "Reserva Colombia vs Brasil · Cat. 2",
    resultado: "SUCCESS",
    ip: "10.0.0.1",
    hace: "5 min",
  },
  {
    id: 3,
    tipo: "PREDICTION_EVALUATED",
    usuario: "juan.d",
    correlationId: "—",
    descripcion: "Francia 3-0 Croacia · Marcador exacto +3 pts",
    resultado: "SUCCESS",
    ip: "192.168.1.1",
    hace: "1h",
  },
  {
    id: 4,
    tipo: "TICKET_EXPIRED",
    usuario: "pedro.s",
    correlationId: "f3e2a1b2",
    descripcion: "Reserva expirada por TTL — cupo liberado",
    resultado: "SUCCESS",
    ip: "—",
    hace: "2h",
  },
  {
    id: 5,
    tipo: "FRAUD_PATTERN_DETECTED",
    usuario: "desconocido",
    correlationId: "—",
    descripcion: "Superó límite de 4 entradas activas",
    resultado: "BLOCKED",
    ip: "10.0.0.5",
    hace: "3h",
  },
  {
    id: 6,
    tipo: "USER_LOGIN_FAILED",
    usuario: "—",
    correlationId: "—",
    descripcion: "Credenciales incorrectas · usuario no encontrado",
    resultado: "FAILURE",
    ip: "172.16.0.8",
    hace: "4h",
  },
  {
    id: 7,
    tipo: "EXCHANGE_COMPLETED",
    usuario: "carlos.m",
    correlationId: "b5c6d7e8",
    descripcion: "Intercambio STK-045 ↔ STK-112 completado",
    resultado: "SUCCESS",
    ip: "10.0.1.2",
    hace: "5h",
  },
  {
    id: 8,
    tipo: "PACKAGE_OPENED",
    usuario: "sofia.r",
    correlationId: "—",
    descripcion: "Paquete ID 23 abierto — 5 láminas reveladas",
    resultado: "SUCCESS",
    ip: "10.0.0.1",
    hace: "6h",
  },
];

const tiposDisponibles = [
  "Todos",
  "USER_LOGIN",
  "USER_LOGIN_FAILED",
  "TICKET_RESERVED",
  "TICKET_EXPIRED",
  "PREDICTION_EVALUATED",
  "FRAUD_PATTERN_DETECTED",
  "EXCHANGE_COMPLETED",
  "PACKAGE_OPENED",
];
const resultados = ["Todos", "SUCCESS", "FAILURE", "BLOCKED"];

const AdminAuditoriaForm = () => {
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [filtroResultado, setFiltroResultado] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [detalle, setDetalle] = useState<Evento | null>(null);

  const filtrados = eventosData.filter((e) => {
    const matchTipo = filtroTipo === "Todos" || e.tipo === filtroTipo;
    const matchResultado =
      filtroResultado === "Todos" || e.resultado === filtroResultado;
    const matchBusqueda =
      e.usuario.toLowerCase().includes(busqueda.toLowerCase()) ||
      e.correlationId.toLowerCase().includes(busqueda.toLowerCase()) ||
      e.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return matchTipo && matchResultado && matchBusqueda;
  });

  const resultadoClass: Record<Resultado, string> = {
    SUCCESS: "badge-success",
    FAILURE: "badge-failure",
    BLOCKED: "badge-blocked",
  };

  return (
    <div className="admin-container">
      <SidebarAdmin />

      <section className="admin-content">
        <div className="admin-header">
          <div>
            <h2>Panel de auditoría</h2>
            <p>Trazabilidad completa de eventos del sistema — solo ADMIN</p>
          </div>
        </div>

        {/* FILTROS */}
        <div className="audit-filtros">
          <select
            className="audit-select"
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
          >
            {tiposDisponibles.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>

          <select
            className="audit-select"
            value={filtroResultado}
            onChange={(e) => setFiltroResultado(e.target.value)}
          >
            {resultados.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>

          <input
            className="audit-search"
            placeholder="Buscar por usuario, correlationId o descripción..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        {/* TABLA */}
        <div className="admin-card" style={{ marginBottom: 0 }}>
          <div className="audit-stats-row">
            <span>
              Total filtrados: <strong>{filtrados.length}</strong>
            </span>
            <span
              className="badge-success"
              style={{
                borderRadius: 5,
                padding: "3px 10px",
                fontSize: "0.75rem",
              }}
            >
              {filtrados.filter((e) => e.resultado === "SUCCESS").length}{" "}
              SUCCESS
            </span>
            <span
              className="badge-failure"
              style={{
                borderRadius: 5,
                padding: "3px 10px",
                fontSize: "0.75rem",
              }}
            >
              {filtrados.filter((e) => e.resultado === "FAILURE").length}{" "}
              FAILURE
            </span>
            <span
              className="badge-blocked"
              style={{
                borderRadius: 5,
                padding: "3px 10px",
                fontSize: "0.75rem",
              }}
            >
              {filtrados.filter((e) => e.resultado === "BLOCKED").length}{" "}
              BLOCKED
            </span>
          </div>

          <div className="auditoria-thead">
            <span>Tipo</span>
            <span>Usuario</span>
            <span>Correlation ID</span>
            <span>Descripción</span>
            <span>Resultado</span>
            <span>Hace</span>
            <span></span>
          </div>

          {filtrados.length === 0 ? (
            <div className="audit-empty">
              No hay eventos que coincidan con los filtros.
            </div>
          ) : (
            filtrados.map((e) => (
              <div key={e.id}>
                <div className="auditoria-row">
                  <span className="audit-tipo">{e.tipo}</span>
                  <span className="audit-usuario">{e.usuario}</span>
                  <span className="audit-corr">{e.correlationId}</span>
                  <span className="audit-desc">{e.descripcion}</span>
                  <span
                    className={`audit-badge ${resultadoClass[e.resultado]}`}
                  >
                    {e.resultado}
                  </span>
                  <span className="audit-hace">hace {e.hace}</span>
                  <button
                    className="btn-ver-detalle"
                    onClick={() => setDetalle(detalle?.id === e.id ? null : e)}
                  >
                    {detalle?.id === e.id ? "Cerrar" : "Detalle"}
                  </button>
                </div>

                {/* PANEL DETALLE */}
                {detalle?.id === e.id && (
                  <div className="detalle-panel">
                    <div className="detalle-row">
                      <span>Tipo</span>
                      <strong>{e.tipo}</strong>
                    </div>
                    <div className="detalle-row">
                      <span>Usuario</span>
                      <strong>{e.usuario}</strong>
                    </div>
                    <div className="detalle-row">
                      <span>Correlation ID</span>
                      <strong>{e.correlationId}</strong>
                    </div>
                    <div className="detalle-row">
                      <span>IP origen</span>
                      <strong>{e.ip}</strong>
                    </div>
                    <div className="detalle-row">
                      <span>Resultado</span>
                      <strong
                        className={resultadoClass[e.resultado]}
                        style={{ borderRadius: 4, padding: "2px 8px" }}
                      >
                        {e.resultado}
                      </strong>
                    </div>
                    <div className="detalle-row">
                      <span>Descripción</span>
                      <strong>{e.descripcion}</strong>
                    </div>
                  </div>
                )}

                <hr className="partidos-hr" />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminAuditoriaForm;
