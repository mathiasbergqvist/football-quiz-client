import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
    createStyles({
        scoreCard: {
            padding: "15px",
            fontSize: "22px",
            background: "aliceblue"
        },
        numericScore: {
            fontWeight: "bold"
        }
    })
);

const RoundScore = props => {
    const { isVisible, score, onClick } = props;
    const classes = useStyles();

    if (!isVisible) {
        return null;
    }

    return (
        <div className="RoundScore">
            <Paper className={classes.scoreCard}>
                <p>
                    Round score:
                    <span className={classes.numericScore}>{score}</span>
                </p>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onClick}
                    style={{ width: "100%", marginTop: "15px" }}
                >
                    Next
                </Button>
            </Paper>
        </div>
    );
};

export default RoundScore;
