import React from "react";

const PlayerInput = props => {
    const { name, playertype, index, register, correct } = props;

    const getClassname = isCorrect => {
        if (isCorrect == null) {
            return "PlayerInput-uncorrected";
        }
        if (isCorrect) {
            return "PlayerInput-correct";
        }
        return "PlayerInput-incorrect";
    };

    const getPlaceholder = (playerName, isCorrect) => {
        if (isCorrect == null) {
            return null;
        }
        return playerName;
    };

    return (
        <>
            <input
                className={getClassname(correct)}
                key={`${playertype}-${index}`}
                name={`${playertype}-${index}`}
                ref={register}
                placeholder={getPlaceholder(name, correct)}
                disabled={correct !== null}
            />
            <style jsx>
                {`
                    input {
                        font-family: "Lato", sans-serif;
                        font-size: 14px;
                        height: 30px;
                        border-radius: 5px;
                    }
                    .PlayerInput-correct {
                        border: 2px solid green;
                    }
                    .PlayerInput-incorrect {
                        border: 2px solid red;
                    }
                `}
            </style>
        </>
    );
};

export default PlayerInput;
