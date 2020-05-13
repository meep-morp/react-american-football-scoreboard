import React, { useState } from "react";
import {homeTeamName} from "./App";
import "./App.css";
import { quarter } from "./BottomRow";

let homeScore;
let setHomeScore;
let qtrScoreHome = homeScore;

const Home = () => {

[homeScore, setHomeScore] = useState(0);

    return (
    <div className="home">
        <h2 className="home__name" >{homeTeamName}</h2>
        <div className="home__score">{homeScore}</div>
    </div>
    )
}


export {homeScore, qtrScoreHome, setHomeScore};
export default Home