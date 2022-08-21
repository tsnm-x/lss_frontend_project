import React, { useEffect, useRef, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import GoldDiffChart from "../../Profile/OverviewElement/SimulateGame/Simulation/GoldDiffChart/GoldDiffChart";
import Image from "next/image";
import GraphImg from "../../../../../public/assets/new-images/Profile/card/CardExpand/Graph/Expanded-Card.jpg";
import SimulationData from "../../Profile/OverviewElement/SimulateGame/Simulation/SimulationData/SimulationData";
import Classess from "./GameStaticsGraph.module.css";
import UnfoldIcon from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Play-Pause/unfold.svg";
import { MdOutlineCircle } from "react-icons/md";
import Graph from "./Graph/Graph";
import GraphElement from "./Graph/GraphElement";

// green icon
import greenBaron from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/icon-baron-r.png";
import greenTower from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/icon-tower-r.png";
import greenVector from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/Vector.png";
import greenVector2 from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/green-icon/Vector-1.png";

// red icon
import redTower from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/icon-tower-r.png";
import redSquare from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/square.png";
import redSoul from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/Soul.png";
import redVector from "../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Slider/red-icon/Vector.png";

const GameStaticsGraph = (props) => {
    const frames = props?.frames;
    const [framePointer, setFramePointer] = useState(5);
    const [step, setStep] = useState(0);
    const ref = useRef(null);
    const [selectedPlayers, setSelectedPlayers] = useState([])


    useEffect(()=>{
        console.log(props.playersWithId)
        if(props.frames){
            const player1 = props.playersWithId?.find((player) => player?.summonerName === props.simulatorPlayerBlue.summonerName);
            const player2 = props.playersWithId?.find((player) => player?.summonerName === props.simulatorPlayerRed.summonerName);
            setSelectedPlayers([player1, player2])
        }
    }, [props])

    function convertHMS(value) {
        if (value) {
            const sec = value / 1000; // convert value to number if it's string
            let hours = Math.floor(sec / 3600); // get hours
            let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
            let seconds = (sec - hours * 3600 - minutes * 60).toFixed(0); //  get seconds
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

    const teamObject = {
        blueTeam: [
            {
                img: greenVector2,
                left: 210,
                w: 14,
                h: 13,
            },
            {
                img: greenVector,
                left: 303,
                w: 13,
                h: 15,
            },
            {
                img: greenTower,
                left: 501,
                w: 12,
                h: 16,
            },
            {
                img: greenBaron,
                left: 687,
                w: 17.3,
                h: 17.3,
            },
        ],
        redTeam: [
            {
                img: redTower,
                left: 145,
                w: 12,
                h: 16,
            },
            {
                img: redVector,
                left: 420,
                w: 13,
                h: 15,
            },
            {
                img: redTower,
                left: 460,
                w: 12,
                h: 16,
            },
            {
                img: redVector,
                left: 535,
                w: 13,
                h: 15,
            },
            {
                img: redTower,
                left: 635,
                w: 12,
                h: 16,
            },
            {
                img: redVector,
                left: 655,
                w: 13,
                h: 15,
            },
            {
                img: redSquare,
                left: 725,
                w: 16.5,
                h: 16.5,
            },
            {
                img: redSoul,
                left: 785,
                w: 20,
                h: 20,
            },
        ],
    };
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
        const calcStep = (ref.current.offsetWidth - 40) / ref.current.max;
        setStep(calcStep);
    }, [frames, framePointer]);

    const [expand, setExpand] = useState(false);

    const expandHandler = () => {
        setExpand(!expand);
    };

    return (
        <section>
            <div className="container pt-6 px-[18px] bg-[#110a1b] max-w-[1340px] pb-[40vh] ">
                {/* texts  */}
                <div className=" py-2 rounded-5px bg-[#1b1424] ">
                    <h1 className=" font-mazin font-bold text-[10px] leading-[140%] text-[#AAA0A8] ml-[150px] ">
                        LSS.GG Replay /{" "}
                        <span className=" text-white">Timeline</span>
                    </h1>
                </div>
                {/* slider  */}
                <div className=" mt-[14px] flex items-center ml-[150px] ">
                    <div
                        className={`w-[1000px] relative ${
                            !expand ? "h-[50px]" : "h-[360px] "
                        } [transition:height_0.4s]`}
                    >
                        <div className="w-[1000px] relative ">
                            {/* border gradient  */}
                            <div className=" w-full left-0 top-0">
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
                            {/* slider  */}
                            <div
                                className={`${Classess.sliderComp} px-[15px] flex items-center gap-x-[17px] absolute left-0 top-0 `}
                            >
                                {/* play / pause  */}
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
                                    <h4 className=" inter-bold-10 text-white ">
                                        15:00/22:51
                                    </h4>
                                </div>
                                {/* slides  */}
                                <div className=" w-full flex flex-col h-full ">
                                    {/* top icon bar */}
                                    <div className=" w-full h-[25px] relative ">
                                        {teamObject.blueTeam.map(
                                            (score, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        style={{
                                                            width:
                                                                score.w + "px",
                                                            height: `${score.h}px`,
                                                            position:
                                                                "absolute",
                                                            left: `${score.left}px`,
                                                            top: `3px`,
                                                        }}
                                                    >
                                                        <Image
                                                            src={score.img}
                                                            alt="score icons"
                                                            layout="fill"
                                                        />
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                    {/* slide  */}
                                    <div
                                        className={`${Classess.sliderSlide} w-full relative h-[1px] `}
                                    >
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
																border border-[rgba(0,0,0,0.04)] absolute flex items-center justify-center z-[50]  "
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
                                    <div className=" w-full h-[25px] relative ">
                                        {teamObject.redTeam.map(
                                            (score, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        style={{
                                                            width:
                                                                score.w + "px",
                                                            height: `${score.h}px`,
                                                            position:
                                                                "absolute",
                                                            left: `${score.left}px`,
                                                            top: `2px`,
                                                        }}
                                                    >
                                                        <Image
                                                            src={score.img}
                                                            alt="score icons"
                                                            layout="fill"
                                                        />
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* expand btn  */}
                        <div
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
                        </div>
                        {/* graph element  */}
                        <GraphElement
                            frames={frames}
                            selectedPlayers={selectedPlayers}
                            expand={expand}
                        />
                    </div>
                </div>
                {/* simulate matchup btn  */}
                <div className={` ${!expand ? "mt-[30px]" : "mt-[45px] "}`}>
                    <button className=" w-[181px] h-[32px] flex items-center justify-center bg-[#d55460] rounded-[5px] mx-auto ">
                        <MdOutlineCircle className=" text-[18px] text-white mr-[8px]  " />
                        <h3
                            className={` text-white font-inter font-bold capitalize text-[14px] leading-[20px] `}
                        >
                            simulate matchup
                        </h3>
                    </button>
                </div>
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
                        <input
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
                        )}
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
        </section>
    );
};

export default GameStaticsGraph;
