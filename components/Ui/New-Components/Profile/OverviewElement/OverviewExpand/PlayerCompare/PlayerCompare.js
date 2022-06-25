import React from "react";
import PlayerRow from "./PlayerRow";

const LeftPlayers = (props) => {
    const PlayerRows = ["", "", "", "", ""];

    return (
        <div className=" w-3/6 ">
            {PlayerRows.map((player, index) => {
                return <PlayerRow key={index} {...props} />;
            })}
        </div>
    );
};

const RightPlayers = (props) => {
    return <div></div>;
};

const PlayerCompare = () => {
    return (
        <div className=" flex gap-x-4 ">
            <LeftPlayers />
            <LeftPlayers reverse={true} />
        </div>
    );
};

export default PlayerCompare;
