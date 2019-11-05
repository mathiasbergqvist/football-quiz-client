import { API } from "aws-amplify";

export const getTeams = async () => {
    try {
        const teams = await API.get("teams", "/teams");
        return teams;
    } catch (e) {
        console.error("API ERROR - getTeams()", e);
    }
};

export const getTeam = async teamId => {
    try {
        const team = await API.get("teams", `/team/${teamId}`);
        return team;
    } catch (e) {
        console.error("API ERROR - getTeam()", e);
    }
};
