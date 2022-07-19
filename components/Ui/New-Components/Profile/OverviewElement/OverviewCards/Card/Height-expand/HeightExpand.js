import React, { useState } from "react";
import Classes from "./HeightExpand.module.css";
import Image from "next/image";
import SimulateComponets from "../SimulateComponets/SimulateComponets";
// items
import smallImg from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/3340.png";
import Items1 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/1028.png";
import Items2 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/1082.png";
import Items3 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/2055.png";
import Items4 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/3916.png";
import Items5 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/4633.png";

import ProfileImg from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/Sion.png";
import Rank1 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/rank.png";
import Rank2 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/rank2.png";
import RoundBatch1 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/round-batch.png";
import RoundBatch2 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/round-batch2.png";
import { useEffect } from "react";

const Btns = () => {
    const [btns, setBtns] = useState([
        { text: "overview", active: true },
        { text: "Runes", active: false },
    ]);
    return (
        <div className=" flex justify-center py-5 ">
            {btns.map((btn, index) => {
                return (
                    <button
                        key={index}
                        className={`font-sf-pro-text font-bold text-[12px] leading-[14px] capitalize mx-[36px] ${
                            btn.active
                                ? "text-accent-color"
                                : " text-grayed-text"
                        }`}
                    >
                        {btn.text}
                    </button>
                );
            })}
        </div>
    );
};

// header bar
const HeaderBar = (props) => {
    return (
        <div className=" grid grid-cols-[4fr_2fr_2fr_4fr_2fr_2fr] py-4 bg-[#160f20] ">
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ml-[30px] ">
                <span className=" text-accent-color text-[12px] leading-[14px] ">
                    Defeat
                </span>{" "}
                (Red Team)
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text text-center ">
                Creep Score
            </h1>
            <h1 className=" text-center font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                score
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                items
            </h1>
            <h1 className=" text-center  font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                Damage Dealt
            </h1>
            <h1 className=" ml-2  font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                gold
            </h1>
        </div>
    );
};

const DataRow = (props) => {
    const [Rank, setRank] = useState();

    function RankCompGenerator(color, text) {
        let component = (
            <h1
                className={` capitalize ${Classes.secTitle}`}
                style={{ color: color }}
            >
                {text}
            </h1>
        );
        setRank(component);
    }

    useEffect(() => {
        const rank = props.profile.rank;
        switch (rank) {
            case 1:
                RankCompGenerator("#858DA3", "silver 1");
                break;
            case 2:
                RankCompGenerator("#CFAA69", "gold 2");
                break;
            case 3:
                RankCompGenerator("#4FADDF", "diamon 3");
                break;
            case 4:
                RankCompGenerator("#4DC7BE", "platinum 4");
                break;
        }
    });

    return (
        <div className=" grid grid-cols-[4fr_2fr_2fr_4fr_2fr_2fr] py-2 bg-[#251122] mb-1 last:mb-0 ">
            <div className=" flex pl-5  ">
                {/* left profile  */}
                <div className=" flex justify-between gap-x-2 mr-[20px] ">
                    {/* round  */}
                    <div>
                        {props.profile.rankImg.round.map((img, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" relative w-[21px] h-[21px] rounded-full "
                                >
                                    <Image
                                        src={img}
                                        alt="rank image"
                                        layout="fill"
                                        className=" rounded-full "
                                    />
                                </div>
                            );
                        })}
                    </div>
                    {/* square  */}
                    <div>
                        {props.profile.rankImg.sqare.map((img, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" relative w-[21px] h-[21px] rounded-[5px] "
                                >
                                    <Image
                                        src={img}
                                        alt="rank image"
                                        layout="fill"
                                        className=" rounded-[5px] "
                                    />
                                </div>
                            );
                        })}
                    </div>
                    {/* profile img  */}
                    <div>
                        <div className=" relative w-11 h-11 rounded-[5px] ">
                            <Image
                                src={props.profile.img}
                                alt="profile img "
                                className=" rounded-[5px]"
                                layout="fill"
                            />
                            {/* profile id  */}
                            <div className=" flex justify-center absolute -bottom-[5px] z-50 w-full ">
                                <div className={Classes.profileId}>
                                    {props.profile.profileId}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side  */}
                <div className=" flex flex-col justify-center ">
                    <h1 className={`${Classes.cellTitle} capitalize `}>
                        {props.profile.name}
                    </h1>
                    {Rank}
                </div>
            </div>
            {/* cs  */}
            <div className=" flex flex-col justify-center ">
                <h1 className={` text-center ${Classes.cellTitle}`}>
                    {props.creepScore.creep} cs
                </h1>
                <h1 className={` text-center ${Classes.secTitle}`}>
                    {props.creepScore.cs} cs/min
                </h1>
            </div>
            {/* score  */}
            <div className=" flex flex-col justify-center ">
                <h1 className={Classes.cellTitle}>{props.score.score}</h1>
                <h1 className={Classes.secTitle}>KDA: {props.score.kds}</h1>
            </div>

            <div className=" flex gap-x-[3px] items-center ">
                {props.items.large.map((img, index) => {
                    return (
                        <div
                            key={index}
                            className=" relative rounded-[5px] w-[25px] h-[25px] bg-[#301d2d] "
                        >
                            {img ? (
                                <Image
                                    src={img}
                                    alt="rank img"
                                    layout="fill"
                                    className=" rounded-[5px] "
                                />
                            ) : null}
                        </div>
                    );
                })}
                {
                    <div className=" relative w-5 h-5 rounded-[5px] ">
                        <Image
                            src={props.items.small}
                            alt="small rank img"
                            layout="fill"
                            className=" rounded-[5px] "
                        />
                    </div>
                }
            </div>
            <div className=" flex flex-col justify-center items-center ">
                <h1 className={Classes.cellTitle}>{props.damage}</h1>
                <div className=" w-5/6 h-[6.5px] rounded-full bg-[#706a76] mt-[6px] ">
                    <div className=" w-4/6 h-full bg-accent-color rounded-full "></div>
                </div>
            </div>
            <div className=" ml-2 flex flex-col justify-center ">
                <h1 className={Classes.cellTitle}>{props.gold.gold}k</h1>
                <h1 className={`${Classes.secTitle}`}>
                    Unspent: {props.gold.unspent}
                </h1>
            </div>
        </div>
    );
};

