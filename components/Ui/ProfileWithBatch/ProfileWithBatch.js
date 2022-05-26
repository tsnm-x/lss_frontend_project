import React, { useEffect, useState } from "react";
import Image from "next/image";
import BatchOne from "../../../public/assets/batches/Conqueror_rune (1).png";
import BatchTwo from "../../../public/assets/batches/inspiration.png";
import Domination from "../../../public/assets/runes/7200_Domination.png";
import Inspiration from "../../../public/assets/runes/7203_Whimsy.png";
import Precision from "../../../public/assets/runes/7201_Precision.png";
import Resolve from "../../../public/assets/runes/7204_Resolve.png";
import Sorcery from "../../../public/assets/runes/7202_Sorcery.png";

const ProfileWithBatch = (props) => {
	// console.log(props.imgLink ,'=====//===<');
	const [update, setUpdate] = useState(false);

	const selectRune = (runeId) => {
		switch (runeId) {
			case "8100":
				return Domination;
			case "8300":
				return Inspiration;
			case "8000":
				return Precision;
			case "8400":
				return Resolve;
			case "8200":
				return Sorcery;
		}
	};
	let rune1Icon = selectRune(props.rune1);

	let rune2Icon = selectRune(props.rune2);
	useEffect(() => {
		setUpdate(!update);
	}, [rune1Icon, rune2Icon]);

	console.log(props.rune1, "run2");
	return (
		<div className=" relative w-12 ">
			{/* image  */}
			<div className=" border border-white-blue rounded-full w-10 h-10  ">
				<img
					className=" block rounded-full"
					src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${props.imgLink}.png`}
					alt="player image"
				/>
			</div>
			{/* batchs  */}
			<div className=" flex gap-x-[5px] items-end absolute -bottom-1 -right-[20px] ">
				<div className=" w-5 h-5 rounded-full border border-red-yellow p-[2px] flex justify-center items-center bg-full-dark  ">
					<Image
						className=" inline-block "
						src={rune1Icon ? rune1Icon : Precision}
						alt="rank icon"
					/>
				</div>
				<div className=" w-[15px] h-[15px] rounded-full border border-red-yellow p-[4px] flex justify-center items-center bg-full-dark ">
					<Image
						className=" inline-block "
						src={rune2Icon ? rune2Icon : Precision}
						alt="rank icon"
					/>
					{/* <img
						className=" inline-block "
						// src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${props.summoner2Id}.png`}
						src={rune2Icon}
						alt="batch image"
					/> */}
				</div>
			</div>
		</div>
	);
};

export default ProfileWithBatch;
