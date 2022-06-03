import React from "react";
import classes from "./PlayerRankRow.module.css";
import RankIcon from "../../../../public/assets/rank-icon.png";
import Image from "next/image";
import LeafIcon from "../../../../public/assets/sm-lif-icon.png";
import ProgressGraph from "../../../../public/assets/graph/Group 419.png";
import ProfileWithBatch from "../../ProfileWithBatch/ProfileWithBatch";

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
        <div className={`w-full bg-full-dark ${props.className}`}>
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
                                    <div className=" relative w-[12px] h-[12px] flex items-center justify-center ">
                                        <Image src={RankIcon} alt="rank icon" layout="fill" />
                                    </div>
                                    <p className=" sf-1px-reg text-liquid-white">
                                        IGITeak
                                    </p>
                                    {/* <div className=" flex items-center ">
                                        <div className=" w-2 ">
                                            <Image src={LeafIcon} alt="icon" />
                                        </div>
                                        <p className=" ml-1 capitalize text-mix-white-black text-[10px]  ">
                                            main role
                                        </p>
                                    </div> */}
                                </div>
                                {/* ranked  */}
                                <div className=" flex flex-col flex-wrap justify-end pb-[2px] ">
                                    <div className=" flex flex-col ">
                                        <p className=" sf-2px-reg capitalize text-white-blue ">
                                            58%{" "}
                                            <span className=" text-liquid-white ">
                                                winrate
                                            </span>
                                        </p>
                                        {/* <p className=" ml-4 capitalize text-mix-white-black text-[10px] ">
                                            (329 games played)
                                        </p> */}
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
