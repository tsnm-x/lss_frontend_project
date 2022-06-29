import React, { useState } from "react";

function GameSim(props) {
	const match = props.match;
	const [selectedFrame, setSelectedFrame] = useState(0);

	const handleFrameChange = (e) => {
		setSelectedFrame(e);
	};
	return (
		<div>
			<br />
			<br />
			<p className=" p-9 bg-white">
				total match frames = {match?.frames.length - 2}
				<br />
				{match?.frames[match?.frames.length - 1]?.winningTeam}
			</p>
			<br />
			<input
				type="number"
				min={0}
				max={match?.frames.length - 2}
				onChange={(e) => handleFrameChange(e.target.value)}
				value={selectedFrame}
			/>
		</div>
	);
}

export default GameSim;
