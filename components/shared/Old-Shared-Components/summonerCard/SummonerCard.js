import classes from "./summonerCard.module.css";
import { CgMaximize } from "react-icons/cg";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
function SummonerCard(props) {
	const [toggle, setToggle] = useState(false);
	const { duration, players } = props.match;
	const mainPlayer = players.find((player) => player.mainPlayer === true);
	function toggleSummonersDetails() {
		setToggle((prev) => {
			return !prev;
		});
	}
	function convertHMS(value) {
		const sec = parseInt(value, 10); // convert value to number if it's string
		let hours = Math.floor(sec / 3600); // get hours
		let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
		let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
		// add 0 if value < 10; Example: 2 => 02
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		return minutes + ":" + seconds; // Return is MM : SS
	}
	function largestMultiKill(level) {
		switch (level) {
			case 0:
				return "Zero Kill";
			case 1:
				return "Single Kill";
			case 2:
				return "Double Kill";
			case 3:
				return "Triple Kill";
			case 4:
				return "Quadra Kill";
			case 5:
				return "Penta Kill";
		}
	}
	return (
		<section
			className={`my-4 flex flex-col justify-center items-center ${
				mainPlayer.win ? classes.successRightBorder : classes.looserRightBorder
			} ${classes.container}`}
		>
			<div
				className={`mx-2 h-full w-full flex justify-between items-center ${
					classes.warapper
				} ${mainPlayer.win ? classes.success : classes.looser}`}
			>
				<div
					className={`h-full w-7/12 rounded-xl flex justify-around items-center ${classes["game-looser"]} ${classes.gameDetails}`}
				>
					<div className="h-4/6 w-5/12  rounded-lg flex flex-col justify-between items-center">
						<div className="h-4/6 w-10/12 flex justify-around items-center  rounded-lg">
							<div className="relative">
								<img
									className="m-2 w-12 h-12 rounded-full border-blue-600 border-4"
									src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${mainPlayer.championName}.png`}
								/>
								<img
									className="w-6 h-6 mx-1 absolute rounded-full border-red-600 border-2 top-8 left-10"
									src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${mainPlayer.summoner1Id}.png`}
								></img>
								<img
									className="w-4 h-4 mx-3 mt-1  absolute rounded-full border-red-600 border-2 top-10 left-14"
									src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${mainPlayer.summoner2Id}.png`}
								></img>
							</div>
							<h1 className="text-2xl">
								<span className="text-blue-700">{mainPlayer.kills}</span>/
								<span className="text-red-600">{mainPlayer.deaths}</span>/
								{mainPlayer.assists}
							</h1>
						</div>
						<div
							className={`h-6 w-10/12 flex justify-around items-center  rounded-full ${
								mainPlayer.win ? "text-blue-500" : "text-red-600"
							}`}
						>
							<h4 className={`font-semibold `}>
								{mainPlayer.win ? "vactor" : "Defaat"}
							</h4>
							<h2 className="font-semibold">{convertHMS(duration)}</h2>
						</div>
					</div>
					<div className="h-4/6 w-7/12 mr-4 px-3 rounded-lg flex justify-start items-center flex-wrap">
						<img
							className="rounded-full  mr-2 w-7 h7"
							src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer.item0}.png`}
						/>
						<img
							className="rounded-full mr-2 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer.item1}.png`}
						/>
						<img
							className="rounded-full mr-2 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer.item2}.png`}
						/>
						<img
							className="rounded-full mr-2 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer.item3}.png`}
						/>
						<img
							className="rounded-full mr-2 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer.item4}.png`}
						/>
						<img
							className="rounded-full mr-2 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer.item5}.png`}
						/>
						<img
							className="rounded-full mr-2 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer.item6}.png`}
						/>
						<img
							className="rounded-md mr-2 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${"311d1"}.png`}
						/>
						<img
							className="rounded-md mr-2 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${"31115"}.png`}
						/>
						<label className="rounded-xl text-white px-5">
							{largestMultiKill(mainPlayer.largestMultiKill)}
						</label>
					</div>
				</div>
				<div
					className={`h-full w-5/12 text-white flex justify-start items-center  flex-wrap ${classes.summonerName}`}
				>
					<div className="w-9/12 ml-3 columns-2">
						{players.map((player) => (
							<div
								key={player.summonerName}
								className="mb-1 flex justify-start items-center"
							>
								<img
									className="rounded-full mr-2 w-5 h-5"
									src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${player.profileIcon}.png`}
								/>
								<label className="text-xs">{player.summonerName}</label>
							</div>
						))}
					</div>
				</div>
			</div>

			<CSSTransition
				in={toggle}
				timeout={300}
				className={`w-full flex justify-between items-center pt-9 ${classes.summonersGameDetails}`}
				unmountOnExit
			>
				<div>
					<div
						className={`w-3/12 pb-1 px-1  ${classes["summonerDetails-header"]}`}
					>
						<div className="flex justify-between text-white text-xs">
							<label>S2021 Rank</label>
							<label>Ranked</label>
							<label>S22 Champion</label>
						</div>
					</div>
					<div className="w-3/12 flex justify-center items-center">
						<img
							className="rounded-full mr-2 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5092}.png`}
						/>
						<img
							className="rounded-full mr-2 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5091}.png`}
						/>
						<div className="relative">
							<img
								className="m-2 w-10 h-10 rounded-full border-blue-600 border-4"
								src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5090}.png`}
							/>
							<img
								className="w-5 h-5 mx-1 absolute rounded-full border-red-600 border-2 top-8 left-8"
								src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5091}.png`}
							/>
							<img
								className="w-4 h-4 mx-3 mt-1  absolute rounded-full border-red-600 border-2 top-10 left-10"
								src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5092}.png`}
							/>
						</div>
					</div>
					<div className="w-3/12 flex justify-center items-center">
						<div className="relative">
							<img
								className="m-2 w-10 h-10 rounded-full border-blue-600 border-4"
								src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5090}.png`}
							/>
							<img
								className="w-5 h-5 mx-1 absolute rounded-full border-red-600 border-2 top-8 left-8"
								src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5091}.png`}
							/>
							<img
								className="w-4 h-4 mx-3 mt-1  absolute rounded-full border-red-600 border-2 top-10 left-10"
								src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5092}.png`}
							/>
						</div>
						<img
							className="rounded-full mr-1 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5058}.png`}
						/>
						<img
							className="rounded-full mr-1 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5089}.png`}
						/>
						<img
							className="rounded-full mr-1 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5089}.png`}
						/>
						<img
							className="rounded-full mr-1 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5089}.png`}
						/>
						<img
							className="rounded-full mr-1 w-7 h-7"
							src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${5089}.png`}
						/>
					</div>
					<div
						className={`w-3/12 pb-1 px-1  ${classes["summonerDetails-header"]}`}
					>
						<div className="flex justify-between text-white text-xs">
							<label>S2021 Rank</label>
							<label>Ranked</label>
							<label>S22 Champion</label>
						</div>
					</div>
				</div>
			</CSSTransition>

			<div className="self-end mx-4">
				<button
					onClick={toggleSummonersDetails}
					className={` rounded-full w-7 h-7`}
				>
					<CgMaximize className="mx-auto text-lg" />
				</button>
			</div>
		</section>
	);
}
export default SummonerCard;
