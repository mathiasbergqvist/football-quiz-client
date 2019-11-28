import React, { useState } from "react";
import { getTeam, getTeams } from "../api";
import Layout from "../components/Layout";
import Team from "../components/Team";
import RoundScore from "../components/RoundScore";

export const Game = props => {
    const [score, setScore] = useState(0);
    const [roundScore, setRoundScore] = useState(0);
    const [currentTeam, setCurrentTeam] = useState(props.firstTeam);
    const [currentRound, setCurrentRound] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [showingAnswers, setShowingAnswers] = useState(false);

    const startNextRound = async () => {
        const nextRound = currentRound + 1;
        setCurrentRound(nextRound);
        const nextTeamId = props.teams[nextRound].teamId;
        setIsLoading(true);
        const nextTeam = await getTeam(nextTeamId);
        await setCurrentTeam(nextTeam);
        setIsLoading(false);
    };

    const onRoundDone = points => {
        window.scrollTo(0, 0);
        setRoundScore(points);
        const totalScore = score + points;
        setScore(totalScore);
        setShowingAnswers(true);
    };

    return (
        <div className="Game">
            <Layout>
                {!isLoading ? (
                    <div className="Game-Team">
                        <h1>
                            Question {currentRound + 1} of {props.teams.length}
                        </h1>
                        <h3>
                            Score:
                            {score}
                        </h3>
                        <RoundScore
                            isVisible={showingAnswers}
                            score={roundScore}
                            onClick={startNextRound}
                        />
                        <Team
                            team={currentTeam}
                            onRoundDone={onRoundDone}
                            showingAnswers={showingAnswers}
                        />
                    </div>
                ) : (
                    <h2>Loading team...</h2>
                )}
            </Layout>
            <style global jsx>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: "Lato", sans-serif;
                        font-size: 16px;
                        color: #333;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                `}
            </style>
        </div>
    );
};

Game.getInitialProps = async () => {
    const teams = await getTeams();
    const firstTeamId = teams[0].teamId;
    const firstTeam = await getTeam(firstTeamId);
    return {
        teams,
        firstTeam
    };
};

export default Game;
