import React, { useEffect, useState } from "react";
import Image from "next/image";
import PlayerOne from "../../../public/assets/players/NoPath - Copy (10).png";
import PlayerTwo from "../../../public/assets/players/NoPath - Copy (11).png";
import PlayerThree from "../../../public/assets/players/NoPath - Copy (12).png";
import { HiArrowDown } from "react-icons/hi";
import ChampList from "./ChampList";
import ProfileCardWrapHoc from "../../HOC/ProfileCardWrapHoc";
import useHttp from "../../../hook/useHttp";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { matchesForCalculationsActions } from "../../../store/matchesForCalculations";

const SeasonMostPlayed = () => {
	const dispatch = useDispatch();
	const [expand, setExpand] = useState(false);
	const [seasonMostPlayedList, setSeasonMostPlayedList] = useState([]);
	const {sendRequest, hasError} = useHttp();
	const [matches, setMatches] = useState([]);
	const [mainPlayerChamps, setMainPlayerChamps] = useState([])
	const router = useRouter();
	let champions  = [];

	const requestHandler = (res) => {
		if(!res){
			console.log("no response from server");
			return;
		}
		
		dispatch(
			matchesForCalculationsActions.setMatches({matches: res.data.matches.slice(0, 20)})
		)

		setMatches(res.data.matches);
	}

	useEffect(()=>{
		sendRequest(
			{
				url: "/seasonMostPlayed",
				method: "GET",
				params: { region: router.query.region, summonerName: router.query.summonerName, count: 50},
			},
			requestHandler
		);
	}, [])


	useEffect(() => {

		matches.forEach((match) => {
			const mainPlayerArr = match.players.filter((player) => player.mainPlayer === true);
			mainPlayerArr.forEach((obj) => {
				champions.push(obj)
			})
		})

		setMainPlayerChamps(champions)
	}, [matches])

	useEffect(() => {
		let maxcount = 0;
		let deaths = 0;
		let assists = 0;
		let kills = 0;
		let winCount = 0;
		let lossCount = 0;

		for (let i = 0; i < mainPlayerChamps.length; i++) {
			let count = 0;
			for (let j = 0; j < mainPlayerChamps.length; j++) {

				if (mainPlayerChamps[i].championName == mainPlayerChamps[j].championName){
					count++;
					deaths = deaths + mainPlayerChamps[j].deaths;
					assists = assists + mainPlayerChamps[j].assists;
					kills = kills + mainPlayerChamps[j].kills;
					mainPlayerChamps[j].win? winCount++ : lossCount++;
					
				}
			}

			if (count > maxcount) {
				maxcount = count;
				setSeasonMostPlayedList([...seasonMostPlayedList,{ ...mainPlayerChamps[i], totalDeaths: deaths, totalAssists: assists, totalKills: kills, winCount, lossCount}]);
			}

			deaths = 0;
			assists = 0;
			kills = 0;
			winCount = 0;
			lossCount = 0;


		}

	}, [mainPlayerChamps])

	useEffect(()=>{
		// console.log(seasonMostPlayedList)
		// console.log(mainPlayerChamps)
		const newChamps = mainPlayerChamps.filter((champion) => {
			return champion.championName !== seasonMostPlayedList[seasonMostPlayedList.length-1].championName
		});

		if(newChamps[0]){
			setMainPlayerChamps(newChamps);
		}


	}, [seasonMostPlayedList])

	const player = [
		{ name: "141 games", img: PlayerOne },
		{ name: "43 games", img: PlayerTwo },
		{ name: "15 games", img: PlayerThree },
	];

	const expandHandler = () => {
		setExpand(!expand);
	};

	return (
		<React.Fragment>
			{/* <aside className="card_wrap "> */}
			{/* top slider  */}
			<div className=" pb-6 ">
				<div className="mb-6">
					{seasonMostPlayedList.length > 10 && seasonMostPlayedList.slice(0, 10).map((player, index) =>{
						return(
							<small key={index} className="text-white">
								<div className="text-red-500 font-bold">{player.championName}</div>
								<div>Wins: {player.winCount}</div>
								<div>Losses: {player.lossCount}</div>
								<div>Assists: {player.totalAssists}</div>
								<div>Kills: {player.totalKills}</div>
								<div>Deaths: {player.totalDeaths}</div>
								<div>KDA: {((player.totalAssists + player.totalKills) / player.totalDeaths).toFixed(2)}:1</div>
							</small>
						)
					})}
					{/* {player.map((player, index) => {
                        return (
                            <div key={"player" + index}>
                                <div className=" relative mx-auto w-[61px] h-[61px] border border-mix-white-black rounded-full mb-[15px]">
                                    <Image
                                        src={player.img}
                                        alt="player image"
                                        layout="fill"
                                    />
                                </div>
                                <p className=" gotham-15px-book text-[#8D919F] ">
                                    {player.name}
                                </p>
                            </div>
                        );
                    })} */}
				</div>
				{/* <div className=" flex gap-x-[2px] justify-end">
					<div className=" w-10 h-[3px] bg-liquid-white rounded-full"></div>
					<div className=" w-6 h-[3px] bg-mix-white-black rounded-full"></div>
					<div className=" w-6 h-[3px] bg-mix-white-black rounded-full"></div>
					<div className=" w-6 h-[3px] bg-mix-white-black rounded-full"></div>
				</div> */}
			</div>
			{/* player champ list  */}
			{/* {expand && (
				<ChampList
					title="season most played champs"
					className=" -mx-[16px] pt-[14px] pb-[30px] px-[27px] "
				/>
			)} */}
			{/* bottom button  */}
			{/* <button
				onClick={expandHandler}
				className=" btn rounded-full w-[55px] h-[55px] p-0 flex justify-center items-center border-0 cursor-pointer mx-auto mt-5 hover:bg-btn-hover hover:rotate-45 "
			>
				<HiArrowDown className=" text-[20px]" />
			</button> */}
			{/* </aside> */}
		</React.Fragment>
	);
};

export default ProfileCardWrapHoc(SeasonMostPlayed);
