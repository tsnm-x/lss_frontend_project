import React, { useState, useEffect } from "react";
import Image from "next/image";
// batch image
import Batch1 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/6692.png";
import Batch2 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/3042.png";
import Batch3 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/6695.png";
import Batch4 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/3006.png";
import Batch5 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/1042.png";
import Batch6 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/2031.png";
import SeasonBatch from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Season_2022_-_Gold.png";
import FlashBatch from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/SummonerFlash (1).png";
import TeleportBatch from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/SummonerTeleport.png";
import Jayce from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Jayce.png";

const PlayerRow = (props) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        props.index == 3 ? setActive(true) : null;
    }, []);
    const batchList = [Batch1, Batch2, Batch3, Batch4, Batch5, Batch6];
    return (
        <div
            className={`flex justify-between w-full items-center relative mb-[10px] last:mb-0 ${
                props.reverse ? " pr-6 pl-4 " : "pr-4 pl-6 "
            } ${
                active
                    ? props.reverse
                        ? " bg-accent-color-2"
                        : "bg-accent-color "
                    : ""
            }`}
        >
            <div className={`${props.reverse ? "order-5" : "order-1"}`}>
                <h6 className=" sf-bold-12 text-light-text font-bold ">
                    3/7/5
                </h6>
                <p className=" sf-bold-6 text-light-text font-bold ">
                    kda: 1.14:1
                </p>
            </div>
            {/* batches  */}
            <div className={`flex ${props.reverse ? "order-4" : "order-2"} `}>
                {batchList.map((batch, index) => {
                    return (
                        <div
                            key={index}
                            className=" w-[22px] h-[22px] relative rounded-5px mr-1 last:mr-0 "
                        >
                            <Image
                                src={batch}
                                alt="batch image"
                                layout="fill"
                                className=" rounded-5px"
                            />
                        </div>
                    );
                })}
            </div>
            {/* g batch  */}
            <div
                className={`flex items-center ${
                    props.reverse ? "order-3" : "order-3"
                }`}
            >
                <h6 className=" mr-[10px] sf-bold-15 text-[14px] leading-4 text-light-text ">
                    G4
                </h6>
                <div className=" relative w-10 h-10 ">
                    <Image src={SeasonBatch} alt="season batch" layout="fill" />
                </div>
            </div>
            {/* name  */}
            <h5
                className={`font-sf-pro-text text-[13px] leading-[15px] text-light-text font-bold ${
                    props.reverse ? "order-2" : "order-4"
                }`}
            >
                KidzNot
            </h5>
            {/* profile image  */}
            <div className={` flex ${props.reverse ? "order-1" : "order-5"}`}>
                <div
                    className={` ${
                        props.reverse
                            ? "order-2 ml-[9px] "
                            : "order-2 mr-[9px] "
                    }`}
                >
                    <div className=" relative w-[20px] h-5">
                        <Image
                            src={FlashBatch}
                            alt="flash batch"
                            layout="fill"
                        />
                    </div>
                    <div className=" relative w-[20px] h-5">
                        <Image
                            src={TeleportBatch}
                            alt="teleport batch"
                            layout="fill"
                        />
                    </div>
                </div>
                <div
                    className={`relative w-[40px] h-[40px] ${
                        props.reverse ? "order-1" : "order-2"
                    }`}
                >
                    <Image src={Jayce} alt="profile image" layout="fill" />
                </div>
            </div>
            {/* indicator  */}
            <div
                className={`w-[9px] h-full rounded-[3px]  absolute top-0 ${
                    props.reverse ? "left-0" : "right-0"
                } ${
                    active
                        ? props.reverse
                            ? " bg-accent-color-2"
                            : "bg-accent-color "
                        : "bg-card-&-content-box"
                }`}
            ></div>
        </div>
    );
};

export default PlayerRow;
