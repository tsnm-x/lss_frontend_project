import React, { useEffect, useState } from "react";
import RankIcon from "../../../../public/assets/rank-icon.png";
import Image from "next/image";
import ProgressGraph from "../../../../public/assets/graph/Group 419.png";
import { useRouter } from "next/router";
import { axiosInstance } from "../../../../network/axiosConfig";
import axios from "axios";

// import all rank elements then select one
import Emblem_Iron from "../../../../public/assets/ranks/Emblem_Iron.png";
import Emblem_Bronze from "../../../../public/assets/ranks/Emblem_Bronze.png";
import Emblem_Silver from "../../../../public/assets/ranks/Emblem_Silver.png";
import Emblem_Gold from "../../../../public/assets/ranks/Emblem_Gold.png";
import Emblem_Platinum from "../../../../public/assets/ranks/Emblem_Platinum.png";
import Emblem_Diamond from "../../../../public/assets/ranks/Emblem_Diamond.png";
import Emblem_Master from "../../../../public/assets/ranks/Emblem_Master.png";
import Emblem_Grandmaster from "../../../../public/assets/ranks/Emblem_Grandmaster.png";
import Emblem_Challenger from "../../../../public/assets/ranks/Emblem_Challenger.png";

const PlayerRankCard = (props) => {
	const selectRankIcon = (rank) => {
		switch (rank) {
			case "IRON":
				return Emblem_Iron;

			case "BRONZE":
				return Emblem_Bronze;

			case "SILVER":
				return Emblem_Silver;

			case "GOLD":
				return Emblem_Gold;

			case "PLATINUM":
				return Emblem_Platinum;

			case "DIAMOND":
				return Emblem_Diamond;

			case "MASTER":
				return Emblem_Master;

			case "GRANDMASTER":
				return Emblem_Grandmaster;

			case "CHALLENGER":
				return Emblem_Challenger;

			default:
				return;
		}
	};

	const [ranks, setRanks] = useState([]);

	const router = useRouter();

	const { region } = router.query;
	// let propsPlayer = [...props.group];

	// todo : deep clone
	let propsPlayer = JSON.parse(JSON.stringify(props.group));

	let players = propsPlayer.map((player) => {
		player.ranks = [];
		return player;
	});

	let rankReqs = [];

	useEffect(() => {
		players.forEach((player) => {
			rankReqs.push(
				axiosInstance.post("/summonerRanks", {
					region,
					summonerRiotId: player.summonerId,
				})
			);
		});

		axios
			.all([...rankReqs])
			.then(
				axios.spread((...responses) => {
					setRanks(responses);
					responses.forEach((res, index) => {
						if (!res?.data?.ranks) {
							console.log("ranks not found");
							return;
						}
						// console.log(res.data.ranks);
					});
					// use/access the results
				})
			)
			.catch((errors) => {
				// react on errors.
				console.log(errors);
			});
	}, []);

	// console.log(players[0].ranks);
	return (
		<div className={`w-full bg-full-dark ${props.className}`}>
			<div className=" h-full ">
				{/* rank title  */}
				<div className="  border-b border-white-blue pb-1 h-[8%] grid grid-cols-3 ">
					<p className=" capitalize text-liquid-white text-[12px] ">
						s2021 rank
					</p>
					<p className=" capitalize text-liquid-white text-[12px] ">ranked</p>
					<p className=" capitalize text-liquid-white text-[12px] ">
						s22 champion
					</p>
				</div>
				{/* rank list  */}
				<div className=" h-[92%]  flex flex-col justify-between ">
					{players.map((player, index) => {
						const rankSolo = ranks[index]?.data?.ranks.find(
							(el) => el.queueType === "RANKED_SOLO_5x5"
						);

						const rankIcon = selectRankIcon(rankSolo?.tier);

						return (
							<div
								className=" bg-mix-white-black-200 rounded-full grid grid-cols-3 "
								key={"item" + index}
							>
								{/* rank 2021 module  */}
								<div className=" flex items-center gap-x-1 ">
									<div className=" w-10 h-10 ">
										{rankIcon && <Image src={rankIcon} alt="rank icon" />}
									</div>
									<p className=" text-[8px] text-liquid-white">IGITeak</p>
									{/* <div className=" flex items-center ">
                                        <div className=" w-2 ">
                                            <Image src={LeafIcon} alt="icon" />
                                        </div>
                                        <p className=" ml-1 capitalize text-mix-white-black text-[10px]  ">
                                            main role
                                        </p>
                                    </div> */}
								</div>
								{/* ranked  */}
								<div>
									<div className=" flex flex-col ">
										<p className=" text-[11px] capitalize text-white-blue ">
											58% <span className=" text-liquid-white ">winrate</span>
										</p>
										{/* <p className=" ml-4 capitalize text-mix-white-black text-[10px] ">
                                            (329 games played)
                                        </p> */}
									</div>
									<div className=" w-full -mt-2">
										<Image src={ProgressGraph} alt="progress graph" />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PlayerRankCard;
