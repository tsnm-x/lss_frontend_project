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

    const selectStyleIcons = (id) => {
        switch (id) {
            case 8112:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/Electrocute/Electrocute.png";
            case 8124:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/Predator/Predator.png";
            case 8128:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png";
            case 9923:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png";
            case 8126:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/CheapShot/CheapShot.png";
            case 8139:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png";
            case 8143:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png";
            case 8136:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/ZombieWard/ZombieWard.png";
            case 8120:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/GhostPoro/GhostPoro.png";
            case 8138:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png";
            case 8135:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png";
            case 8134:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png";
            case 8105:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png";
            case 8106:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png";
            case 8351:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png";
            case 8360:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png";
            case 8369:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png";
            case 8306:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png";
            case 8304:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png";
            case 8313:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png";
            case 8321:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png";
            case 8316:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png";
            case 8345:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png";
            case 8347:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png";
            case 8410:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png";
            case 8352:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png";
            case 8005:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png";

            case 8008:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png";
            case 8021:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png";
            case 8010:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Conqueror/Conqueror.png";

            case 9101:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Overheal.png";

            case 9111:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Triumph.png";

            case 8009:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png";

            case 9104:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png";

            case 9105:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png";

            case 9103:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png";

            case 8014:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png";

            case 8017:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/CutDown/CutDown.png";

            case 8299:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/LastStand/LastStand.png";
            case 8437:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png";

            case 8439:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png";

            case 8465:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Guardian/Guardian.png";

            case 8446:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Demolish/Demolish.png";

            case 8463:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png";

            case 8401:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png";

            case 8429:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Conditioning/Conditioning.png";

            case 8444:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png";

            case 8473:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png";

            case 8451:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png";

            case 8453:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Revitalize/Revitalize.png";

            case 8242:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png";
            case 8214:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png";
            case 8229:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png";
            case 8230:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png";
            case 8224:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png";
            case 8226:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png";

            case 8275:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/NimbusCloak/6361.png";

            case 8210:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png";

            case 8234:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Celerity/CelerityTemp.png";

            case 8233:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png";

            case 8237:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Scorch/Scorch.png";

            case 8232:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png";

            case 8236:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png";
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
                        className={` relative ${
                            props.expand
                                ? `w-[45px] h-[45px] mb-[6px] ${
                                      props.mainExpand ? "" : ""
                                  }`
                                : " w-[30px] h-[30px] rounded-5px mb-1 "
                        }`}
                    >
                        {selectStyleIcons(
                            props?.mainPlayer?.perks?.styles[0]?.selections[0]
                                .perk
                        ) && (
                            <Image
                                src={selectStyleIcons(
                                    props?.mainPlayer?.perks?.styles[0]
                                        ?.selections[0].perk
                                )}
                                alt="summoner flash image"
                                layout="fill"
                                className=" rounded-5px "
                            />
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
            className={`  ${
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
