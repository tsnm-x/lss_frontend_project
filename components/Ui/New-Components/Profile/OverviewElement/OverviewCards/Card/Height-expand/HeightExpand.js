import React, { useState } from "react";
import Classes from "./HeightExpand.module.css";
import Image from "next/image";
import SimulateComponets from "../SimulateComponets/SimulateComponets";
// items
import smallImg from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/3340.png";
import Items1 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/1028.png";
import Items2 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/1082.png";
import Items3 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/2055.png";
import Items4 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/3916.png";
import Items5 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/4633.png";

import ProfileImg from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/Sion.png";
import Rank1 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/rank.png";
import Rank2 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/rank2.png";
import RoundBatch1 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/round-batch.png";
import RoundBatch2 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/round-batch2.png";
import { useEffect } from "react";
import useHttp from "../../../../../../../../hook/useHttp";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Btns = () => {
    const [btns, setBtns] = useState([
        { text: "overview", active: true },
        { text: "Runes", active: false },
    ]);
    return (
        <div className=" flex justify-center mt-3 mb-[10px] ml-[65px] ">
            {btns.map((btn, index) => {
                return (
                    <button
                        key={index}
                        className={` sf-bold-12 capitalize mx-[15px] ${
                            btn.active
                                ? "text-accent-color"
                                : " text-grayed-text"
                        }`}
                    >
                        {btn.text}
                    </button>
                );
            })}
        </div>
    );
};

// header bar
const HeaderBar = (props) => {
    return (
        <div className=" grid grid-cols-[140px_100px_97px_93px_215px_120px_120px] items-center py-2 bg-[#160f20] ">
            <h1 className=" sf-bold-10 capitalize text-grayed-text ml-[15px] ">
                <span
                    className={` ${
                        props?.convertM(props?.match?.duration) <= 5 ? "text-yellow-50" :
                        !props.won
                            ? "text-accent-color"
                            : "text-accent-color-2"
                    } sf-bold-14 mr-[5px] `}
                >
                    {props?.convertM(props?.match?.duration) <= 5 ? "Remake" : props.won? "Victory" : "Defeat"}
                </span>{" "}
                {!props?.blueTeam ? "(Red Team)" : "(Blue Team)"}
            </h1>
            <h1 className=" sf-bold-10  capitalize text-grayed-text text-center "></h1>
            <h1 className=" sf-bold-10  capitalize text-grayed-text ">
                Creep Score
            </h1>
            <h1 className=" sf-bold-10 capitalize text-grayed-text ">
                score
            </h1>
            <h1 className=" sf-bold-10  capitalize text-grayed-text ">items</h1>
            <h1 className=" sf-bold-10  capitalize text-grayed-text text-center ">
                Damage Dealt
            </h1>
            <h1 className=" sf-bold-10  capitalize text-grayed-text ">
                gold
            </h1>
        </div>
    );
};

