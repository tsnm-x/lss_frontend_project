import Image from "next/image";
import React from "react";

const MapContent = (props) => {
	const participants = [
		"participant1",
		"participant2",
		"participant3",
		"participant4",
		"participant5",
		"participant6",
		"participant7",
		"participant8",
		"participant9",
		"participant10",
	];
	console.log(props);

	const getPositionX = (participant) => {
		return getPositionRelativeToMap(props.frame[participant].position.x);
	};
	const getPositionY = (participant) => {
		return getPositionRelativeToMap(props.frame[participant].position.y);
	};

	const getPositionRelativeToMap = (pos) => {
		let position = Math.round((pos / 16000) * 100);
		return position + "%";
	};

	return (
		<React.Fragment>
			{participants.map((participant, index) => (
				<li
					key={index}
					style={{
						position: "absolute",
						left: getPositionX(participant),
						bottom: getPositionY(participant),
						color: "white",
					}}
				>
					<img
						src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${props?.match?.players[index]?.championName}.png`}
						alt="CHamp Image"
						width="30px"
						className="rounded-full"
						height="30px"
					/>
				</li>
			))}
		</React.Fragment>
	);
};

export default MapContent;
