import leven from "leven";

export const CORRECT_ANSWER_POINTS = 100;

export const getPlayer = (squad, id) => {
    return squad.find(player => player.player_id === id);
};

export const isCorrectSpelling = (string1, string2) => {
    const trimmedString1 = string1.toLowerCase().trim();
    const trimmedString2 = string2.toLowerCase().trim();
    const levenScore = leven(trimmedString1, trimmedString2);
    return levenScore <= 3;
};

export const isCorrectPlayer = (player, key, answers, squad) => {
    const squadPlayer = getPlayer(squad, player.player);
    const answer = answers[key];
    return isCorrectSpelling(squadPlayer.lastname, answer);
};

export const correctScore = (answers, squad, lineup) => {
    debugger;

    let score = 0;
    const {
        goal_keeper,
        defenders,
        midfield_defense,
        midfield_offense,
        striker
    } = lineup;

    goal_keeper.map((goal_keeper, index) => {
        const key = `goal_keeper-${index}`;
        if (isCorrectPlayer(goal_keeper, key, answers, squad)) {
            score += CORRECT_ANSWER_POINTS;
        }
    });

    defenders.map((defender, index) => {
        const key = `defender-${index}`;
        if (isCorrectPlayer(defender, key, answers, squad)) {
            score += CORRECT_ANSWER_POINTS;
        }
    });

    if (midfield_defense.lenght > 0) {
        midfield_defense.map((midfield_defender, index) => {
            const key = `midfield_defense-${index}`;
            if (isCorrectPlayer(midfield_defender, key, answers, squad)) {
                score += CORRECT_ANSWER_POINTS;
            }
        });
    }

    if (midfield_offense.lenght > 0) {
        midfield_offense.map((midfield_attacker, index) => {
            const key = `midfield_offense-${index}`;
            if (isCorrectPlayer(midfield_attacker, key, answers, squad)) {
                score += CORRECT_ANSWER_POINTS;
            }
        });
    }

    striker.map((striker_player, index) => {
        const key = `striker-${index}`;
        if (isCorrectPlayer(striker_player, key, answers, squad)) {
            score += CORRECT_ANSWER_POINTS;
        }
    });

    return score;
};
