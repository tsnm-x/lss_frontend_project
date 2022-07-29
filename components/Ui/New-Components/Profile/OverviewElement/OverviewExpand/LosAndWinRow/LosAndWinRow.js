import React, { useEffect, useState } from "react";
import { SiNuxtdotjs } from "react-icons/si";
import Image from "next/image";
import ProfileImg from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";

import KiloIconRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/kilo-r.png";
import AlienRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-dragon-r.png";
import baronRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-baron-r.png";
import towerRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-tower-r.png";
import roundRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/round-r.png";
import KiloIconBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/kilo.png";
import AlienBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-dragon-r.png";
import baronBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-baron-r.png";
import towerBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-tower-r.png";
import roundBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/round.png";

const IconAndCount = (props) => {
	return (
		<div
			className={` flex smDesktop:items-center first:mr-[10px] ${props.className}`}
		>
			<div className={` relative w-4 h-4 mr-3 ${props.imgClassName}`}>
				<Image src={props.img} alt="icon" layout="fill" />
			</div>
			<p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text desktop:text-base  ">
				{props.txt}
			</p>
		</div>
	);
	// return null;
};

// const Icon = (props) => {
//     return (
//         <div className={` relative ${props.className}`}>
//             <Image src={props.img} alt="icon" layout="fill" />
//         </div>
//     );
// };

