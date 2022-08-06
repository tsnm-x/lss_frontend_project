import React, { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import GoldDiffChart from "../../Profile/OverviewElement/SimulateGame/Simulation/GoldDiffChart/GoldDiffChart";
import Image from "next/image";
import GraphImg from "../../../../../public/assets/new-images/Profile/card/CardExpand/Graph/Expanded-Card.jpg";
import SimulationData from "../../Profile/OverviewElement/SimulateGame/Simulation/SimulationData/SimulationData";

const GameStaticsGraph = (props) => {
	const frames = props?.frames;
	const [framePointer, setFramePointer] = useState(15);

	let goldFrames = [];

	const [btns, setBtns] = useState([
		{
			txt: "power",
			active: false,
			dot: false,
		},
		{
			txt: "gold diff",
			active: true,
			dot: true,
		},
		{
			txt: "level diff",
			active: false,
			dot: false,
		},
	]);
	if (frames) {
		for (let i = 0; i < frames.length - 2; i++) {
			goldFrames[i] = {
				goldDifference: frames[i]?.redTeam?.gold - frames[i]?.blueTeam?.gold,
				levelDifference: frames[i]?.redTeam?.level - frames[i]?.blueTeam?.level,
				Time: i + 1,
			};
		}
		// frames.map((frame, i) => {
		// 	if (i === frames.length - 2) {
		// 		return;
		// 	}
		// 	if (i + 1 == false) {
		// 		return;
		// 	}
		// 	goldFrames[i] = {
		// 		goldDifference: frames[i]?.redTeam?.gold - frames[i]?.blueTeam?.gold,
		// 		levelDifference: frames[i]?.redTeam?.level - frames[i]?.blueTeam?.level,
		// 		Time: i + 1,
		// 	};
		// });
	}

	// console.log(goldFrames);

	useEffect(() => {
		props.frameChange(5);
	}, []);

	return (
		<section>
			<div className="container px-20 mt-5 ">
				{/* texts  */}
				<div className=" flex items-center ">
					<h5 className=" sf-bold-15 text-[16px] leading-[19px] text-white mr-4 ">
						Game Statistics
					</h5>
					<p className=" sf-bold-12 text-[#ffffff81] ">
						(Drag the timer! you will be amazed...)
					</p>
				</div>
				{/* buttons  */}
				<div className=" flex items-center gap-x-5 mt-3 ">
					{btns.map((btn, index) => {
						return (
							<button
								key={index}
								className={`sf-bold-14 px-4 py-[6px] rounded-[8px] flex items-center capitalize ${
									btn.active
										? " bg-accent-color text-white "
										: "bg-[#241e2c] text-[#ffffffc4] "
								} `}
							>
								{btn.dot ? (
									<GoPrimitiveDot className=" mr-2 w-[10px] " />
								) : null}

								{btn.txt}
							</button>
						);
					})}
				</div>
				{/* graph cards  */}
				<div className=" mt-5 ">
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
					{/* left graph  */}
					{/* <div className=" relative w-[760px] h-[300px] border border-accent-color rounded-[10px] text-accent-color flex items-center justify-center ">
						<h1 className=" sf-bold-40 capitalize ">coming soon</h1>
					</div> */}
					<br /> <br />
					<GoldDiffChart
						goldFrames={goldFrames}
						frameChange={props.frameChange}
					/>
					{/* <PowerDiffChart dataFromUnity= {}/> */}
				</div>

				<div className=" flex justify-between items-center px-10 ">
					{/* <div>{ChartComponent}</div> */}
					{/* <SimulationData
						frames={frames}
						selectedFrame={props.selectedFrame}
						simulatorPlayerRed={props.simulatorPlayerRed}
						simulatorPlayerBlue={props.simulatorPlayerBlue}
					/> */}
				</div>
			</div>
		</section>
	);
};

export default GameStaticsGraph;
