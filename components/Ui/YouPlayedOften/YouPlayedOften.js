import React from "react";
import ProfileCardWrap from "../../HOC/ProfileCardWrapHoc/ProfileCardWrapHoc";
import Image from "next/image";
import China from "../../../public/assets/oftenPlayedWith/china.png";
import Nexos from "../../../public/assets/oftenPlayedWith/nexos.png";
import SouthKorea from "../../../public/assets/oftenPlayedWith/south-korea.png";
import classes from "./YouPlayedOften.module.css";

const YouPlayedOften = () => {
	const oftenList = [
		{
			img: Nexos,
			name: "nexos",
			ladderRank: 42.123,
			kda: 2.37,
			lastPoint: "7.3/5.3/5.0",
			winrate: 54,
			matchPlayed: 277,
		},
		{
			img: SouthKorea,
			name: "nexos",
			ladderRank: 12.123,
			kda: 7.31,
			lastPoint: "7.3/5.3/5.0",
			winrate: 44,
			matchPlayed: 12,
		},
		{
			img: China,
			name: "nexos",
			ladderRank: 56.236,
			kda: 7.31,
			lastPoint: "7.3/5.3/5.0",
			winrate: 31,
			matchPlayed: 9,
		},

		{
			img: Nexos,
			name: "nexos",
			ladderRank: 42.123,
			kda: 2.37,
			lastPoint: "7.3/5.3/5.0",
			winrate: 54,
			matchPlayed: 277,
		},
		{
			img: SouthKorea,
			name: "nexos",
			ladderRank: 12.123,
			kda: 7.31,
			lastPoint: "7.3/5.3/5.0",
			winrate: 44,
			matchPlayed: 12,
		},
		{
			img: China,
			name: "nexos",
			ladderRank: 56.236,
			kda: 7.31,
			lastPoint: "7.3/5.3/5.0",
			winrate: 31,
			matchPlayed: 9,
		},
	];
	return (
		<div className={` flex flex-col gap-y-4 ${classes.listWrap}`}>
			{oftenList.map((player, index) => {
				const winRateStyle =
					Number(player.winrate.toString()[0]) >= 5
						? " text-white-blue "
						: " text-red-yellow-gold ";
				// return (
				//     <div
				//         className={`flex gap-x-6 ${classes.list}`}
				//         key={"player" + index}
				//     >
				//         <div className=" w-10 h-10 rounded-full border border-mix-white-black">
				//             <Image src={player.img} alt="player image" />
				//         </div>
				//         {/* player details  */}
				//         <div className=" flex grow justify-between ">
				//             <div className=" ">
				//                 <h4
				//                     className={`gotham-12px-mid text-liquid-white capitalize `}
				//                 >
				//                     {player.name}
				//                 </h4>
				//                 <p className=" sf-7px-regular text-mix-white-black-100">
				//                     {player.ladderRank}
				//                 </p>
				//             </div>
				//             <div className=" ">
				//                 <h4
				//                     className={`gotham-12px-mid text-liquid-white uppercase ${classes.kdaTitle}`}
				//                 >
				//                     <span>{player.kda}</span>
				//                     :1 kda
				//                 </h4>
				//                 <p className=" sf-7px-regular text-mix-white-black-100">
				//                     {player.lastPoint}
				//                 </p>
				//             </div>
				//             <div className=" ">
				//                 <h4
				//                     className={`gotham-12px-mid uppercase ${winRateStyle}`}
				//                 >
				//                     {player.winrate}%
				//                 </h4>
				//                 <p className=" sf-7px-regular text-mix-white-black-100 capitalize">
				//                     {player.matchPlayed} games played
				//                 </p>
				//             </div>
				//         </div>
				//     </div>
				// );
			})}
		</div>
	);
};

export default ProfileCardWrap(YouPlayedOften);
