import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import HoverDiscription from "../../Hover/HoverDiscription";

const RightSide = (props) => {
    const [teamKills, setTeamKills] = useState(1);
    const [kp, setKp] = useState(0);
    const [viewer, setViewer] = useState(false);
    const champions = useSelector((state) => state.champions.champions);
    const [champDetails, setChampDetails] = useState({});
    const runes = useSelector((state) => state.runes.runes);

    useEffect(() => {
        props?.mainPlayer?.championName && getChampion(champions);
    }, [champions, props?.mainPlayer?.championName]);

    const getChampion = (champs) => {
        if (champs && props?.mainPlayer?.championName) {
            console.log(champs[props?.mainPlayer?.championName]);
            console.log(props?.mainPlayer?.championName);
            setChampDetails(champs[props?.mainPlayer?.championName]?.image);
        }
    };

    const selectSpell = (id) => {
        switch (id) {
            case 21:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerBarrier.png";

            case 4:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerFlash.png";

            case 1:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerBoost.png";

            case 14:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerDot.png";

            case 3:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerExhaust.png";

            case 6:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerHaste.png";

            case 7:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerHeal.png";

            case 13:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerMana.png";

            case 30:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerPoroRecall.png";

            case 31:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerPoroThrow.png";

            case 11:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerSmite.png";

            case 39:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerSnowURFSnowball_Mark.png";

            case 32:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerSnowball.png";

            case 12:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/SummonerTeleport.png";

            case 54:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/Summoner_UltBookPlaceholder.png";

            case 55:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/Summoner_UltBookSmitePlaceholder.png";

            default:
                return "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/Summoner_UltBookSmitePlaceholder.png";
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

    useEffect(() => {}, [props.mainPlayer]);
    useEffect(() => {
        let totalKills = 0;
        let winState = props?.mainPlayer?.win;
        props?.match?.players.forEach((player) => {
            if (player.win == winState) {
                totalKills = totalKills + player.kills;
            }
        });
        setTeamKills(totalKills);
    }, [teamKills]);

    useEffect(() => {
        setKp(
            (
                ((props?.mainPlayer?.kills + props?.mainPlayer?.assists) /
                    teamKills) *
                100
            ).toFixed(1)
        );
    }, [teamKills]);

    useEffect(() => {
        if (kp) setViewer(true);
    }, [kp]);
    return (
        <div>
            {/* top images  */}
            <div className=" flex items-start gap-x-2 ">
                <div
                    className={`${
                        props.expand
                            ? `laptop:w-[95px] laptop:h-[95px] smDesktop:w-[98px] smDesktop:h-[98px] ${
                                  props.mainExpand ? "  " : "  "
                              }`
                            : "laptop:w-[63px] laptop:h-[63px] laptop:border laptop:border-white rounded-[16px]  "
                    } relative `}
                >
                    <div className=" relative overflow-hidden laptop:w-full laptop:h-full laptop:rounded-[16px]  ">
                        {/* {champDetails && champDetails?.sprite && <div
                                style={{
                                    background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${champDetails?.sprite}') no-repeat`,
                                    width: `48px`,
                                    height: `48px`,
                                    backgroundPosition: `-${champDetails?.x}px -${champDetails?.y}px`,
                                    backgroundSize: "1000% 300%",
                                    zoom: `1.3`
                                }}
                            ></div>} */}
                        <Image
                            src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${props?.mainPlayer?.championName}.png`}
                            alt="profile img "
                            layout="fill"
                        />
                    </div>

                    <div
                        className={` text-white font-gotham font-medium text-[9px] leading-[7px] flex items-center justify-center laptop:w-[18px] 
                          laptop:h-[18px] laptop:rounded-full laptop:border laptop:border-white
                          laptop:absolute laptop:left-[40%] laptop:-bottom-[10px]
                          laptop:bg-background `}
                    >
                        {props?.mainPlayer?.champLevel}
                    </div>
                </div>
                {/* powers  */}
                <div>
                    {[
                        props.mainPlayer?.summoner1Id,
                        props.mainPlayer?.summoner2Id,
                    ].map((power, index) => {
                        return (
                            <div
                                key={index}
                                className={` relative ${
                                    props.expand
                                        ? `w-[45px] h-[45px] mb-[6px] ${
                                              props.mainExpand ? "" : ""
                                          }`
                                        : " w-[30px] h-[30px] rounded-5px smDesktop:first:mb-1 "
                                }`}
                            >
                                <Image
                                    src={selectSpell(power)}
                                    alt="summoner flash image"
                                    layout="fill"
                                    className=" rounded-5px "
                                />
                            </div>
                        );
                    })}
                </div>
                {/* batch  */}
                <div className=" flex flex-col gap-y-1 items-center ">
                    {/* data.batch  */}
                    <div
                        className={` relative group ${
                            props.expand
                                ? `w-[45px] h-[45px] mb-[6px] ${
                                      props.mainExpand ? "" : ""
                                  }`
                                : " w-[30px] h-[30px] rounded-5px "
                        }`}
                    >
                        {findRuneIcon(
                            props?.mainPlayer?.perks?.styles[0]?.selections[0]
                                .perk
                        ) && (
                            <div>
                                <Image
                                    src={`https://ddragon.canisback.com/img/${findRuneIcon(
                                        props?.mainPlayer?.perks?.styles[0]
                                            ?.selections[0].perk
                                    )}`}
                                    alt="summoner flash image"
                                    layout="fill"
                                    className=" rounded-5px "
                                />
                                {/* <div className="absolute left-1/2 transform -translate-x-1/2 border mt-2 transition-all ease-in-out duration-200 border-blue-gray w-125 text-center rounded-tiny p-2 text-2xs z-50 bg-white opacity-0 scale-y-0 group-hover:delay-1000 group-hover:opacity-100 group-hover:scale-y-100">
                                    <span>
                                        {getRuneDescription(
                                            props?.mainPlayer?.perks?.styles[0]
                                                ?.selections[0].perk
                                        )}
                                    </span>
                                    <div className="absolute w-2.5 h-2.5 border-blue-gray border-t border-r transform left-1/2 -translate-1/2 bg-white" />
                                </div> */}
                                <HoverDiscription
                                    img={{
                                        src: `https://ddragon.canisback.com/img/${findRuneIcon(
                                            props?.mainPlayer?.perks?.styles[0]
                                                ?.selections[0].perk
                                        )}`,
                                        alt: "dragon icon",
                                        width: "30px",
                                        height: "30px",
                                    }}
                                    name={props?.mainPlayer?.championName}
                                    role="run"
                                    dis={
                                        findRuneDetails(
                                            props?.mainPlayer?.perks?.styles[0]
                                                ?.selections[0].perk
                                        ).longDesc
                                    }
                                    gold={props?.mainPlayer?.goldEarned}
                                />
                                {console.log(props?.mainPlayer, "long dis")}
                            </div>
                        )}
                    </div>
                    <div
                        className={` relative group ${
                            props.expand
                                ? `w-[45px] h-[45px] mb-[6px] ${
                                      props.mainExpand ? "" : ""
                                  }`
                                : " w-[20px] h-[20px] rounded-5px mt-[3px] "
                        }`}
                    >
                        {props?.mainPlayer?.perks?.styles[1]?.style && (
                            <>
                                <Image
                                    src={styleSelector(
                                        props?.mainPlayer?.perks?.styles[1]
                                            ?.style
                                    )}
                                    alt="summoner flash image"
                                    layout="fill"
                                    className=" rounded-5px "
                                />
                                <HoverDiscription
                                    img={{
                                        src: `https://ddragon.canisback.com/img/${findRuneIcon(
                                            props?.mainPlayer?.perks?.styles[0]
                                                ?.selections[0].perk
                                        )}`,
                                        alt: "dragon icon",
                                        width: "30px",
                                        height: "30px",
                                    }}
                                    name={props?.mainPlayer?.championName}
                                    role="run"
                                    dis={
                                        findRuneDetails(
                                            props?.mainPlayer?.perks?.styles[0]
                                                ?.selections[0].perk
                                        ).longDesc
                                    }
                                    gold={props?.mainPlayer?.goldEarned}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/* bottom texts  */}
            <div
                className={`font-sf-pro-text font-bold text-[9.5px] leading-[11px] mt-[17px]   ${
                    props.mainExpand ? "" : " "
                }`}
            >
                <p className=" text-grayed-text ">
                    <span className=" text-accent-color-2">
                        {props.mainPlayer?.deaths
                            ? (
                                  (props.mainPlayer?.assists +
                                      props.mainPlayer?.kills) /
                                  props.mainPlayer?.deaths
                              ).toFixed(2)
                            : "Perfect"}
                        {props.mainPlayer?.deaths ? ":1" : ""}
                    </span>{" "}
                    KDA
                </p>
                {viewer && <p className=" text-grayed-text ">{kp}% KP</p>}
            </div>
        </div>
    );
};

export default RightSide;
