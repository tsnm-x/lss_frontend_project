import React from "react";
import RankImg from "../../../../public/assets/rank-icon.png";
import Image from "next/image";
import LiveContentWrap from "../../../HOC/LiveContentWrapHoc/LiveContentWrapHoc";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { axiosInstance } from "../../../../network/axiosConfig";
// import all rank elements then select one
import Emblem_Iron from "../../../../public/assets/ranks/Emblem_Iron.png"
import Emblem_Bronze from "../../../../public/assets/ranks/Emblem_Bronze.png";
import Emblem_Silver from "../../../../public/assets/ranks/Emblem_Silver.png";
import Emblem_Gold from "../../../../public/assets/ranks/Emblem_Gold.png";
import Emblem_Platinum from "../../../../public/assets/ranks/Emblem_Platinum.png";
import Emblem_Diamond from "../../../../public/assets/ranks/Emblem_Diamond.png";
import Emblem_Master from "../../../../public/assets/ranks/Emblem_Master.png";
import Emblem_Grandmaster from "../../../../public/assets/ranks/Emblem_Grandmaster.png";
import Emblem_Challenger from "../../../../public/assets/ranks/Emblem_Challenger.png";

const LiveGameAvgRank = () => {

    const router = useRouter();
    const [ranks, setRanks] = useState([]);

    const matches = useSelector((state) => state.profile.profile);
	let mainPlayer = matches[0]?.players.find((player) => {
		return player.mainPlayer == true;
	});

    useEffect(() => {
		const { region } = router.query;
		axiosInstance
			.post("/summonerRanks", {
				region,
				summonerRiotId: mainPlayer?.summonerRiotId,
			})
			.then((res) => {
				setRanks(res.data.ranks);
			});
	}, [mainPlayer]);

    const rankSolo = ranks.find((el) => el.queueType === "RANKED_SOLO_5x5");

    let RankIcon;
	switch (rankSolo?.tier) {
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
        <div className=" text-red-800 flex items-center ">
            {/* image  */}
            <div className=" w-[70px] h-[80px] relative ">
                <Image src={RankIcon} alt="Rank Image Icon" layout="fill" />
            </div>
            {/* texts  */}
            <div>
                <div className=" flex items-center mb-[2px] ">
                    <h3 className=" gotham-10px-mid text-full-dark mr-[3px] ">{rankSolo?.tier} {rankSolo?.rank}</h3>
                    <div className=" flex flex-col gotham-5px-mid mr-1 ">
                        <span className=" uppercase text-white-blue ">
                            +18lp
                        </span>
                        <span className=" uppercase text-red-yellow-gold">
                            -15lp
                        </span>
                    </div>
                    <div className=" gotham-2px-mid text-full-dark flex flex-col justify-center">
                        <span>Predicted</span>
                        <span>LP Gain/Loss</span>
                    </div>
                </div>
                <div className=" gotham-5px-mid text-full-dark ">
                    <p>
                        Your winrate:{" "}
                        <span className=" text-white-blue">{((rankSolo?.wins / (rankSolo?.wins + rankSolo?.losses)) * 100).toFixed(2)}%</span>
                    </p>
                    <p className=" ">
                        <span className=" uppercase mr-1">
                            {rankSolo?.wins}<span className=" text-white-blue">w</span>
                        </span>
                        <span className=" uppercase">
                            {rankSolo?.losses}<span className=" text-red-yellow-gold">l</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LiveContentWrap(LiveGameAvgRank);
