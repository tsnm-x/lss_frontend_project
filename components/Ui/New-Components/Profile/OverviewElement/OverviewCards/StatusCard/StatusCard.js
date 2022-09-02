import React, { useEffect, useState } from "react";
import Image from "next/image";
import CardImage from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";
import SummonerFlash from "../../../../../../../public/assets/new-images/Profile/card/SummonerFlash.png";
import SummonerHeal from "../../../../../../../public/assets/new-images/Profile/card/SummonerHeal.png";
import BatchImg1 from "../../../../../../../public/assets/new-images/Profile/card/batch1.png";
import BatchImg2 from "../../../../../../../public/assets/new-images/Profile/card/batch2.png";
import { useSelector } from "react-redux";
import RightSide from "./RightSide";

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
                props?.convertM(props?.match?.duration) <= 5
                    ? "bg-[#3a3242]"
                    : mainPlayer?.win
                    ? " bg-winOpacity"
                    : " bg-defeatOpacity"
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
