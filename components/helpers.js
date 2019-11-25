import leven from "leven";

export const CORRECT_ANSWER_POINTS = 100;

export const getPlayer = (squad, id) =>
    squad.find(player => player.player_id === id);

export const getLastName = player => {
    const playerNameArray = player.player_name.split(" ");
    return playerNameArray[playerNameArray.length - 1];
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
    const playerLastName = getLastName(squadPlayer);
    return isCorrectSpelling(playerLastName, answer);
};

export const correctScore = (answers, squad, lineup) => {
    const correction = {
        score: 0,
        goalKeeper: [],
        defenders: [],
        midfieldDefense: [],
        midfieldOffense: [],
        strikers: []
    };
    const {
        // eslint-disable-next-line
        goal_keeper,
        defenders,
        // eslint-disable-next-line
        midfield_defense,
        // eslint-disable-next-line
        midfield_offense,
        striker
    } = lineup;

    goal_keeper.forEach((goalKeeper, index) => {
        const key = `goal_keeper-${index}`;
        if (isCorrectPlayer(goalKeeper, key, answers, squad)) {
            correction.score += CORRECT_ANSWER_POINTS;
            correction.goalKeeper.push(1);
        } else {
            correction.goalKeeper.push(0);
        }
    });

    defenders.forEach((defender, index) => {
        const key = `defender-${index}`;
        if (isCorrectPlayer(defender, key, answers, squad)) {
            correction.score += CORRECT_ANSWER_POINTS;
            correction.defenders.push(1);
        } else {
            correction.defenders.push(0);
        }
    });

    if (midfield_defense.length > 0) {
        midfield_defense.forEach((midfieldDefender, index) => {
            const key = `midfield_defense-${index}`;
            if (isCorrectPlayer(midfieldDefender, key, answers, squad)) {
                correction.score += CORRECT_ANSWER_POINTS;
                correction.midfieldDefense.push(1);
            } else {
                correction.midfieldDefense.push(0);
            }
        });
    }

    if (midfield_offense.length > 0) {
        midfield_offense.forEach((midfieldAttacker, index) => {
            const key = `midfield_offense-${index}`;
            if (isCorrectPlayer(midfieldAttacker, key, answers, squad)) {
                correction.score += CORRECT_ANSWER_POINTS;
                correction.midfieldOffense.push(1);
            } else {
                correction.midfieldOffense.push(0);
            }
        });
    }

    striker.forEach((strikerPlayer, index) => {
        const key = `striker-${index}`;
        if (isCorrectPlayer(strikerPlayer, key, answers, squad)) {
            correction.score += CORRECT_ANSWER_POINTS;
            correction.strikers.push(1);
        } else {
            correction.strikers.push(0);
        }
    });

    return correction;
};

export const getCorrection = (correction, index) => {
    if (!correction.length > 0) {
        return null;
    }
    if (correction[index] === 0) {
        return false;
    }
    return true;
};
