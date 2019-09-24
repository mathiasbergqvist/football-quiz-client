import Link from "next/link";
import Head from "next/head";
// import "./style.css";
import Button from "@material-ui/core/Button";

const Index = () => (
    <div>
        <Head>
            <title>Football Quiz</title>
            <link
                href="http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
                rel="stylesheet"
                type="text/css"
            ></link>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
        </Head>
        <h1>Football Quiz</h1>
        <p>This is a football game</p>
        <Link href="/new-game" title="New Game">
            <Button variant="contained" color="primary" size="large">
                New Game
            </Button>
        </Link>
        <Link href="/high-score" title="High Score">
            <Button variant="contained" color="primary" size="large">
                High Score
            </Button>
        </Link>
        <style global jsx>{`
            body {
                margin: 0;
                padding: 0;
                font-family: "Roboto", sans-serif;
                font-size: 16px;
                color: #333;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        `}</style>
    </div>
);

export default Index;
