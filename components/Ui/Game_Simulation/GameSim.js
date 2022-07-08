import React, { useState } from "react";

function GameSim(props) {
	console.log(props);
	let match = {};
	if (props.match.matchInDb) {
		match = props.match.matchInDb.matchTimeline;
	} else {
		match = props.match.matchTimeline;
	}

	console.log(match);
	const [selectedFrame, setSelectedFrame] = useState(0);

	const handleFrameChange = (e) => {
		setSelectedFrame(e);
	};

	/* 
	1- participants should be arrays 
	2- items should be arrays
	3- output should be js not string
	4- which participant is who? 
	*/

	return (
		<div>
			<br />
			<br />
			<p className=" p-9 bg-white">
				total match frames = {match?.frames?.length - 2}
				<br />
				{/* {match ? match?.frames[match?.frames?.length - 1]?.winningTeam : ""} */}
				participant 1 level :{" "}
				{match?.frames[selectedFrame]?.participant1?.stats.death}
				<img
					src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${match?.frames[selectedFrame]?.participant1.items["2"]}.png`}
					alt=""
				/>
			</p>
			<br />
			<input
				type="number"
				min={0}
				max={match?.frames?.length - 2}
				onChange={(e) => handleFrameChange(e.target.value)}
				value={selectedFrame}
			/>
		</div>
	);
}

export default GameSim;
