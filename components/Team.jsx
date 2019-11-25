import Button from "@material-ui/core/Button";
import React, { useState } from "react";
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
    const [correction, setCorrection] = useState({
        goalKeeper: [],
        defenders: [],
        midfieldDefense: [],
        midfieldOffense: [],
        strikers: []
    });
    const onSubmit = data => {
        const answers = correctScore(data, squad, props.team.lineup);
        setCorrection({
            goalKeeper: answers.goalKeeper,
            defenders: answers.defenders,
            midfieldDefense: answers.midfieldDefense,
            midfieldOffense: answers.midfieldOffense,
            strikers: answers.strikers
        });
        // props.onRoundDone(answers.score);
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
                        correction={correction.strikers}
                    />
                    <Lineup
                        // eslint-disable-next-line
                        players={midfield_offense}
                        squad={squad}
                        playertype="midfield_offense"
                        register={register}
                        correction={correction.midfieldOffense}
                    />
                    <Lineup
                        // eslint-disable-next-line
                        players={midfield_defense}
                        squad={squad}
                        playertype="midfield_defense"
                        register={register}
                        correction={correction.midfieldDefense}
                    />
                    <Lineup
                        players={defenders}
                        squad={squad}
                        playertype="defender"
                        register={register}
                        correction={correction.defenders}
                    />
                    <Lineup
                        // eslint-disable-next-line
                        players={goal_keeper}
                        squad={squad}
                        playertype="goal_keeper"
                        register={register}
                        correction={correction.goalKeeper}
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
