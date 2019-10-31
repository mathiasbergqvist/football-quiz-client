import useForm from "react-hook-form";
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
    const { register, handleSubmit, errors } = useForm(); // initialise the hook

    const getPlayer = id => {
        return squad.find(player => player.player_id === id);
    };

    const onSubmit = data => {
        event.preventDefault();
        debugger;
        console.log("result", data);
    };

    return (
        <div className="Team">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Team-container">
                    <h1>{name}</h1>
                    <h2>Arena: {arena}</h2>
                    <Lineup
                        players={striker}
                        squad={squad}
                        playertype="striker"
                        register={register}
                    />
                    <Lineup
                        players={midfield_offense}
                        squad={squad}
                        playertype="midfield_offense"
                        register={register}
                    />
                    <Lineup
                        players={midfield_defense}
                        squad={squad}
                        playertype="midfield_defense"
                        register={register}
                    />
                    <Lineup
                        players={defenders}
                        squad={squad}
                        playertype="defender"
                        register={register}
                    />
                    <Lineup
                        players={goal_keeper}
                        squad={squad}
                        playertype="goal_keeper"
                        register={register}
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <style jsx>{`
                .Team-container {
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
