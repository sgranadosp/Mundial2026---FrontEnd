import { NavLink } from "react-router-dom";
import "./SidebarAdmin.css";

const SidebarAdmin = () => {
  return (
    <aside className="sidebar-admin">
      <div className="sidebar-admin-label">PANEL ADMINISTRADOR</div>
      <ul>
        <li>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            DASHBOARD
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/usuarios"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            USUARIOS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/partidos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            PARTIDOS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/notificaciones"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            NOTIFICACIONES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/auditoria"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            AUDITORÍA
          </NavLink>
        </li>
        <li className="sidebar-admin-divider" />
        <li>
          <NavLink
            to="/admin/perfil"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            MI PERFIL
          </NavLink>
        </li>
        <li>
          <NavLink to="/logIn" className="">
            CERRAR SESIÓN
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarAdmin;
