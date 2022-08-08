import React, { Component } from "react";
import MapContent from "./mapContent";

const MapContents = (props) => {
	const unorderedListStyle = {
		listStyleType: "none",
		margin: 0,
		padding: 0,
	};

	return (
		<div style={unorderedListStyle}>
			<MapContent frame={props.frame} match={props.match} />
		</div>
	);
};

export default MapContents;
