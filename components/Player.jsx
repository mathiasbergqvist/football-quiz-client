import React from "react";
import PlayerInput from "./PlayerInput";

const Player = props => {
    const { number } = props;
    return (
        <div className="Player">
            <div className="Player-number">{number}</div>
            <PlayerInput {...props} />
            <style jsx>
                {`
                    .Player {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin: 15px;
                    }
                    .Player-number {
                        font-family: "Lato", sans-serif;
                        width: 60px;
                        height: 60px;
                        border-radius: 30px;
                        font-size: 20px;
                        font-weight: bold;
                        color: #fff;
                        line-height: 60px;
                        text-align: center;
                        background: #ef5350;
                        margin-bottom: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default Player;
