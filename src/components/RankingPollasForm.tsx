import "./RankingPollasForm.css";
import Sidebar from "./SideBar";

const RankingPollasForm = () => {
  // Datos de ejemplo (luego vendrán del backend)
  const grupos = [
    { id: 1, nombre: "Los del trabajo", activo: true },
    { id: 2, nombre: "Familia Pérez", activo: false },
  ];

  const clasificacion = [
    { pos: 1, jugador: "Carlos M.", pts: 41, exactos: 5, porcentaje: 73 },
    { pos: 2, jugador: "Sofía R.", pts: 38, exactos: 4, porcentaje: 68 },
    { pos: 3, jugador: "Tú (Juan)", pts: 35, exactos: 3, porcentaje: 61 },
    { pos: 4, jugador: "Ariana V.", pts: 29, exactos: 2, porcentaje: 52 },
    { pos: 5, jugador: "Pedro F.", pts: 27, exactos: 2, porcentaje: 48 },
    { pos: 6, jugador: "Laura S.", pts: 21, exactos: 1, porcentaje: 38 },
  ];

  const estadisticas = {
    puntosTotales: 35,
    pronosticos: 23,
    exactos: 3,
    aciertos: 11,
    precisionGeneral: 61,
  };

  return (
    <div className="ranking-container">

      <Sidebar/>

      {/* CONTENIDO */}
      <section className="content">

        {/* HEADER + SELECTOR DE GRUPOS */}
        <div className="top-row">
          <div className="header-card">
            <h2>Ranking de pollas</h2>
            <p>Clasificación actualizada tras cada partido</p>
          </div>

          <div className="grupos">
            {grupos.map((g) => (
              <div
                key={g.id}
                className={`grupo-btn ${g.activo ? "activo" : ""}`}
              >
                {g.nombre}
              </div>
            ))}
          </div>
        </div>

        {/* PARTE INFERIOR: TABLA + TROFEO + ESTADÍSTICAS */}
        <div className="bottom">

          {/* TABLA DE CLASIFICACIÓN */}
          <div className="clasificacion">
            <h3>Clasificación por grupo</h3>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Jugador</th>
                  <th>Pts</th>
                  <th>Exactos</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {clasificacion.map((row) => (
                  <tr key={row.pos}>
                    <td>{row.pos}</td>
                    <td>{row.jugador}</td>
                    <td>{row.pts}</td>
                    <td>{row.exactos}</td>
                    <td>{row.porcentaje}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MIS ESTADÍSTICAS */}
          <div className="estadisticas">
            <h3>Mis estadísticas</h3>

            <div className="stats-grid">
              <div className="stat-card">
                <p className="stat-label">Puntos totales</p>
                <p className="stat-value">{estadisticas.puntosTotales}</p>
              </div>

              <div className="stat-card">
                <p className="stat-label">Pronósticos</p>
                <p className="stat-value">{estadisticas.pronosticos}</p>
              </div>

              <div className="stat-card">
                <p className="stat-label">Exactos</p>
                <p className="stat-value">{estadisticas.exactos}</p>
              </div>

              <div className="stat-card">
                <p className="stat-label">Aciertos</p>
                <p className="stat-value">{estadisticas.aciertos}</p>
              </div>
            </div>

            <div className="precision">
              <p>Precisión general</p>
              <div className="precision-bar">
                <div
                  className="precision-fill"
                  style={{ width: `${estadisticas.precisionGeneral}%` }}
                ></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default RankingPollasForm;