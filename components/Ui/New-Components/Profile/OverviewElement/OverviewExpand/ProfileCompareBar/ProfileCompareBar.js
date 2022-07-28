import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileOne from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/first.png";
import ProfileTwo from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/sec.png";
import CenterBatch from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/batch.png";
import Batch1 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/batch-1.png";
import Batch2 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/batch-2.png";
import Batch3 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/batch-3.png";
import Red1 from "../../../../../../../public/assets/new-images/Profile/btns/btn1.png";
import Red2 from "../../../../../../../public/assets/new-images/Profile/btns/btn2.png";
import Red3 from "../../../../../../../public/assets/new-images/Profile/btns/btn3.png";
import Red4 from "../../../../../../../public/assets/new-images/Profile/btns/btn4.png";
import Red5 from "../../../../../../../public/assets/new-images/Profile/btns/btn5.png";
import Blue1 from "../../../../../../../public/assets/new-images/Profile/btns/btn6.png";
import Blue2 from "../../../../../../../public/assets/new-images/Profile/btns/btn7.png";
import Blue3 from "../../../../../../../public/assets/new-images/Profile/btns/btn8.png";
import Blue4 from "../../../../../../../public/assets/new-images/Profile/btns/btn9.png";
import Blue5 from "../../../../../../../public/assets/new-images/Profile/btns/btn10.png";

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
					{props.left} Left
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
	const [centralImg, setCenteralImg] = useState("");

	const imgHandler = (type) => {
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
		if (props.dragonDataBlue?.length === 4) {
			setCenteralImg(
				imgHandler(props.dragonDataBlue[props.dragonDataBlue.length - 1]?.type)
			);
		} else if (props.dragonDataRed?.length === 4) {
			setCenteralImg(
				imgHandler(props.dragonDataRed[props.dragonDataRed.length - 1]?.type)
			);
		}
	}, [props.dragonDataBlue, props.dragonDataRed]);

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
				<div
					className={`rounded-tr-[10px] flex items-center justify-center gap-x-[6px] ${
						props.dragonDataRed?.length === 4 ? "border-[#72B2E3] border" : ""
					}`}
				>
					{props.dragonDataRed?.length < 4
						? addEmptyBatches(4 - props.dragonDataRed?.length)?.map((elem) => {
								return (
									<div
										key={elem}
										className={`w-[30px] h-[30px] relative rounded-full bg-mix-white-black`}
									></div>
								);
						  })
						: null}
					{props.dragonDataRed
						?.slice()
						.reverse()
						.map((event, index) => {
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
				</div>
				<div
					className={`rounded-tr-[10px] flex items-center justify-center gap-x-[6px] ${
						props.dragonDataBlue?.length === 4 ? "border-[#72B2E3] border" : ""
					} `}
				>
					{props.dragonDataBlue?.map((event, index) => {
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
					{props.dragonDataBlue?.length < 4
						? addEmptyBatches(4 - props.dragonDataBlue?.length)?.map((elem) => {
								return (
									<div
										key={elem}
										className={`w-[30px] h-[30px] relative rounded-full bg-mix-white-black`}
									></div>
								);
						  })
						: null}
				</div>
			</div>
		</div>
	);
};

const RightBtns = (props) => {
	return <div></div>;
};

const ProfileCompareBar = (props) => {
	const [dragonDataRed, setDragonDataRed] = useState([]);
	const [dragonDataBlue, setDragonDataBlue] = useState([]);
	const [redBans, setRedBans] = useState({});
	const [blueBans, setBlueBans] = useState({});

	useEffect(() => {
		if (props.teams) {
			setRedBans(props.teams?.filter((team) => !team.win)[0]);
			setBlueBans(props.teams?.filter((team) => team.win)[0]);
		}
	}, [props.teams]);

	useEffect(() => {
		if (props.matchTimelineData?.frames) {
			const lastFrame =
				props.matchTimelineData.frames[
					props.matchTimelineData.frames.length - 1
				];
			if (lastFrame.teamId === 200) {
				props.matchTimelineData?.frames[props.selectedFrame]?.blueTeam?.Dragon
					?.KillEvents
					? setDragonDataRed(
							props.matchTimelineData?.frames[props.selectedFrame]?.blueTeam
								?.Dragon?.KillEvents
					  )
					: setDragonDataRed([]);
				props.matchTimelineData?.frames[props.selectedFrame]?.redTeam?.Dragon
					?.KillEvents
					? setDragonDataBlue(
							props.matchTimelineData?.frames[props.selectedFrame]?.redTeam
								?.Dragon?.KillEvents
					  )
					: setDragonDataBlue([]);
			} else {
				props.matchTimelineData?.frames[props.selectedFrame]?.redTeam?.Dragon
					?.KillEvents
					? setDragonDataRed(
							props.matchTimelineData?.frames[props.selectedFrame]?.redTeam
								?.Dragon?.KillEvents
					  )
					: setDragonDataRed([]);
				props.matchTimelineData?.frames[props.selectedFrame]?.blueTeam?.Dragon
					?.KillEvents
					? setDragonDataBlue(
							props.matchTimelineData?.frames[props.selectedFrame]?.blueTeam
								?.Dragon?.KillEvents
					  )
					: setDragonDataBlue([]);
			}
		}
	}, [props.matchTimelineData, props.selectedFrame]);

	const profileData = [
		{
			img: ProfileOne,
			name: "baron nashor",
			left:
				props?.frames && props?.frames[props.selectedFrame]?.baronRespawn
					? props?.frames[props.selectedFrame]?.baronRespawn
					: "Alive",
			color: "#8C3DCF",
		},
		{
			img: ProfileTwo,
			name: "elder drake",
			left:
				props?.frames && props?.frames[props.selectedFrame]?.dragonRespawn
					? props?.frames[props.selectedFrame]?.dragonRespawn
					: "Alive",
			color: "#24C2AD",
		},
	];

	const selectChampName = (id) => {};

	return (
		<section>
			<div className="container bg-[#110a1b] mt-4 ">
				<div className=" grid grid-cols-1 grid-rows-1 px-3 border-b border-[#140a22] ">
					{/* profiles  */}
					<div className=" flex items-center gap-x-6 row-start-1 col-start-1 ">
						{profileData.map((profile, index) => {
							return <Profile key={index} {...profile} />;
						})}
					</div>
					{/* center batch bar  */}
					<div className=" row-start-1 col-start-1 flex justify-center">
						<LeftBatchBar
							dragonDataRed={dragonDataRed}
							dragonDataBlue={dragonDataBlue}
							{...props}
						/>
					</div>
					{/* right side bans  */}
					<div className=" flex items-center justify-end  row-start-1 col-start-1  ">
						{/*  left	 */}
						<div className=" flex items-center ">
							{redBans?.bans?.map((ban, index) => {
								return (
									<div
										key={index}
										className={` w-[30px] h-[30px] relative rounded-full -ml-1  `}
									>
										{selectChampName(ban?.championId) && (
											<Image
												src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${selectChampName(
													ban?.championId
												)}.png`}
												alt="btns img"
												layout="fill"
												className=" rounded-full "
											/>
										)}
									</div>
								);
							})}
						</div>
						{/* center  */}
						<h5 className=" sf-bold-14 text-white mx-6 ">Bans</h5>
						{/*  right	 */}
						<div className=" flex items-center ">
							{blueBans?.bans?.map((ban, index) => {
								return (
									<div
										key={index}
										className={` w-[30px] h-[30px] relative rounded-full -ml-1  `}
									>
										{selectChampName(ban?.championId) && (
											<Image
												src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${selectChampName(
													ban?.championId
												)}.png`}
												alt="btns img"
												layout="fill"
												className=" rounded-full "
											/>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfileCompareBar;
