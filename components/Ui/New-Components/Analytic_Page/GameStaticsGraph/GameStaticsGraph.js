import React, { useEffect, useRef, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import GoldDiffChart from "../../Profile/OverviewElement/SimulateGame/Simulation/GoldDiffChart/GoldDiffChart";
import Image from "next/image";
import GraphImg from "../../../../../public/assets/new-images/Profile/card/CardExpand/Graph/Expanded-Card.jpg";
import SimulationData from "../../Profile/OverviewElement/SimulateGame/Simulation/SimulationData/SimulationData";
import Classess from "./GameStaticsGraph.module.css";
import UnfoldIcon from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Play-Pause/unfold.svg";
import { MdOutlineCircle } from "react-icons/md";
import GraphElement from "./Graph/GraphElement";
import SmallBtn from "../../../../shared/Btn/SmallBtn";
import OverviewImg from "../../../../../public/assets/new-images/slider/overview.png";
import { FiSkipBack, FiSkipForward, FiShare } from "react-icons/fi";
import { AiOutlinePause } from "react-icons/ai";

// green icon
import greenBaron from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/icon-baron-r.png";
import greenTower from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/icon-tower-r.png";
import greenVector from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/Vector.png";
import greenVector2 from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/Vector-1.png";
import greenInhibitor from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/round.png";
// red icon
import redTower from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/icon-tower-r.png";
import redSquare from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/square.png";
import redSoul from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/Soul.png";
import redVector from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/Vector.png";
import redInhibitor from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/round-r.png";
const GameStaticsGraph = (props) => {
    const frames = props?.frames;
    const [framePointer, setFramePointer] = useState(5);
    const [step, setStep] = useState(0);
    const ref = useRef(null);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [winningTeamId, setWinningTeamId] = useState("");
    const [losingTeamId, setLosingTeamId] = useState("");

    useEffect(() => {
        console.log(props?.frames);
        if (props.frames) {
            const player1 = props.playersWithId?.find(
                (player) =>
                    player?.summonerName ===
                    props.simulatorPlayerBlue.summonerName
            );
            const player2 = props.playersWithId?.find(
                (player) =>
                    player?.summonerName ===
                    props.simulatorPlayerRed.summonerName
            );
            setSelectedPlayers([player1, player2]);
        }
    }, [props]);

    function getDuration(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
        let seconds = (sec - hours * 3600 - minutes * 60).toFixed(0); //  get seconds
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

    function convertHMS(value) {
        if (value) {
            const sec = value / 1000; // convert value to number if it's string
            let hours = Math.floor(sec / 3600); // get hours
            let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
            let seconds = Math.floor(sec - hours * 3600 - minutes * 60).toFixed(
                0
            ); //  get seconds
            // add 0 if value < 10; Example: 2 => 02
            if (minutes < 10) {
                minutes = minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return minutes + ":" + seconds;
        }

        return "0:00";
    }

    const getMinutes = (value) => {
        const sec = value / 1000; // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes

        return minutes;
    };

    useEffect(() => {
        if (frames) {
            const lastFrame = frames[frames.length - 1];
            if (lastFrame.teamId === 200) {
                setLosingTeamId("blueTeam");
                setWinningTeamId("redTeam");
            } else {
                setLosingTeamId("redTeam");
                setWinningTeamId("blueTeam");
            }
        }
    }, [frames]);

    let goldFrames = [];

    const [btns, setBtns] = useState([
        {
            txt: "power",
            active: false,
            dot: false,
        },
        {
            txt: "gold diff",
            active: true,
            dot: true,
        },
        {
            txt: "level diff",
            active: false,
            dot: false,
        },
    ]);
    if (frames) {
        for (let i = 0; i < frames.length - 2; i++) {
            goldFrames[i] = {
                goldDifference:
                    frames[i]?.redTeam?.gold - frames[i]?.blueTeam?.gold,
                levelDifference:
                    frames[i]?.redTeam?.level - frames[i]?.blueTeam?.level,
                Time: i + 1,
            };
        }
        // frames.map((frame, i) => {
        // 	if (i === frames.length - 2) {
        // 		return;
        // 	}
        // 	if (i + 1 == false) {
        // 		return;
        // 	}
        // 	goldFrames[i] = {
        // 		goldDifference: frames[i]?.redTeam?.gold - frames[i]?.blueTeam?.gold,
        // 		levelDifference: frames[i]?.redTeam?.level - frames[i]?.blueTeam?.level,
        // 		Time: i + 1,
        // 	};
        // });
    }

    // console.log(goldFrames);
    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    useEffect(() => {
        props.frameChange(5);
    }, []);

    useEffect(() => {
        const calcStep = (ref.current?.offsetWidth - 40) / ref.current?.max;
        setStep(calcStep);
    }, [frames, framePointer]);

    const [expand, setExpand] = useState(false);

    const expandHandler = () => {
        setExpand(!expand);
    };

    const blueIconsHandler = (arr, type) => {
        return arr?.map((killedItem, index) => {
            return (
                <div
                    key={index}
                    style={{
                        width: "14px",
                        height: `14px`,
                        position: "absolute",
                        left: `${
                            (getMinutes(killedItem?.timeStamp) /
                                (frames?.length - 2)) *
                            100
                        }%`,
                        top: `3px`,
                    }}
                >
                    <Image
                        src={blueIconsFinder(type)}
                        alt="score icons"
                        layout="fill"
                    />
                </div>
            );
        });
    };

    const blueIconsFinder = (killedItemType) => {
        switch (killedItemType) {
            case "Dragon":
                return greenVector;
            case "Baron":
                return greenBaron;
            case "Inhibitor":
                return greenInhibitor;
            case "Tower":
                return greenTower;
            case "riftHerald":
                return greenVector;
        }
    };

    const redIconsFinder = (killedItemType) => {
        switch (killedItemType) {
            case "Dragon":
                return redVector;
            case "Baron":
                return redBaron;
            case "Inhibitor":
                return redInhibitor;
            case "Tower":
                return redTower;
            case "riftHerald":
                return redVector;
        }
    };

    const redIconsHandler = (arr, type) => {
        return arr?.map((killedItem, index) => {
            return (
                <div
                    key={index}
                    style={{
                        width: "14px",
                        height: `14px`,
                        position: "absolute",
                        left: `${
                            (getMinutes(killedItem?.timeStamp) /
                                (frames?.length - 2)) *
                            100
                        }%`,
                        top: `3px`,
                    }}
                >
                    <Image
                        src={redIconsFinder(type)}
                        alt="score icons"
                        layout="fill"
                    />
                </div>
            );
        });
    };

    const [sliderBtns, setSliderBtns] = useState({
        showScoreBoard: {
            active: true,
        },
        simulateMatch: {
            active: true,
        },
        showGraph: {
            active: false,
        },
    });

    const [playPauseNextBtns, setPlayPauseNextBtns] = useState([
        {
            icon: <FiSkipBack className=" text-white" size={16} />,
        },
        {
            icon: <AiOutlinePause className=" text-blue" size={16} />,
        },
        {
            icon: <FiSkipForward className=" text-white " size={16} />,
        },
        {
            icon: <FiShare className=" text-red " size={16} />,
        },
    ]);

    const [timeline, setTimeline] = useState([
        0, 3, 6, 9, 12, 15, 18, 21, 24, 27,
    ]);

    return (
        <div className=" relative z-40 max-w-[1353px] mx-auto mt-[18px] ">
            {/* btn list  */}
            <div className=" flex items-center justify-center gap-x-5 ">
                <SmallBtn active={sliderBtns.showScoreBoard.active}>
                    Show Scoreboard
                </SmallBtn>
                <SmallBtn
                    className="bg-red hover:bg-red cursor-pointer
                 text-white hover:text-white flex items-center 
                 gap-x-2 py-0 h-[42px] hover:opacity-70
                  "
                    click={() => undefined}
                >
                    <div className=" relative w-[25px] h-[25px] rounded-full bg-cardBg ">
                        {/* <Image /> */}
                    </div>
                    <div className=" relative w-[25px] h-[25px] rounded-full bg-cardBg ">
                        {/* <Image /> */}
                    </div>
                    <p
                        className=" font-mazin font-[500] text-[12px] 
                    leading-[15px] text-white "
                    >
                        Simulate Matchup
                    </p>
                </SmallBtn>
                <SmallBtn active={sliderBtns.showGraph.active}>
                    Show Graphs
                </SmallBtn>
            </div>
            {/* slider component  */}
            <div className=" flex items-center justify-between ">
                {/* lss overview  */}
                <div
                    className=" bg-cardBg rounded-[3px] p-[6px] 
                font-inter font-[700] w-[173px] h-[162px]
                flex flex-col justify-between "
                >
                    <h3 className=" pl-[5px] text-[16px] leading-[20px] text-white">
                        LSS Overview
                    </h3>
                    <div className=" pl-[5px]  text-[10px] leading-[12px] text-btnGrayTxt flex flex-col ">
                        <span>Check the game time synched</span>
                        <span>scoreboard</span>
                    </div>
                    <div className=" rounded-[3px] bg-btnBg h-[92px] "></div>
                </div>
                {/* slider graph  */}
                <div className=" w-[947px] ">
                    {/* play pause btn  */}
                    <div className=" bg-cardBg p-[6px] rounded-[3px] w-[96px] ">
                        <div className=" bg-btnBg rounded-[3px] flex items-center justify-between px[5px] ">
                            {playPauseNextBtns.map((btn, index) => {
                                return (
                                    <button
                                        key={index}
                                        className=" w-[16px] h-[16px] border-none "
                                    >
                                        {btn.icon}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* slider timeline */}
                    <div className=" card h-[57.6px] mt-[1px] ">
                        <div
                            className={`h-full w-full card-inner relative grid `}
                            style={{
                                gridTemplateColumns: ` 0.5fr repeat(${
                                    timeline[timeline.length - 1] / 3
                                }, 1fr) 0.5fr`,
                            }}
                        >
                            {timeline.map((cell, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=" h-full  relative
                                             "
                                    >
                                        <div
                                            key={index}
                                            className=" flex flex-col items-center w-[35px] h-[25px] absolute -right-[17.5px] "
                                        >
                                            <div className=" w-[1px] h-[3px] bg-gray_100 "></div>
                                            <p className=" inter-bold-10 font-normal text-gray_100 ">
                                                {cell.toString().length === 2
                                                    ? cell
                                                    : "0" + cell}
                                                :00
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                            {/* {timeline.map((number, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=" flex flex-col items-center "
                                    >
                                        <div className=" w-[1px] h-[3px] bg-gray_100 "></div>
                                        <p className=" inter-bold-10 font-normal text-gray_100 ">
                                            {number.toString().length === 2
                                                ? number
                                                : "0" + number}
                                            :00
                                        </p>
                                    </div>
                                );
                            })} */}
                        </div>
                    </div>
                    {/* timeline / match result  */}
                    <div className=" card h-[70.6px] mt-[2px] ">
                        <div className=" card-inner h-full relative ">
                            {/* background mask div  */}
                            <div
                                className={`absolute top-0 left-0 h-full w-full grid gap-x-[1px]  `}
                                style={{
                                    gridTemplateColumns: ` 0.5fr repeat(${
                                        timeline[timeline.length - 1] / 3
                                    }, 1fr) 0.5fr`,
                                }}
                            >
                                {timeline.map((cell, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className=" h-full even:bg-[#232124] bg-[#242326] text-white text-center border-r border-[#1d1b1e]  "
                                        ></div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* show graph  */}
                <div className=" w-[173px] h-[162px] rounded-[3px] bg-cardBg p-[6px] ">
                    <div className=" relative w-full h-full bg-btnBg rounded-[3px] ">
                        <Image
                            src={OverviewImg}
                            alt="overview image"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
            {/* slider  */}
            <div className=" mt-[14px] flex items-center ml-[150px] ">
                <div
                    className={`w-[1000px] relative ${
                        !expand ? "h-[50px]" : "h-[500px] "
                    } [transition:height_0.4s]`}
                >
                    <div className=" relative">
                        <div className="w-[1000px] relative ">
                            <div
                                className={` w-full ${
                                    expand ? " opacity-[0.2]" : " opacity-[1]"
                                }`}
                            >
                                <svg
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1000 50"
                                >
                                    <rect
                                        x=".5"
                                        y=".5"
                                        width="999"
                                        height="49"
                                        rx="4.5"
                                        fill="url(#a)"
                                        stroke="url(#b)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="a"
                                            x1="0"
                                            y1="0"
                                            x2="1000"
                                            y2="50"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                stopColor="#141726"
                                                stopOpacity=".17"
                                            />
                                            <stop
                                                offset="1"
                                                stopColor="#D9D9D9"
                                                stopOpacity=".12"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="b"
                                            x1="0"
                                            y1="0"
                                            x2="1000"
                                            y2="50"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#5D7CF6" />
                                            <stop
                                                offset=".359"
                                                stopColor="#fff"
                                                stopOpacity=".08"
                                            />
                                            <stop
                                                offset=".696"
                                                stopColor="#fff"
                                                stopOpacity=".04"
                                            />
                                            <stop
                                                offset="1"
                                                stopColor="#D55460"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div
                                className={`${Classess.sliderComp} px-[15px] flex items-center gap-x-[17px] absolute left-0 top-0 `}
                            >
                                <div className=" flex items-center gap-x-[9px] ">
                                    <div className=" w-[16px] h-[16px] ">
                                        <svg
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM6.379 5.227A.25.25 0 0 0 6 5.442v5.117a.25.25 0 0 0 .379.214l4.264-2.559a.25.25 0 0 0 0-.428L6.379 5.227Z"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </div>
                                    {frames && (
                                        <h4 className=" inter-bold-10 text-white ">
                                            {convertHMS(
                                                frames[props?.selectedFrame]
                                                    ?.timestamp
                                            )}
                                            /
                                            {getDuration(props.match?.duration)}
                                        </h4>
                                    )}
                                </div>

                                <div className=" w-full flex flex-col h-full ">
                                    <div className=" w-full h-[25px] relative ">
                                        {winningTeamId &&
                                            blueIconsHandler(
                                                frames[frames?.length - 2][
                                                    winningTeamId
                                                ]?.Dragon?.KillEvents,
                                                "Dragon"
                                            )}
                                        {winningTeamId &&
                                            blueIconsHandler(
                                                frames[frames?.length - 2][
                                                    winningTeamId
                                                ]?.Baron?.KillEvents,
                                                "Baron"
                                            )}
                                        {winningTeamId &&
                                            blueIconsHandler(
                                                frames[frames?.length - 2][
                                                    winningTeamId
                                                ]?.Inhibitor?.KillEvents,
                                                "Inhibitor"
                                            )}
                                        {winningTeamId &&
                                            blueIconsHandler(
                                                frames[frames?.length - 2][
                                                    winningTeamId
                                                ]?.Tower?.KillEvents,
                                                "Tower"
                                            )}
                                        {winningTeamId &&
                                            blueIconsHandler(
                                                frames[frames?.length - 2][
                                                    winningTeamId
                                                ]?.riftHerald?.KillEvents,
                                                "riftHerald"
                                            )}
                                    </div>

                                    <div
                                        className={`${Classess.sliderSlide} w-full relative h-[1px] `}
                                    >
                                        <div
                                            className={`${Classess.parent} grid grid-cols-1 grid-rows-1`}
                                            style={{ zIndex: 50 }}
                                        >
                                            <input
                                                className={`text-full-dark w-[100%] ${Classess.sliderSlide} relative h-[1px]`}
                                                type="range"
                                                id="range"
                                                min="0"
                                                max={(
                                                    frames?.length - 2
                                                ).toString()}
                                                value={framePointer}
                                                onChange={(e) => {
                                                    setFramePointer(
                                                        e.target.value
                                                    );
                                                    props.frameChange(
                                                        e.target.value
                                                    );
                                                }}
                                                ref={ref}
                                            />
                                            {frames && (
                                                <label
                                                    className={`${Classess.bubble} text-white text-center font-inter w-[40px] h-[30px]`}
                                                    htmlFor="range"
                                                    style={{
                                                        transform: `translate(${
                                                            framePointer * step
                                                        }px, -25%)`,
                                                        fontSize: `0.7rem`,
                                                    }}
                                                >
                                                    {convertHMS(
                                                        frames[
                                                            props?.selectedFrame
                                                        ]?.timestamp
                                                    )}
                                                </label>
                                            )}
                                        </div>
                                        <div className=" w-full absolute left-0 top-0 ">
                                            <svg
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 865 1"
                                            >
                                                <path
                                                    stroke="url(#a)"
                                                    d="M0 .5h865"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="a"
                                                        x1="0"
                                                        y1="1.999"
                                                        x2="865"
                                                        y2="1.132"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#5D7CF6" />
                                                        <stop
                                                            offset="1"
                                                            stopColor="#D55460"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div
                                            className=" w-[40px] h-[30px] rounded-[1px] 
																border border-[rgba(0,0,0,0.04)] relative -top-[15px] left-[10%]   "
                                        >
                                            <div
                                                className=" bg-[#5d6182] w-[40px] h-[30px] rounded-[1px] 
																border border-[rgba(0,0,0,0.04)] absolute flex items-center justify-center z-[20]  "
                                            >
                                                <h1 className=" font-inter font-[700] text-[10px] leading-[14px] text-white">
                                                    3:00
                                                </h1>
                                            </div>
                                            <div className=" w-[2px] h-[70px] bg-[#5D6182] absolute left-[18px] -top-[21px]"></div>
                                        </div>
                                    </div>
                                    {/* <div>
                                <Slider />
                            </div> */}
                                    {/* bottom icon bar */}
                                    {/* <div className=" w-full h-[25px] relative ">
                                        {losingTeamId &&
                                            redIconsHandler(
                                                frames[frames?.length - 2][
                                                    losingTeamId
                                                ]?.Dragon?.KillEvents,
                                                "Dragon"
                                            )}
                                        {losingTeamId &&
                                            redIconsHandler(
                                                frames[frames?.length - 2][
                                                    losingTeamId
                                                ]?.Baron?.KillEvents,
                                                "Baron"
                                            )}
                                        {losingTeamId &&
                                            redIconsHandler(
                                                frames[frames?.length - 2][
                                                    losingTeamId
                                                ]?.Inhibitor?.KillEvents,
                                                "Inhibitor"
                                            )}
                                        {losingTeamId &&
                                            redIconsHandler(
                                                frames[frames?.length - 2][
                                                    losingTeamId
                                                ]?.Tower?.KillEvents,
                                                "Tower"
                                            )}
                                        {losingTeamId &&
                                            redIconsHandler(
                                                frames[frames?.length - 2][
                                                    losingTeamId
                                                ]?.riftHerald?.KillEvents,
                                                "riftHerald"
                                            )}
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* expand btn  */}
                        {/* <div
                            onClick={expandHandler}
                            className=" w-[32px] h-[32px] bg-[#d55460] rounded-full flex justify-center items-center absolute -right-[76px] top-2 cursor-pointer "
                        >
                            <div className=" w-[16px] h-[16px] relative">
                                <Image
                                    src={UnfoldIcon}
                                    alt="unfold icon"
                                    layout="fill"
                                />
                            </div>
                        </div> */}
                        {/* graph element  */}
                        {/* {expand && (
                            <GraphElement
                                leftTeam={props?.leftTeam}
                                rightTeam={props?.rightTeam}
                                frames={frames}
                                selectedFrame={props.selectedFrame}
                                expand={expand}
                                selectedPlayerOne={props.simulatorPlayerRed}
                                selectedPlayerTwo={props.simulatorPlayerBlue}
                            />
                        )} */}
                    </div>

                    {/* background border  */}
                    <div
                        className={`${Classess.graphBgBorder} ${
                            expand ? " opacity-1" : " opacity-0"
                        }`}
                    ></div>
                </div>
            </div>
            {/* simulate matchup btn  */}
            {/* <div className={` ${!expand ? "mt-[30px]" : "mt-[45px] "}`}>
                <button className=" w-[181px] h-[32px] flex items-center justify-center bg-[#d55460] rounded-[5px] mx-auto ">
                    <MdOutlineCircle className=" text-[18px] text-white mr-[8px]  " />
                    <h3
                        className={` text-white font-inter font-bold capitalize text-[14px] leading-[20px] `}
                    >
                        simulate matchup
                    </h3>
                </button>
            </div> */}
            {/* <div className=" flex items-center ">
					<h5 className=" sf-bold-15 text-[16px] leading-[19px] text-white mr-4 ">
						Game Statistics
					</h5>
					<p className=" sf-bold-12 text-[#ffffff81] ">
						(Drag the timer! you will be amazed...)
					</p>
				</div> */}
            {/* buttons  */}
            {/* <div className=" flex items-center gap-x-5 mt-3 ">
					{btns.map((btn, index) => {
						return (
							<button
								key={index}
								className={`sf-bold-14 px-4 py-[6px] rounded-[8px] flex items-center capitalize ${
									btn.active
										? " bg-accent-color text-white "
										: "bg-[#241e2c] text-[#ffffffc4] "
								} `}
							>
								{btn.dot ? (
									<GoPrimitiveDot className=" mr-2 w-[10px] " />
								) : null}

								{btn.txt}
							</button>
						);
					})}
				</div> */}
            {/* graph cards  */}
            <div className=" mt-5 ">
                <div
                    className={`${Classess.parent} grid grid-cols-1 grid-rows-1`}
                >
                    {/* <input
                            className={`text-full-dark w-[100%] ${Classess.sliderSlide} relative h-[1px]`}
                            type="range"
                            id="range"
                            min="0"
                            max={(frames?.length - 2).toString()}
                            value={framePointer}
                            onChange={(e) => {
                                setFramePointer(e.target.value);
                                props.frameChange(e.target.value);
                            }}
                            ref={ref}
                        />
                        {frames && (
                            <label
                                className={`${Classess.bubble} text-white text-center font-inter w-[40px] h-[30px]`}
                                htmlFor="range"
                                style={{
                                    transform: `translate(${
                                        framePointer * step
                                    }px, -25%)`,
                                    fontSize: `0.7rem`,
                                }}
                            >
                                {convertHMS(
                                    frames[props?.selectedFrame]?.timestamp
                                )}
                            </label>
                        )} */}
                </div>
                {/* left graph  */}
                {/* <div className=" relative w-[760px] h-[300px] border border-accent-color rounded-[10px] text-accent-color flex items-center justify-center ">
						<h1 className=" sf-bold-40 capitalize ">coming soon</h1>
					</div>
                    <br /> <br />
                    <GoldDiffChart
						goldFrames={goldFrames}
						frameChange={props.frameChange}
					/>
                    <PowerDiffChart dataFromUnity= {}/> */}
            </div>

            {/* <div className=" flex justify-between items-center px-10 ">
                    <div>{ChartComponent}</div>
                    <SimulationData
						frames={frames}
						selectedFrame={props.selectedFrame}
						simulatorPlayerRed={props.simulatorPlayerRed}
						simulatorPlayerBlue={props.simulatorPlayerBlue}
					/>
                </div> */}
        </div>
    );
};

export default GameStaticsGraph;
