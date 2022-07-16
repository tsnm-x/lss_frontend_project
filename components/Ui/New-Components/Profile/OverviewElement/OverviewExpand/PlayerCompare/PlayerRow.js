import React, { useState, useEffect } from "react";
import Image from "next/image";
import Emblem_Iron from "../../../../../../../public/assets/old-images/ranks/Emblem_Iron.png";
import Emblem_Bronze from "../../../../../../../public/assets/old-images/ranks/Emblem_Bronze.png";
import Emblem_Silver from "../../../../../../../public/assets/old-images/ranks/Emblem_Silver.png";
import Emblem_Gold from "../../../../../../../public/assets/old-images/ranks/Emblem_Gold.png";
import Emblem_Platinum from "../../../../../../../public/assets/old-images/ranks/Emblem_Platinum.png";
import Emblem_Diamond from "../../../../../../../public/assets/old-images/ranks/Emblem_Diamond.png";
import Emblem_Master from "../../../../../../../public/assets/old-images/ranks/Emblem_Master.png";
import Emblem_Grandmaster from "../../../../../../../public/assets/old-images/ranks/Emblem_Grandmaster.png";
import Emblem_Challenger from "../../../../../../../public/assets/old-images/ranks/Emblem_Challenger.png";
import useHttp from "../../../../../../../hook/useHttp";
import GbatchImg from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/g-batch.png";
import RoundBatch1 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/round-batch-1.png";
import RoundBatch2 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/round-batch-2.png";

