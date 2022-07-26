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


const MatchSimulator = () => {
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
    const [mainPlayer, setMainPlayer] = useState("")
    const [match, setMatch] = useState({});
    const matches = useSelector((state) => state.profile.profile);
    const dispatch = useDispatch();
    const players = match.players? JSON.parse(JSON.stringify(match.players)) : JSON.parse(JSON.stringify([]));

	for (let i = 0; i < players?.length; i++) {
		players[i].standingId = i + 1;
	}

	useEffect(()=>{
		console.log(Router)
		const {matchId, region, summonerName} = Router.query
		
		const regex = /^[0-9]+$/
		if(matchId?.match(regex)){
			setFullMatchId(`${region}_${matchId}`);
		} 
		else {
			Router.push({
				pathname: "/summoner/[region]/[summonerName]",
				query: {region, summonerName}
			})
		}
		
    }, [Router])

	useEffect(() => {
		if(players){
            setLeftTeam(players.filter((player) => !player.win));
		    setRightTeam(players.filter((player) => player.win));
        }
	}, [players]);

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

    useEffect(()=>{
        if(fullMatchId){
            const {region, summonerName} = Router.query
            if (matches[0] && !match) {
                setMatch(matches?.filter((match)=> match.matchId === fullMatchId)[0])
                   
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

                            setMatch(res.data?.matches?.filter((match) => match?.matchId === fullMatchId)[0])
                        }
                    }
                );
            }
        }
    }, [matches, fullMatchId])

    useEffect(()=>{
        match && setMainPlayer(match.players?.find((player) => player.mainPlayer)) 
    }, [match])

    const frameChange = (e) => {
		setSelectedFrame(e);
	};

    useEffect(()=>{

        if(fullMatchId){
            const {region} = Router.query
            sendRequest(
                {
                    url: "/matchTimeline",
                    method: "POST",
                    body: { region, matchId:fullMatchId },
                },
                (res) => {
                    console.log(res);
                    if (res?.status === 200) {
                        console.log(res.data.matchTimeline)
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
		if (matchTimeline?.matchTimeline) {
			matchTimeline?.matchTimeline?.frames[
				matchTimeline?.matchTimeline?.frames?.length - 2
			]?.blueTeam?.Dragon?.KillEvents.forEach((kill) => {
				let date = new Date(kill.timeStamp);
				let seconds = 60 - date.getSeconds();
				if (seconds < 10) {
					seconds = "0" + seconds;
				}

				for (let i = 1; i <= 5; i++) {
					if (matchTimeline.matchTimeline.frames[date.getMinutes() + i]) {
						matchTimeline.matchTimeline.frames[
							date.getMinutes() + i
						].dragonRespawn = `${5 - i}:${seconds}`;
					}
				}
			});
		}

		matchTimeline?.matchTimeline?.frames[
			matchTimeline?.matchTimeline?.frames?.length - 2
		]?.redTeam?.Dragon?.KillEvents.forEach((kill) => {
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.matchTimeline.frames[date.getMinutes() + i]) {
					matchTimeline.matchTimeline.frames[
						date.getMinutes() + i
					].dragonRespawn = `${5 - i}:${seconds}`;
				}
			}
		});

		return matchTimeline;
	};

	const addBaronTimers = (matchTimeline) => {
		matchTimeline?.matchTimeline?.frames[
			matchTimeline?.matchTimeline?.frames?.length - 2
		]?.blueTeam?.Baron?.KillEvents.forEach((kill) => {
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.matchTimeline.frames[date.getMinutes() + i]) {
					matchTimeline.matchTimeline.frames[
						date.getMinutes() + i
					].baronRespawn = `${5 - i}:${seconds}`;
				}
			}
		});

		matchTimeline?.matchTimeline?.frames[
			matchTimeline?.matchTimeline?.frames?.length - 2
		]?.redTeam?.Baron?.KillEvents.forEach((kill) => {
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.matchTimeline.frames[date.getMinutes() + i]) {
					matchTimeline.matchTimeline.frames[
						date.getMinutes() + i
					].baronRespawn = `${5 - i}:${seconds}`;
				}
			}
		});

		return matchTimeline;
	};

	const addHaroldTimers = (matchTimeline) => {
		matchTimeline?.matchTimeline?.frames[
			matchTimeline?.matchTimeline?.frames?.length - 2
		]?.blueTeam?.riftHerald?.KillEvents.forEach((kill) => {
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.matchTimeline.frames[date.getMinutes() + i]) {
					if (date.getMinutes() >= 20) {
						return;
					}
					matchTimeline.matchTimeline.frames[
						date.getMinutes() + i
					].riftHeraldRespawn = `${5 - i}:${seconds}`;
				}
			}
		});

		matchTimeline?.matchTimeline?.frames[
			matchTimeline?.matchTimeline?.frames?.length - 2
		]?.redTeam?.riftHerald?.KillEvents.forEach((kill) => {
			let date = new Date(kill.timeStamp);
			let seconds = 60 - date.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			for (let i = 1; i <= 5; i++) {
				if (matchTimeline.matchTimeline.frames[date.getMinutes() + i]) {
					if (date.getMinutes() >= 20) {
						return;
					}
					matchTimeline.matchTimeline.frames[
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
                <AnalyticsViewBtns />
                <ProfileCompareBar 
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

export default MatchSimulator;
