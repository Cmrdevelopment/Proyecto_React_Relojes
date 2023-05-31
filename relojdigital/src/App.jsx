import "./App.css";
import DigitalClock from "./components/digitalClock/DigitalClock";
import Countdown from "./components/countDown/CountDown";
import Stopwatch from "./components/chronometer/Chronometer";

const App = () => {
  return (
    <>
      <DigitalClock>DigitalClock</DigitalClock>
      <Countdown>Countdown</Countdown>
      <Stopwatch>Stopwatch</Stopwatch>
    </>
  );
};

export default App;
