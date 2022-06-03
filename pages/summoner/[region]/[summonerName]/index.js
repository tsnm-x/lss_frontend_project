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
import FeedBackBtn from "../../../../components/shared/FeedbackBtn/FeedBackBtn";
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

	const ControlBtnLists = ["ranked solo", "normals", "ranked flex"];
	const [selectedMatchType, setSelectedMatchType] = useState("all");
	const filterMatches = (btn) => {
		if (btn === selectedMatchType) {
			setSelectedMatchType("all");
		} else {
			setSelectedMatchType(btn);
		}
	};

	const rankSolo = ranks.find((el) => el.queueType === "RANKED_SOLO_5x5");
	const rankFlex = ranks.find((el) => el.queueType === "RANKED_FLEX_SR");

	return (
		<>
			<Header />
			<main className={`${classes.main}`}>
				<div className="container mx-auto z-30 relative px-4 flex gap-x-32 2xl:gap-x-[250px]  ">
					<ProfileCard
						btnOne="Refresh"
						summonerName={mainPlayer?.summonerName}
						profileIcon={mainPlayer?.profileIcon}
						summonerLevel={mainPlayer?.summonerLevel}
					/>
					{/* rank status  */}
					<div className={` flex items-end w-[550px] ${classes.rank_wrap}`}>
						{rankSolo && (
							<RankStatus className=" mr-4" title="Ranked Solo/Duo" ranks={rankSolo} />
						)}
						{rankFlex && <RankStatus title="Ranked Flex" ranks={rankFlex} />}
					</div>
				</div>
			</main>

			{/* player content  */}
			<section>
				<div className={`${classes.content}`}>
					{/* left content  */}
					<div className="  flex flex-col gap-y-[15px]">
						{/* season players  */}
						<SeasonMostPlayed
							title="season most played songs"
							className=" pt-[14px] pb-[30px] px-[27px] "
						/>
						<YouPlayedOften
							className=" pt-[14px] pb-[30px] px-[27px]"
							title="you play often with: "
						/>
					</div>
					{/* right content  */}
					<div>
						{/* top cards  */}
						<div className=" w-full flex justify-end gap-x-10 h-[215px] ">
							<SummonerHighlights
								className=" w-[45%] max-w-[420px] px-9 pt-[15px] "
								title="summoner highlights"
							/>
							<TierGraph
								className=" w-[45%] max-w-[420px] px-9 pt-[15px]  "
								title="tier graph"
							/>
						</div>
						{/* bottom cards  */}
						<div className=" mt-8 ">
							{/* btn group  */}
							<div className=" flex gap-x-3 mb-4  ">
								{ControlBtnLists.map((item, index) => {
									return (
										<button
											onClick={() => filterMatches(item)}
											className={`btn ${
												item === selectedMatchType ? "" : "bg-transparent"
											}`}
											key={index}
										>
											{item}
										</button>
									);
								})}
							</div>
							{/* player cards  */}
							{mainPlayer && (
								<PlayerCards
									selectedMatchType={selectedMatchType}
									className="pt-[14px] pb-[30px] px-[15px]"
								/>
							)}
						</div>
					</div>
				</div>
			</section>
			{/* feedback btn  */}
			{/* <FeedBackBtn className=" fixed right-12 bottom-12" /> */}
		</>
	);
}

export default ProfileUpdate;