const ExpandDataRows = (props) => {
    const rowData = [
        {
            profile: {
                img: ProfileImg,
                rankImg: {
                    sqare: [Rank1, Rank2],
                    round: [RoundBatch1, RoundBatch2],
                },
                name: "beanovi",
                rank: 4,
                profileId: 15,
            },
            creepScore: {
                creep: 175,
                cs: 8.1,
            },
            score: {
                score: "5/9/2",
                kda: 0.77,
            },
            items: {
                large: [Items1, Items2, Items3, Items4, undefined, Items5],
                small: smallImg,
            },
            damage: 45.259,
            gold: {
                gold: 21.8,
                unspent: 1.8,
            },
        },
        {
            profile: {
                img: ProfileImg,
                rankImg: {
                    sqare: [Rank1, Rank2],
                    round: [RoundBatch1, RoundBatch2],
                },
                name: "beanovi",
                rank: 4,
                profileId: 15,
            },
            creepScore: {
                creep: 175,
                cs: 8.1,
            },
            score: {
                score: "5/9/2",
                kda: 0.77,
            },
            items: {
                large: [Items1, Items2, Items3, Items4, undefined, Items5],
                small: smallImg,
            },
            damage: 45.259,
            gold: {
                gold: 21.8,
                unspent: 1.8,
            },
        },
        {
            profile: {
                img: ProfileImg,
                rankImg: {
                    sqare: [Rank1, Rank2],
                    round: [RoundBatch1, RoundBatch2],
                },
                name: "beanovi",
                rank: 4,
                profileId: 15,
            },
            creepScore: {
                creep: 175,
                cs: 8.1,
            },
            score: {
                score: "5/9/2",
                kda: 0.77,
            },
            items: {
                large: [Items1, Items2, Items3, Items4, undefined, Items5],
                small: smallImg,
            },
            damage: 45.259,
            gold: {
                gold: 21.8,
                unspent: 1.8,
            },
        },
        {
            profile: {
                img: ProfileImg,
                rankImg: {
                    sqare: [Rank1, Rank2],
                    round: [RoundBatch1, RoundBatch2],
                },
                name: "beanovi",
                rank: 4,
                profileId: 15,
            },
            creepScore: {
                creep: 175,
                cs: 8.1,
            },
            score: {
                score: "5/9/2",
                kda: 0.77,
            },
            items: {
                large: [Items1, Items2, Items3, Items4, undefined, Items5],
                small: smallImg,
            },
            damage: 45.259,
            gold: {
                gold: 21.8,
                unspent: 1.8,
            },
        },
        {
            profile: {
                img: ProfileImg,
                rankImg: {
                    sqare: [Rank1, Rank2],
                    round: [RoundBatch1, RoundBatch2],
                },
                name: "beanovi",
                rank: 4,
                profileId: 15,
            },
            creepScore: {
                creep: 175,
                cs: 8.1,
            },
            score: {
                score: "5/9/2",
                kda: 0.77,
            },
            items: {
                large: [Items1, Items2, Items3, Items4, undefined, Items5],
                small: smallImg,
            },
            damage: 45.259,
            gold: {
                gold: 21.8,
                unspent: 1.8,
            },
        },
    ];
    return (
        <div>
            {/* header  */}
            <HeaderBar />
            <div className=" px-2 ">
                {rowData.map((data, index) => {
                    return <DataRow key={index} {...data} />;
                })}
            </div>
        </div>
    );
};

const HeightExpand = () => {
    return (
        <div className=" mb-14 ">
            <Btns />
            <ExpandDataRows />
            <SimulateComponets />
            <ExpandDataRows />
        </div>
    );
};

export default HeightExpand;
