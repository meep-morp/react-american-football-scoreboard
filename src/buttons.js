import React from "react";
import {seconds, minutes, setReset} from "./App";
import {homeScore, setHomeScore} from "./home";
import {setAwayScore, awayScore} from "./away"
import {quarter, setQuarter} from "./BottomRow";
import "./App.css";

let quarterUp;

const Buttons = () => {
  
    const touchdownHome = event => {
      setHomeScore(homeScore + 7);
    }
    const touchdownAway = event => {
      setAwayScore(awayScore + 7);
    }
  
    const fieldGoalHome = event => {
      setHomeScore(homeScore + 3);
    }
  
    const fieldGoalAway = event => {
      setAwayScore(awayScore + 3);
    }

    quarterUp = event => {
        if (quarter < 4) {
          setQuarter(quarter + 1);
        } 

        setReset(true);
        seconds.current = 0;
        minutes.current = 15;
        setReset(false);
    }

    return (
        <section className="buttons">
            <div className="homeButtons">
                <button className="homeButtons__touchdown" onClick={touchdownHome}>Home Touchdown</button>
                <button className="homeButtons__fieldGoal" onClick={fieldGoalHome}>Home Field Goal</button>
            </div>
            <button onClick={quarterUp}>Quarter</button>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={touchdownAway}>Away Touchdown</button>
                <button className="awayButtons__fieldGoal" onClick={fieldGoalAway}>Away Field Goal</button>
            </div>
        </section>
    )
}

export default Buttons