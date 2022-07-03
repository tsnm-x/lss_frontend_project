import React, { useEffect, useState } from "react";
import Image from "next/image";

// import domination
import Domination from "../../../../public/assets/old-images/runes/7200_Domination.png";
import DarkHarvest from "../../../../public/assets/old-images/runes/Domination/DarkHarvest.png";
import Electrocute from "../../../../public/assets/old-images/runes/Domination/Electrocute.png";
import HailOfBlades from "../../../../public/assets/old-images/runes/Domination/HailOfBlades.png";
import Predator from "../../../../public/assets/old-images/runes/Domination/Predator.png";
// import inspiration
import Inspiration from "../../../../public/assets/old-images/runes/7203_Whimsy.png";
import GlacialAugment from "../../../../public/assets/old-images/runes/Inspiration/GlacialAugment.png";
import MasterKey from "../../../../public/assets/old-images/runes/Inspiration/MasterKey.png";
import UnsealedSpellbook from "../../../../public/assets/old-images/runes/Inspiration/UnsealedSpellbook.png";

import Precision from "../../../../public/assets/old-images/runes/7201_Precision.png";
import Conqueror from "../../../../public/assets/old-images/runes/Precision/Conqueror.png";
import FleetFootwork from "../../../../public/assets/old-images/runes/Precision/FleetFootwork.png";
import LethalTempoTemp from "../../../../public/assets/old-images/runes/Precision/LethalTempoTemp.png";
import PressTheAttack from "../../../../public/assets/old-images/runes/Precision/PressTheAttack.png";

import Resolve from "../../../../public/assets/old-images/runes/7204_Resolve.png";
import GraspOfTheUndying from "../../../../public/assets/old-images/runes/Resolve/GraspOfTheUndying.png";
import Guardian from "../../../../public/assets/old-images/runes/Resolve/Guardian.png";
import VeteranAftershock from "../../../../public/assets/old-images/runes/Resolve/VeteranAftershock.png";

import Sorcery from "../../../../public/assets/old-images/runes/7202_Sorcery.png";
import ArcaneComet from "../../../../public/assets/old-images/runes/Sorcery/ArcaneComet.png";
import PhaseRush from "../../../../public/assets/old-images/runes/Sorcery/PhaseRush.png";
import SummonAery from "../../../../public/assets/old-images/runes/Sorcery/SummonAery.png";

const ProfileWithBatch = (props) => {
	const select1stRune = (runeId) => {
		switch (runeId) {
			// domination
			case 8112:
				return Electrocute;
			case 8124:
				return Predator;
			case 8128:
				return DarkHarvest;
			case 9923:
				return HailOfBlades;

			// Precision
			case 8005:
				return PressTheAttack;
			case 8008:
				return LethalTempoTemp;
			case 8021:
				return FleetFootwork;
			case 8010:
				return Conqueror;

			// Sorcery
			case 8229:
				return ArcaneComet;
			case 8230:
				return PhaseRush;
			case 8214:
				return SummonAery;

			// Resolve
			case 8437:
				return GraspOfTheUndying;
			case 8439:
				return VeteranAftershock;
			case 8465:
				return Guardian;

			// Inspiration
			case 8351:
				return GlacialAugment;
			case 8358:
				return MasterKey;
			case 8360:
				return UnsealedSpellbook;

			// todo: add image placeholder as default
			default:
				return Precision;
		}
	};

	const select2ndRune = (runeId) => {
		switch (runeId) {
			case 8100:
				return Domination;
			case 8300:
				return Inspiration;
			case 8000:
				return Precision;
			case 8400:
				return Resolve;
			case 8200:
				return Sorcery;

			// todo: add image placeholder as default
			default:
				return Precision;
		}
	};

	let championName = props.imgLink;

	if (props.imgLink === "FiddleSticks") championName = "Fiddlesticks";

	return (
		<div className=" relative ">
			{/* image  */}
			<div
				className={`border  ${
					"border-" + props.borderColor
				} rounded-full w-[21px] h-[21px] relative`}
			>
				<Image
					className=" block rounded-full"
					src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${championName}.png`}
					alt="player image"
					layout="fill"
				/>
			</div>
			{/* batchs  */}
			<div className=" flex justify-start items-end absolute left-[13px] -bottom-[3px]  ">
				<div className=" relative w-[6px] h-[6px] rounded-full border border-[#FC2300] flex justify-center items-center mr-[2px]   ">
					<Image
						className=" inline-block "
						src={select1stRune(props?.perks?.styles[0]?.selections[0]?.perk)}
						alt="rank icon"
						layout="fill"
					/>
				</div>
				<div className=" relative w-[5px] h-[5px] rounded-full border border-[#FC2300] flex justify-center items-center  ">
					<Image
						className=" inline-block "
						src={select2ndRune(props?.perks?.styles[1]?.style)}
						alt="rank icon"
						layout="fill"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfileWithBatch;
