import { useState } from "react";
import "./PagoTiquetesForm.css";
import Sidebar from "./SideBar";

const PagoTiquetesForm = () => {
  // Resumen de la reserva (vendrá del backend o por props/state al navegar)
  const reserva = {
    partido: "Colombia vs Brasil",
    fechaHora: "22 Jun 18:00 EST",
    estadio: "CDMX - Estadio Azteca",
    etapa: "Etapa 3",
    categoria: "General",
    subtotal: 300000,
    servicio: 13000,
  };

  // Método de pago seleccionado
  const [metodoPago, setMetodoPago] = useState("tarjeta");

  // Datos de tarjeta
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [vencimiento, setVencimiento] = useState("");
  const [cvv, setCvv] = useState("");

  const formatoCOP = (valor: number) =>
    `$ ${valor.toLocaleString("es-CO")} COP`;

  const handleConfirmarPago = () => {
    console.log("Confirmar pago:", {
      metodoPago,
      numeroTarjeta,
      vencimiento,
      cvv,
      reserva,
    });
    // Aquí va la llamada al backend
  };

  const handleCancelar = () => {
    console.log("Cancelar reserva");
    // Aquí navegas de vuelta o llamas al backend para cancelar
  };

  return (
    <div className="pago-container">

      <Sidebar/>

      {/* CONTENIDO */}
      <section className="content">

        {/* HEADER */}
        <div className="pago-header">
          <h2>Pago de tiquetes</h2>
        </div>

        {/* PANELES */}
        <div className="paneles">

          {/* RESUMEN DE LA RESERVA */}
          <div className="panel">
            <h3 className="panel-titulo">Resumen de la reserva</h3>

            <div className="resumen-row">
              <span className="resumen-label">Partido</span>
              <span className="resumen-valor">{reserva.partido}</span>
            </div>

            <div className="resumen-row">
              <span className="resumen-label">Fecha y hora</span>
              <span className="resumen-valor">{reserva.fechaHora}</span>
            </div>

            <div className="resumen-row">
              <span className="resumen-label">Estadio</span>
              <span className="resumen-valor">{reserva.estadio}</span>
            </div>

            <div className="resumen-row">
              <span className="resumen-label">Etapa</span>
              <span className="resumen-valor">{reserva.etapa}</span>
            </div>

            <div className="resumen-row">
              <span className="resumen-label">Categoría</span>
              <span className="resumen-valor">{reserva.categoria}</span>
            </div>

            <div className="resumen-divisor"></div>

            <div className="resumen-row">
              <span className="resumen-label">Subtotal</span>
              <span className="resumen-valor">{formatoCOP(reserva.subtotal)}</span>
            </div>

            <div className="resumen-row">
              <span className="resumen-label">Servicio</span>
              <span className="resumen-valor">{formatoCOP(reserva.servicio)}</span>
            </div>
          </div>

          {/* MÉTODO DE PAGO */}
          <div className="panel">
            <h3 className="panel-titulo">Método de pago</h3>

            <div className="metodos-row">
              <button
                className={`metodo-btn ${metodoPago === "tarjeta" ? "activo" : ""}`}
                onClick={() => setMetodoPago("tarjeta")}
              >
                Tarjeta
              </button>
              <button
                className={`metodo-btn ${metodoPago === "pse" ? "activo" : ""}`}
                onClick={() => setMetodoPago("pse")}
              >
                PSE
              </button>
              <button
                className={`metodo-btn ${metodoPago === "nequi" ? "activo" : ""}`}
                onClick={() => setMetodoPago("nequi")}
              >
                Nequi
              </button>
            </div>

            <label className="campo-label">Número de tarjeta</label>
            <input
              type="text"
              className="campo-input"
              value={numeroTarjeta}
              onChange={(e) => setNumeroTarjeta(e.target.value)}
              placeholder="•••• •••• •••• ••••"
              maxLength={19}
            />

            <div className="fila-doble">
              <div className="campo-mitad">
                <label className="campo-label">Vencimiento</label>
                <input
                  type="text"
                  className="campo-input"
                  value={vencimiento}
                  onChange={(e) => setVencimiento(e.target.value)}
                  placeholder="mm/aa"
                  maxLength={5}
                />
              </div>

              <div className="campo-mitad">
                <label className="campo-label">CVV</label>
                <input
                  type="text"
                  className="campo-input"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="•••"
                  maxLength={4}
                />
              </div>
            </div>

            <button className="confirmar-btn" onClick={handleConfirmarPago}>
              Confirmar pago
            </button>

            <button className="cancelar-link" onClick={handleCancelar}>
              Cancelar reserva
            </button>
          </div>

        </div>

      </section>
    </div>
  );
};

export default PagoTiquetesForm;