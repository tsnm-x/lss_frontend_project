import React, { useEffect, useState } from "react";
import PlayerRow from "./PlayerRow";
import RunesOverview from "./RunesOverview";

const LeftPlayers = (props) => {
	return (
		<div
			className={`w-3/6 h-full flex flex-col justify-between py-2 ${
				props.showRunes ? "w-2/6" : "w-3/6"
			}`}
		>
			{props.players.map((player, index) => {
				return (
					<PlayerRow
						selectedFrame={props.selectedFrame}
						matchTimelineData={props.matchTimelineData}
						key={index}
						reverse={false}
						index={index}
						gold={props.showRunes}
						player={player}
						region={props?.region}
						setSelectedPlayer={props.setSelectedPlayer}
						selectedPlayer={props.selectedPlayer}
						match={props.match}
						showSimulatedGraph={props.showSimulatedGraph}
						ranks={props.ranks}
						setRanks={props.setRanks}
					/>
				);
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
		<div
			className={` h-full flex flex-col justify-between py-2 ${
				props.showRunes ? "w-2/6" : "w-3/6"
			}`}
		>
			{props.players.map((player, index) => {
				return (
					<PlayerRow
						selectedFrame={props.selectedFrame}
						matchTimelineData={props.matchTimelineData}
						key={index}
						reverse={true}
						index={index}
						gold={props.showRunes}
						player={player}
						region={props?.region}
						setSelectedPlayer={props.setSelectedPlayer}
						selectedPlayer={props.selectedPlayer}
						match={props.match}
						showSimulatedGraph={props.showSimulatedGraph}
						ranks={props.ranks}
						setRanks={props.setRanks}
					/>
				);
			})}
		</div>
	);
};

const PlayerCompare = (props) => {
	const [ranks, setRanks] = useState({});
	const [leftTeam, setLeftTeam] = useState([]);
	const [rightTeam, setRightTeam] = useState([]);

	const players = JSON.parse(JSON.stringify(props.match?.players));

	for (let i = 0; i < players.length; i++) {
		players[i].standingId = i + 1;
	}

	useEffect(() => {
		setLeftTeam(players.filter((player) => !player.win));
		setRightTeam(players.filter((player) => player.win));
	}, [props.match.players]);

	return (
		<div className={`flex gap-x-4 ${props.showRunes ? "h-[340px]" : null}`}>
			{leftTeam.length != 0 && (
				<LeftPlayers
					selectedFrame={props.selectedFrame}
					matchTimelineData={props.matchTimelineData}
					showRunes={props.showRunes}
					players={leftTeam}
					region={props?.region}
					selectedPlayer={props.selectedPlayer}
					setSelectedPlayer={props.setSelectedPlayer}
					match={props.match}
					showSimulatedGraph={props.showSimulatedGraph}
					ranks={ranks}
					setRanks={setRanks}
				/>
			)}
			{props.showRunes && (
				<RunesOverview selectedPlayer={props.selectedPlayer} />
			)}
			{rightTeam.length != 0 && (
				<RightPlayers
					selectedFrame={props.selectedFrame}
					matchTimelineData={props.matchTimelineData}
					showRunes={props.showRunes}
					players={rightTeam}
					region={props?.region}
					selectedPlayer={props.selectedPlayer}
					setSelectedPlayer={props.setSelectedPlayer}
					match={props.match}
					showSimulatedGraph={props.showSimulatedGraph}
					ranks={ranks}
					setRanks={setRanks}
				/>
			)}
		</div>
	);
};

export default PlayerCompare;
