import { useState, useEffect } from "react";
import "./CountDown.css";

// Definimos la función de Countdown sin argumentos haciendo destructuring creando con useState cuyo valor inicial es time y la función que cambia el estado es setTime
const Countdown = () => {
  const [time, setTime] = useState("");
  // Realizamos el useEffect para para ejecutar desde una fecha determinada, en este caso desde el 1 ENERO 2025, una cuenta  atrás
  // Le añadimos el setInterval para ejecutar la función cada segundo y así actualizar la cuenta regresiva
  useEffect(() => {
    let countDownDate = new Date("June 30, 2023 00:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED");
      }
    }, 1000);
  }, []);

  return (
    <div className="countdown">
      <h3 className="horaterminar">Tiempo para terminar el BootCamp</h3>
      <h2 className="timecount">{time}</h2>
    </div>
  );
};

export default Countdown;
