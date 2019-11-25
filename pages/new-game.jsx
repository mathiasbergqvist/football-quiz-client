import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { API } from "aws-amplify";
import Layout from "../components/Layout";

export const NewGame = props => (
    <div>
        <Layout>
            <h1>Featured teams</h1>
            <List
                style={{
                    backgroundColor: "#e6e6e6",
                    paddingRight: "15px",
                    paddingBottom: "15px"
                }}
            >
                {props.teams.map((team, index) => (
                    <>
                        <ListItem key={`item-${team.id}`}>
                            <ListItemText
                                primary={`${index + 1}. ${team.name}`}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </>
                ))}
            </List>
            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ width: "100%", marginTop: "15px" }}
            >
                Start Game
            </Button>
        </Layout>
        <style global jsx>
            {`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: "Lato", sans-serif;
                    font-size: 16px;
                    color: #333;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            `}
        </style>
    </div>
);

NewGame.getInitialProps = async () => {
    try {
        const res = await API.get("teams", "/teams");
        return { teams: res };
    } catch (e) {
        console.error("API ERROR", e);
        return e;
    }
};

export default NewGame;
