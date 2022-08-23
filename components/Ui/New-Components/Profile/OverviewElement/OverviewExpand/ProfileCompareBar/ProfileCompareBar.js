import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import DrakeBatches from "./DrakeBatches";
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
			<div className="container bg-[#110a1b] pt-4 max-w-[1340px] ">
				<div className=" flex justify-between border-b border-[#140a22] ">
					{/* profiles  */}
					<div className=" flex items-center gap-x-6 row-start-1 col-start-1 w-[280px] pl-[15px] ">
						{profileData.map((profile, index) => {
							return <Profile key={index} {...profile} />;
						})}
					</div>
					{/* center batch bar  */}
					<div className="  flex justify-center w-[600px] ml-[50px] ">
						<DrakeBatches
							dragonDataRed={dragonDataRed}
							dragonDataBlue={dragonDataBlue}
							{...props}
						/>
					</div>
					{/* right side bans  */}
					<div className=" flex items-center justify-end  row-start-1 col-start-1 w-[330px] pr-[15px] ">
						{/*  left	 */}
						<div className=" flex items-center ">
							{redBans?.bans?.map((ban, index) => {
								return (
									<div
										key={index}
										className={` w-[30px] h-[30px] relative rounded-full -ml-1  border border-[#D55460]`}
									>
										{ready && selectChampName(ban?.championId) && <div
											className="rounded-full "
											style={{
												background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${selectChampName(ban?.championId)?.sprite}') no-repeat`,
												width: `${selectChampName(ban?.championId)?.w}px`,
												height: `${selectChampName(ban?.championId)?.h}px`,
												backgroundPosition: `-${selectChampName(ban?.championId)?.x}px -${selectChampName(ban?.championId)?.y}px`,
												// backgroundSize: "1000% 300%",
												zoom: `0.59`,
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
										className={` w-[30px] h-[30px] relative rounded-full -ml-1 border border-[#198cff] `}
									>
										{ready && selectChampName(ban?.championId) && <div
											className="rounded-full "
											style={{
												background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${selectChampName(ban?.championId)?.sprite}') no-repeat`,
												width: `${selectChampName(ban?.championId)?.w}px`,
												height: `${selectChampName(ban?.championId)?.h}px`,
												backgroundPosition: `-${selectChampName(ban?.championId)?.x}px -${selectChampName(ban?.championId)?.y}px`,
												// backgroundSize: "1000% 300%",
												zoom: `0.59`,
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
