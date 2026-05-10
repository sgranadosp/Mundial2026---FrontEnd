import { useNavigate } from "react-router-dom";
import "./MisPartidosForm.css";
import Sidebar from "./SideBar";

const MisPartidosForm = () => {
  const navigate = useNavigate();

  const handlePagar = () => {
    navigate("/pagoTiquetes");
  };

  return (
    <div className="mispartidos-container">
      <Sidebar />

      <section className="mispartidos-content">

        {/* TÍTULO */}
        <div className="mispartidos-header">
          <h2>Mis partidos</h2>
          <p>Gestión de entradas para partidos del Mundial 2026</p>
        </div>

        <div className="mispartidos-body">

          {/* ENTRADAS */}
          <div className="card-entradas">
            <div className="entrada">
              <div className="entrada-info">
                <span className="entrada-badge">Pagada</span>
                <p className="entrada-titulo">Colombia vs Brasil</p>
                <span className="entrada-detalle">15 Jun · 20:00 EST · MetLife · Categoría 2</span>
              </div>
              <div className="entrada-acciones">
                <button className="btn-secondary">Transferir</button>
                <button className="btn-secondary">Reembolso</button>
              </div>
            </div>
          </div>

          {/* RESERVAR NUEVA ENTRADA */}
          <div className="card-reserva">
            <h3>Reservar nueva entrada</h3>

            <label>Partido</label>
            <select>
              <option>Portugal vs Marruecos</option>
              <option>Colombia vs Brasil</option>
              <option>Argentina vs Francia</option>
            </select>

            <label>Etapa</label>
            <select>
              <option>Etapa 3 · 250.000 COP</option>
              <option>Etapa 2 · 180.000 COP</option>
              <option>Etapa 1 · 120.000 COP</option>
            </select>

            <div className="reserva-btns">
              <button className="btn-secondary">Reservar</button>
              <button className="btn-primary" onClick={handlePagar}>Pagar</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default MisPartidosForm;