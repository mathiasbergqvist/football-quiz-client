import Link from "next/link";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import Layout from "../components/Layout";
import Amplify from "aws-amplify";

Amplify.configure({
    API: {
        endpoints: [
            {
                name: "teams",
                endpoint: process.env.API_GATEWAY,
                region: process.env.REGION
            }
        ]
    }
});

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
        <Layout>
            <div>
                <h1>⚽ Welcome To Football Quiz!</h1>
                <p>Are you ready for the challange?</p>
                <Link href="/game" title="New Game">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: "100%" }}
                    >
                        New Game
                    </Button>
                </Link>
                <br />
                <Link href="/high-score" title="High Score">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: "100%", marginTop: "15px" }}
                    >
                        High Score
                    </Button>
                </Link>
            </div>
        </Layout>
        <style jsx>{`
            div {
                text-align: center;
            }
        `}</style>
    </div>
);

export default Index;