const LosAndWinRow = (props) => {
	const [lostTeam, setLostTeam] = useState({});
	const [winnerTeam, setWinnerTeam] = useState({});
	const [lostTeamPlayers, setLostTeamPlayers] = useState([]);
	const [winningTeamPlayers, setWinningTeamPlayers] = useState([]);
	const [lostTeamStats, setLostTeamStats] = useState({});
	const [winningTeamStats, setWinningTeamStats] = useState({});
	const [mainPlayer, setMainPlayer] = useState({});

	const frame = props?.frames ? props?.frames[props?.selectedFrame] : undefined;

	useEffect(() => {
		if (frame) {
			// console.log(frame)
			const lastFrame =
				props.matchTimelineData.frames[
					props.matchTimelineData.frames.length - 1
				];
			if (lastFrame.teamId === 200) {
				setWinnerTeam(frame?.redTeam);
				setLostTeam(frame?.blueTeam);
				setLostTeamPlayers([
					frame?.participant1,
					frame?.participant2,
					frame?.participant3,
					frame?.participant4,
					frame?.participant5,
				]);
				setWinningTeamPlayers([
					frame?.participant6,
					frame?.participant7,
					frame?.participant8,
					frame?.participant9,
					frame?.participant10,
				]);
			} else {
				setLostTeam(frame?.redTeam);
				setWinnerTeam(frame?.blueTeam);
				setWinningTeamPlayers([
					frame?.participant1,
					frame?.participant2,
					frame?.participant3,
					frame?.participant4,
					frame?.participant5,
				]);
				setLostTeamPlayers([
					frame?.participant6,
					frame?.participant7,
					frame?.participant8,
					frame?.participant9,
					frame?.participant10,
				]);
			}
		}
	}, [props.selectedFrame, props.matchTimelineData, frame]);

	useEffect(() => {
		let totalDeaths = 0;
		let totalKills = 0;
		let totalAssists = 0;

		lostTeamPlayers.forEach((player) => {
			totalDeaths = totalDeaths + player?.stats?.death;
			totalKills = totalKills + player?.stats?.kill;
			totalAssists = totalAssists + player?.stats?.assist;
		});

		setLostTeamStats({
			totalDeaths,
			totalKills,
			totalAssists,
			totalGold: lostTeam?.gold,
		});
	}, [lostTeamPlayers]);

	useEffect(() => {
		let totalDeaths = 0;
		let totalKills = 0;
		let totalAssists = 0;

		winningTeamPlayers.forEach((player) => {
			totalDeaths = totalDeaths + player?.stats?.death;
			totalKills = totalKills + player?.stats?.kill;
			totalAssists = totalAssists + player?.stats?.assist;
		});

		setWinningTeamStats({
			totalDeaths,
			totalKills,
			totalAssists,
			totalGold: winnerTeam?.gold,
		});
	}, [winningTeamPlayers]);

	return (
		<section>
			<div className="container">
				<div
					className=" bg-card-&-content-box px-[25px] h-10 flex justify-center 
                                items-center gap-x-[72px]   
                                "
				>
					{/* loss  */}
					{lostTeam && lostTeamStats && (
						<div className=" text-accent-color flex justify-between items-center w-3/6 font-bold ">
							<div>
								<IconAndCount
									imgClassName=" desktop:w-[24px] desktop:h-[20px] "
									txt={`${
										(lostTeamStats?.totalGold / 1000).toFixed(1)
											? (lostTeamStats?.totalGold / 1000).toFixed(1)
											: 0
									}k`}
									img={KiloIconRed}
								/>
							</div>
							<div className=" flex items-center gap-x-5 ">
								<IconAndCount
									imgClassName=" desktop:w-[20px] desktop:h-[20px] "
									txt={`${
										lostTeam?.Dragon?.kills ? lostTeam?.Dragon?.kills : 0
									}`}
									img={AlienRed}
								/>
								<IconAndCount
									imgClassName=" desktop:w-[20px] desktop:h-[20px] "
									txt={`${lostTeam?.Baron?.kills ? lostTeam?.Baron?.kills : 0}`}
									img={baronRed}
								/>
								<IconAndCount
									imgClassName=" desktop:w-[20px] desktop:h-[20px] "
									txt={`${lostTeam?.Baron?.kills ? lostTeam?.Baron?.kills : 0}`}
									img={baronRed}
								/>
							</div>
							<div className=" flex items-center gap-x-5 ">
								<IconAndCount
									imgClassName=" desktop:w-[20px] desktop:h-[20px] "
									txt={`${lostTeam?.Tower?.kills ? lostTeam?.Tower?.kills : 0}`}
									img={towerRed}
								/>
								<IconAndCount
									imgClassName=" desktop:w-[20px] desktop:h-[20px] "
									txt={`${
										lostTeam?.Inhibitor?.kills ? lostTeam?.Inhibitor?.kills : 0
									}`}
									img={roundRed}
								/>
							</div>
							{/* indicator  */}
						</div>
					)}
					{/* los and wind  */}
					{props.showProfile && mainPlayer ? (
						<div className=" relative overflow-hidden rounded w-10 h-10 ">
							<Image
								src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${mainPlayer.profileIcon}.png`}
								alt="Profile image"
								layout="fill"
							/>
						</div>
					) : (
						<div className=" flex gap-x-12 items-center">
							<p className=" font-sf-pro-text text-[14px] leading-[16px] text-accent-color font-bold desktop:text-base   ">
								Defeat
							</p>
							<p className=" font-sf-pro-text text-[14px] leading-[16px] text-accent-color-2 font-bold  desktop:text-base  ">
								Victory
							</p>
						</div>
					)}

					{/* win  */}
					{winnerTeam && winningTeamStats && (
						<div className=" text-accent-color-2 flex justify-between items-center w-3/6 font-bold ">
							<div className=" flex items-center gap-x-5 ">
								<IconAndCount
									imgClassName=" desktop:w-[20px] desktop:h-[20px] "
									txt={`${
										winnerTeam?.Inhibitor?.kills
											? winnerTeam?.Inhibitor?.kills
											: 0
									}`}
									img={roundBlue}
								/>
								<IconAndCount
									imgClassName=" desktop:w-[20px] desktop:h-[20px] "
									txt={`${
										winnerTeam?.Tower?.kills ? winnerTeam?.Tower?.kills : 0
									}`}
									img={towerBlue}
								/>
							</div>
							<div className=" flex items-center gap-x-5 ">
								<IconAndCount
									imgClassName=" desktop:w-[20px] desktop:h-[20px] "
									txt={`${
										winnerTeam?.Baron?.kills ? winnerTeam?.Baron?.kills : 0
									}`}
									img={baronBlue}
								/>
								<IconAndCount
									imgClassName=" desktop:w-[20px] desktop:h-[20px] "
									txt={`${
										winnerTeam?.Baron?.kills ? winnerTeam?.Baron?.kills : 0
									}`}
									img={baronBlue}
								/>
								<IconAndCount
									imgClassName=" desktop:w-[20px] desktop:h-[20px] "
									txt={`${
										winnerTeam?.Dragon?.kills ? winnerTeam?.Dragon?.kills : 0
									}`}
									img={AlienBlue}
								/>
							</div>
							<div>
								<IconAndCount
									imgClassName=" desktop:w-[24px] desktop:h-[20px] "
									txt={`${
										(winningTeamStats?.totalGold / 1000).toFixed(1)
											? (winningTeamStats?.totalGold / 1000).toFixed(1)
											: 0
									}k`}
									img={KiloIconBlue}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default LosAndWinRow;
