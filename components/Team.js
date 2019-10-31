import Player from "./Player";
import Lineup from "./Lineup";

const Team = props => {
    const { squad } = props.team;
    const { name, arena } = props.team.team;
    const {
        goal_keeper,
        defenders,
        midfield_defense,
        midfield_offense,
        striker
    } = props.team.lineup;

    const getPlayer = id => {
        return squad.find(player => player.player_id === id);
    };

    return (
        <div className="Team">
            <h1>{name}</h1>
            <h2>Arena: {arena}</h2>
            <Lineup players={striker} squad={squad} />
            <Lineup players={midfield_offense} squad={squad} />
            <Lineup players={midfield_defense} squad={squad} />
            <Lineup players={defenders} squad={squad} />
            <Lineup players={goal_keeper} squad={squad} />
            <style jsx>{`
                .Team {
                    font-family: "Lato", sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .Player {
                    margin: 15px;
                }
            `}</style>
        </div>
    );
};

export default Team;
