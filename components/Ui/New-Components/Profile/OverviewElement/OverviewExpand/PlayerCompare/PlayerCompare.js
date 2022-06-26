import React from "react";
import PlayerRow from "./PlayerRow";

const LeftPlayers = (props) => {
    const PlayerRows = ["", "", "", "", ""];

    return (
        <div className=" w-3/6 ">
            {PlayerRows.map((player, index) => {
                return <PlayerRow key={index} reverse={false} index={index} />;
            })}
        </div>
    );
};

const CenterPrecisionAndInspiration = (props) => {
    return <div className={`w-2/6`}></div>;
};

const RightPlayers = (props) => {
    const PlayerRows = ["", "", "", "", ""];

    return (
        <div className=" w-3/6 ">
            {PlayerRows.map((player, index) => {
                return <PlayerRow key={index} reverse={true} index={index} />;
            })}
        </div>
    );
};

const PlayerCompare = () => {
    return (
        <div className=" flex gap-x-4 mt-[37px] ">
            <LeftPlayers />
            {/* <CenterPrecisionAndInspiration /> */}
            <RightPlayers />
        </div>
    );
};

export default PlayerCompare;
