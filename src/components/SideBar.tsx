import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>
            INICIO
          </NavLink>
        </li>

        <li>
          <NavLink to="/partidos" className={({ isActive }) => isActive ? "active" : ""}>
            PARTIDOS
          </NavLink>
        </li>

        <li>
          <NavLink to="/pollas" className={({ isActive }) => isActive ? "active" : ""}>
            POLLAS
          </NavLink>
        </li>

        <li>
          <NavLink to="/rankingPollas" className={({ isActive }) => isActive ? "active" : ""}>
            RANKING POLLAS
          </NavLink>
        </li>

        <li>
          <NavLink to="/album" className={({ isActive }) => isActive ? "active" : ""}>
            ÁLBUM
          </NavLink>
        </li>

        <li>
          <NavLink to="/packsLaminas" className={({ isActive }) => isActive ? "active" : ""}>
            PACKS LÁMINAS
          </NavLink>
        </li>

        <li>
          <NavLink to="/cambioLaminas" className={({ isActive }) => isActive ? "active" : ""}>
            INTERCAMBIO LÁMINAS
          </NavLink>
        </li>

        <li>
          <NavLink to="/misPartidos" className={({ isActive }) => isActive ? "active" : ""}>
            MIS PARTIDOS
          </NavLink>
        </li>

        <li>
          <NavLink to="/notificaciones" className={({ isActive }) => isActive ? "active" : ""}>
            NOTIFICACIONES
          </NavLink>
        </li>

        <li>
          <NavLink to="/eventosRecientes" className={({ isActive }) => isActive ? "active" : ""}>
            EVENTOS RECIENTES
          </NavLink>
        </li>

        <li>
          <NavLink to="/perfil" className={({ isActive }) => isActive ? "active" : ""}>
            MI PERFIL
          </NavLink>
        </li>

        <li>
              
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;