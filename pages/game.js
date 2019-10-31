import React, { useState } from "react";
import { API } from "aws-amplify";
import Button from "@material-ui/core/Button";
import Layout from "../components/Layout";
import Team from "../components/Team";

export const Game = props => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [currentTeam, setCurrentTeam] = useState(props.firstTeam);


    return (
        <div>
            <Layout>
                <h1>
                    Question {currentQuestion} of {props.teams.length}
                </h1>
                <Team team={currentTeam} />
                <h3>Score: {score}</h3>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ width: "100%", marginTop: "15px" }}
                >
                    Submit
                </Button>
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
    try {
        const teams = await API.get("teams", "/teams");
        const firstTeamId = teams[0].teamId;
        const firstTeam = await API.get("teams", `/team/${firstTeamId}`);
        return {
            teams,
            firstTeam
        };
    } catch (e) {
        console.log("API ERROR", e);
    }
};

export default Game;
