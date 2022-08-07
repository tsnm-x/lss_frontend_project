import React, { useEffect, useState } from "react";
import Image from "next/image";
import CardImage from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";
import SummonerFlash from "../../../../../../../public/assets/new-images/Profile/card/SummonerFlash.png";
import SummonerHeal from "../../../../../../../public/assets/new-images/Profile/card/SummonerHeal.png";
import BatchImg1 from "../../../../../../../public/assets/new-images/Profile/card/batch1.png";
import BatchImg2 from "../../../../../../../public/assets/new-images/Profile/card/batch2.png";
import { useSelector } from "react-redux";

const LeftSide = (props) => {
    const selectGameType = () => {
        switch (props?.match?.queueId) {
            case 76:
                return "Ultra Rapid Fire";
            case 100:
                return "5v5 ARAM";
            case 400:
                return "5v5 Draft Pick";
            case 420:
                return "5v5 Ranked Solo";
            case 430:
                return "5v5 Blind Pick";
            case 440:
                return "5v5 Ranked Flex";
            case 450:
                return "5v5 ARAM";
            case 470:
                return "3v3 Ranked Flex";
            case 900:
                return "URF";

            default:
                return "Normal Game";
        }
    };

    function convertHMS(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
        let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
        // add 0 if value < 10; Example: 2 => 02
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds; // Return is MM : SS
    }

    function getGameStart(gameStartInitialDate) {
        let gameStartDate = new Date(gameStartInitialDate);

        const diffTime = Math.abs(Date.now() - gameStartDate);
        // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

        let gameStart;
        if (diffHours >= 24) {
            gameStart = `${(diffHours / 24).toFixed(0)} Days Ago`;
        } else if (diffHours < 24) {
            gameStart = `${diffHours.toFixed(0)} Hours Ago`;
        } else {
            gameStart = "Unmeasurable";
        }
        return gameStart;
    }

    return (
        <>
            {props.mainPlayer && (
                <div className={`font-sf-pro-text font-bold mr-[30px]  `}>
                    <h4
                        className={` capitalize ${
                            props?.convertM(props.match?.duration) <= 5 ? "text-yellow-50" : 
                            props?.mainPlayer?.win
                                ? "text-accent-color-2"
                                : " text-nav-btn"
                        }`}
                    >
                        <span
                            className={` mr-[10px] ${
                                props.expand
                                    ? `text-[23px] leading-7 ${
                                          props.mainExpand ? "" : " "
                                      } `
                                    : " text-[18px] leading-5  "
                            }`}
                        >
                            {props?.convertM(props.match?.duration) <= 5 ? "Remake" : props?.mainPlayer?.win ? "Victory" : "Defeat"}
                        </span>{" "}
                        <span
                            className={`text-light-text ${
                                props.expand
                                    ? `text-base leading-[19px]  ${
                                          props.mainExpand ? "" : " "
                                      } `
                                    : "text-[12px] leading-[14px]"
                            }`}
                        >
                            {convertHMS(props?.match?.duration)}
                        </span>
                    </h4>
                    <h6
                        className={`${
                            props.expand
                                ? `text-[15px] leading-[18px] mt-2 ${
                                      props.mainExpand ? "" : "  "
                                  }`
                                : "text-[12px] leading-[14px] mt-1  "
                        } text-grayed-text`}
                    >
                        {selectGameType()}
                    </h6>
                    <h2
                        className={` text-light-text ${
                            props.expand
                                ? `text-[32px] leading-[39px] mt-[18px] smDesktop:text-[37px] smDesktop:leading-[44px]
                             ${props.mainExpand ? "" : "  "}
                              `
                                : "text-[22px] leading-[26px] mt-[10px]  "
                        } `}
                    >
                        {props?.mainPlayer?.kills}/{props?.mainPlayer?.deaths}/
                        {props?.mainPlayer?.assists}
                    </h2>
                    <h6
                        className={` text-grayed-text ${
                            props.expand
                                ? `mt-5 text-[17px] leading-[20px]  ${
                                      props.mainExpand
                                          ? ""
                                          : " text-[25px] leading-[30px] mt-5 "
                                  }`
                                : "text-[12px] leading-[14px] mt-[15px]  "
                        } `}
                    >
                        {getGameStart(props?.match?.gameStartTimestamp)}
                    </h6>
                </div>
            )}
        </>
    );
};

