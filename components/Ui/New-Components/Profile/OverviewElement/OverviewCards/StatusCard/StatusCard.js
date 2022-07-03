import React, { useEffect, useState } from "react";
import Image from "next/image";
import CardImage from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";
import SummonerFlash from "../../../../../../../public/assets/new-images/Profile/card/SummonerFlash.png";
import SummonerHeal from "../../../../../../../public/assets/new-images/Profile/card/SummonerHeal.png";
import BatchImg1 from "../../../../../../../public/assets/new-images/Profile/card/batch1.png";
import BatchImg2 from "../../../../../../../public/assets/new-images/Profile/card/batch2.png";

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
		return hours + ":" + minutes + ":" + seconds; // Return is MM : SS
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
                <div className={`font-sf-pro-text font-bold mr-[30px] `}>
                    <h4
                        className={` capitalize ${
                            props?.mainPlayer?.win ? "text-accent-color-2" : "text-accent-color"
                        }`}
                    >
                        <span
                            className={` mr-1 ${
                                props.expand
                                    ? "text-[23px] leading-7 "
                                    : " text-[17px] leading-5"
                            }`}
                        >
                            {props?.mainPlayer?.win ? "Victory" : "Defeat"}
                        </span>{" "}
                        <span
                            className={`text-light-text ${
                                props.expand
                                    ? " text-base leading-[19px] "
                                    : "text-[12px] leading-[14px] "
                            }`}
                        >
                            {convertHMS(props?.match?.duration)}
                        </span>
                    </h4>
                    <h6
                        className={`${
                            props.expand
                                ? "text-[15px] leading-[18px] mt-2"
                                : "text-[12px] leading-[14px] mt-1"
                        } text-grayed-text`}
                    >
                        {selectGameType()}
                    </h6>
                    <h2
                        className={` text-light-text ${
                            props.expand
                                ? "text-[33px] leading-[39px] mt-[18px] "
                                : "text-[25px] leading-[30px] mt-[10px]"
                        } `}
                    >
                        {props?.mainPlayer?.kills}/{props?.mainPlayer?.deaths}/{props?.mainPlayer?.assists}
                    </h2>
                    <h6
                        className={` text-grayed-text ${
                            props.expand
                                ? " mt-5 text-[17px] leading-[20px] "
                                : "text-[12px] leading-[14px] mt-[10px] "
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
    const [teamKills, setTeamKills] = useState(1)
    const [kp, setKp] = useState(0);
    const [viewer, setViewer] = useState(false)
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

    useEffect(()=>{
        let totalKills = 0;
        let winState = props.mainPlayer.win;
        props?.match?.players.forEach((player)=>{
            if(player.win == winState){
                totalKills = totalKills + player.kills
            }
        });
        setTeamKills(totalKills);
    }, [teamKills])

    useEffect(()=>{
       setKp((((props.mainPlayer.kills + props.mainPlayer?.assists) / teamKills) * 100).toFixed(1))
    }, [teamKills])

    useEffect(()=>{
        if(kp) setViewer(true)
    }, [kp])
    return (
        <div>
            {/* top images  */}
            <div className=" flex items-center ">
                <div
                    className={`${
                        props.expand
                            ? " laptop:w-[95px] laptop:h-[95px] "
                            : "laptop:w-[62px] laptop:h-[62px]"
                    } relative mr-1 `}
                >
                    <div className=" relative overflow-hidden laptop:w-full laptop:h-full laptop:rounded-[23px]  ">
                        <Image
                            src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${props.mainPlayer?.profileIcon}.png`}
                            alt="profile image"
                            layout="fill"
                        />
                    </div>
                    <div
                        className=" text-white font-gotham font-medium text-[6px] leading-[7px]  laptop:w-[18px] 
                          laptop:h-[18px] laptop:rounded-full laptop:border laptop:border-grayed-text laptop:italic
                          laptop:absolute laptop:left-[40%] laptop:-bottom-[6px]
                          laptop:bg-background flex items-center justify-center"
                    >
                        {props?.mainPlayer?.summonerLevel}
                    </div>
                </div>
                {/* power and batches  */}
                <div className=" flex ">
                    {/* powers  */}
                    <div className=" mr-2 ">
                        {[props.mainPlayer?.summoner1Id, props.summoner2Id].map((power, index) => {
                            return (
                                <div
                                    key={index}
                                    className={` relative ${
                                        props.expand
                                            ? " w-[45px] h-[45px] mb-[6px]  "
                                            : " w-[29px] h-[29px] rounded-5px"
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
                    {/* <div className=" mr-2 ">
                        {data.batch.map((power, index) => {
                            return (
                                <div
                                    key={index}
                                    className={` relative ${
                                        props.expand
                                            ? " w-[45px] h-[45px] mb-[6px]  "
                                            : " w-[29px] h-[29px] rounded-5px"
                                    }`}
                                >
                                    <Image
                                        src={power}
                                        alt="summoner flash image"
                                        layout="fill"
                                        className=" rounded-5px "
                                    />
                                </div>
                            );
                        })}
                    </div> */}
                </div>
            </div>
            {/* bottom texts  */}
            <div className=" font-sf-pro-text font-bold text-[9.5px] leading-[11px] pl-2 mt-[17px] ">
                <p className=" text-grayed-text ">
                    <span className=" text-accent-color-2">{(((props.mainPlayer?.assists + props.mainPlayer?.kills) / (props.mainPlayer?.deaths? props.mainPlayer?.deaths : 1)).toFixed(2))}:1</span> KDA
                </p>
                {viewer && <p className=" text-grayed-text mt-[2px] ">{kp}% KP</p>}
            </div>
        </div>
    );
};

const StatusCard = (props) => {
    const [mainPlayer, setMainPlayer] = useState({});

    useEffect(()=>{
        let main = props?.match?.players.find((player) => {
            return player.mainPlayer == true;
        })
        setMainPlayer(main)
    }, [props.match])

    return (
        <div
            className={`  bg-card-&-content-box
             flex items-center border-r border-background ${
                 props.expand ? " py-6 px-[30px]" : "p-5 pt-[15px]"
             }`}
        >
            {/* left side  */}
            <LeftSide {...props} match={props.match} mainPlayer={mainPlayer} />
            {/* right side  */}
            <RightSide expand={props.expand} match={props.match} mainPlayer={mainPlayer} />
        </div>
    );
};

export default StatusCard;
