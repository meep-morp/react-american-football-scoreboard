import React from "react";
import {seconds, minutes, setReset, homeTeamName, awayTeamName} from "./App";
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
                <button className="homeButtons__touchdown" onClick={touchdownHome}>{homeTeamName} Touchdown</button>
                <button className="homeButtons__fieldGoal" onClick={fieldGoalHome}>{homeTeamName} Field Goal</button>
            </div>
            <button onClick={quarterUp}>Quarter</button>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={touchdownAway}>{awayTeamName} Touchdown</button>
                <button className="awayButtons__fieldGoal" onClick={fieldGoalAway}>{awayTeamName} Field Goal</button>
            </div>
        </section>
    )
}

export default Buttons