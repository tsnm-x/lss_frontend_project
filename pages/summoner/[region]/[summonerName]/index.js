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
import { champAction } from "../../../../store/champMostPlayed";
import { championsAction } from "../../../../store/champions";
import axios from "axios";
import { itemsAction } from "../../../../store/items";
import { runeAction } from "../../../../store/runes";
import ReportPortal from "../../../../components/Ui/New-Components/Profile/ReportPortal/ReportPortal";

const Summoner = () => {
    const [view, setView] = useState("overview");
    const [cardProps, setCardProps] = useState({});
    const [cardExpand, setCardExpand] = useState(false);
    const [expandCardNo, setExpandCardNo] = useState(null);
    const [mainPlayer, setMainPlayer] = useState({});
    const [seasonMostPlayedList, setSeasonMostPlayedList] = useState([]);
    const { sendRequest, hasError } = useHttp();
    const [mainPlayerChamps, setMainPlayerChamps] = useState([]);
    const router = useRouter();
    let champions = [];
    const [mostPlayedChamp, setMostPlayedChamp] = useState({});
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
        let champUrl =
            "//ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion.json";
        let itemUrl =
            "//ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/item.json";
        let runesUrl =
            "//ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/runesReforged.json";

        try {
            axios.get(champUrl).then((res) => {
                dispatch(
                    championsAction.setChampions({ champions: res.data.data })
                );
            });

            axios.get(itemUrl).then((res) => {
                dispatch(itemsAction.setItems({ items: res.data.data }));
            });

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
    }, []);

    useEffect(() => {
        const { region, summonerName } = router.query;
        console.log(mainPlayer);
        mainPlayer &&
            mainPlayer.summonerName?.toLowerCase() ===
                summonerName?.toLowerCase() &&
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
        console.log(router);
        const { region, summonerName } = router.query;
        window.localStorage.setItem("region", region);

        if (matches[0]) {
            if (
                matches[0]?.players
                    ?.find((player) => player.mainPlayer == true)
                    ?.summonerName.toLowerCase() === summonerName.toLowerCase()
            ) {
                setMainPlayer(
                    matches[0]?.players.find((player) => {
                        return player.mainPlayer == true;
                    })
                );

                if (!seasonMostPlayedList[0]) {
                    matches?.forEach((match) => {
                        const mainPlayerArr = match.players.filter(
                            (player) => player.mainPlayer === true
                        );
                        mainPlayerArr.forEach((obj) => {
                            champions.push({
                                ...obj,
                                duration: match.duration,
                            });
                        });
                    });

                    setMainPlayerChamps(champions);
                }
            } else {
                CardsExpandHandler(-1);
                setSeasonMostPlayedList([]);
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
            setSeasonMostPlayedList([]);
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
    }, [router, matches]);

    function convertM(value) {
        const sec = parseInt(value); // convert value to number if it's string
        let minutes = Math.floor(sec / 60); // get minutes
        return minutes;
    }

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
                    mainPlayerChamps[i].championName ==
                    mainPlayerChamps[j].championName
                ) {
                    count++;
                    deaths = deaths + mainPlayerChamps[j].deaths;
                    assists = assists + mainPlayerChamps[j].assists;
                    kills = kills + mainPlayerChamps[j].kills;
                    totalCs =
                        totalCs +
                        mainPlayerChamps[j].neutralMinionsKilled +
                        mainPlayerChamps[j].neutralMinionsKilled;
                    mainPlayerChamps[j].win ? winCount++ : lossCount++;
                    totalMatches++;
                    totalDuration =
                        totalDuration + mainPlayerChamps[j].duration;
                    totalDamageDealt =
                        totalDamageDealt +
                        mainPlayerChamps[j].totalDamageDealtToChampions;
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
        dispatch(champAction.setChamp(seasonMostPlayedList));
        if (seasonMostPlayedList[0]) {
            const newChamps = mainPlayerChamps.filter(
                (champion) =>
                    champion.championName !==
                    seasonMostPlayedList[seasonMostPlayedList.length - 1]
                        .championName
            );

            console.log(newChamps);

            if (newChamps[0]) {
                setMainPlayerChamps(newChamps);
            }
        }
    }, [seasonMostPlayedList]);

    const ControlBtnLists = ["all", "ranked solo", "normals", "ranked flex"];
    const [selectedMatchType, setSelectedMatchType] = useState("all");

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
        <>
            <div>
                <HeaderWithSearchbar className=" laptop:py-[16px] " />
                {mainPlayer && (
                    <PlayerInfo
                        btnDetails={btnDetails}
                        summonerName={otherData?.summonerName}
                        profileIcon={mainPlayer?.profileIcon}
                        lastModified={mainPlayer?.lastModified}
                        summonerLevel={mainPlayer?.summonerLevel}
                        region={router.query?.region}
                        rankSolo={rankSolo}
                        rankFlex={rankFlex}
                    />
                )}
                <OverviewChampion
                    controller={viewController}
                    currentView={view}
                />
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
                    <Table controller={viewController} />
                )}
            </div>
            {/* portal  */}
            <ReportPortal />
        </>
    );
};

export default Summoner;
