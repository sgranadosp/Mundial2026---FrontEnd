import { useState } from "react";
import SidebarAdmin from "./SidebarAdmin";
import "./AdminNotificacionesForm.css";

const equipos = [
  "Colombia (COL)",
  "Brasil (BRA)",
  "Argentina (ARG)",
  "España (ESP)",
  "Francia (FRA)",
  "Portugal (POR)",
];
const ciudades = [
  "Miami, EE.UU.",
  "Nueva York, EE.UU.",
  "Los Ángeles, EE.UU.",
  "Ciudad de México",
  "Vancouver, Canadá",
];
const tiposNotif = [
  "Inicio de partido",
  "Gol marcado",
  "Resultado final",
  "Cambio de horario",
  "Comunicado general",
];

type Tab = "usuario" | "equipo" | "ciudad";

const AdminNotificacionesForm = () => {
  const [tab, setTab] = useState<Tab>("usuario");
  const [toast, setToast] = useState("");

  // Formulario por usuario
  const [userId, setUserId] = useState("");
  const [titleU, setTitleU] = useState("");
  const [bodyU, setBodyU] = useState("");
  const [canal, setCanal] = useState("Push (FCM)");

  // Formulario masivo equipo
  const [equipo, setEquipo] = useState(equipos[0]);
  const [tipoE, setTipoE] = useState(tiposNotif[0]);
  const [bodyE, setBodyE] = useState("");

  // Formulario masivo ciudad
  const [ciudad, setCiudad] = useState(ciudades[0]);
  const [titleC, setTitleC] = useState("");
  const [bodyC, setBodyC] = useState("");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2800);
  };

  const handleEnviarUsuario = () => {
    if (!userId || !titleU || !bodyU) {
      showToast("Completa todos los campos.");
      return;
    }
    showToast(`Notificación enviada al usuario ID ${userId} por ${canal}.`);
    setUserId("");
    setTitleU("");
    setBodyU("");
  };

  const handleEnviarEquipo = () => {
    if (!bodyE) {
      showToast("Completa el mensaje.");
      return;
    }
    showToast(
      `Notificación masiva enviada a seguidores de ${equipo}. ~312 usuarios notificados.`,
    );
    setBodyE("");
  };

  const handleEnviarCiudad = () => {
    if (!titleC || !bodyC) {
      showToast("Completa todos los campos.");
      return;
    }
    showToast(
      `Notificación masiva enviada a usuarios de ${ciudad}. ~187 usuarios notificados.`,
    );
    setTitleC("");
    setBodyC("");
  };

  return (
    <div className="admin-container">
      <SidebarAdmin />

      <section className="admin-content">
        {toast && <div className="admin-toast">{toast}</div>}

        <div className="admin-header">
          <div>
            <h2>Envío de notificaciones</h2>
            <p>
              Comunicados personalizados y masivos a usuarios de la plataforma
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="notif-tabs">
          <button
            className={`notif-tab ${tab === "usuario" ? "active" : ""}`}
            onClick={() => setTab("usuario")}
          >
            A un usuario
          </button>
          <button
            className={`notif-tab ${tab === "equipo" ? "active" : ""}`}
            onClick={() => setTab("equipo")}
          >
            Por equipo
          </button>
          <button
            className={`notif-tab ${tab === "ciudad" ? "active" : ""}`}
            onClick={() => setTab("ciudad")}
          >
            Por ciudad
          </button>
        </div>

        {/* TAB: USUARIO */}
        {tab === "usuario" && (
          <div className="admin-card notif-card">
            <div className="admin-card-title">Notificación personalizada</div>
            <p className="notif-desc">
              El mensaje se enviará por los canales activos del usuario (push
              y/o email según sus preferencias).
            </p>

            <div className="notif-form">
              <div className="notif-field">
                <label>ID o username del usuario</label>
                <input
                  className="notif-input"
                  placeholder="Ej: 42 o juan.diaz"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="notif-field">
                <label>Título</label>
                <input
                  className="notif-input"
                  placeholder="Título de la notificación"
                  value={titleU}
                  onChange={(e) => setTitleU(e.target.value)}
                />
              </div>
              <div className="notif-field">
                <label>Mensaje</label>
                <textarea
                  className="notif-textarea"
                  placeholder="Cuerpo del mensaje..."
                  rows={3}
                  value={bodyU}
                  onChange={(e) => setBodyU(e.target.value)}
                />
              </div>
              <div className="notif-field">
                <label>Canal de envío</label>
                <select
                  className="notif-select"
                  value={canal}
                  onChange={(e) => setCanal(e.target.value)}
                >
                  <option>Push (FCM)</option>
                  <option>Email (SendGrid)</option>
                  <option>Ambos canales</option>
                </select>
              </div>
              <button className="btn-notif-send" onClick={handleEnviarUsuario}>
                Enviar notificación
              </button>
            </div>
          </div>
        )}

        {/* TAB: EQUIPO */}
        {tab === "equipo" && (
          <div className="admin-card notif-card">
            <div className="admin-card-title">
              Notificación masiva por equipo
            </div>
            <p className="notif-desc">
              Se notificará a todos los usuarios cuyo equipo favorito sea el
              seleccionado. Canal: Push (FCM).
            </p>

            <div className="notif-form">
              <div className="notif-field">
                <label>Equipo</label>
                <select
                  className="notif-select"
                  value={equipo}
                  onChange={(e) => setEquipo(e.target.value)}
                >
                  {equipos.map((eq) => (
                    <option key={eq}>{eq}</option>
                  ))}
                </select>
              </div>
              <div className="notif-field">
                <label>Tipo de notificación</label>
                <select
                  className="notif-select"
                  value={tipoE}
                  onChange={(e) => setTipoE(e.target.value)}
                >
                  {tiposNotif.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="notif-field">
                <label>Mensaje</label>
                <textarea
                  className="notif-textarea"
                  placeholder="Mensaje masivo..."
                  rows={3}
                  value={bodyE}
                  onChange={(e) => setBodyE(e.target.value)}
                />
              </div>
              <div className="notif-alcance">
                Alcance estimado: <strong>~312 usuarios</strong>
              </div>
              <button className="btn-notif-send" onClick={handleEnviarEquipo}>
                Enviar masivo
              </button>
            </div>
          </div>
        )}

        {/* TAB: CIUDAD */}
        {tab === "ciudad" && (
          <div className="admin-card notif-card">
            <div className="admin-card-title">
              Notificación masiva por ciudad sede
            </div>
            <p className="notif-desc">
              Ideal para avisos logísticos: cambios de horario, información de
              acceso al estadio, etc.
            </p>

            <div className="notif-form">
              <div className="notif-field">
                <label>Ciudad sede</label>
                <select
                  className="notif-select"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                >
                  {ciudades.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="notif-field">
                <label>Título</label>
                <input
                  className="notif-input"
                  placeholder="Aviso logístico o de sede"
                  value={titleC}
                  onChange={(e) => setTitleC(e.target.value)}
                />
              </div>
              <div className="notif-field">
                <label>Mensaje</label>
                <textarea
                  className="notif-textarea"
                  placeholder="Información de la sede..."
                  rows={3}
                  value={bodyC}
                  onChange={(e) => setBodyC(e.target.value)}
                />
              </div>
              <div className="notif-alcance">
                Alcance estimado: <strong>~187 usuarios</strong>
              </div>
              <button className="btn-notif-send" onClick={handleEnviarCiudad}>
                Enviar masivo
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminNotificacionesForm;
