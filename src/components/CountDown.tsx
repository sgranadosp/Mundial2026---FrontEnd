import { useEffect, useState } from "react";
import "./Countdown.css";

// Fecha de inicio del Mundial 2026
const FECHA_MUNDIAL = new Date("2026-06-11T00:00:00");

function calcularTiempoRestante() {
  const ahora = new Date();
  const diferencia = FECHA_MUNDIAL.getTime() - ahora.getTime();

  if (diferencia <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  return {
    dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diferencia / (1000 * 60)) % 60),
    segundos: Math.floor((diferencia / 1000) % 60),
  };
}

export default function Countdown() {
  const [tiempo, setTiempo] = useState(calcularTiempoRestante());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempoRestante());
    }, 1000); // se actualiza cada segundo

    return () => clearInterval(intervalo); // limpia el intervalo al desmontar
  }, []);

  const unidades = [
    { valor: tiempo.dias, label: "días" },
    { valor: tiempo.horas, label: "horas" },
    { valor: tiempo.minutos, label: "min" },
    { valor: tiempo.segundos, label: "seg" },
  ];

  return (
    <div className="countdown-wrapper">
      <p className="countdown-titulo">Copa Mundial de la FIFA 2026™</p>
      <p className="countdown-subtitulo">11 de junio – 19 de julio de 2026</p>
      <div className="countdown-bloques">
        {unidades.map(({ valor, label }) => (
          <div className="countdown-bloque" key={label}>
            <span className="countdown-numero">
              {String(valor).padStart(2, "0")}
            </span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
