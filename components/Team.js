import Player from "./Player";

const Team = props => {
    const { name, arena } = props.team.team;
    const {
        goal_keeper,
        defenders,
        midfield_defense,
        midfield_offence,
        striker
    } = props.team.lineup;
    const getPlayer = id => {
        return props.team.squad.find(player => player.player_id === id);
    };

    return (
        <div className="Team">
            <h1>{name}</h1>
            <h2>Arena: {arena}</h2>
            <div className="Team-playerGroup">
                {striker.map(strikerPlayer => {
                    const squadStriker = getPlayer(strikerPlayer.player);
                    const fullName = `${squadStriker.firstname} ${squadStriker.lastname}`;
                    return <Player number={strikerPlayer.number} name={fullName} />;
                })}
            </div>
            <div className="Team-playerGroup">
                {defenders.map(defender => {
                    const squadDefender = getPlayer(defender.player);
                    const fullName = `${squadDefender.firstname} ${squadDefender.lastname}`;
                    return <Player number={defender.number} name={fullName} />;
                })}
            </div>
            <style jsx>{`
                .Team {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .Team-playerGroup {
                    display: flex;
                    flex-direction: row;
                    margin: 20px 0;
                }
                .Player {
                    margin: 15px;
                }
            `}</style>
        </div>
    );
};

export default Team;
