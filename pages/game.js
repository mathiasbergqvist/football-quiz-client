import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Layout from "../components/Layout";
import Team from "../components/Team";
import { getTeams, getTeam } from "../api";

export const Game = props => {
    const [score, setScore] = useState(0);
    const [currentTeam, setCurrentTeam] = useState(props.firstTeam);
    const [currentRound, setCurrentRound] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const setGameScoreAndStartNextRound = points => {
        setScore(points);
        const nextRound = currentRound + 1;
        setCurrentRound(nextRound);
        const nextTeamId = props.teams[currentRound].teamId;
        setIsLoading(true);
        getTeam(nextTeamId)
        .then(nextTeam => {
            setCurrentTeam(nextTeam);
        })
        .catch(e => {
            console.error("Error fetching next team", e);
        });
        debugger;
        setIsLoading(false);
        // const nextTeam = await getTeam(nextTeamId);
        // await setIsLoading(false);
        // debugger;
        // await setCurrentTeam(nextTeam);
    };

    return (
        <div className="Game">
            <Layout>
                {!isLoading ? (
                    <div className="Game-Team">
                        <h1>
                            Question {currentRound+1} of {props.teams.length}
                        </h1>
                        <Team
                            team={currentTeam}
                            onRoundDone={setGameScoreAndStartNextRound}
                        />
                        <h3>Score: {score}</h3>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{ width: "100%", marginTop: "15px" }}
                        >
                            Submit
                        </Button>
                    </div>
                ) : (
                    <h2>Loading team...</h2>
                )}
            </Layout>
            <style global jsx>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: "Lato", sans-serif;
                    font-size: 16px;
                    color: #333;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            `}</style>
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