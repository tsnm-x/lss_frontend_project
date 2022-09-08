import React, { useState, useEffect } from "react";
import { FiSkipBack, FiSkipForward, FiShare } from "react-icons/fi";
import { AiOutlinePause } from "react-icons/ai";
import Classess from "../GameStaticsGraph.module.css";
import Image from 'next/image'

// green icon
import greenBaron from "../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/icon-baron-r.png";
import greenTower from "../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/icon-tower-r.png";
import greenVector from "../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/Vector.png";
import greenVector2 from "../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/Vector-1.png";
import greenInhibitor from "../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/round.png";
// red icon
import redTower from "../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/icon-tower-r.png";
import redSquare from "../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/square.png";
import redSoul from "../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/Soul.png";
import redVector from "../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/Vector.png";
import redInhibitor from "../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/round-r.png";





const Slider = (props) => {
    const frames = props?.frames;
    const [winningTeamId, setWinningTeamId] = useState("");
    const [losingTeamId, setLosingTeamId] = useState("");

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

    const [timeline, setTimeline] = useState([]);

    const durationToArray = (time) => {
        const collector = [];
        for (let a = 0; a <= time + 3; a = a + 3) {
            collector.push(a);
        }
        return collector;
    };

    const [duration, setDuration] = useState(undefined);

    useEffect(() => {
        const timeArray = durationToArray(props.duration / 60);
        setTimeline(timeArray);
    }, [props.duration]);

    useEffect(() => {
        console.log(timeline, "your timeline ");
    }, [timeline]);

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



    return (
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
                </div>
            </div>
            {/* slider slide  */}
            <div className=" px-[6px] relative z-40  ">
                <div
                    className={`h-full w-full card-inner relative grid `}
                    style={{
                        gridTemplateColumns: ` 0.5fr ${
                            timeline.length - 1
                        }fr 0.5fr`,
                    }}
                >
                    <div></div>
                    <input
                        className={`text-full-dark w-full ${Classess.sliderSlide} relative h-[1px]`}
                        type={props.type}
                        id={props.id}
                        min="0"
                        max={timeline[timeline.length - 1]}
                        // max={props.max}
                        value={props.value}
                        onChange={props.change}
                        ref={props.ref}
                    />
                    <div></div>
                </div>
            </div>
            {/* timeline / match result  */}
            <div className=" card h-[70.6px] mt-[2px] ">
                <div className=" card-inner h-full relative ">
                    {/* line mask  */}
                    <div className=" w-full h-[5px] bg-[#4a484b] absolute z-20 top-[29px] "></div>
                    {/* background mask div  */}
                    <div
                        className={`absolute top-0 left-0 h-full w-full grid gap-x-[1px] z-30  `}
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
                        <div className=" h-full even:bg-[#232124] bg-[#242326] text-white text-center border-r border-[#1d1b1e]  "></div>
                    </div>
                    {/* top line mask  */}
                    <div className=" w-full h-[1px] bg-[#7C7B7D] opacity-10 absolute z-40 top-[28px] "></div>
                    {/* player status  */}
                    <div
                        className=" px-[7px] py-[2px] font-mazin font-bold text-[9px]
                             leading-[11px] bg-[rgba(255,66,86,0.2)] text-red
                             rounded-[1.5px] absolute right-[15px] top-[21px] z-50 capitalize "
                    >
                        defeat
                    </div>
                    {/* icons  */}
                    {console.log(props)}
                    <div className=" absolute h-full w-full left-0 top-0 z-50">
                        <div className=" w-full h-2/4 relative ">
                            {winningTeamId &&
                                blueIconsHandler(
                                    frames[frames?.length - 2][winningTeamId]
                                        ?.Dragon?.KillEvents,
                                    "Dragon"
                                )}
                            {winningTeamId &&
                                blueIconsHandler(
                                    frames[frames?.length - 2][winningTeamId]
                                        ?.Baron?.KillEvents,
                                    "Baron"
                                )}
                            {winningTeamId &&
                                blueIconsHandler(
                                    frames[frames?.length - 2][winningTeamId]
                                        ?.Inhibitor?.KillEvents,
                                    "Inhibitor"
                                )}
                            {winningTeamId &&
                                blueIconsHandler(
                                    frames[frames?.length - 2][winningTeamId]
                                        ?.Tower?.KillEvents,
                                    "Tower"
                                )}
                            {winningTeamId &&
                                blueIconsHandler(
                                    frames[frames?.length - 2][winningTeamId]
                                        ?.riftHerald?.KillEvents,
                                    "riftHerald"
                                )}
                        </div>
                        <div className=" w-full h-2/4 relative ">
                            {losingTeamId &&
                                redIconsHandler(
                                    frames[frames?.length - 2][losingTeamId]
                                        ?.Dragon?.KillEvents,
                                    "Dragon"
                                )}
                            {losingTeamId &&
                                redIconsHandler(
                                    frames[frames?.length - 2][losingTeamId]
                                        ?.Baron?.KillEvents,
                                    "Baron"
                                )}
                            {losingTeamId &&
                                redIconsHandler(
                                    frames[frames?.length - 2][losingTeamId]
                                        ?.Inhibitor?.KillEvents,
                                    "Inhibitor"
                                )}
                            {losingTeamId &&
                                redIconsHandler(
                                    frames[frames?.length - 2][losingTeamId]
                                        ?.Tower?.KillEvents,
                                    "Tower"
                                )}
                            {losingTeamId &&
                                redIconsHandler(
                                    frames[frames?.length - 2][losingTeamId]
                                        ?.riftHerald?.KillEvents,
                                    "riftHerald"
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
