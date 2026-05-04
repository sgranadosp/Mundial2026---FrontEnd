import "./PollasForm.css";
import Sidebar from "./SideBar";

const PollasForm = () => {
  return (
    <div className="pollas-container">

      <Sidebar />

      <section className="content">

        {/* BIENVENIDA */}
        <div className="welcome">
          <h2>Bienvenido Usuario123</h2>
          <p>Mundial 2026 - 4 partidos a disputarse hoy</p>
        </div>

        {/* GRUPOS */}
        <div className="groups">
          <div className="group-card">Los del trabajo</div>
          <div className="group-card">Familia Pérez</div>
          <div className="group-card">+ Crear grupo</div>
          <div className="group-card">Unirse con código</div>
        </div>

        {/* PRONÓSTICOS */}
        <div className="predictions">

          {/* PENDIENTES */}
          <div className="card-pred">
            <h3>Pronósticos pendientes</h3>

            <div className="match">
              <div>
                <p>Colombia vs Brasil</p>
                <span>Cierre: hoy 19:00</span>
              </div>

              <div className="score">
                <input type="number" placeholder="0" />
                <span>-</span>
                <input type="number" placeholder="0" />
              </div>

              <button>Guardar</button>
            </div>

            <hr />

            <div className="match">
              <div>
                <p>Portugal vs Marruecos</p>
                <span>Cierre: 16 Jun 14:00</span>
              </div>

              <div className="score">
                <input type="number" placeholder="0" />
                <span>-</span>
                <input type="number" placeholder="0" />
              </div>

              <button>Guardar</button>
            </div>
          </div>

          {/* EVALUADOS */}
          <div className="card-pred">
            <h3>Pronósticos evaluados</h3>

            <div className="evaluated">
              <div>
                <p>España vs Alemania</p>
                <span>Resultado: 1 - 1</span>
                <span>Mi pronóstico: 2 - 1</span>
                <span>Ganador: España</span>
              </div>

              <div className="points">+1 pt</div>
            </div>

            <hr />

            <div className="evaluated">
              <div>
                <p>Francia vs Croacia</p>
                <span>Resultado: 3 - 0</span>
                <span>Mi pronóstico: 3 - 0</span>
                <span>Ganador: Francia</span>
              </div>

              <div className="points">+3 pt</div>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default PollasForm;