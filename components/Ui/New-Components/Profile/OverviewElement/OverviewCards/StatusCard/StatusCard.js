import React from "react";
import Image from "next/image";
import CardImage from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";
import SummonerFlash from "../../../../../../../public/assets/new-images/Profile/card/SummonerFlash.png";
import SummonerHeal from "../../../../../../../public/assets/new-images/Profile/card/SummonerHeal.png";
import BatchImg1 from "../../../../../../../public/assets/new-images/Profile/card/batch1.png";
import BatchImg2 from "../../../../../../../public/assets/new-images/Profile/card/batch2.png";

const LeftSide = (props) => {
    return (
        <div className={`font-sf-pro-text font-bold mr-[30px] `}>
            <h4
                className={` capitalize ${
                    props.won ? "text-accent-color-2" : "text-accent-color"
                }`}
            >
                <span
                    className={` mr-1 ${
                        props.expand
                            ? "text-[23px] leading-7 "
                            : " text-[17px] leading-5"
                    }`}
                >
                    {props.won ? "Victory" : "Defeat"}
                </span>{" "}
                <span
                    className={`text-light-text ${
                        props.expand
                            ? " text-base leading-[19px] "
                            : "text-[12px] leading-[14px] "
                    }`}
                >
                    24:14
                </span>
            </h4>
            <h6
                className={`${
                    props.expand
                        ? "text-[15px] leading-[18px] mt-2"
                        : "text-[12px] leading-[14px] mt-1"
                } text-grayed-text`}
            >
                Ranked solo
            </h6>
            <h2
                className={` text-light-text ${
                    props.expand
                        ? "text-[33px] leading-[39px] mt-[18px] "
                        : "text-[25px] leading-[30px] mt-[10px]"
                } `}
            >
                6/8/10
            </h2>
            <h6
                className={` text-grayed-text ${
                    props.expand
                        ? " mt-5 text-[17px] leading-[20px] "
                        : "text-[12px] leading-[14px] mt-[10px] "
                } `}
            >
                2 Days ago
            </h6>
        </div>
    );
};

const RightSide = (props) => {
    const [data, setData] = [
        {
            power: [SummonerFlash, SummonerHeal, ],
            batch: [BatchImg1, BatchImg2],
        },
    ];
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
                            src={CardImage}
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
                        92
                    </div>
                </div>
                {/* power and batches  */}
                <div className=" flex ">
                    {/* powers  */}
                    <div className=" mr-2 ">
                        {data.power.map((power, index) => {
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
                    </div>
                    {/* batch  */}
                    <div className=" mr-2 ">
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
                    </div>
                </div>
            </div>
            {/* bottom texts  */}
            <div className=" font-sf-pro-text font-bold text-[9.5px] leading-[11px] pl-2 mt-[17px] ">
                <p className=" text-grayed-text ">
                    <span className=" text-accent-color-2">2:1</span> KDA
                </p>
                <p className=" text-grayed-text mt-[2px] ">47.05% KP</p>
            </div>
        </div>
    );
};

const StatusCard = (props) => {
    return (
        <div
            className={`  bg-card-&-content-box
             flex items-center border-r border-background ${
                 props.expand ? " py-6 px-[30px]" : "p-5 pt-[15px]"
             }`}
        >
            {/* left side  */}
            <LeftSide {...props} />
            {/* right side  */}
            <RightSide expand={props.expand} />
        </div>
    );
};

export default StatusCard;
