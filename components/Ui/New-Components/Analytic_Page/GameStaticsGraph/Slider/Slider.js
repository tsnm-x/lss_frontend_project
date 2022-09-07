import React, { useState, useEffect } from "react";
import { FiSkipBack, FiSkipForward, FiShare } from "react-icons/fi";
import { AiOutlinePause } from "react-icons/ai";

const Slider = (props) => {
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
        for (let a = 0; a <= time; a = a + 3) {
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
      console.log(timeline, 'your timeline ');
    }, [timeline])

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
                </div>
            </div>
        </div>
    );
};

export default Slider;
