import React, { useEffect, useState } from "react";
import ProfileCardWrap from "../../HOC/ProfileCardWrapHoc/ProfileCardWrapHoc";
import Image from "next/image";
import China from "../../../public/assets/oftenPlayedWith/china.png";
import Nexos from "../../../public/assets/oftenPlayedWith/nexos.png";
import SouthKorea from "../../../public/assets/oftenPlayedWith/south-korea.png";
import classes from "./YouPlayedOften.module.css";
import { useSelector } from "react-redux";

const YouPlayedOften = () => {
	const matches = useSelector((state) => state.matches.matches);
	const playersArr = []
	const [players, setPlayers] = useState([]);
	const [mostPlayedWithList, setMostPlayedWithList] = useState([])
	
	useEffect(()=>{
		matches.forEach((match)=>{
			match.players.forEach((player) => {
				if(!player.mainPlayer){
					playersArr.push(player)
				}
			})
			
		});

		setPlayers(playersArr);
	}, []);


	useEffect(()=>{

		console.log(mostPlayedWithList)

		let maxcount = 0;
		let deaths = 0;
		let assists = 0;
		let kills = 0;
		let winCount = 0;
		let lossCount = 0;

		for (let i = 0; i < players.length; i++) {
			let count = 0;
			for (let j = 0; j < players.length; j++) {

				if ((players[i].summonerId == players[j].summonerId) && !players[i].mainPlayer){
					count++;
					deaths = deaths + players[j].deaths;
					assists = assists + players[j].assists;
					kills = kills + players[j].kills;
					players[j].win? winCount++ : lossCount++;
					
				}
			}

			if (count > maxcount) {
				maxcount = count;
				setMostPlayedWithList([...mostPlayedWithList,{ ...players[i], totalDeaths: deaths, totalAssists: assists, totalKills: kills, winCount, lossCount}]);
			}

			deaths = 0;
			assists = 0;
			kills = 0;
			winCount = 0;
			lossCount = 0;


		}
	}, [players]);

	useEffect(()=>{

		const newPlayers = players.filter((player)=> player.summonerId !== mostPlayedWithList[mostPlayedWithList.length-1].summonerId);

		if(newPlayers[0]){
			setPlayers(newPlayers);
		}

	}, [mostPlayedWithList])
	// return (
	// 	<div className={` flex flex-col gap-y-4 ${classes.listWrap}`}>
	// 		{oftenList.map((player, index) => {
	// 			const winRateStyle =
	// 				Number(player.winrate.toString()[0]) >= 5
	// 					? " text-white-blue "
	// 					: " text-red-yellow-gold ";
				
				
	// 			// return (
	// 			//     <div
	// 			//         className={`flex gap-x-6 ${classes.list}`}
	// 			//         key={"player" + index}
	// 			//     >
	// 			//         <div className=" w-10 h-10 rounded-full border border-mix-white-black">
	// 			//             <Image src={player.img} alt="player image" />
	// 			//         </div>
	// 			//         {/* player details  */}
	// 			//         <div className=" flex grow justify-between ">
	// 			//             <div className=" ">
	// 			//                 <h4
	// 			//                     className={`gotham-12px-mid text-liquid-white capitalize `}
	// 			//                 >
	// 			//                     {player.name}
	// 			//                 </h4>
	// 			//                 <p className=" sf-7px-regular text-mix-white-black-100">
	// 			//                     {player.ladderRank}
	// 			//                 </p>
	// 			//             </div>
	// 			//             <div className=" ">
	// 			//                 <h4
	// 			//                     className={`gotham-12px-mid text-liquid-white uppercase ${classes.kdaTitle}`}
	// 			//                 >
	// 			//                     <span>{player.kda}</span>
	// 			//                     :1 kda
	// 			//                 </h4>
	// 			//                 <p className=" sf-7px-regular text-mix-white-black-100">
	// 			//                     {player.lastPoint}
	// 			//                 </p>
	// 			//             </div>
	// 			//             <div className=" ">
	// 			//                 <h4
	// 			//                     className={`gotham-12px-mid uppercase ${winRateStyle}`}
	// 			//                 >
	// 			//                     {player.winrate}%
	// 			//                 </h4>
	// 			//                 <p className=" sf-7px-regular text-mix-white-black-100 capitalize">
	// 			//                     {player.matchPlayed} games played
	// 			//                 </p>
	// 			//             </div>
	// 			//         </div>
	// 			//     </div>
	// 			// );
	// 		})}

	// 	</div>
	// );

	return (
		<>
			{mostPlayedWithList[0] && mostPlayedWithList.slice(0,10).map((player, index) =>{
				return (
					<small className="text-white" key={index}>
						<div className="text-red-500 font-bold">{player.summonerName}</div>
						<div>KDA:  {((player.totalAssists + player.totalKills) / player.totalDeaths).toFixed(2)}:1</div>
						<div>WinToLoss Percentage: {((player.winCount * 100) / (player.winCount + player.lossCount)).toFixed(0)}%</div>
					</small>
				)
			})}
			
		</>
	)
};

export default ProfileCardWrap(YouPlayedOften);
