import Player from "./Player";
import { getPlayer } from "./helpers";

const Lineup = props => {
    const { squad, players, playertype, register } = props;

    return (
        <div className="Lineup">
            {players.map((player, index) => {
                const squadPlayer = getPlayer(squad, player.player);
                const fullName = `${squadPlayer.firstname} ${squadPlayer.lastname}`;
                return (
                    <div className="Lineup-player" key={`player-${player.lastname}`}>
                        <Player
                            register={register}
                            index={index}
                            playertype={playertype}
                            number={player.number}
                            name={fullName}
                        />
                    </div>
                );
            })}
            <style jsx>{`
                .Lineup {
                    display: flex;
                    flex-direction: row;
                }
            `}</style>
        </div>
    );
};

export default Lineup;