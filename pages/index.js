import Link from "next/link";

const Index = () => (
    <div>
        <h1>Hello Football Quiz</h1>
        <Link href="/new-game" title="New Game">
            <button>New Game</button>
        </Link>
        <Link href="/high-score" title="High Score">
            <button>High Score</button>
        </Link>
    </div>
);

export default Index;
