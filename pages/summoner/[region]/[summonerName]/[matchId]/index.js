import React, { useEffect, useState } from "react";
import HeaderWithSearchbar from "../../../../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar";
import ProfileIntro from "../../../../../components/Ui/New-Components/Analytic_Page/ProfileIntro/ProfileIntro";
import AnalyticsViewBtns from "../../../../../components/Ui/New-Components/Analytic_Page/AnalyticsViewBtns/AnalyticsViewBtns";
import ProfileCompareBar from "../../../../../components/Ui/New-Components/Profile/OverviewElement/OverviewExpand/ProfileCompareBar/ProfileCompareBar";
import LosAndWinRow from "../../../../../components/Ui/New-Components/Profile/OverviewElement/OverviewExpand/LosAndWinRow/LosAndWinRow";
import DataRowGrid from "../../../../../components/Ui/New-Components/Analytic_Page/DataRowGrid/DataRowGrid";
import Map from "../../../../../components/Ui/New-Components/Analytic_Page/Map/Map";
import GameStaticsGraph from "../../../../../components/Ui/New-Components/Analytic_Page/GameStaticsGraph/GameStaticsGraph";
import SimulationData from "../../../../../components/Ui/New-Components/Profile/OverviewElement/SimulateGame/Simulation/SimulationData/SimulationData";
import Router, { useRouter } from "next/router";
import useHttp from "../../../../../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../../../../../store/profile";
import axios from "axios";
import { championsAction } from "../../../../../store/champions";
import { itemsAction } from "../../../../../store/items";
import { runeAction } from "../../../../../store/runes";
import Runes from "../../../../../components/Ui/New-Components/Analytic_Page/Runes/Runes";
import ReportPortal from "../../../../../components/Ui/New-Components/Profile/ReportPortal/ReportPortal";
import ReportContext from "../../../../../Context/ReportContext";
import Header from "../../../../../components/shared/New-Componets/Header/Header";
import Image from "next/image";
import LeftSideImg from "../../../../../public/assets/ads/Post/left-side.png";
import RightSideImg from "../../../../../public/assets/ads/Post/right-side.png";

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
    const champions = useSelector((state) => state.champions.champions);
    const items = useSelector((state) => state.items.items);
    const runes = useSelector((state) => state.runes.runes);

    useEffect(() => {
        if (!Object.keys(champions)[0]) {
            let champUrl =
                "//ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion.json";

            try {
                axios.get(champUrl).then((res) => {
                    dispatch(
                        championsAction.setChampions({
                            champions: res.data.data,
                        })
                    );
                });
            } catch (error) {
                console.log(error);
            }
        }

        if (!Object.keys(items)[0]) {
            let itemUrl =
                "//ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/item.json";

            try {
                axios.get(itemUrl).then((res) => {
                    dispatch(itemsAction.setItems({ items: res.data.data }));
                });
            } catch (error) {
                console.log(error);
            }
        }

        if (!Object.keys(runes)[0]) {
            let runesUrl =
                "//ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/runesReforged.json";

            try {
                axios.get(runesUrl).then((res) => {
                    let runes = [];
                    res?.data?.forEach((item) => {
                        item?.slots?.forEach((slot) => {
                            runes?.push(...slot?.runes);
                        });
                    });

                    if (runes[0]) {
                        dispatch(runeAction.setRunes({ runes }));
                    }
                });
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

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
            if (matches[0] && !match?.player) {
                setMatch(
                    matches?.filter((match) => match.matchId === fullMatchId)[0]
                );
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
        if (match?.players) {
            setMainPlayer(match.players?.find((player) => player.mainPlayer));

            console.log(match);

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
        if (fullMatchId) {
            sendRequest(
                {
                    url: "/matchTimeline",
                    method: "POST",
                    body: { region, matchId: fullMatchId },
                },
                (res) => {
                    if (res?.status === 200) {
                        let matchTimeline = addDragonTimers(
                            res.data.matchTimeline
                        );
                        matchTimeline = addBaronTimers(matchTimeline);
                        matchTimeline = addHaroldTimers(matchTimeline);
                        setMatchTimelineData(matchTimeline);
                    }
                }
            );
        }
    }, [fullMatchId]);

    const addDragonTimers = (matchTimeline) => {
        console.log("-1");
        matchTimeline?.frames[
            matchTimeline?.frames?.length - 2
        ]?.blueTeam?.Dragon?.KillEvents.forEach((kill) => {
            console.log("0");
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

        matchTimeline?.frames[
            matchTimeline?.frames?.length - 2
        ]?.redTeam?.Dragon?.KillEvents.forEach((kill) => {
            console.log("1");
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
    console.log(match);

    const [btns, setBtns] = useState([
        {
            txt: "overview",
            active: true,
        },
        {
            txt: "runes",
            active: false,
        },
        {
            txt: "map details",
            active: false,
        },
    ]);

    const [reportPortal, setReportPortal] = useState(false);

    const handleReport = () => {
        setReportPortal(!reportPortal);
    };

    return (
        <>
            {/* <HeaderWithSearchbar /> */}
            <Header />
            {/* <ProfileIntro mainPlayer={mainPlayer} match={match} /> */}
            <AnalyticsViewBtns
                btns={btns}
                setBtns={setBtns}
                region={region}
                summonerName={summonerName}
                report={handleReport}
            />
            <section className=" bg-headBorder h-[calc(100vh_-_129px)] relative ">
                <div className=" w-[1536px] h-[456px] gap-x-[1px] bg-headBorder flex  mx-auto relative z-20 ">
                    <div className=" w-[90px] h-full bg-cardBg p-[3.33px]  ">
                        <div className=" w-full h-full rounded-5px relative">
                            <Image
                                src={LeftSideImg}
                                alt="google ads img"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className=" w-[1352px] mx-auto rounded-[3px] bg-cardBg pt-[35px] pb-[32px] ">
                        <ProfileCompareBar
                            teams={match?.teams}
                            players={match?.players}
                            frames={matchTimelineData?.frames}
                            matchTimelineData={matchTimelineData}
                            selectedFrame={selectedFrame}
                        />
                        <LosAndWinRow
                            frames={matchTimelineData?.frames}
                            matchTimelineData={matchTimelineData}
                            selectedFrame={selectedFrame}
                        />
                        {btns[0]?.active ? (
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
                        ) : btns[1].active ? (
                            <Runes />
                        ) : (
                            <Map
                                match={match}
                                selectedFrame={selectedFrame}
                                frames={matchTimelineData?.frames}
                            />
                        )}
                    </div>
                    <div className=" w-[90px] h-full bg-cardBg p-[3.33px] ">
                        <div className=" w-full h-full rounded-5px relative">
                            <Image
                                src={RightSideImg}
                                alt="right side image"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
                {/* bottom black mask  */}
                <div
                    className=" w-full h-[35vh] absolute left-0 bottom-0 "
                    style={{
                        backgroundImage:
                            "linear-gradient(180deg, rgba(19, 18, 19, 0) 1.54%, #131213 59.96%);",
                    }}
                ></div>
                {/* slider  */}
                <GameStaticsGraph
                    match={match}
                    selectedFrame={selectedFrame}
                    frames={matchTimelineData?.frames}
                    frameChange={frameChange}
                    simulatorPlayerRed={simulatorPlayerRed}
                    simulatorPlayerBlue={simulatorPlayerBlue}
                    playersWithId={playersWithId}
                    rightTeam={rightTeam}
                    leftTeam={leftTeam}
                />
                {/* <button>Sim data</button> */}
                {/* <SimulationData
					selectedFrame={selectedFrame}
					frames={matchTimelineData?.frames}
					frameChange={frameChange}
					simulatorPlayerRed={simulatorPlayerRed}
					simulatorPlayerBlue={simulatorPlayerBlue}
				/> */}
                {reportPortal && <ReportPortal back={handleReport} />}
            </section>
        </>
    );
};

MatchSimulator.getInitialProps = ({ query }) => {
    return { query };
};

export default MatchSimulator;
