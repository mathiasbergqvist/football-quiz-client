import Player from "./Player";

const Lineup = props => {
    const { squad, players } = props;

    const getPlayer = id => {
        return squad.find(player => player.player_id === id);
    };

    return (
        <div className="Lineup">
            {players.map(player => {
                const squadPlayer = getPlayer(player.player);
                const fullName = `${squadPlayer.firstname} ${squadPlayer.lastname}`;
                return <Player number={player.number} name={fullName} />;
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
