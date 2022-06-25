import React from "react";
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
    const batchList = [Batch1, Batch2, Batch3, Batch4, Batch5, Batch6];
    return (
        <div
            className={`flex justify-between w-full items-center relative ${
                props.reverse ? " pr-6 pl-4 " : "pr-4 pl-6 "
            } `}
        >
            <div>
                <h6 className=" sf-bold-12 text-light-text font-bold ">
                    3/7/5
                </h6>
                <p className=" sf-bold-6 text-light-text font-bold ">
                    kda: 1.14:1
                </p>
            </div>
            {/* batches  */}
            <div className=" flex ">
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
            <div className=" flex items-center  ">
                <h6 className=" mr-[10px] sf-bold-15 text-[14px] leading-4 text-light-text ">
                    G4
                </h6>
                <div className=" relative w-10 h-10 ">
                    <Image src={SeasonBatch} alt="season batch" layout="fill" />
                </div>
            </div>
            {/* name  */}
            <h5 className=" font-sf-pro-text text-[13px] leading-[15px] text-light-text font-bold ">
                KidzNot
            </h5>
            {/* profile image  */}
            <div className=" flex ">
                <div className=" mr-[9px]">
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
                <div className=" relative w-[40px] h-[40px] ">
                    <Image src={Jayce} alt="profile image" layout="fill" />
                </div>
            </div>
            {/* indicator  */}
            <div
                className={`w-[9px] h-full rounded-[3px] bg-card-&-content-box absolute top-0 ${props.reverse ? 'left-0': 'right-0'}`}
            ></div>
        </div>
    );
};

export default PlayerRow;
