import { useState } from "react";
import "./PacksLaminasForm.css";
import Sidebar from "./SideBar";

const PacksLaminasForm = () => {
  // Paquetes disponibles para abrir
  const paquetes = [
    {
      id: 1,
      icono: "🎁",
      titulo: "Inicio de sesión diario",
      cantidad: "5 láminas",
      tipo: "diario",
    },
    {
      id: 2,
      icono: "🏆",
      titulo: "Premio polla – semana 2",
      cantidad: "5 láminas",
      tipo: "premio",
    },
  ];

  // Historial de paquetes abiertos
  const historial = [
    { fecha: "Colombia vs Brasil", origen: "Pronóstico completado", estado: "Abierto" },
    { fecha: "Argentina vs Francia", origen: "Inicio de sesión diario", estado: "Abierto" },
  ];

  // Estado del input del código promocional
  const [codigoPromo, setCodigoPromo] = useState("");

  const handleAbrirPaquete = (id: number) => {
    console.log("Abrir paquete:", id);
    // Aquí va la llamada al backend
  };

  const handleCanjearCodigo = () => {
    console.log("Canjear código:", codigoPromo);
    // Aquí va la llamada al backend
    setCodigoPromo("");
  };

  return (
    <div className="packs-container">

      <Sidebar/>

      {/* CONTENIDO */}
      <section className="content">

        {/* HEADER */}
        <div className="packs-header">
          <h2>Mi colección</h2>
        </div>

        {/* CARDS DE PAQUETES */}
        <div className="paquetes-grid">

          {paquetes.map((p) => (
            <div key={p.id} className="paquete-card">
              <div className="paquete-icono">{p.icono}</div>
              <h3>{p.titulo}</h3>
              <p className="paquete-cantidad">{p.cantidad}</p>
              <button
                className="abrir-btn"
                onClick={() => handleAbrirPaquete(p.id)}
              >
                Abrir paquete
              </button>
            </div>
          ))}

          {/* CARD DE CÓDIGO PROMOCIONAL */}
          <div className="paquete-card">
            <div className="paquete-icono">📦</div>
            <h3>Código promocional</h3>
            <p className="paquete-cantidad">Ingresa tu código promo</p>
            <div className="codigo-row">
              <input
                type="text"
                value={codigoPromo}
                onChange={(e) => setCodigoPromo(e.target.value)}
                placeholder=""
              />
              <button className="canjear-btn" onClick={handleCanjearCodigo}>
                Canjear
              </button>
            </div>
          </div>

        </div>

        {/* HISTORIAL DE PAQUETES */}
        <div className="historial">
          <h3>Historial de paquetes</h3>

          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Origen</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {historial.map((h, i) => (
                <tr key={i}>
                  <td>{h.fecha}</td>
                  <td>{h.origen}</td>
                  <td>
                    <span className="estado-btn">{h.estado}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </div>
  );
};

export default PacksLaminasForm;