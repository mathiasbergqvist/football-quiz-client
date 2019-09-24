import Link from "next/link";
import Head from "next/head";
// import "./style.css";

const Index = () => (
    <div>
        <Head>
            <title>Football Quiz</title>
            <link
                href="http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
                rel="stylesheet"
                type="text/css"
            ></link>
        </Head>
        <h1>Football Quiz</h1>
        <Link href="/new-game" title="New Game">
            <button>New Game</button>
        </Link>
        <Link href="/high-score" title="High Score">
            <button>High Score</button>
        </Link>
        <style global jsx>{`
            body {
                margin: 0;
                padding: 0;
                font-family: "Lato", sans-serif;
                font-size: 16px;
                color: #333;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        `}</style>
    </div>
);

export default Index;
