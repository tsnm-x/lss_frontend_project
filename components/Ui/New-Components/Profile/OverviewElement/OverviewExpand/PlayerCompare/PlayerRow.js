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
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import HoverDiscription from "../../Hover/HoverDiscription";

const PlayerRow = (props) => {
    const [active, setActive] = useState(false);
    const [rank, setRank] = useState([]);
    const { sendRequest } = useHttp();
    const [activeStyle, setActiveStyle] = useState(false);
    const router = useRouter();
    const items = useSelector((state) => state.items.items);
    const champions = useSelector((state) => state.champions.champions);
    const runes = useSelector((state) => state.runes.runes);

    const getChampion = (player) => {
        return champions[player]?.image;
    };

    const getItem = (item) => {
        if (items && item) {
            return items[item]?.image;
        }
    };

    const findRuneDetails = (id) => {
        if (runes && id) {
            const selectedRune = runes.filter((rune) => rune?.id === id);
            return selectedRune[0];
        }
    };

    const findRuneIcon = (id) => {
        const rune = findRuneDetails(id);
        return rune?.icon;
    };

    const getRuneDescription = (rune) => {
        if (runes && rune) {
            const selectedRune = findRuneDetails(rune);
            return (
                <div>
                    <h1>{selectedRune?.name}</h1>
                    <small
                        dangerouslySetInnerHTML={{
                            __html: selectedRune?.longDesc,
                        }}
                    ></small>
                </div>
            );
        }
    };

    const mythicHighlighter = (id) => {
        switch (id) {
            case 4644:
            case 6632:
            case 6691:
            case 6692:
            case 3001:
            case 6656:
            case 6662:
            case 6671:
            case 6630:
            case 3152:
            case 6673:
            case 4005:
            case 6672:
            case 6653:
            case 3190:
            case 6655:
            case 6617:
            case 4636:
            case 6693:
            case 4633:
            case 2065:
            case 6631:
            case 3068:
            case 3078:
            case 6664:
            case 7002:
            case 7000:
            case 7001:
            case 7015:
            case 7017:
            case 7016:
            case 7018:
            case 7024:
            case 7014:
            case 7013:
            case 7009:
            case 7012:
            case 7011:
            case 7010:
            case 7008:
            case 7006:
            case 7007:
            case 7023:
            case 7019:
            case 7022:
            case 7020:
            case 7021:
            case 7004:
            case 7005:
            case 7003:
                return true;
            default:
                return false;
        }
    };

    const getItemDetails = (item) => {
        if (items && item) {
            return (
                <div>
                    <h1>{items[item]?.name}</h1>
                    <p>{mythicHighlighter(item) ? "mythic" : "not mythic"}</p>
                    <small
                        dangerouslySetInnerHTML={{
                            __html: items[item]?.description,
                        }}
                    ></small>
                    <p>{items[item]?.gold?.total}G</p>
                </div>
            );
        }
    };

    const matchTimelineData = props.matchTimelineData;
    const frames = matchTimelineData?.frames;
    const matchMetaData = matchTimelineData?.metaData;
    const selectedFrame = props.selectedFrame;

    const frameDetails = frames ? frames[selectedFrame] : null;

    const LastFrame = frames ? frames[frames.length - 2] : null;

    const getMaxDamageDealtInTimeline = () => {
        if (LastFrame) {
            const participants = [
                LastFrame.participant1,
                LastFrame.participant2,
                LastFrame.participant3,
                LastFrame.participant4,
                LastFrame.participant5,
                LastFrame.participant6,
                LastFrame.participant7,
                LastFrame.participant8,
                LastFrame.participant9,
                LastFrame.participant10,
            ];

            let maxDamage = participants[0]?.totalDamageDoneToChampions;

            participants.forEach((participant, index) => {
                if (index !== participants.length - 1) {
                    if (
                        maxDamage <=
                        participants[index + 1]?.totalDamageDoneToChampions
                    ) {
                        maxDamage =
                            participants[index + 1]?.totalDamageDoneToChampions;
                    }
                    return;
                }
                return;
            });
            return maxDamage;
        }
        return 0;
    };

    const correctParticipant = frames
        ? frames[selectedFrame][`participant${props.player.standingId}`]
        : {};

    const renderedItems = correctParticipant?.items;

    function convertM(value) {
        const sec = parseInt(value); // convert value to number if it's string
        let minutes = Math.floor(sec / 60); // get minutes
        return minutes;
    }

    // useEffect(() => {
    // 	props.player.summonerId === props.selectedPlayer.summonerId ||
    // 	props.player.summonerId === props.simulatorPlayers.summonerId
    // 		? setActiveStyle(true)
    // 		: setActiveStyle(false);
    // });

    // useEffect(() => {
    // 	if (active) {
    // 		if (props.showRunes) {
    // 			props.setSelectedPlayer(props.player);
    // 		} else {
    // 			props.setSelectedPlayer({});
    // 			props.setSimulatorPlayers(props.player);
    // 		}
    // 	}
    // }, [active]);

    // useEffect(() => {
    // 	props.selectedPlayer.summonerId === props.player.summonerId
    // 		? setActive(true)
    // 		: setActive(false);
    // }, [props.selectedPlayer]);

    const styleSelector = (id) => {
        switch (id) {
            case 8100:
                return "https://ddragon.canisback.com/img/perk-images/Styles/7200_Domination.png";
            case 8300:
                return "https://ddragon.canisback.com/img/perk-images/Styles/7203_Whimsy.png";
            case 8000:
                return "https://ddragon.canisback.com/img/perk-images/Styles/7201_Precision.png";
            case 8400:
                return "https://ddragon.canisback.com/img/perk-images/Styles/7204_Resolve.png";
            case 8200:
                return "https://ddragon.canisback.com/img/perk-images/Styles/7202_Sorcery.png";

            // todo: add image placeholder as default
            default:
                return "https://ddragon.canisback.com/img/perk-images/Styles/7203_Whimsy.png";
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
            className={`  grid items-center rounded-[5px] cursor-pointer max-w-[644px]  ${
                props.reverce
                    ? `grid-cols-[105px_118px_115px_165px_145px] ${
                          props.simulatorPlayer.summonerName ===
                          props.player.summonerName
                              ? "bg-blue"
                              : " bg-winOpacity "
                      } `
                    : `grid-cols-[145px_165px_145px_83px_105px] ${
                          props.simulatorPlayer.summonerName ===
                          props.player.summonerName
                              ? " bg-red"
                              : " bg-defeatOpacity "
                      } `
            }`}
            onClick={() => props.setSimulatorPlayer(props.player)}
        >
            {/* damage dealt  */}
            <div
                className={` ${
                    props.reverce
                        ? "order-5 ml-auto mr-[14px] "
                        : "order-1 ml-[14px] "
                }   `}
            >
                <div className=" w-[80px] ">
                    <h1 className=" sf-bold-14 text-white text-center  ">
                        {correctParticipant.totalDamageDoneToChampions}
                    </h1>
                    <div
                        className={` w-[80.1px] rounded-5px overflow-hidden h-[6.5px] bg-[#3b374c] mt-[2px] justify-self-center mx-auto ${
                            props.simulatorPlayer.summonerName ===
                            props.player.summonerName
                                ? "bg-[#241122]"
                                : "bg-[#191531]"
                        }`}
                    >
                        <div
                            className={`h-full rounded-5px  ${
                                props.simulatorPlayer.summonerName ===
                                props.player.summonerName
                                    ? "bg-white"
                                    : props.reverce
                                    ? " bg-accent-color-2"
                                    : " bg-accent-color"
                            }`}
                            style={{
                                width: `${
                                    getMaxDamageDealtInTimeline()
                                        ? (correctParticipant?.totalDamageDoneToChampions /
                                              getMaxDamageDealtInTimeline()) *
                                          100
                                        : (correctParticipant?.totalDamageDoneToChampions /
                                              1) *
                                          100
                                }%`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            {/* batches  */}
            <div
                className={` flex gap-x-[3px] ${
                    props.reverce ? "order-4 justify-end " : "order-2"
                }`}
            >
                {[0, 1, 2, 3, 4, 5].map((index) => {
                    return (
                        <div
                            key={index}
                            className={` w-[25px] h-[25px] rounded-[5px] overflow-hidden relative bg-[rgba(217,217,217,0.1)] `}
                        >
                            {renderedItems &&
                            renderedItems[index] &&
                            getItem(renderedItems[index])?.sprite ? (
                                <div className="relative group rounded-5px ">
                                    <div
                                        className="rounded-[5px]"
                                        style={{
                                            background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${
                                                getItem(renderedItems[index])
                                                    ?.sprite
                                            }') no-repeat`,
                                            width: `${
                                                getItem(renderedItems[index])?.w
                                            }px`,
                                            height: `${
                                                getItem(renderedItems[index])?.h
                                            }px`,
                                            backgroundPosition: `-${
                                                getItem(renderedItems[index])?.x
                                            }px -${
                                                getItem(renderedItems[index])?.y
                                            }px`,
                                            // backgroundSize: "contain",
                                            zoom: `0.522`,
                                        }}
                                    ></div>
                                    {/* <HoverDiscription
                                        style={{
                                            background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${
                                                getItem(renderedItems[index])
                                                    ?.sprite
                                            }') no-repeat`,
                                            width: `${
                                                getItem(renderedItems[index])?.w
                                            }px`,
                                            height: `${
                                                getItem(renderedItems[index])?.h
                                            }px`,
                                            backgroundPosition: `-${
                                                getItem(renderedItems[index])?.x
                                            }px -${
                                                getItem(renderedItems[index])?.y
                                            }px`,
                                            // backgroundSize: "contain",
                                            zoom: `0.522`,
                                        }}
                                        items={items}
                                        gold={items[renderedItems[index]]?.gold?.total}
                                        name={items[renderedItems[index]]?.name}
                                        role={mythicHighlighter(renderedItems[index]) ? "mythic": null}
                                        dis={items[renderedItems[index]]?.description}
                                        border={`rounded-full `}
                                    /> */}
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </div>
            {/* kda / score */}
            <div
                className={` ${
                    props.reverce ? "order-3 ml-[20px] " : "order-3 ml-[50px] "
                }`}
            >
                <h1 className=" sf-bold-14 text-white   ">
                    {correctParticipant?.stats?.kill}/
                    {correctParticipant?.stats?.death}/
                    {correctParticipant?.stats?.assist}
                </h1>
                <h1
                    className={`sf-bold-10  ${
                        props.simulatorPlayer.summonerName ===
                        props.player.summonerName
                            ? " text-[#241E2C]"
                            : "text-grayed-text"
                    }`}
                >
                    KDA{" "}
                    {correctParticipant?.stats?.death
                        ? (
                              (correctParticipant?.stats?.assist +
                                  correctParticipant?.stats?.kill) /
                              correctParticipant?.stats?.death
                          ).toFixed(2)
                        : "Perfect"}
                </h1>
            </div>
            {/* cs  */}
            <div
                className={` ${
                    props.reverce ? "order-2 ml-[38px] " : "order-4"
                }`}
            >
                <h1 className=" sf-bold-14 text-white   ">
                    {correctParticipant?.stats?.creepScore} cs
                </h1>
                <h1
                    className={`sf-bold-10  ${
                        props.simulatorPlayer.summonerName ===
                        props.player.summonerName
                            ? " text-[#241E2C]"
                            : "text-grayed-text"
                    }`}
                >
                    {(
                        correctParticipant?.stats?.creepScore /
                        props.selectedFrame
                    )?.toFixed(1)}{" "}
                    cs/min
                </h1>
            </div>
            {/* profile with batch  */}
            <div
                className={` flex gap-x-[3px] ${
                    props.reverce ? "order-1 flex-row-reverse" : "order-5"
                }`}
            >
                <div
                    className={` flex gap-x-[3px] w-[94px] ${
                        props.reverce ? "flex-row-reverse" : ""
                    }`}
                >
                    {/* profile  */}
                    <div className=" relative w-[45px] h-[45px] rounded-[5px]  ">
                        {getChampion(props?.player?.championName) && (
                            <div
                                className="rounded-[5px]"
                                style={{
                                    background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${
                                        getChampion(props?.player?.championName)
                                            ?.sprite
                                    }') no-repeat`,
                                    width: `${
                                        getChampion(props?.player?.championName)
                                            ?.w
                                    }px`,
                                    height: `${
                                        getChampion(props?.player?.championName)
                                            ?.h
                                    }px`,
                                    backgroundPosition: `-${
                                        getChampion(props?.player?.championName)
                                            ?.x
                                    }px -${
                                        getChampion(props?.player?.championName)
                                            ?.y
                                    }px`,
                                    // backgroundSize: "1000% 300%",
                                    zoom: `0.95`,
                                }}
                            ></div>
                        )}
                        {/* batch  */}
                        <div className=" flex justify-center absolute -bottom-[6px] left-0 w-full ">
                            <div className=" font-sf-pro-text text-[9px] leading-[11px] font-[500]  w-[15px] h-[15px] rounded-full border border-grayed-text flex justify-center items-center text-white bg-card-border ">
                                {correctParticipant?.level}
                            </div>
                        </div>
                    </div>
                    {/* power  */}
                    <div className=" flex flex-col gap-y-[3px] ">
                        {[
                            props.player?.summoner1Id,
                            props.player?.summoner2Id,
                        ].map((img, index) => {
                            return (
                                <div
                                    className=" relative w-[21px] h-[21px] rounded-[5px] "
                                    key={index}
                                >
                                    {selectSpell(img) && (
                                        <Image
                                            src={selectSpell(img)}
                                            alt=" power img"
                                            layout="fill"
                                            className=" rounded-[5px] "
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    {/* batch  */}
                    <div className=" flex flex-col gap-y-[3px] ">
                        <div className=" relative group w-[21px] h-[21px] rounded-[5px] ">
                            {findRuneIcon(
                                props?.player?.perks?.styles[0]?.selections[0]
                                    ?.perk
                            ) && (
                                <div
                                    className={`w-[21.1px] h-[21.1px] rounded-5px ${
                                        props.simulatorPlayer.summonerName ===
                                        props.player.summonerName
                                            ? "bg-[#15091b]"
                                            : "bg-transparent"
                                    }`}
                                >
                                    <Image
                                        src={`https://ddragon.canisback.com/img/${findRuneIcon(
                                            props?.player?.perks?.styles[0]
                                                ?.selections[0]?.perk
                                        )}`}
                                        alt=" batch img"
                                        layout="fill"
                                        className=" rounded-[5px] "
                                    />
                                    {/* <div className="absolute left-1/2 transform -translate-x-1/2 border mt-2 transition-all ease-in-out duration-200 border-blue-gray w-125 text-center rounded-tiny p-2 text-2xs z-50 bg-white opacity-0 scale-y-0 group-hover:delay-1000 group-hover:opacity-100 group-hover:scale-y-100">
                                        <span>
                                            {getRuneDescription(
                                                props?.player?.perks?.styles[0]
                                                    ?.selections[0]?.perk
                                            )}
                                        </span>
                                        <div className="absolute w-2.5 h-2.5 border-blue-gray border-t border-r transform left-1/2 -translate-1/2 bg-white" />
                                    </div> */}
                                    {/* <HoverDiscription
                                    img={{
                                        src: `https://ddragon.canisback.com/img/${findRuneIcon(
                                            props?.player?.perks?.styles[0]
                                                ?.selections[0].perk
                                        )}`,
                                        alt: "dragon icon",
                                        width: "30px",
                                        height: "30px",
                                    }}
                                    name={findRuneDetails(
                                        props?.player?.perks?.styles[0]
                                            ?.selections[0].perk
                                    )?.name}
                                    role="rune"
                                    dis={
                                        findRuneDetails(
                                            props?.player?.perks?.styles[0]
                                                ?.selections[0].perk
                                        ).longDesc
                                    }
                                    gold={null}
                                /> */}
                                </div>
                            )}
                        </div>
                        <div
                            className={`relative w-[21px] h-[21px] rounded-[5px] ${
                                props.simulatorPlayer.summonerName ===
                                props.player.summonerName
                                    ? "bg-[#241122]"
                                    : "bg-[#191531]"
                            }`}
                        >
                            {styleSelector(
                                props.player?.perks?.styles[1]?.style
                            ) && (
                                <Image
                                    src={styleSelector(
                                        props.player?.perks?.styles[1]?.style
                                    )}
                                    alt=" batch img"
                                    layout="fill"
                                    className=" rounded-[5px] "
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerRow;
