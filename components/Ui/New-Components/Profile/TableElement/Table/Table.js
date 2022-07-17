import React, { useEffect, useState } from "react";
import TableControlBtns from "../TableControlBtns/TableControlBtns";
import TableHeader from "../TableHeader/TableHeader";
import TableBodyRow from "../TableBodyRow/TableBodyRow";
import JhinImg from "../../../../../../public/assets/new-images/Profile/Jhin.png";
import ZiggsImg from "../../../../../../public/assets/new-images/Profile/Ziggs.png";
import useHttp from "../../../../../../hook/useHttp";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Table = () => {
	const matches = useSelector((state) => {
		return state.profile.profile;
	});
	const [expand, setExpand] = useState(false);
	const [seasonMostPlayedList, setSeasonMostPlayedList] = useState([]);
	const { sendRequest, hasError } = useHttp();
	const [mainPlayerChamps, setMainPlayerChamps] = useState([]);
	const router = useRouter();
	let champions = [];

	function convertM(value) {
		const sec = parseInt(value); // convert value to number if it's string
		let minutes = Math.floor(sec / 60); // get minutes
		return minutes;
	}

	useEffect(() => {
		if (matches) {
			matches?.forEach((match) => {
				const mainPlayerArr = match.players.filter(
					(player) => player.mainPlayer === true
				);
				mainPlayerArr.forEach((obj) => {
					champions.push({ ...obj, duration: match.duration });
				});
			});

			setMainPlayerChamps(champions);
		}
	}, [matches]);

	useEffect(() => {
		let maxcount = 0;
		let deaths = 0;
		let assists = 0;
		let kills = 0;
		let winCount = 0;
		let lossCount = 0;
		let totalCs = 0;
		let totalMatches = 0;
		let avgCs = 0;
		let totalDuration = 0;
		let totalDamageDealt = 0;

		for (let i = 0; i < mainPlayerChamps.length; i++) {
			let count = 0;
			for (let j = 0; j < mainPlayerChamps.length; j++) {
				if (
					mainPlayerChamps[i].championName == mainPlayerChamps[j].championName
				) {
					count++;
					deaths = deaths + mainPlayerChamps[j].deaths;
					assists = assists + mainPlayerChamps[j].assists;
					kills = kills + mainPlayerChamps[j].kills;
					totalCs = totalCs + mainPlayerChamps[j].totalMinionsKilled;
					mainPlayerChamps[j].win ? winCount++ : lossCount++;
					totalMatches++;
					totalDuration = totalDuration + mainPlayerChamps[j].duration;
					totalDamageDealt =
						totalDamageDealt + mainPlayerChamps[j].totalDamageDealt;
				}
			}

			if (count > maxcount) {
				maxcount = count;
				avgCs = totalCs / totalMatches / convertM(totalDuration);
				setSeasonMostPlayedList([
					...seasonMostPlayedList,
					{
						...mainPlayerChamps[i],
						totalDeaths: deaths,
						totalAssists: assists,
						totalKills: kills,
						winCount,
						lossCount,
						avgCs,
						totalDamageDealt,
					},
				]);
			}

			deaths = 0;
			assists = 0;
			kills = 0;
			winCount = 0;
			lossCount = 0;
			totalCs = 0;
			totalMatches = 0;
			avgCs = 0;
			totalDuration = 0;
			totalDamageDealt = 0;
		}
	}, [mainPlayerChamps]);

	useEffect(() => {
		const newChamps = mainPlayerChamps.filter((champion) => {
			return (
				champion.championName !==
				seasonMostPlayedList[seasonMostPlayedList.length - 1].championName
			);
		});

		if (newChamps[0]) {
			setMainPlayerChamps(newChamps);
		}
	}, [seasonMostPlayedList]);

	return (
		<section className=" mt-[100px] mb-[300px] ">
			<div className="container">
				<TableControlBtns />
				<TableHeader className=" mt-10 " />
				{/* table row  */}
				<div className=" mt-[25px] ">
					{seasonMostPlayedList.length >= 10
						? seasonMostPlayedList.slice(0, 11).map((row, index) => {
								return <TableBodyRow key={index} {...row} />;
						  })
						: seasonMostPlayedList.map((row, index) => {
								return <TableBodyRow key={index} {...row} />;
						  })}
				</div>
			</div>
		</section>
	);
};

export default Table;
