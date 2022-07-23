import React, { useState, useEffect } from "react";
import HeaderWithSearchbar from "../../../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar";
import PlayerInfo from "../../../../components/Ui/New-Components/Profile/PlayerInfo/PlayerInfo";
import OverviewChampion from "../../../../components/Ui/New-Components/Profile/OverviewChampionBtns/OverviewChampionBtns";
import Table from "../../../../components/Ui/New-Components/Profile/TableElement/Table/Table";
import Overview from "../../../../components/Ui/New-Components/Profile/OverviewElement/Overview/Overview";
import useHttp from "../../../../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { profileAction } from "../../../../store/profile";
import { axiosInstance } from "../../../../network/axiosConfig";
import CardContext from "../../../../Context/CardContext";
// contexts

const Summoner = () => {
	const [view, setView] = useState("overview");
	const [cardProps, setCardProps] = useState({});
	const [cardExpand, setCardExpand] = useState(false);
	const [expandCardNo, setExpandCardNo] = useState(null);
	const [mainPlayer, setMainPlayer] = useState({});
	const { hasError, sendRequest } = useHttp();
	const router = useRouter();
	const dispatch = useDispatch();

	const matches = useSelector((state) => state.profile.profile);
	const otherData = useSelector((state) => state.profile);

	const [ranks, setRanks] = useState([]);

	const btnDetails = [
		{ text: "refresh", url: "" },
		{
			text: "live simulator",
			url: {
				pathname: `/summoner/[region]/[summonerName]/livesimulator`,
				query: {
					region: router.query?.region,
					summonerName: router.query?.summonerName,
				},
			},
		},
	];

	useEffect(() => {
		const { region } = router.query;
		mainPlayer &&
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
		console.log(ranks);
	}, [ranks]);

	useEffect(() => {
		const { region, summonerName } = router.query;
		window.localStorage.setItem("region", region);

		if (matches[0]) {
			if(matches[0]?.players?.find((player) => player.mainPlayer == true)?.summonerName === summonerName){
				setMainPlayer(
					matches[0]?.players.find((player) => {
						return player.mainPlayer == true;
					})
				);
			} else {
				CardsExpandHandler(-1);
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
		} else {
			CardsExpandHandler(-1);
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
	}, [matches, router]);

	const ControlBtnLists = ["all", "ranked solo", "normals", "ranked flex"];
	const [selectedMatchType, setSelectedMatchType] = useState("all")

	const rankSolo = ranks.find((el) => el.queueType === "RANKED_SOLO_5x5");
	const rankFlex = ranks.find((el) => el.queueType === "RANKED_FLEX_SR");

	const viewController = (action) => {
		console.log(action);
		view === action ? null : setView(action);
	};

	const CardsExpandHandler = (ClickedCardIndexNo, otherProps) => {
		setExpandCardNo(ClickedCardIndexNo);
		console.log("card expand handler");
		setCardProps(otherProps);
	};

	return (
		<div>
			<HeaderWithSearchbar className=" laptop:py-[16px] " />
			{mainPlayer && (
				<PlayerInfo
					btnDetails={btnDetails}
					summonerName={otherData?.summonerName}
					profileIcon={mainPlayer?.profileIcon}
					summonerLevel={mainPlayer?.summonerLevel}
					region={router.query?.region}
					rankSolo={rankSolo}
					rankFlex={rankFlex}
				/>
			)}
			<OverviewChampion controller={viewController} currentView={view} />
			{view === "overview" ? (
				<CardContext.Provider
					value={{
						expand: cardExpand,
						setCardExpand: setCardExpand,
						expandControl: CardsExpandHandler,
						expandCardNo: expandCardNo,
						cardProps: cardProps,
					}}
				>
					{mainPlayer && (
						<Overview
							selectedMatchType={selectedMatchType}
							ControlBtnLists={ControlBtnLists}
							setSelectedMatchType={setSelectedMatchType}
							matches={matches}
							region={router.query?.region}
							summonerName={mainPlayer?.summonerName}
							rankSolo={rankSolo}
							rankFlex={rankFlex}
						/>
					)}
				</CardContext.Provider>
			) : (
				<Table controller={viewController}/>
			)}
		</div>
	);
};

export default Summoner;
