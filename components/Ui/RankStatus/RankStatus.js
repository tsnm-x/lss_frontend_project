import React from "react";
import classes from "./RankStatus.module.css";
import Image from "next/image";
// import all rank elements then select one
import Emblem_Iron from "../../../public/assets/ranks/Emblem_Iron.png";
import Emblem_Bronze from "../../../public/assets/ranks/Emblem_Bronze.png";
import Emblem_Silver from "../../../public/assets/ranks/Emblem_Silver.png";
import Emblem_Gold from "../../../public/assets/ranks/Emblem_Gold.png";
import Emblem_Platinum from "../../../public/assets/ranks/Emblem_Platinum.png";
import Emblem_Diamond from "../../../public/assets/ranks/Emblem_Diamond.png";
import Emblem_Master from "../../../public/assets/ranks/Emblem_Master.png";
import Emblem_Grandmaster from "../../../public/assets/ranks/Emblem_Grandmaster.png";
import Emblem_Challenger from "../../../public/assets/ranks/Emblem_Challenger.png";

const RankStatus = (props) => {
	let RankIcon;
	switch (props.ranks?.tier) {
		case "IRON":
			RankIcon = Emblem_Iron;
			break;
		case "BRONZE":
			RankIcon = Emblem_Bronze;
			break;
		case "SILVER":
			RankIcon = Emblem_Silver;
			break;
		case "GOLD":
			RankIcon = Emblem_Gold;
			break;
		case "PLATINUM":
			RankIcon = Emblem_Platinum;
			break;
		case "DIAMOND":
			RankIcon = Emblem_Diamond;
			break;
		case "MASTER":
			RankIcon = Emblem_Master;
			break;
		case "GRANDMASTER":
			RankIcon = Emblem_Grandmaster;
			break;
		case "CHALLENGER":
			RankIcon = Emblem_Challenger;
			break;
		default:
			RankIcon = Emblem_Iron;
	}
	return (
		<div className={` w-full ${props.className}`}>
			<p className=" gotham-10px-mid text-liquid-white mb-2 ml-3">
				{/* Ranked Solo/Duo */}
				{props.title}
			</p>
			<div className="  flex items-center justify-between  ">
				<div className={`${classes.imgWrap} relative w-[45px] h-[52px] mr-2`}>
					<Image src={RankIcon} alt="rank icon" layout="fill" />
				</div>
				{/* rank details  */}
				<div className=" grow   ">
					<div className="flex justify-between px-2 ">
						<h5 className=" gotham-14px text-liquid-white  ">
							{props.ranks?.tier} {props.ranks?.rank}
						</h5>
						<h5 className=" uppercase text-white-blue">
							{props.ranks?.wins}W{" "}
							<span className=" text-red-yellow-gold">
								{props.ranks?.losses}L
							</span>
						</h5>
					</div>
					<div className="flex justify-between ">
						<h5 className=" uppercase gotham-12px-mid text-[#8d919f] ">
							{props.ranks?.leaguePoints}lp
						</h5>
						<h5 className=" gotham-12px-mid text-liquid-white ">
							{(
								(props.ranks?.wins /
									(props.ranks?.wins + props.ranks?.losses)) *
								100
							).toFixed(2)}
							%
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RankStatus;