const PlayerRow = (props) => {
    const [active, setActive] = useState(false);
    const [rank, setRank] = useState([]);
    const { sendRequest } = useHttp();
    const [activeStyle, setActiveStyle] = useState(false);

    const matchTimelineData = props.matchTimelineData;
    const frames = matchTimelineData?.frames;
    const matchMetaData = matchTimelineData?.metaData;
    const selectedFrame = props.selectedFrame;

    const correctParticipant = frames
        ? frames[selectedFrame][`participant${props.player.standingId}`]
        : {};

    const renderedItems = props.showSimulatedGraph
        ? correctParticipant?.items
        : [
              props.player?.item0,
              props.player?.item1,
              props.player?.item2,
              props.player?.item3,
              props.player?.item4,
              props.player?.item5,
          ];

    const selectGameType = () => {
        switch (props?.match?.queueId) {
            case 420:
                return "RANKED_SOLO_5x5";
            case 440:
                return "RANKED_FLEX_SR";
            default:
                return "RANKED_SOLO_5x5";
        }
    };

    useEffect(() => {
        props.player.summonerId === props.selectedPlayer.summonerId ||
        props.player.summonerId === props.simulatorPlayers.summonerId
            ? setActiveStyle(true)
            : setActiveStyle(false);
    });

    useEffect(() => {
        console.log(props.player.summonerId);
        sendRequest(
            {
                url: "/summonerRanks",
                method: "POST",
                body: {
                    region: props?.region,
                    summonerRiotId: props?.player?.summonerId,
                },
            },
            (res) => {
                if (res) {
                    setRank(res.data.ranks);
                }
            }
        );
    }, [props.player.summonerName]);

    useEffect(() => {
        if (active) {
            if (props.showRunes) {
                props.setSelectedPlayer(props.player);
            } else {
                props.setSelectedPlayer({});
                props.setSimulatorPlayers(props.player);
            }
        }
    }, [active]);

    useEffect(() => {
        props.selectedPlayer.summonerId === props.player.summonerId
            ? setActive(true)
            : setActive(false);
    }, [props.selectedPlayer]);

    const rankQueue = selectGameType();
    const rankSolo = rank.find((el) => el.queueType === rankQueue);

    const getRankbatch = (rank) => {
        switch (rank.tier) {
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
        }
    };

    const getTierIntials = (rank) => {
        switch (rank.tier) {
            case "IRON":
                return "IR";

            case "BRONZE":
                return "BR";

            case "SILVER":
                return "S";

            case "GOLD":
                return "G";

            case "PLATINUM":
                return "PL";

            case "DIAMOND":
                return "D";

            case "MASTER":
                return "M";

            case "GRANDMASTER":
                return "GR";

            case "CHALLENGER":
                return "CH";
        }
    };

    const rankConverter = (rank) => {
        switch (rank) {
            case "I":
                return 1;

            case "II":
                return 2;

            case "III":
                return 3;

            case "IV":
                return 4;
        }
    };

    const selectSpell = (id) => {
        switch (id) {
            case 21:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerBarrier.png";

            case 4:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerFlash.png";

            case 1:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerBoost.png";

            case 14:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerDot.png";

            case 3:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerExhaust.png";

            case 6:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerHaste.png";

            case 7:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerHeal.png";

            case 13:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerMana.png";

            case 30:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerPoroRecall.png";

            case 31:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerPoroThrow.png";

            case 11:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerSmite.png";

            case 39:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerSnowURFSnowball_Mark.png";

            case 32:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerSnowball.png";

            case 12:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerTeleport.png";

            case 54:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/Summoner_UltBookPlaceholder.png";

            case 55:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/Summoner_UltBookSmitePlaceholder.png";

            default:
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerBarrier.png";
        }
    };

    return (
        <div
            className={` flex justify-between w-full items-center cursor-pointer relative mb-[10px] last:mb-0 rounded-[3px] desktop:mb-4 desktop:last:mb-0 ${
                props.reverse
                    ? `px-3 desktop:grid  ${
                          props.showRunes
                              ? "desktop:grid-cols-[85px_120px_210px_60px]"
                              : " desktop:grid-cols-[2fr_2fr_2fr_4fr_2fr]"
                      }`
                    : ` px-3 desktop:grid  ${
                          props.showRunes
                              ? "desktop:grid-cols-[60px_210px_120px_85px]"
                              : " desktop:grid-cols-[2fr_4fr_2fr_2fr_2fr]"
                      }`
            } ${
                props.player.summonerId === props.selectedPlayer.summonerId ||
                props.player.summonerId === props.simulatorPlayers.summonerId
                    ? props.reverse
                        ? " bg-accent-color-2"
                        : "bg-accent-color "
                    : props.reverse
                    ? "bg-[#181631]"
                    : " bg-[#251122]"
            }`}
            onClick={() => setActive(true)}
        >
            <div
                className={` ${
                    props.reverse
                        ? "order-5 col-start-5 col-end-6 "
                        : "order-1 col-start-1 col-end-2 "
                }`}
            >
                {props.showSimulatedGraph ? (
                    <h6
                        className={`sf-bold-12 text-center text-light-text font-bold smDesktop:text-[14px] smDesktop:leading-[16px] smDesktop:mb-[2px] 
												 ${props.showRunes ? "" : "desktop:text-[17px] desktop:leading-[20px]"} `}
                    >
                        25,259
                    </h6>
                ) : (
                    <h6 className=" sf-bold-12 text-center text-light-text font-bold smDesktop:text-[14px] smDesktop:leading-[16px] smDesktop:mb-[2px] desktop:text-[17px] desktop:leading-[20px] ">
                        25,259
                    </h6>
                )}
                {/* progress bar  */}
                <div
                    className={`w-full h-[6.5px] bg-[#706A76] overflow-hidden rounded-full mt-1`}
                >
                    <div
                        className={`w-3/6  ${
                            activeStyle ? " bg-[#251122]" : "bg-accent-color"
                        } h-full`}
                    ></div>
                </div>
            </div>
            {/* batches  */}
            <div
                className={`flex justify-center  ${
                    props.reverse
                        ? "order-4 col-start-4 col-end-5"
                        : "order-2 col-start-2 col-end-3"
                } `}
            >
                {renderedItems?.map((batch, index) => {
                    return (
                        <div
                            key={index}
                            className=" w-[22px] h-[22px] relative rounded-5px mr-1 last:mr-0 smDesktop:w-[25px] smDesktop:h-[25px] desktop:w-[30px] desktop:h-[30px] "
                        >
                            {batch !== 0 && (
                                <Image
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${batch}.png`}
                                    alt="batch image"
                                    layout="fill"
                                    className=" rounded-5px"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            {/* g batch  */}
            {/* {!props.showRunes && !props.showSimulatedGraph && rankSolo ? (
                <div
                    className={`flex items-center ${
                        props.reverse
                            ? "order-3 col-start-3 col-end-4"
                            : "order-3 col-start-3 col-end-4"
                    }`}
                >
                    <h6 className=" mr-[10px] sf-bold-15 text-[14px] leading-4 text-light-text desktop:text-lg ">
                        {getTierIntials(rankSolo)}
                        {rankConverter(rankSolo?.rank)}
                    </h6>
                    <div className=" relative w-10 h-10 desktop:w-[52px] desktop:h-[52px] ">
                        <Image
                            src={getRankbatch(rankSolo)}
                            alt="season batch"
                            layout="fill"
                        />
                    </div>
                </div>
            ) : props.showSimulatedGraph ? (
                <div
                    className={`flex items-center ${
                        props.reverse
                            ? "order-3 col-start-3 col-end-4"
                            : "order-3 col-start-3 col-end-4"
                    }`}
                >
                    <h6 className=" mr-[10px] sf-bold-15 text-[14px] leading-4 text-light-text ">
                        Level {"  "}
                        {frames
                            ? correctParticipant?.level
                            : props?.player?.champLevel}
                    </h6>
                </div>
            ) : null} */}
            {/* {!props.showRunes ? (
                <div
                    className={`flex items-center ${
                        props.reverse ? "order-3" : "order-3"
                    }`}
                >
                    <h6 className=" mr-[10px] sf-bold-15 text-[14px] leading-4 text-light-text desktop:text-lg ">
                        G2
                    </h6>
                    <div className=" relative w-10 h-10 desktop:w-[52px] desktop:h-[52px] ">
                        <Image
                            src={GbatchImg}
                            alt="season batch"
                            layout="fill"
                        />
                    </div>
                </div>
            ) : null} */}
            {/* name  */}
            {/* <h5
                className={`font-sf-pro-text text-[13px] leading-[15px] text-light-text font-bold smDesktop:text-[14px] smDesktop:leading-[16px] desktop:text-lg ${
                    props.reverse
                        ? "order-2 col-start-2 col-end-3 "
                        : "order-4 col-start-4 col-end-5"
                }`}
                title={props?.player?.summonerName}
            > */}
            {/* {props?.player?.summonerName} */}
            {/* {props?.player?.summonerName?.slice(0, 7)}
                {props?.player?.summonerName?.length >= 7 && "..."}
            </h5> */}
            <div
                className={` flex flex-col ${
                    props.reverse
                        ? "order-2 col-start-3 col-end-4 items-end "
                        : "order-4 col-start-3 col-end-4"
                }`}
            >
                {props.showSimulatedGraph ? (
                    <h6
                        className={`sf-bold-12 text-light-text font-bold smDesktop:text-[14px] smDesktop:leading-[16px] smDesktop:mb-[2px] 
												 ${props.showRunes ? "" : "desktop:text-[17px] desktop:leading-[20px]"} `}
                    >
                        {correctParticipant?.stats?.kill}/
                        {correctParticipant?.stats?.death}/
                        {correctParticipant?.stats?.assist}
                    </h6>
                ) : (
                    <h6 className=" sf-bold-12 text-light-text font-bold smDesktop:text-[14px] smDesktop:leading-[16px] smDesktop:mb-[2px] desktop:text-[17px] desktop:leading-[20px] ">
                        {props?.player?.kills}/{props?.player?.deaths}/
                        {props?.player?.assists}
                    </h6>
                )}

                {props.showSimulatedGraph ? (
                    <p
                        className={`sf-bold-12 uppercase ${
                            activeStyle ? "text-[#251122]" : "text-grayed-text"
                        } font-bold`}
                    >
                        kda:
                        {(
                            (correctParticipant?.stats?.assist +
                                correctParticipant?.stats?.kill) /
                            (correctParticipant?.stats?.death
                                ? correctParticipant?.stats?.death
                                : 1)
                        ).toFixed(2)}
                        :1
                    </p>
                ) : (
                    <p
                        className={`sf-bold-12 uppercase ${
                            activeStyle ? "text-[#251122]" : "text-grayed-text"
                        } font-bold`}
                    >
                        kda:
                        {(
                            (props.player?.assists + props?.player?.kills) /
                            (props.player?.deaths ? props?.player?.deaths : 1)
                        ).toFixed(2)}
                        :1
                    </p>
                )}
            </div>
            {/* cs min  */}
            <div
                className={` flex flex-col row-start-1 ${
                    props.reverse
                        ? "order-2 col-start-2 col-end-3 items-end "
                        : "order-4 col-start-4 col-end-5"
                }`}
            >
                {props.showSimulatedGraph ? (
                    <h6
                        className={`sf-bold-12 text-light-text font-bold smDesktop:text-[14px] smDesktop:leading-[16px] smDesktop:mb-[2px] 
												 ${props.showRunes ? "" : "desktop:text-[17px] desktop:leading-[20px]"} `}
                    >
                        142 cs
                    </h6>
                ) : (
                    <h6 className=" sf-bold-12 text-light-text font-bold smDesktop:text-[14px] smDesktop:leading-[16px] smDesktop:mb-[2px] desktop:text-[17px] desktop:leading-[20px] ">
                        142 cs
                    </h6>
                )}

                {props.showSimulatedGraph ? (
                    <p
                        className={`sf-bold-12 uppercase ${
                            activeStyle ? "text-[#251122]" : "text-grayed-text"
                        } font-bold`}
                    >
                        6.3 cs/min
                    </p>
                ) : (
                    <p
                        className={`sf-bold-12 uppercase ${
                            activeStyle ? "text-[#251122]" : "text-grayed-text"
                        } font-bold`}
                    >
                        6.3 cs/min
                    </p>
                )}
            </div>
            {/* profile image  */}
            <div
                className={` flex justify-between py-[2px]  ${
                    props.reverse
                        ? "order-1 justify-end col-start-1 col-end-2 flex-row-reverse "
                        : "order-5 col-start-5 col-end-6"
                }`}
            >
                <div
                    className={`relative w-[40px] h-[40px] smDesktop:w-[43px] smDesktop:h-[43px] desktop:w-[52px] desktop:h-[52px] ${
                        props.reverse ? "order-1" : "order-2"
                    }`}
                >
                    {props?.player?.profileIcon && (
                        <>
                            <Image
                                src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${props.player.championName}.png`}
                                alt="profile Image"
                                layout="fill"
                                className=" rounded-[4px] "
                            />
                            <div
                                className=" absolute font-sf-pro-text font-bold text-grayed-text bg-[#110A1B] p-[2px_3px] text-[9px]
                             leading-[12px] rounded-full border-[#707070] border -bottom-2 left-[18px] "
                            >
                                32
                            </div>
                        </>
                    )}
                </div>
                <div
                    className={` mr-[5px] ${
                        props.reverse ? "order-2 " : "order-2 "
                    }`}
                >
                    <div className=" relative w-5 h-5 smDesktop:w-[22px] smDesktop:h-[21px] desktop:w-[25px] desktop:h-[25px] desktop:mb-[2px] ">
                        <Image
                            src={selectSpell(props.player.summoner1Id)}
                            alt="flash batch"
                            layout="fill"
                        />
                    </div>
                    <div className=" relative w-5 h-5 smDesktop:w-[22px] smDesktop:h-[21px] desktop:w-[25px] desktop:h-[25px] ">
                        <Image
                            src={selectSpell(props.player.summoner2Id)}
                            alt="teleport batch"
                            layout="fill"
                        />
                    </div>
                </div>
                <div
                    className={` ${
                        props.reverse
                            ? "order-2 ml-[9px] desktop:ml-1 "
                            : "order-2 mr-[9px] desktop:mr-1 "
                    }`}
                >
                    <div
                        className={`relative w-5 h-5 smDesktop:w-[22px] smDesktop:h-[21px] desktop:w-[25px] desktop:h-[25px] desktop:mb-[2px] rounded-full ${
                            activeStyle ? "bg-[#251122]" : "bg-transparent "
                        }`}
                    >
                        <Image
                            src={RoundBatch1}
                            alt="flash batch"
                            layout="fill"
                        />
                    </div>
                    <div
                        className={`relative w-5 h-5 smDesktop:w-[22px] smDesktop:h-[21px] desktop:w-[25px] desktop:h-[25px] desktop:mb-[2px] rounded-full ${
                            activeStyle ? "bg-[#251122]" : "bg-transparent "
                        }`}
                    >
                        <Image
                            src={RoundBatch2}
                            alt="teleport batch"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
            {/* indicator  */}
        </div>
    );
};

export default PlayerRow;
