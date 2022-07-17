import React, { useEffect, useState } from "react";
import { SiNuxtdotjs } from "react-icons/si";
import Image from "next/image";
import ProfileImg from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";

import KiloIconRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/kilo.png";
import AlienRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-dragon-r.png";
import baronRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-baron-r.png";
import towerRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-tower-r.png";
import roundRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/round.png";
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

	console.log(props.frames);

	const frame = props?.frames ? props?.frames[props?.selectedFrame] : undefined;

	let winnerTeamFrames;
	let lostTeamFrames;
	let winnerTeamKills = 0;
	let lostTeamKills = 0;

	if (props.frames) {
		if (
			props.frames[props.frames?.length - 1]?.winningTeam === "Red Team Victory"
		) {
			winnerTeamFrames = frame?.redTeam;
			lostTeamFrames = frame?.blueTeam;

			if (frame) {
				for (let i = 1; i <= 5; i++) {
					lostTeamKills += frame[`participant${i}`].stats.kill;
					winnerTeamKills += frame[`participant${i + 5}`].stats.kill;
				}
			}
		} else if (
			props.frames[props.frames?.length - 1]?.winningTeam ===
			"Blue Team Victory"
		) {
			lostTeamKills = frame?.blueTeam;
			winnerTeamFrames = frame?.redTeam;

			if (frame) {
				for (let i = 1; i <= 5; i++) {
					lostTeamKills += frame[`participant${i}`].stats.kill;
					winnerTeamKills += frame[`participant${i + 5}`].stats.kill;
				}
			}
		}
	}

	useEffect(() => {
		// console.log(props.match.players[0].goldEarned);
	}, [props.match.teams]);

	useEffect(() => {
		setLostTeam(props.match.teams.filter((team) => !team.win)[0]);
		setWinnerTeam(props.match.teams.filter((team) => team.win)[0]);
		setLostTeamPlayers(props.match.players.filter((player) => !player.win));
		setWinningTeamPlayers(props.match.players.filter((player) => player.win));
		setMainPlayer(props.match.players.filter((player) => player.mainPlayer)[0]);
	}, [props.match.teams]);

	useEffect(() => {
		let totalDeaths = 0;
		let totalKills = 0;
		let totalAssists = 0;
		let totalGold = 0;
		lostTeamPlayers.forEach((player) => {
			totalDeaths = totalDeaths + player.deaths;
			totalKills = totalKills + player.kills;
			totalAssists = totalAssists + player.assists;
			totalGold = totalGold + player.goldEarned;
		});

		setLostTeamStats({ totalDeaths, totalKills, totalAssists, totalGold });
	}, [lostTeamPlayers]);

	useEffect(() => {
		let totalDeaths = 0;
		let totalKills = 0;
		let totalAssists = 0;
		let totalGold = 0;
		winningTeamPlayers.forEach((player) => {
			totalDeaths = totalDeaths + player.deaths;
			totalKills = totalKills + player.kills;
			totalAssists = totalAssists + player.assists;
			totalGold = parseInt(totalGold) + player.goldEarned;
		});

		setWinningTeamStats({
			totalDeaths,
			totalKills,
			totalAssists,
			totalGold,
		});
	}, [winningTeamPlayers]);
	return (
		<div
			className=" mb-[37px] bg-card-&-content-box px-[25px] h-10 flex justify-center 
        items-center gap-x-10 desktop:px-10 desktop:py-5 desktop:h-[initial]
         desktop:gap-x-[87px] 
         "
		>
			{/* loss  */}
			{lostTeam && lostTeamStats && (
				<div className=" text-accent-color flex justify-between items-center w-3/6 font-bold ">
					<div>
						<IconAndCount
							imgClassName=" desktop:w-[24px] desktop:h-[20px] "
							txt={
								props.showSimulatedGraph
									? `${(lostTeamFrames?.gold / 1000).toFixed(1)}k`
									: `${(lostTeamStats.totalGold / 1000).toFixed(1)}k`
							}
							img={KiloIconRed}
						/>
					</div>
					<div className=" flex items-center gap-x-5 ">
						<IconAndCount
							imgClassName=" desktop:w-[20px] desktop:h-[20px] "
							txt={
								props.showSimulatedGraph
									? `${lostTeamFrames?.Dragon.kills}`
									: `${lostTeam.objectives?.dragon?.kills}`
							}
							img={AlienRed}
						/>
						<IconAndCount
							imgClassName=" desktop:w-[20px] desktop:h-[20px] "
							txt={
								props.showSimulatedGraph
									? `${lostTeamFrames?.Baron.kills}`
									: `${lostTeam.objectives?.baron?.kills}`
							}
							img={baronRed}
						/>
					</div>
					{lostTeamFrames?.riftHerald?.kills}
					<div className=" flex items-center gap-x-5 ">
						<IconAndCount
							imgClassName=" desktop:w-[20px] desktop:h-[20px] "
							txt={
								props.showSimulatedGraph
									? `${lostTeamFrames?.Tower.kills}`
									: `${lostTeam.objectives?.tower?.kills}`
							}
							img={towerRed}
						/>
						<IconAndCount
							imgClassName=" desktop:w-[20px] desktop:h-[20px] "
							txt={
								props.showSimulatedGraph
									? `${lostTeamFrames?.Inhibitor.kills}`
									: `${lostTeam.objectives?.inhibitor?.kills}`
							}
							img={roundRed}
						/>
					</div>
					{props.showSimulatedGraph ? (
						<p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text  ">
							{lostTeamKills}
						</p>
					) : (
						<p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text  ">
							{lostTeamStats.totalKills}/{lostTeamStats.totalDeaths}/
							{lostTeamStats.totalAssists}
						</p>
					)}
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
						Loss
					</p>
					<p className=" font-sf-pro-text text-[14px] leading-[16px] text-accent-color-2 font-bold  desktop:text-base  ">
						Win
					</p>
				</div>
			)}

			{/* win  */}
			{winnerTeam && winningTeamStats && (
				<div className=" text-accent-color-2 flex justify-between items-center w-3/6 font-bold ">
					{/* indicator  */}
					{props.showSimulatedGraph ? (
						<p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text  ">
							{winnerTeamKills}
						</p>
					) : (
						<p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text  ">
							{winningTeamStats.totalKills}/{winningTeamStats.totalDeaths}/
							{winningTeamStats.totalAssists}
						</p>
					)}

					<div className=" flex items-center gap-x-5 ">
						<IconAndCount
							imgClassName=" desktop:w-[20px] desktop:h-[20px] "
							txt={
								props.showSimulatedGraph
									? `${winnerTeamFrames?.Inhibitor.kills}`
									: `${winnerTeam.objectives?.inhibitor?.kills}`
							}
							img={roundBlue}
						/>
						<IconAndCount
							imgClassName=" desktop:w-[20px] desktop:h-[20px] "
							txt={
								props.showSimulatedGraph
									? `${winnerTeamFrames?.Tower.kills}`
									: `${winnerTeam.objectives?.tower?.kills}`
							}
							img={towerBlue}
						/>
					</div>
					{winnerTeamFrames?.riftHerald?.kills}
					<div className=" flex items-center gap-x-5 ">
						<IconAndCount
							imgClassName=" desktop:w-[20px] desktop:h-[20px] "
							txt={
								props.showSimulatedGraph
									? `${winnerTeamFrames?.Baron.kills}`
									: `${winnerTeam.objectives?.baron?.kills}`
							}
							img={baronBlue}
						/>
						<IconAndCount
							imgClassName=" desktop:w-[20px] desktop:h-[20px] "
							txt={
								props.showSimulatedGraph
									? `${winnerTeamFrames?.Dragon.kills}`
									: `${lostTeam.objectives?.dragon?.kills}`
							}
							img={AlienBlue}
						/>
					</div>
					<div>
						<IconAndCount
							imgClassName=" desktop:w-[24px] desktop:h-[20px] "
							txt={
								props.showSimulatedGraph
									? `${(winnerTeamFrames?.gold / 1000).toFixed(1)}k`
									: `${(winningTeamStats.totalGold / 1000).toFixed(1)}k`
							}
							img={KiloIconBlue}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default LosAndWinRow;
