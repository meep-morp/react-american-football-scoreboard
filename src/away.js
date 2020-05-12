import React, { useState } from "react";
import {awayTeamName} from "./App"
import "./App.css";

let awayScore;
let setAwayScore;
let qtrScoreAway = awayScore;

const Away = () => {

    [awayScore, setAwayScore] = useState(0);

    return (
    <div className="away">
        <h2 className="away__name" >{awayTeamName}</h2>
        <div className="away__score">{awayScore}</div>
    </div>
    )
}


export {awayScore, setAwayScore, qtrScoreAway};
export default Away