import React from "react";
import { getPlayer, getLastName, getCorrection } from "./helpers";
import Player from "./Player";

const Lineup = (props) => {
    const {
        squad, players, playertype, register, correction
    } = props;

    return (
        <div className="Lineup">
            {players.map((player, index) => {
                const squadPlayer = getPlayer(squad, player.player);

                if (squadPlayer == null) {
                    return (
                        <Player
                            register={register}
                            index={index}
                            playertype={playertype}
                            number={0}
                            name="Unknown"
                            correct={getCorrection(correction, index)}
                        />
                    );
                }

                return (
                    <div
                        className="Lineup-player"
                        key={`player-${player.lastname}`}
                    >
                        <Player
                            register={register}
                            index={index}
                            playertype={playertype}
                            number={player.number}
                            name={getLastName(squadPlayer)}
                            correct={getCorrection(correction, index)}
                        />
                    </div>
                );
            })}
            <style jsx>
                {`
                    .Lineup {
                        display: flex;
                        flex-direction: row;
                    }
                `}
            </style>
        </div>
    );
};

export default Lineup;
