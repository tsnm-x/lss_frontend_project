import React, { useEffect, useState } from "react";
import RankIcon from "../../../../public/assets/rank-icon.png";
import Image from "next/image";
import ProgressGraph from "../../../../public/assets/graph/Group 419.png";
import { useRouter } from "next/router";
import { axiosInstance } from "../../../../network/axiosConfig";
import axios from "axios";

// import all rank elements then select one
import Emblem_Iron from "../../../../public/assets/ranks/Emblem_Iron.png";
import Emblem_Bronze from "../../../../public/assets/ranks/Emblem_Bronze.png";
import Emblem_Silver from "../../../../public/assets/ranks/Emblem_Silver.png";
import Emblem_Gold from "../../../../public/assets/ranks/Emblem_Gold.png";
import Emblem_Platinum from "../../../../public/assets/ranks/Emblem_Platinum.png";
import Emblem_Diamond from "../../../../public/assets/ranks/Emblem_Diamond.png";
import Emblem_Master from "../../../../public/assets/ranks/Emblem_Master.png";
import Emblem_Grandmaster from "../../../../public/assets/ranks/Emblem_Grandmaster.png";
import Emblem_Challenger from "../../../../public/assets/ranks/Emblem_Challenger.png";

const PlayerRankCard = (props) => {
    const rankList = [
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
    ];

    return (
        <div className={`w-full ${props.className}`}>
            <div className=" h-full ">
                {/* rank title  */}
                <div className="  border-b border-white-blue grid grid-cols-3 ">
                    <p className=" capitalize text-[#FFFFFF] gotham-5px-mid ">
                        s2021 rank
                    </p>
                    <p className=" capitalize text-[#FFFFFF] gotham-5px-mid ">
                        ranked
                    </p>
                    <p className=" capitalize text-[#FFFFFF] gotham-5px-mid ">
                        s22 champion
                    </p>
                </div>
                {/* rank list  */}
                <div className=" h-[calc(100%-6px)]  flex flex-col justify-between ">
                    {["", "", "", "", ""].map((item, index) => {
                        return (
                            <div
                                className=" bg-mix-white-black-200 rounded-full grid grid-cols-3 "
                                key={"item" + index}
                            >
                                {/* rank 2021 module  */}
                                <div className=" flex items-center gap-x-1 ">
                                    <div className=" relative w-[17.5px] h-[16.5px] flex items-center justify-center ">
                                        <Image
                                            src={RankIcon}
                                            alt="rank icon"
                                            layout="fill"
                                        />
                                    </div>
                                    <p className=" font-sf-pro text-[3px] leading-[4px] text-liquid-white">
                                        IGITeak
                                    </p>
                                </div>
                                {/* ranked  */}
                                <div className=" flex flex-col flex-wrap justify-center pb-[2px] ">
                                    <div className=" flex flex-col ">
                                        <p className=" font-sf-pro text-[4px] leading-[5px] capitalize text-white-blue ">
                                            58%{" "}
                                            <span className=" text-liquid-white ">
                                                winrate
                                            </span>
                                        </p>
                                        <p className=" text-[#8D919F] text-[2px] font-sf-pro ">
                                            ( 329 game played )
                                        </p>
                                    </div>
                                    <div className=" relative w-8 h-[2px]  ">
                                        <Image
                                            src={ProgressGraph}
                                            alt="progress graph"
                                            layout="fill"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PlayerRankCard;