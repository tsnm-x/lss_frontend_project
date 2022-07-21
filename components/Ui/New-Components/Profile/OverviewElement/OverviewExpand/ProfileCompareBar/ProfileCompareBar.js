import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileOne from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/first.png";
import ProfileTwo from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/sec.png";
import CenterBatch from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/batch.png";
// import Batch1 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/batch-1.png";
// import Batch2 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/Cloud_Dragon_buff.png";
// import Batch3 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/Infernal_Dragon_buff.png";

const Profile = (props) => {
	return (
		<div className=" flex items-center">
			{/* image  */}
			<div className=" relative w-[30px] h-[30px] mr-[10px] ">
				<Image src={props.img} alt={props.name + " image"} layout="fill" />
			</div>
			{/* name  */}
			<div>
				<h2 className=" text-white font-sf-pro-text font-bold text-[11px] leading-[13px] ">
					{props.left}
				</h2>
				<h2
					className={`font-sf-pro-text capitalize font-bold text-[11px] leading-[13px]`}
					style={{ color: props.color }}
				>
					{props.name}
				</h2>
			</div>
		</div>
	);
};

const LeftBatchBar = (props) => {
	// const imgHandler = (type) => {
	// 	switch (type) {
	// 		case "AIR_DRAGON":
	// 			return "https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Cloud_Dragon_buff.png/revision/latest?cb=20191117184201";
	// 		case "WATER_DRAGON":
	// 			return "https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Ocean_Dragon_buff.png/revision/latest?cb=20191117184400";
	// 		case "FIRE_DRAGON":
	// 			return "https://static.wikia.nocookie.net/leagueoflegends/images/3/3f/Infernal_Dragon_buff.png/revision/latest?cb=20191117184224";
	// 		case "EARTH_DRAGON":
	// 			return "https://static.wikia.nocookie.net/leagueoflegends/images/9/9e/Mountain_Dragon_buff.png/revision/latest?cb=20191117184251";
	// 		case "HEXTECH_DRAGON":
	// 			return "https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Hextech_Dragon_buff.png/revision/latest?cb=20211231073400";
	// 		default:
	// 			return "https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Cloud_Dragon_buff.png/revision/latest?cb=20191117184201";
	// 	}
	// };

	const [centralImg, setCenteralImg] = useState("");

	useEffect(() => {
		// console.log(props.dragonData)
	}, [props.dragonData]);

	const imgHandler = (type) => {
		console.log(type);
		switch (type) {
			case "AIR_DRAGON":
				return "https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Cloud_Dragon_buff.png/revision/latest?cb=20191117184201";
			case "WATER_DRAGON":
				return "https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Ocean_Dragon_buff.png/revision/latest?cb=20191117184400";
			case "FIRE_DRAGON":
				return "https://static.wikia.nocookie.net/leagueoflegends/images/3/3f/Infernal_Dragon_buff.png/revision/latest?cb=20191117184224";
			case "EARTH_DRAGON":
				return "https://static.wikia.nocookie.net/leagueoflegends/images/9/9e/Mountain_Dragon_buff.png/revision/latest?cb=20191117184251";
			case "HEXTECH_DRAGON":
				return "https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Hextech_Dragon_buff.png/revision/latest?cb=20211231073400";
			default:
				return "https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Cloud_Dragon_buff.png/revision/latest?cb=20191117184201";
		}
	};

	const addEmptyBatches = (length) => {
		let arr = [];
		for (let i = 0; i < length; i++) {
			arr.push(i);
		}
		return arr;
	};

	useEffect(() => {
		console.log(props.dragonData);
		if (props.dragonData?.length) {
			if (props.dragonData[1]?.length) {
				setCenteralImg(
					imgHandler(props.dragonData[1][props.dragonData[1].length - 1].type)
				);
			}
		}
	}, [props.dragonData]);

	return (
		<div className=" w-[612px] h-[45px] bg-card-&-content-box grid grid-cols-1 grid-rows-1 rounded-t-[10px] ">
			{/* center batch  */}
			<div className=" flex justify-center items-end row-start-1 col-start-1 ">
				<div className=" relative w-[50px] h-[50px] ">
					{centralImg && (
						<Image src={centralImg} alt="center batch" layout="fill" />
					)}
				</div>
			</div>
			{/* left right batch  */}
			<div className=" row-start-1 col-start-1 grid grid-cols-2 bg-transparent rounded-t-[10px] ">
				{props.dragonData.map((batch, index) => {
					return (
						<div
							key={index}
							className={`rounded-tr-[10px] flex items-center justify-center gap-x-[6px] ${
								index === 1 ? "border-[#72B2E3] border" : ""
							} `}
						>
							{batch?.map((event, index) => {
								return (
									<div
										key={index}
										className={`w-[30px] h-[30px] relative rounded-full ${
											!event.type ? "bg-mix-white-black" : "  bg-transparent "
										}`}
									>
										{imgHandler(event.type) ? (
											<Image
												src={imgHandler(event.type)}
												alt={event.type}
												layout="fill"
											/>
										) : null}
									</div>
								);
							})}
							{batch?.length < 4
								? addEmptyBatches(4 - batch?.length)?.map((elem) => {
										return (
											<div
												key={elem}
												className={`w-[30px] h-[30px] relative rounded-full bg-mix-white-black`}
											></div>
										);
								  })
								: null}
						</div>
					);
				})}
			</div>
		</div>
	);
};

const ProfileCompareBar = (props) => {
	// console.log(props.showSimulatedGraph, props.frames[props.selectedFrame]);
	let frame = {};
	let selectedFrame = props.selectedFrame;
	if (props.frames) {
		frame = props.frames[props.selectedFrame];
	}

	console.log(selectedFrame);
	const [dragonData, setDragonData] = useState([]);

	useEffect(() => {
		setDragonData([
			props.matchTimelineData?.frames[props.selectedFrame]?.redTeam?.Dragon
				?.KillEvents,
			props.matchTimelineData?.frames[props.selectedFrame]?.blueTeam?.Dragon
				?.KillEvents,
		]);
	}, [props.matchTimelineData, props.selectedFrame]);

	const profileData = [
		{
			img: ProfileOne,
			name: selectedFrame > 19 ? "Baron Nashor" : "Rift Harold",
			left:
				selectedFrame > 19
					? frame?.baronRespawn
						? frame?.baronRespawn + " left"
						: "Alive"
					: frame?.riftHeraldRespawn
					? frame?.riftHeraldRespawn + " left"
					: "Alive",
			color: "#8C3DCF",
		},
		{
			img: ProfileTwo,
			name: "Elder Drake",
			left: frame?.dragonRespawn ? frame?.dragonRespawn + " left" : "Alive",
			color: "#24C2AD",
		},
	];

	return (
		<div className=" grid grid-cols-1 grid-rows-1 px-12 border-b border-[#140a22] ">
			{/* profiles  */}
			<div className=" flex items-center gap-x-6 row-start-1 col-start-1 ">
				{profileData.map((profile, index) => {
					return <Profile key={index} {...profile} {...props} />;
				})}
			</div>
			{/* left batch bar  */}
			<div className=" row-start-1 col-start-1 flex justify-center">
				<LeftBatchBar dragonData={dragonData} {...props} />
			</div>
		</div>
	);
};

export default ProfileCompareBar;
