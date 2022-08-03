import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import ProfileOne from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/first.png";
import ProfileTwo from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/sec.png";
import cloudDragon from "../../../../../../../public/assets/new-images/Svg/Cloud_Dragon.svg"
import hextechDragon from "../../../../../../../public/assets/new-images/Svg/Hextech_Dragon.svg"
import infernalDragon from "../../../../../../../public/assets/new-images/Svg/Infernal_Dragon.svg"
import mountainDragon from "../../../../../../../public/assets/new-images/Svg/Mountain_Dragon.svg"
import oceanDragon from "../../../../../../../public/assets/new-images/Svg/Ocean_Dragon.svg"
import { useSelector } from "react-redux";
import { itemsAction } from "../../../../../../../store/items";
import { championsAction } from "../../../../../../../store/champions";

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

	const centralImgHandler = (type) => {
		switch (type) {
			case "AIR_DRAGON":
				return cloudDragon;
			case "WATER_DRAGON":
				return oceanDragon
			case "FIRE_DRAGON":
				return infernalDragon
			case "EARTH_DRAGON":
				return mountainDragon
			case "HEXTECH_DRAGON":
				return hextechDragon
			default:
				return cloudDragon
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
				centralImgHandler(props.dragonDataBlue[props.dragonDataBlue.length - 1]?.type)
			);
		} else if (props.dragonDataRed?.length === 4) {
			setCenteralImg(
				centralImgHandler(props.dragonDataRed[props.dragonDataRed.length - 1]?.type)
			);
		} else {
			setCenteralImg(null)
		}
	}, [props.dragonDataBlue, props.dragonDataRed]);

	return (
		<div className=" w-[612px] h-[45px] bg-card-&-content-box grid grid-cols-1 grid-rows-1 rounded-t-[10px] ">
			{/* center batch  */}
			<div className=" flex justify-center items-end row-start-1 col-start-1 ">
				<div className=" relative w-[100px] h-[47px] ">
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
	const [ready, setReady] = useState(false);
	const champions = useSelector((state) => state.champions.champions)

	useEffect(() => {
		if (props.teams) {
			setRedBans(props.teams?.filter((team) => !team.win)[0]);
			setBlueBans(props.teams?.filter((team) => team.win)[0]);
		}
	}, [props.teams]);

	useEffect(()=>{
		if(champions) {
			setReady(true)
		}
	}, [champions])

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
					? props?.frames[props.selectedFrame]?.baronRespawn + " Left"
					: "Alive",
			color: "#8C3DCF",
		},
		{
			img: ProfileTwo,
			name: "elder drake",
			left:
				props?.frames && props?.frames[props.selectedFrame]?.dragonRespawn
					? props?.frames[props.selectedFrame]?.dragonRespawn + " Left"
					: "Alive",
			color: "#24C2AD",
		},
	];

	const selectChampName = (id) => {

		for(let champion in champions){
			if(parseInt(champions[champion].key) === parseInt(id)){
				return champions[champion]?.image
			}
		}
	};

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
										{ready && selectChampName(ban?.championId) && <div
											className="rounded-full border-2 border-[#FFFFFF]"
											style={{
												background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${selectChampName(ban?.championId)?.sprite}') no-repeat`,
												width: `${selectChampName(ban?.championId)?.w}px`,
												height: `${selectChampName(ban?.championId)?.h}px`,
												backgroundPosition: `-${selectChampName(ban?.championId)?.x}px -${selectChampName(ban?.championId)?.y}px`,
												// backgroundSize: "1000% 300%",
												zoom: `0.6`,
												filter: 'grayscale(100%)'
											}}
										></div>}
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
										{ready && selectChampName(ban?.championId) && <div
											className="rounded-full border-2 border-[#FFFFFF]"
											style={{
												background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${selectChampName(ban?.championId)?.sprite}') no-repeat`,
												width: `${selectChampName(ban?.championId)?.w}px`,
												height: `${selectChampName(ban?.championId)?.h}px`,
												backgroundPosition: `-${selectChampName(ban?.championId)?.x}px -${selectChampName(ban?.championId)?.y}px`,
												// backgroundSize: "1000% 300%",
												zoom: `0.6`,
												filter: 'grayscale(100%)'
											}}
										></div>} 
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
