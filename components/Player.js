import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
    createStyles({
        playerName: {
            minWidth: "150px"
        }
    })
);

const Player = props => {
    const classes = useStyles();
    const { number, name } = props;
    return (
        <div className="Player">
            <div className="Player-number">{number}</div>
            <TextField
                className={classes.playerName}
                label="Answer"
                id="filled-margin-dense"
                margin="dense"
                variant="outlined"
                placeholder={name}
            />
            <style jsx>{`
                .Player {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 15px;
                }
                .Player-number {
                    font-family: "Lato", sans-serif;
                    width: 60px;
                    height: 60px;
                    border-radius: 30px;
                    font-size: 20px;
                    font-weight: bold;
                    color: #fff;
                    line-height: 60px;
                    text-align: center;
                    background: #ef5350;
                }
            `}</style>
        </div>
    );
};

export default Player;