const DataRow = (props) => {
    const [Rank, setRank] = useState();
    const [rankObj, setRankObj] = useState();
    const [rankSolo, setRankSolo] = useState();
    const [active, setActive] = useState(false);
    const { sendRequest } = useHttp();
    const champions = useSelector((state) => state.champions.champions);
    const router = useRouter();
    const items = useSelector((state) => state.items.items);
    const runes = useSelector(state => state.runes.runes) 

    const getItem = (item) => {
        return items[item]?.image
    }


    const getChampion = (player) => {
        return champions[player]?.image;
    }

    const getMaxDamageDealt = () => {
        let maxDamageDealt =
            props.match?.players[0]?.totalDamageDealtToChampions;

        props.match?.players.forEach((player, index) => {
            if (index !== props.match?.players?.length - 1) {
                if (
                    maxDamageDealt <=
                    props.match?.players[index + 1]?.totalDamageDealtToChampions
                ) {
                    maxDamageDealt =
                        props.match?.players[index + 1]
                            ?.totalDamageDealtToChampions;
                }
            }
            return;
        });

        return maxDamageDealt;
    };

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
        sendRequest(
            {
                url: "/summonerRanks",
                method: "POST",
                body: {
                    region: router?.query?.region,
                    summonerRiotId: props?.summonerId,
                },
            },
            (res) => {
                if (res) {
                    setRankObj(res.data.ranks);
                }
            }
        );
    }, [props?.summonerName]);

    function RankCompGenerator(color, text) {
        let component = (
            <h1
                className={` capitalize font-sf-pro-text text-[12px] leading-[14.3px]
                text-[#858DA3]`}
                style={{ color: color ? color : "#706A76" }}
            >
                {text ? text : `Level ${props?.summonerLevel}`}
            </h1>
        );
        setRank(component);
    }

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

    useEffect(() => {
        setRankSolo(rankObj?.find((el) => el.queueType === "RANKED_SOLO_5x5"));
    }, [rankObj]);

    useEffect(() => {
        const rank = `${rankSolo?.tier}`;
        console.log(rank);
        switch (rank) {
            case "CHALLENGER":
                RankCompGenerator(
                    "#3C8DB4",
                    `${rank?.charAt(0) + rank?.slice(1).toLowerCase()}`
                );
                break;
            case "IRON":
                RankCompGenerator(
                    "#534B4B",
                    `${
                        rank?.charAt(0) + rank?.slice(1).toLowerCase()
                    } ${rankConverter(rankSolo?.rank)}`
                );
                break;
            case "BRONZE":
                RankCompGenerator(
                    "#D09989",
                    `${
                        rank?.charAt(0) + rank?.slice(1).toLowerCase()
                    } ${rankConverter(rankSolo?.rank)}`
                );
                break;
            case "SILVER":
                RankCompGenerator(
                    "#848CA3",
                    `${
                        rank?.charAt(0) + rank?.slice(1).toLowerCase()
                    } ${rankConverter(rankSolo?.rank)}`
                );
                break;
            case "GOLD":
                RankCompGenerator(
                    "#CFAA69",
                    `${
                        rank?.charAt(0) + rank?.slice(1).toLowerCase()
                    } ${rankConverter(rankSolo?.rank)}`
                );
                break;
            case "DIAMOND":
                RankCompGenerator(
                    "#4FADDF",
                    `${
                        rank?.charAt(0) + rank?.slice(1).toLowerCase()
                    } ${rankConverter(rankSolo?.rank)}`
                );
                break;
            case "GRANDMASTER":
                RankCompGenerator(
                    "#EB3649",
                    `${rank?.charAt(0) + rank?.slice(1).toLowerCase()}`
                );
                break;
            case "MASTER":
                RankCompGenerator(
                    "#CA70F2",
                    `${rank?.charAt(0) + rank?.slice(1).toLowerCase()}`
                );
                break;
            case "PLATINUM":
                RankCompGenerator(
                    "#4DC7BE",
                    `${
                        rank?.charAt(0) + rank?.slice(1).toLowerCase()
                    } ${rankConverter(rankSolo?.rank)}`
                );
                break;
            default:
                RankCompGenerator("", "");
        }
    }, [rankSolo]);

    function convertM(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes

        return minutes;
    }

    const findRuneDetails = (id) => {
        if(runes && id){
            const selectedRune = runes.filter(rune => rune?.id === id);
            return selectedRune[0]
        }
    }

    const findRuneIcon = (id) => {
        const rune = findRuneDetails(id);
        return rune?.icon
    }

    const getRuneDescription= (rune) => {
        if(runes && rune){
            const selectedRune = findRuneDetails(rune)
            return (
                <div>
                    <h1>{selectedRune?.name}</h1>
                    <small dangerouslySetInnerHTML={{ __html: selectedRune?.longDesc }}></small>
                </div>
            )
        }
    }

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
        if(items && item){
            return (
                <div>
                    <h1>{items[item]?.name}</h1>
                    <p>{mythicHighlighter(item)? "mythic" : "not mythic"}</p>
                    <small dangerouslySetInnerHTML={{ __html: items[item]?.description }}></small>
                    <p>{items[item]?.gold?.total}G</p>
                </div>
            )
        }
    }

    return (
        <div
            className={`grid grid-cols-[130px_99px_97px_93px_215px_120px_111px] rounded-5px mb-1 last:mb-0 ${
                props?.convertM(props?.match?.duration) <= 5 ? "bg-yellow-900" : props.won ? "bg-[#181631]" : "bg-[#251122]"
            } `}
        >
            {/*  profile  */}
            <div className=" flex justify-start gap-x-[5px] pl-[5px] py-[2px] ">
                {/* round  */}
                <div className=" grid grid-cols-[repeat(2,20px)] grid-rows-[repeat(2,20px)] gap-[5px]  ">
                    <div className=" relative group w-[20px] h-[20px] rounded-5px ">
                        {findRuneIcon(
                            props?.perks?.styles[0]?.selections[0]?.perk
                        ) && (
                            <div>
                                <Image
                                    src={`https://ddragon.canisback.com/img/${findRuneIcon(props?.perks?.styles[0]?.selections[0]?.perk )}`}
                                    alt="rank image"
                                    layout="fill"
                                    className=" rounded-5px "
                                />
                                <div
                                    className='absolute left-1/2 transform -translate-x-1/2 border mt-2 transition-all ease-in-out duration-200 border-blue-gray w-125 text-center rounded-tiny p-2 text-2xs z-50 bg-white opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100'
                                >
                                    <span>{getRuneDescription(props?.perks?.styles[0]?.selections[0]?.perk)}</span>
                                    <div
                                        className='absolute w-2.5 h-2.5 border-blue-gray border-t border-r transform left-1/2 -translate-1/2 bg-white'
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className=" relative w-[20px] h-[20px] rounded-5px ">
                        {styleSelector(props.perks?.styles[1]?.style) && (
                            <Image
                                src={styleSelector(
                                    props.perks?.styles[1]?.style
                                )}
                                alt="rank image"
                                layout="fill"
                                className=" rounded-5px "
                            />
                        )}
                    </div>
                    {[props?.summoner1Id, props?.summoner2Id].map(
                        (img, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" relative w-[20px] h-[20px] rounded-5px "
                                >
                                    {selectSpell(img) && (
                                        <Image
                                            src={selectSpell(img)}
                                            alt="rank image"
                                            layout="fill"
                                            className=" rounded-5px "
                                        />
                                    )}
                                </div>
                            );
                        }
                    )}
                </div>
                {/* profile img  */}
                <div>
                    <div className=" relative w-11 h-11 rounded-[5px] ">
                        {getChampion(props?.championName) && <div
                            className="rounded-[10px]"
                            style={{
                                background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${getChampion(props?.championName)?.sprite}') no-repeat`,
                                width: `${getChampion(props?.championName)?.w}px`,
                                height: `${getChampion(props?.championName)?.h}px`,
                                backgroundPosition: `-${getChampion(props?.championName)?.x}px -${getChampion(props?.championName)?.y}px`,
                                // backgroundSize: "1000% 300%",
                                // zoom: `0.38`
                            }}
                        ></div>}
                    </div>
                </div>
            </div>
            {/* name  */}
            <div className=" flex flex-col justify-center ">
                <Link href={{
                    pathname: "/summoner/[region]/[summonerName]",
                    query: {region: router?.query?.region, summonerName: props?.summonerName}
                }}>
                    <h1 className={`sf-bold-14 text-white capitalize cursor-pointer`}>
                        {props?.summonerName?.slice(0,7)}
                    </h1>
                </Link>
                {Rank}
            </div>
            {/* creep score  */}
            <div className=" flex flex-col justify-center ">
                <h1 className={` ${Classes.cellTitle}`}>
                    {props?.neutralMinionsKilled +  props?.totalMinionsKilled} cs
                </h1>
                <h1 className={` ${Classes.secTitle}`}>
                    {(
                        (props?.neutralMinionsKilled +  props?.totalMinionsKilled) /
                        convertM(props.match?.duration)
                    )?.toFixed(1)}{" "}
                    cs/min
                </h1>
            </div>
            {/* score  */}
            <div className=" flex flex-col justify-center ">
                <h1 className={Classes.cellTitle}>
                    {props?.kills}/{props?.deaths}/{props?.assists}
                </h1>
                <h1 className={Classes.secTitle}>
                    KDA:{" "}
                    {props?.deaths
                        ? (
                              (props?.assists + props?.kills) /
                              props?.deaths
                          ).toFixed(2)
                        : "Perfect"}
                </h1>
            </div>

            <div className=" flex gap-x-[3px] items-center ">
                {[
                    props?.item0,
                    props?.item1,
                    props?.item2,
                    props?.item3,
                    props?.item4,
                    props?.item5,
                ].map((img, index) => {
                    return (
                        <div
                            key={index}
                            className=" relative rounded-[5px] w-[25px] h-[25px] bg-[#301d2d] "
                        >
                            {img !== 0 && getItem(img) && getItem(img)?.sprite && (
                                <div className="relative group">
                                    <div
                                        className={`rounded-[5px]`}
                                        style={{
                                            background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${getItem(img)?.sprite}') no-repeat`,
                                            width: `${getItem(img)?.w}px`,
                                            height: `${getItem(img)?.h}px`,
                                            backgroundPosition: `-${getItem(img)?.x}px -${getItem(img)?.y}px`,
                                            // backgroundSize: "contain",
                                            zoom: `0.52`
                                        }}
                                    ></div>
                                    <div
                                        className='absolute left-1/2 transform -translate-x-1/2 border mt-2 transition-all ease-in-out duration-200 border-blue-gray w-125 text-center rounded-tiny p-2 text-2xs z-50 bg-white opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100'
                                    >
                                        <span>{getItemDetails(img)}</span>
                                        <div
                                            className='absolute w-2.5 h-2.5 border-blue-gray border-t border-r transform left-1/2 -translate-1/2 bg-white'
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                {
                    <div className=" relative w-5 h-5 rounded-[5px] ">
                        {props?.item6 !== 0 && getItem(props?.item6) && getItem(props?.item6)?.sprite && (<div
                                className={`rounded-[5px]`}
                                style={{
                                    background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${getItem(props?.item6)?.sprite}') no-repeat`,
                                    width: `${getItem(props?.item6)?.w}px`,
                                    height: `${getItem(props?.item6)?.h}px`,
                                    backgroundPosition: `-${getItem(props?.item6)?.x}px -${getItem(props?.item6)?.y}px`,
                                    // backgroundSize: "contain",
                                    zoom: `0.4`
                                }}
                            ></div>)}
                    </div>
                }
            </div>
            {/* damage dealt  */}
            <div className=" flex flex-col justify-center items-center ">
                <h1 className={Classes.cellTitle}>
                    {props?.totalDamageDealtToChampions}
                </h1>
                <div
                    className={` w-full h-[6.5px] rounded-full bg-[#706a76] mt-[6px] max-w-[80px] `}
                >
                    <div
                        className={`h-full rounded-full ${
                            props?.convertM(props?.match?.duration) <= 5 ? "bg-yellow-50" : props.won
                                ? " bg-accent-color-2"
                                : " bg-accent-color"
                        }`}
                        style={{
                            width: `${
                                getMaxDamageDealt()
                                    ? (props?.totalDamageDealtToChampions /
                                          getMaxDamageDealt()) *
                                      100
                                    : (props?.totalDamageDealtToChampions / 1) *
                                      100
                            }%`,
                        }}
                    ></div>
                </div>
            </div>
            {/* gold  */}
            <div className=" flex flex-col justify-center ">
                <h1 className={Classes.cellTitle}>
                    {(props?.goldEarned / 1000).toFixed(1)}k Gold
                </h1>
                <h1 className={`${Classes.secTitle}`}>
                    Unspent: {Math.abs(props?.goldEarned - props?.goldSpent)}
                </h1>
            </div>
        </div>
    );
};

const ExpandDataRows = (props) => {
    return (
        <div>
            {/* header  */}
            <HeaderBar won={props.type} blueTeam={props?.blueTeam} match={props.match} convertM={props?.convertM}/>
            <div className=" px-[9px] mt-[10px] ">
                {props.team?.map((data, index) => {
                    return (
                        <DataRow
                            key={index}
                            {...data}
                            won={props.type}
                            match={props.match}
                            convertM={props?.convertM}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const HeightExpand = (props) => {
    const [firstTeam, setFirstTeam] = useState([]);
    const [secondTeam, setSecondTeam] = useState([]);
    const [mainPlayer, setMainPlayer] = useState({});
    const [wonGame, setWonGame] = useState(false);
    const [index, setIndex] = useState();
    const [isBlue, setIsBlue] = useState(false);

    useEffect(() => {
        setMainPlayer(props.match?.players?.find((player, idx) => {
            if(player.mainPlayer){
                setIndex(idx)
            }
            return player.mainPlayer
        }))
    }, [props.match?.players]);

    useEffect(() => {
        if(index){
            index <= 4 ? setIsBlue(true) : setIsBlue(false)
        }
    }, [index])

    useEffect(()=>{
        if(mainPlayer?.summonerName){
            if (mainPlayer.win){
                setFirstTeam(props.match?.players?.filter((player) => player.win))
                setSecondTeam(props.match?.players?.filter((player) => !player.win))
                setWonGame(true)
            } else if (!mainPlayer.win){
                setFirstTeam(props.match?.players?.filter((player) => !player.win))
                setSecondTeam(props.match?.players?.filter((player) => player.win))
                setWonGame(false)
            }
        }
    }, [mainPlayer])
    return (
        <div className=" mb-14 ">
            <Btns />
            {mainPlayer && <ExpandDataRows
                blueTeam={isBlue}
                team={firstTeam}
                type={wonGame}
                match={props.match}
                convertM={props?.convertM}
            />}
            <SimulateComponets match={props?.match} convertM={props?.convertM}/>
            {mainPlayer && <ExpandDataRows
                blueTeam={!isBlue}
                team={secondTeam}
                type={!wonGame}
                match={props.match}
                convertM={props?.convertM}
            />}
        </div>
    );
};

export default HeightExpand;
