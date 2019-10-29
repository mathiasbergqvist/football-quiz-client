import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
    createStyles({
        playerName: {
            minWidth: "200px"
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
                id="outlined-basic"
                margin="normal"
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
                    width: 100px;
                    height: 100px;
                    border-radius: 50px;
                    font-size: 30px;
                    color: #fff;
                    line-height: 100px;
                    text-align: center;
                    background: #ef5350;
                }
            `}</style>
        </div>
    );
};

export default Player;
