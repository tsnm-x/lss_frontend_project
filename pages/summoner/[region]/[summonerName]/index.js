import Header from "../../../../components/shared/header/Header";
import SummonerCard from "../../../../components/shared/summonerCard/SummonerCard";
import ProfileCard from "../../../../components/shared/profileCard/ProfileCard";
import classes from "./profileUpdate.module.css";
import RankStatus from "../../../../components/Ui/RankStatus/RankStatus";
import SeasonMostPlayed from "../../../../components/Ui/SeasonMostPlayed/SeasonMostPlayed";
import YouPlayedOften from "../../../../components/Ui/YouPlayedOften/YouPlayedOften";
import SummonerHighlights from "../../../../components/Ui/SummonerHighlights/SummonerHighlights";
import TierGraph from "../../../../components/Ui/Profile_Update_page/TierGraph/TierGraph";
import PlayerCards from "../../../../components/Ui/Profile_Update_page/PlayerCards/PlayerCards";
import useHttp from "../../../../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { profileAction } from "../../../../store/profile";

import { axiosInstance } from "../../../../network/axiosConfig";

function ProfileUpdate() {
	const { hasError, sendRequest } = useHttp();
	const router = useRouter();
	const dispatch = useDispatch();

	const matches = useSelector((state) => state.profile.profile);
	let mainPlayer = matches[0]?.players.find((player) => {
		return player.mainPlayer == true;
	});
	const [ranks, setRanks] = useState([]);

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

	useEffect(() => {
		const { region, summonerName } = router.query;
		if (!matches[0]) {
			return;
		}
		if (matches[0].players.length === 0) {
			sendRequest(
				{
					url: "/summonerByName",
					method: "POST",
					body: { region, summonerName },
				},
				(res) => {
					console.log(res, "===============><");
					if (res?.status === 200) {
						dispatch(
							profileAction.setProfileDataPage({
								profile: res.data.matches,
								region,
								summonerName,
							})
						);
					}
				}
			);
		}
	}, [router]);

	const rankStatus = [{ title: "Ranked Solo/Duo" }];
	const ControlBtnLists = ["ranked solo", "normals", "ranked flex"];

	return (
		<>
			<Header />
			<main className={`${classes.main}`}>
				<div className="container mx-auto z-30 relative pt-11 pb-16 px-4 flex gap-x-32 2xl:gap-x-[250px]  ">
					<ProfileCard
						btnOne="Refresh"
						summonerName={mainPlayer?.summonerName}
						profileIcon={mainPlayer?.profileIcon}
						level={mainPlayer?.level}
					/>
					{/* rank status  */}
					<div className={` flex gap-x-4 items-end ${classes.rank_wrap}`}>
						<RankStatus title="Ranked Solo/Duo" ranks={ranks[0]} />
						<RankStatus title="Ranked Flex" ranks={ranks[2]} />
					</div>
				</div>
			</main>

			{/* player content  */}
			<section>
				<div className={`container mx-auto px-4 gap-x-4 ${classes.content}`}>
					{/* left content  */}
					<div className=" flex flex-col gap-y-3">
						{/* season players  */}
						<SeasonMostPlayed title="season most played songs" />
						<YouPlayedOften title="you play often with: " />
					</div>
					{/* right content  */}
					<div>
						{/* top cards  */}
						<div className=" w-5/6 grid grid-cols-2 gap-x-6">
							<SummonerHighlights title="summoner highlights" />
							<TierGraph title="tier graph" />
						</div>
						{/* bottom cards  */}
						<div className=" mt-8 ">
							{/* btn group  */}
							<div className=" flex gap-x-3 mb-4 ">
								{ControlBtnLists.map((item, index) => {
									return (
										<button className="btn bg-transparent " key={index}>
											{item}
										</button>
									);
								})}
							</div>
							{/* player cards  */}
							<PlayerCards className=" pr-2 pt-0 " />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default ProfileUpdate;
