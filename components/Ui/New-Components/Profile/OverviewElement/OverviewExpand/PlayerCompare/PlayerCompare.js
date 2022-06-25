import React from "react";
import PlayerRow from "./PlayerRow";

const LeftPlayers = (props) => {
    const PlayerRows = ["", "", "", "", ""];

    return (
        <div className=" w-3/6 ">
            {PlayerRows.map((player, index) => {
                return <PlayerRow key={index} {...props} index={index} />;
            })}
        </div>
    );
};

const RightPlayers = (props) => {
    return <div></div>;
};

const PlayerCompare = () => {
    return (
        <div className=" flex gap-x-4 mt-[37px] ">
            <LeftPlayers />
            <LeftPlayers reverse={true} />
        </div>
    );
};

export default PlayerCompare;
