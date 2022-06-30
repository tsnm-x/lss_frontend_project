import React from "react";
import PlayerRow from "./PlayerRow";
import RunesOverview from "./RunesOverview";

const LeftPlayers = (props) => {
    const PlayerRows = ["", "", "", "", ""];

    return (
        <div className={`w-3/6 h-full flex flex-col justify-between py-2 ${props.showRunes ? 'w-2/6': 'w-3/6'}`}>
            {PlayerRows.map((player, index) => {
                return <PlayerRow key={index} reverse={false} index={index} gold={props.showRunes} />;
            })}
        </div>
    );
};

// const CenterPrecisionAndInspiration = (props) => {
//     return <div className={`w-2/6 h-[240px] rounded bg-gray-600 flex items-center justify-center `}>
//         <h3 className=" font-gotham capitalize text-center text-2xl font-bold p-5 border-accent-color text-accent-color border-[3px] rounded-full ">coming soon</h3>
//     </div>;
// };

const RightPlayers = (props) => {
    const PlayerRows = ["", "", "", "", ""];

    return (
        <div className={` h-full flex flex-col justify-between py-2 ${props.showRunes ? 'w-2/6' : 'w-3/6'}`}>
            {PlayerRows.map((player, index) => {
                return <PlayerRow key={index} reverse={true} index={index} gold={props.showRunes} />;
            })}
        </div>
    );
};

const PlayerCompare = (props) => {
    return (
        <div className=" flex gap-x-4 h-[340px] ">
            <LeftPlayers showRunes={props.showRunes} />
            {props.showRunes && (
                <RunesOverview />
            )}
            <RightPlayers showRunes={props.showRunes} />
        </div>
    );
};

export default PlayerCompare;
