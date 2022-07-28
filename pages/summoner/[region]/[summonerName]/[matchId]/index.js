import React, { useEffect, useState } from "react";
import HeaderWithSearchbar from "../../../../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar";
import ProfileIntro from "../../../../../components/Ui/New-Components/Analytic_Page/ProfileIntro/ProfileIntro";
import AnalyticsViewBtns from "../../../../../components/Ui/New-Components/Analytic_Page/AnalyticsViewBtns/AnalyticsViewBtns";
import ProfileCompareBar from "../../../../../components/Ui/New-Components/Profile/OverviewElement/OverviewExpand/ProfileCompareBar/ProfileCompareBar";
import LosAndWinRow from "../../../../../components/Ui/New-Components/Profile/OverviewElement/OverviewExpand/LosAndWinRow/LosAndWinRow";
import DataRowGrid from "../../../../../components/Ui/New-Components/Analytic_Page/DataRowGrid/DataRowGrid";
import GameStaticsGraph from "../../../../../components/Ui/New-Components/Analytic_Page/GameStaticsGraph/GameStaticsGraph";
import Router, { useRouter } from "next/router";
import useHttp from "../../../../../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../../../../../store/profile";

const MatchSimulator = ({ query }) => {
	const { region, summonerName, matchId } = query;
	const [fullMatchId, setFullMatchId] = useState("");
	const [selectedPlayer, setSelectedPlayer] = useState({});
	const [matchTimelineData, setMatchTimelineData] = useState({});
	const [simulatorPlayerRed, setSimulatorPlayerRed] = useState({});
	const [simulatorPlayerBlue, setSimulatorPlayerBlue] = useState({});
	const [index, setIndex] = useState(0);
	const [leftTeam, setLeftTeam] = useState([]);
	const [rightTeam, setRightTeam] = useState([]);
	const [selectedFrame, setSelectedFrame] = useState(
		matchTimelineData?.frames?.length - 2 || 0
	);
	const { hasError, sendRequest } = useHttp();
	const [mainPlayer, setMainPlayer] = useState("");
	const [match, setMatch] = useState({});
	const matches = useSelector((state) => state.profile.profile);
	const dispatch = useDispatch();
	const [playersWithId, setPlayersWithId] = useState([]);

	useEffect(() => {
		if (playersWithId) {
			setLeftTeam(playersWithId.filter((player) => !player.win));
			setRightTeam(playersWithId.filter((player) => player.win));
		}
	}, [playersWithId]);

	useEffect(() => {
		leftTeam.find((player) => player.mainPlayer)
			? leftTeam.find((player, index) => {
					if (player.mainPlayer) {
						setIndex(index);
						return true;
					}
					return false;
			  })
			: rightTeam.find((player, index) => {
					if (player.mainPlayer) {
						setIndex(index);
						return true;
					}
					return false;
			  });
	}, [leftTeam, rightTeam]);

	useEffect(() => {
		setSelectedPlayer({});
		if (index) {
			setSimulatorPlayerBlue(rightTeam[index]);
			setSimulatorPlayerRed(leftTeam[index]);
		}
	}, [index]);

	useEffect(() => {
		const regex = /^[0-9]+$/;
		if (matchId?.match(regex)) {
			setFullMatchId(`${region}_${matchId}`);
		}
	}, []);

	// console.log("re rendered at Index");

	useEffect(() => {
		if (fullMatchId) {
			if (matches[0] && !match) {
				setMatch(matches?.filter((match) => match.matchId === fullMatchId)[0]);
			} else {
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

							setMatch(
								res.data?.matches?.filter(
									(match) => match?.matchId === fullMatchId
								)[0]
							);
						}
					}
				);
			}
		}
	}, [matches, fullMatchId]);

	useEffect(() => {
		if (match.players) {
			setMainPlayer(match.players?.find((player) => player.mainPlayer));

			const players = JSON.parse(JSON.stringify(match.players));

			for (let i = 0; i < players?.length; i++) {
				players[i].standingId = i + 1;
			}
			setPlayersWithId(players);
		}
	}, [match]);

	const frameChange = (e) => {
		setSelectedFrame(e);
	};

	// lifecycle event => state => lifecycle event => state
	useEffect(() => {
        if(fullMatchId){
            sendRequest(
                {
                    url: "/matchTimeline",
                    method: "POST",
                    body: { region, matchId:fullMatchId },
                },
                (res) => {
                    if (res?.status === 200) {
						let matchTimeline = addDragonTimers(res.data.matchTimeline);
						matchTimeline = addBaronTimers(matchTimeline);
						matchTimeline = addHaroldTimers(matchTimeline);
                        setMatchTimelineData(matchTimeline);

                    }
                }
            );
        }
    }, [fullMatchId])

    const addDragonTimers = (matchTimeline) => {
		console.log("-1")
		matchTimeline?.frames[
			matchTimeline?.frames?.length - 2
		]?.blueTeam?.Dragon?.KillEvents.forEach((kill) => {
			console.log("0")
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.frames[date.getMinutes() + i]) {
					matchTimeline.frames[
						date.getMinutes() + i
					].dragonRespawn = `${5 - i}:${seconds}`;
				}
			}
		});


		console.log(matchTimeline);

		matchTimeline?.frames[
			matchTimeline?.frames?.length - 2
		]?.redTeam?.Dragon?.KillEvents.forEach((kill) => {
			console.log("1")
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.frames[date.getMinutes() + i]) {
					matchTimeline.frames[
						date.getMinutes() + i
					].dragonRespawn = `${5 - i}:${seconds}`;
				}
			}
		});

		return matchTimeline;
	};

	const addBaronTimers = (matchTimeline) => {
		matchTimeline?.frames[
			matchTimeline?.frames?.length - 2
		]?.blueTeam?.Baron?.KillEvents.forEach((kill) => {
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.frames[date.getMinutes() + i]) {
					matchTimeline.frames[
						date.getMinutes() + i
					].baronRespawn = `${5 - i}:${seconds}`;
				}
			}
		});

		matchTimeline?.frames[
			matchTimeline?.frames?.length - 2
		]?.redTeam?.Baron?.KillEvents.forEach((kill) => {
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.frames[date.getMinutes() + i]) {
					matchTimeline.frames[
						date.getMinutes() + i
					].baronRespawn = `${5 - i}:${seconds}`;
				}
			}
		});

		return matchTimeline;
	};

	const addHaroldTimers = (matchTimeline) => {
		matchTimeline?.frames[
			matchTimeline?.frames?.length - 2
		]?.blueTeam?.riftHerald?.KillEvents.forEach((kill) => {
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.frames[date.getMinutes() + i]) {
					if (date.getMinutes() >= 20) {
						return;
					}
					matchTimeline.frames[
						date.getMinutes() + i
					].riftHeraldRespawn = `${5 - i}:${seconds}`;
				}
			}
		});

		matchTimeline?.frames[
			matchTimeline?.frames?.length - 2
		]?.redTeam?.riftHerald?.KillEvents.forEach((kill) => {
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.frames[date.getMinutes() + i]) {
					if (date.getMinutes() >= 20) {
						return;
					}
					matchTimeline.frames[
						date.getMinutes() + i
					].riftHeraldRespawn = `${5 - i}:${seconds}`;
				}
			}
		});

		return matchTimeline;
	};

    return (
        <>
            <HeaderWithSearchbar />
            <ProfileIntro 
                mainPlayer={mainPlayer}
                match={match}
            />
            <div className=" bg-[#140a22] mb-[100px] ">
                <AnalyticsViewBtns 
                    region={region}
                    summonerName={summonerName}
                />
                <ProfileCompareBar 
					teams={match.teams}
					players={match.players}
                    frames={matchTimelineData?.frames}
                    matchTimelineData={matchTimelineData}
                    selectedFrame={selectedFrame}
                />
                <LosAndWinRow 
                    frames={matchTimelineData?.frames}
                    matchTimelineData={matchTimelineData}
                    selectedFrame={selectedFrame} 
                />
                <DataRowGrid 
                    match={match}
                    frames={matchTimelineData?.frames}
                    matchTimelineData={matchTimelineData}
                    selectedFrame={selectedFrame}
                    leftTeam={leftTeam}
                    rightTeam={rightTeam}
                    selectedPlayer={selectedPlayer}
                    setSelectedPlayer={setSelectedPlayer}
                    simulatorPlayerRed={simulatorPlayerRed}
                    setSimulatorPlayerRed={setSimulatorPlayerRed}
                    simulatorPlayerBlue={simulatorPlayerBlue}
                    setSimulatorPlayerBlue={setSimulatorPlayerBlue}
                />
                <GameStaticsGraph 
                    selectedFrame={selectedFrame}
                    frames={matchTimelineData?.frames}
                    frameChange={frameChange}
                />
            </div>
        </>
    );
};

MatchSimulator.getInitialProps = ({ query }) => {
	return { query };
};

export default MatchSimulator;
