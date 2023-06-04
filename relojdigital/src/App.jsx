import "./App.css";
import DigitalClock from "./components/digitalClock/DigitalClock";
import Countdown from "./components/countDown/CountDown";
import Stopwatch from "./components/chronometer/Chronometer";

// Es la función que ejecuta y trae los archivos de los componentes DigitalClock, Countdown y Countdown
const App = () => {
  return (
    <div className="everyclock">
      <main>
        <DigitalClock>DigitalClock</DigitalClock>
        <Countdown>Countdown</Countdown>
        <Stopwatch>Stopwatch</Stopwatch>
      </main>
      {/* pie de página */}
      <div className="pieCopy">@cmrbolsa - 2023 - Relojes React -</div>
    </div>
  );
};

export default App;
