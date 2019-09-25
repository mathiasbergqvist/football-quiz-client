import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { API } from "aws-amplify";

export const NewGame = props => (
    <div>
        <Layout>
            <h1>New game page</h1>
            <ol>
                {props.teams.map(team => (
                    <li key={`Key-${team.id}`}>{team.name}</li>
                ))}
            </ol>
        </Layout>
    </div>
);

NewGame.getInitialProps = async () => {
    try {
        const res = await API.get("teams", "/teams");
        return { teams: res };
    } catch (e) {
        console.log("API ERROR", e);
    }
};

export default NewGame;
