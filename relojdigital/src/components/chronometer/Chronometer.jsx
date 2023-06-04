import { useState, useEffect } from "react";
import "./Chronometer.css";

// Definimos la función de Stopwatch sin argumentos con dos destructuring creando con useState cuyo valor inicial es time y la función que cambia el estado es setTime
// El segundo destructuring crea un estado con useState cuyo valor inicial es timerOn y con la función setTimerOn cambaimso su estado
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  // Realizamos el useEffect para crear un cronometro
  // Le añadimos el setInterval para ejecutar la función cada 10 milisegundo sumandole 10 al valor anterior
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="stopwatch">
      {/* Creación de los botones para empezar el cronomero, pararlo, conitnuar y resetearlo  */}
      <h3 className="crono">Cronometro</h3>
      <h2 className="timecrono">{time}</h2>
      <div>
        <button onClick={() => setTimerOn(true)}>Start</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button onClick={() => setTimerOn(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
