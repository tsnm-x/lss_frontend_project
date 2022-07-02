import React from "react";
import PlayerRow from "./PlayerRow";
import RunesOverview from "./RunesOverview";

const LeftPlayers = (props) => {

    return (
        <div className={`w-3/6 h-full flex flex-col justify-between py-2 ${props.showRunes ? 'w-2/6': 'w-3/6'}`}>
            {props.players.map((player, index) => {
                return <PlayerRow key={index} reverse={false} index={index} gold={props.showRunes} player={player} region={props?.region} />;
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

    return (
        <div className={` h-full flex flex-col justify-between py-2 ${props.showRunes ? 'w-2/6' : 'w-3/6'}`}>
            {props.players.map((player, index) => {
                return <PlayerRow key={index} reverse={true} index={index} gold={props.showRunes} player={player} region={props?.region} />;
            })}
        </div>
    );
};

const PlayerCompare = (props) => {
    const orderedPlayersList = [];
	orderedPlayersList[0] = props.match.players[5];
	orderedPlayersList[1] = props.match.players[0];
	orderedPlayersList[2] = props.match.players[6];
	orderedPlayersList[3] = props.match.players[1];
	orderedPlayersList[4] = props.match.players[7];
	orderedPlayersList[5] = props.match.players[2];
	orderedPlayersList[6] = props.match.players[8];
	orderedPlayersList[7] = props.match.players[3];
	orderedPlayersList[8] = props.match.players[9];
	orderedPlayersList[9] = props.match.players[4];

    const leftTeam = [...orderedPlayersList.slice(0,5)]
    const rightTeam = [...orderedPlayersList.slice(5, orderedPlayersList.length)]
    return (
        <div className={`flex gap-x-4 ${props.showRunes ? 'h-[340px]' : null}`}>
            <LeftPlayers showRunes={props.showRunes} players={leftTeam} region={props?.region} />
            {props.showRunes && <RunesOverview />}
            <RightPlayers showRunes={props.showRunes} players={rightTeam} region={props?.region} />
        </div>
    );
};

export default PlayerCompare;
