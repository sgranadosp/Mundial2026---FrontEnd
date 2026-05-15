import { useState } from "react";
import SidebarAdmin from "./SidebarAdmin";
import "./AdminForm.css";

interface AuditRow {
  tipo: string;
  usuario: string;
  descripcion: string;
  resultado: "SUCCESS" | "FAILURE" | "BLOCKED";
  hace: string;
}

const auditRecientes: AuditRow[] = [
  {
    tipo: "USER_LOGIN",
    usuario: "carlos.m",
    descripcion: "Inicio de sesión exitoso",
    resultado: "SUCCESS",
    hace: "2 min",
  },
  {
    tipo: "TICKET_RESERVED",
    usuario: "sofia.r",
    descripcion: "Reserva — Colombia vs Brasil",
    resultado: "SUCCESS",
    hace: "5 min",
  },
  {
    tipo: "PREDICTION_EVALUATED",
    usuario: "juan.d",
    descripcion: "+3 pts marcador exacto",
    resultado: "SUCCESS",
    hace: "1h",
  },
  {
    tipo: "TICKET_EXPIRED",
    usuario: "pedro.s",
    descripcion: "Reserva expirada por TTL",
    resultado: "SUCCESS",
    hace: "2h",
  },
  {
    tipo: "FRAUD_PATTERN_DETECTED",
    usuario: "desconocido",
    descripcion: "Superó límite de 4 entradas activas",
    resultado: "BLOCKED",
    hace: "3h",
  },
  {
    tipo: "USER_LOGIN_FAILED",
    usuario: "—",
    descripcion: "Credenciales incorrectas",
    resultado: "FAILURE",
    hace: "4h",
  },
];

const barras = [45, 62, 38, 71, 55, 83, 48];
const dias = ["L", "M", "X", "J", "V", "S", "D"];

const AdminForm = () => {
  const [ejecutando, setEjecutando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleExpire = () => {
    setEjecutando(true);
    setTimeout(() => {
      setEjecutando(false);
      setMensaje("Job ejecutado: 12 reservas expiradas.");
      setTimeout(() => setMensaje(""), 3000);
    }, 1200);
  };

  const maxBarra = Math.max(...barras);

  return (
    <div className="admin-container">
      <SidebarAdmin />

      <section className="admin-content">
        {/* HEADER */}
        <div className="admin-header">
          <div>
            <h2>Panel de administración</h2>
            <p>Resumen general del sistema · Mundial 2026 Hub</p>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="admin-stat-cards">
          <div className="admin-stat-card">
            <div className="stat-label">Usuarios registrados</div>
            <div className="stat-value">1.247</div>
            <div className="stat-sub">+38 esta semana</div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-label">Partidos registrados</div>
            <div className="stat-value">104</div>
            <div className="stat-sub">8 en vivo</div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-label">Grupos de polla</div>
            <div className="stat-value">312</div>
            <div className="stat-sub">4.891 pronósticos</div>
          </div>
          <div className="admin-stat-card golden">
            <div className="stat-label">Entradas activas</div>
            <div className="stat-value">847</div>
            <div className="stat-sub">12 expiran pronto</div>
          </div>
        </div>

        {/* FILA INFERIOR */}
        <div className="admin-bottom-row">
          {/* AUDIT */}
          <div className="admin-card admin-audit">
            <div className="admin-card-title">Actividad reciente</div>
            <div className="audit-header-row">
              <span>Tipo</span>
              <span>Usuario</span>
              <span>Descripción</span>
              <span>Resultado</span>
              <span>Hace</span>
            </div>
            {auditRecientes.map((r, i) => (
              <div className="audit-row" key={i}>
                <span className="audit-tipo">{r.tipo}</span>
                <span className="audit-usuario">{r.usuario}</span>
                <span className="audit-desc">{r.descripcion}</span>
                <span
                  className={`audit-badge badge-${r.resultado.toLowerCase()}`}
                >
                  {r.resultado}
                </span>
                <span className="audit-hace">hace {r.hace}</span>
              </div>
            ))}
          </div>

          {/* CHART + EXPIRE */}
          <div className="admin-right-col">
            <div className="admin-card">
              <div className="admin-card-title">
                Registros por día (esta semana)
              </div>
              <div className="bar-chart">
                {barras.map((v, i) => (
                  <div className="bar-col" key={i}>
                    <div
                      className="bar-fill"
                      style={{ height: `${(v / maxBarra) * 80}px` }}
                    />
                    <div className="bar-label">{dias[i]}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-card">
              <div className="admin-card-title">
                Job de expiración de reservas
              </div>
              <p className="expire-desc">
                12 reservas vencen en los próximos 15 min. Libera cupos
                automáticamente.
              </p>
              {mensaje && <div className="expire-ok">{mensaje}</div>}
              <button
                className="btn-expire"
                onClick={handleExpire}
                disabled={ejecutando}
              >
                {ejecutando ? "Ejecutando..." : "Ejecutar expiración"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminForm;
