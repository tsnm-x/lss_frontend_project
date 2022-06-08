import React from "react";
import ProfileCard from "../profileCard/ProfileCard";
import RankStatus from "../../Ui/RankStatus/RankStatus";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { axiosInstance } from "../../../network/axiosConfig";

const ProfileWithRank = (props) => {

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
	const rankFlex = ranks.find((el) => el.queueType === "RANKED_FLEX_SR");

    return (
        <div className={`container mx-auto z-30 relative px-4 flex ${props.className}`}>
            <ProfileCard
                btn={props.btn}
                summonerName={props.summonerName}
                profileIcon={props.profileIcon}
                summonerLevel={props.summonerLevel}
                region={props.region}
            />
            {/* rank status  */}
            <div className={` flex gap-x-7 items-end `}>
                {rankSolo && (
                    <RankStatus
                        className=" mr-4"
                        title="Ranked Solo/Duo"
                        ranks={rankSolo}
                    />
                )}
                {rankFlex && (
                    <RankStatus title="Ranked Flex" ranks={rankFlex} />
                )}
            </div>
        </div>
    );
};

export default ProfileWithRank;
