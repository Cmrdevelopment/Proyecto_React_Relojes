import "./digitalClock.css";
import React, { useEffect, useState } from "react";

// Definimos la función de DigitalClock sin argumentos haciendo destructuring creando con useState cuyo valor inicial es clockState (hora actual) y la función que cambia el estado (en este caso la hora) es setClockState
const DigitalClock = () => {
  const [clockState, setClockState] = useState();
  // Realizamos el useEffect para hacer una llamada externa para obtener los datos de la hora local y actualizarla repetidamente en formato cadena de texto cada segundo (setInterval)
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  // Nos dará el renderizado del reloj digital
  return (
    <div className="digital-clock">
      <h5 className="horaactual">Hora actual de Canarias</h5>
      <h2 className="clock">{clockState}</h2>
    </div>
  );
};

export default DigitalClock;
