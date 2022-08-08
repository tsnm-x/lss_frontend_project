import React from "react";
import map from "../../../../../public/assets/new-images/Map/img-lol-map.svg";
import Image from "next/image";

import MapContents from "./mapContents";

const Map = (props) => {
	const stylemap = {
		position: "relative",
		width: 300,
		height: 300,
		backgroundImage: `URL(${map})`,
	};

	const frame = props.frames ? props.frames[props?.selectedFrame] : null;

	return (
		<section className="container ml-[37%] mt-12 ">
			<div className="container px-4">
				<div className="map-container" style={stylemap}>
					<Image src={map} alt="map" style={{ position: "absolute" }} />
					<MapContents frame={frame} match={props.match} />
				</div>
			</div>
		</section>
	);
};

export default Map;
