import React, {useState, useEffect, useRef} from "react";
import Away from "./away";
import Home from "./home";
import Buttons from "./buttons"
import BottomRow from "./BottomRow";
import "./App.css";

const homeTeamName = window.prompt("Home Team Name:");
const awayTeamName = window.prompt("Away Team Name:");
let seconds, minutes, reset, setReset;

function App() {

  const [count, setCount] = useState(1);
  [reset, setReset] = useState(false);
  seconds = useRef(0);
  minutes = useRef(15);

  useEffect(() => {
    window.setInterval(() => {
          setCount(count => count + 1)
          seconds.current -= count;
    }, 800)
  }, [reset]);

  if(seconds.current === 0) {
    minutes.current -= 1;
    seconds.current = 59;
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
            <Home />
          <div className="timer">{minutes.current}:{seconds.current}</div>
            <Away />
        </div>
          <BottomRow />
      </section>
        <Buttons />
    </div>
  );
}


export {homeTeamName, awayTeamName, seconds, minutes, setReset};
export default App;