import "./InicioForm.css";
import Sidebar from "./SideBar";

const InicioForm = () => {
  return (
    <div className="inicio-container">

      <Sidebar />

      {/* CONTENIDO */}
      <section className="content">

        {/* BIENVENIDA */}
        <div className="welcome">
          <h2>Bienvenido Juan</h2>
          <p>Mundial 2026 - 4 partidos a disputarse hoy</p>
        </div>

        {/* CARDS */}
        <div className="cards">
          <div className="card">
            <h3>Pronósticos</h3>
            <p className="big">23</p>
            <span>8 pendientes</span>
          </div>

          <div className="card">
            <h3>Aciertos</h3>
            <p className="big">14</p>
            <span>60.8% precisión</span>
          </div>

          <div className="card">
            <h3>Posición polla</h3>
            <p className="big">#3</p>
            <span>de 8 miembros</span>
          </div>

          <div className="card">
            <h3>Álbum</h3>
            <p className="big">68%</p>
            <span>204 / 300 láminas</span>
          </div>
        </div>

        {/* PARTE INFERIOR */}
        <div className="bottom">

          <div className="matches">
            <h3>Próximos partidos</h3>

            <p>Colombia vs Brasil</p>
            <span>Hoy - 20:00</span>

            <p>Argentina vs Francia</p>
            <span>Hoy - 22:00</span>

            <p>España vs Alemania</p>
            <span>Mañana - 18:00</span>
          </div>

          <div className="ranking">
            <h3>Mi polla — Los del trabajo</h3>
            <ul>
              <li>1. Carlos M. - 41 pts</li>
              <li>2. Sofía R. - 38 pts</li>
              <li>3. Tú (Juan) - 35 pts</li>
              <li>4. Miguel A. - 29 pts</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default InicioForm;