const RightSide = (props) => {
    const [teamKills, setTeamKills] = useState(1);
    const [kp, setKp] = useState(0);
    const [viewer, setViewer] = useState(false);
    const champions = useSelector((state) => state.champions.champions);
    const [champDetails, setChampDetails] = useState({})
    const runes = useSelector(state => state.runes.runes) 

    useEffect(()=>{
        props?.mainPlayer?.championName && getChampion(champions)
    }, [champions, props?.mainPlayer?.championName])

    const getChampion = (champs) => {
        if(champs && props?.mainPlayer?.championName){
            console.log(champs[props?.mainPlayer?.championName])
            console.log(props?.mainPlayer?.championName)
            setChampDetails(champs[props?.mainPlayer?.championName]?.image)
        }
    }

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
                return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/Summoner_UltBookSmitePlaceholder.png";
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
            <div className=" flex items-center gap-x-2 ">
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
                <div>
                    {/* data.batch  */}
                    <div
                        className={` relative group ${
                            props.expand
                                ? `w-[45px] h-[45px] mb-[6px] ${
                                      props.mainExpand ? "" : ""
                                  }`
                                : " w-[30px] h-[30px] rounded-5px mb-1 "
                        }`}
                    >
                        {findRuneIcon(
                            props?.mainPlayer?.perks?.styles[0]?.selections[0].perk
                        ) && (
                            <div>
                                <Image
                                    src={`https://ddragon.canisback.com/img/${findRuneIcon(props?.mainPlayer?.perks?.styles[0]?.selections[0].perk )}`}
                                    alt="summoner flash image"
                                    layout="fill"
                                    className=" rounded-5px "
                                />
                                <div
                                    className='absolute left-1/2 transform -translate-x-1/2 border mt-2 transition-all ease-in-out duration-200 border-blue-gray w-125 text-center rounded-tiny p-2 text-2xs z-50 bg-white opacity-0 scale-y-0 group-hover:delay-1000 group-hover:opacity-100 group-hover:scale-y-100'
                                >
                                    <span>{getRuneDescription(props?.mainPlayer?.perks?.styles[0]?.selections[0].perk)}</span>
                                    <div
                                        className='absolute w-2.5 h-2.5 border-blue-gray border-t border-r transform left-1/2 -translate-1/2 bg-white'
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className={` relative ${
                            props.expand
                                ? `w-[45px] h-[45px] mb-[6px] ${
                                      props.mainExpand ? "" : ""
                                  }`
                                : " w-[30px] h-[30px] rounded-5px "
                        }`}
                    >
                        {props?.mainPlayer?.perks?.styles[1]?.style && (
                            <Image
                                src={styleSelector(
                                    props?.mainPlayer?.perks?.styles[1]?.style
                                )}
                                alt="summoner flash image"
                                layout="fill"
                                className=" rounded-5px "
                            />
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
                {viewer && (
                    <p className=" text-grayed-text ">{kp}% KP</p>
                )}
            </div>
        </div>
    );
};

const StatusCard = (props) => {
    const [mainPlayer, setMainPlayer] = useState({});

    useEffect(() => {
        let main = props?.match?.players.find((player) => {
            return player.mainPlayer == true;
        });
        setMainPlayer(main);
    }, [props.match]);

    return (
        <div
            className={` rounded-tl-5px rounded-bl-5px  ${
                props?.convertM(props?.match?.duration) <= 5 ? "bg-yellow-900" : mainPlayer?.win ? " bg-winOpacity" : " bg-defeatOpacity"
            }
             flex border-r border-background   ${
                 props.expand
                     ? " py-6 px-[30px] smDesktop:px-[28px] smDesktop:py-[38px]  "
                     : "p-5 pt-[15px] "
             }`}
        >
            {/* left side  */}
            <LeftSide {...props} match={props.match} mainPlayer={mainPlayer} />
            {/* right side  */}
            <RightSide
                expand={props.expand}
                match={props.match}
                mainPlayer={mainPlayer}
                mainExpand={props.mainExpand}
            />
        </div>
    );
};

export default StatusCard;
