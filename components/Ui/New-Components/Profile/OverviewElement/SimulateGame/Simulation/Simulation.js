import React, { useEffect, useReducer } from "react";
import AnalyticsBtns from "../AnalyticsBtns/AnalyticsBtns";
import PowerChart from "./PowerChart/PowerChart";
import LevelChart from "./LevelDiffChart/LevelDiffChart";
import GoldChart from "./GoldDiffChart/GoldDiffChart";
import SimulationData from "./SimulationData/SimulationData";
import { useState } from "react";

const initialState = <PowerChart />;
const Reducer = (state, action) => {
	switch (action) {
		case "power":
			return <PowerChart />;
		case "level diff":
			return <LevelChart />;
		case "gold diff":
			return <GoldChart />;
		default:
			return state;
	}
};

const SimulateDataCard = (props) => {
	const frames = props?.frames;
	const [framePointer, setFramePointer] = useState(15);
	const [ChartComponent, chartDispatch] = useReducer(Reducer, initialState);

	useEffect(() => {
		props.frameChange(15);
	}, []);

	return (
		<div className=" text-white text-5xl">
			<AnalyticsBtns click={chartDispatch} />

			<input
				className="text-full-dark w-[600px]"
				type="range"
				min="0"
				max={(frames?.length - 2).toString()}
				value={framePointer}
				onChange={(e) => {
					setFramePointer(e.target.value);
					props.frameChange(e.target.value);
				}}
			/>

			{/* all generated data  */}
			<div className=" flex justify-between items-center px-10 ">
				<div>{ChartComponent}</div>
				<SimulationData
					frames={frames}
					selectedFrame={props.selectedFrame}
					simulatorPlayerRed={props.simulatorPlayerRed}
					simulatorPlayerBlue={props.simulatorPlayerBlue}
				/>
			</div>
		</div>
	);
};

export default SimulateDataCard;
