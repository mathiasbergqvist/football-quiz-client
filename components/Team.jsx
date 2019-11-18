import React from "react";
import Button from "@material-ui/core/Button";
import useForm from "react-hook-form";
import { correctScore } from "./helpers";
import Lineup from "./Lineup";

const Team = props => {
    const { team } = props;
    const { squad } = team;
    const { name, arena } = team.team;
    const {
        // eslint-disable-next-line
        goal_keeper,
        defenders,
        // eslint-disable-next-line
        midfield_defense,
        // eslint-disable-next-line
        midfield_offense,
        striker
    } = team.lineup;
    const { register, handleSubmit } = useForm(); // initialise the hook

    const onSubmit = data => {
        const score = correctScore(data, squad, props.team.lineup);
        props.onRoundDone(score);
    };

    return (
        <div className="Team">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Team-container">
                    <h1>{name}</h1>
                    <h2>
                        Arena:
                        {arena}
                    </h2>
                    <Lineup
                        players={striker}
                        squad={squad}
                        playertype="striker"
                        register={register}
                    />
                    <Lineup
                        // eslint-disable-next-line
                        players={midfield_offense}
                        squad={squad}
                        playertype="midfield_offense"
                        register={register}
                    />
                    <Lineup
                        // eslint-disable-next-line
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
                        // eslint-disable-next-line
                        players={goal_keeper}
                        squad={squad}
                        playertype="goal_keeper"
                        register={register}
                    />
                    <Button
                        type="submit"
                        value="Submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: "100%", marginTop: "15px" }}
                    >
                        Submit
                    </Button>
                </div>
            </form>
            <style jsx>
                {`
                    .Team-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .Player {
                        margin: 15px;
                    }
                `}
            </style>
        </div>
    );
};

export default Team;
