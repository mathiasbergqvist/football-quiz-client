import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import leven from "leven";

const useStyles = makeStyles(theme =>
    createStyles({
        playerName: {
            minWidth: "150px"
        }
    })
);

const foo = (event, name) => {
    const bar = name.toLowerCase().trim();
    const fii = event.target.value.toLowerCase().trim();
    const value = leven(bar, fii);
    console.log("likliness", value);
};

const Player = props => {
    const classes = useStyles();
    const { number, name, playertype, index, register } = props;
    return (
        <div className="Player">
            <div className="Player-number">{number}</div>
            <input
                key={`${playertype}-${index}`}
                name={`${playertype}-${index}`}
                ref={register}
                placeholder={name}
                onKeyUp={(e) => foo(e, name)}
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
