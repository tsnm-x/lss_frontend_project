import React, { useState } from "react";
import Classes from "./HeightExpand.module.css";
import Image from "next/image";
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
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                <span>Defeat</span>(Red Team)
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                Creep Score
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                score
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                items
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                damage{" "}
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
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
            className={Classes.secTitle}
            style={{color: color}}
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
        <div className=" grid grid-cols-[4fr_2fr_2fr_4fr_2fr_2fr] py-4 bg-[#251122] ">
            <div className=" flex ">
                {/* left profile  */}
                <div className=" flex justify-between gap-x-2 mr-[31px] ">
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
                    <h1 className={Classes.cellTitle}>{props.profile.name}</h1>
                    {Rank}
                </div>
            </div>
        <div>
          
            </div>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                score
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                items
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                damage{" "}
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                gold
            </h1>
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
                score: 5 / 9 / 2,
                kda: 0.77,
            },
            items: {
                large: [Items1, Items2, Items3, Items4, Items5],
                small: smallImg,
            },
            damage: 45.259,
            gold: {
                gold: 21.8,
                unspent: 1.8,
            },
        },
    ];
    const profile = rowData[0].profile.rankImg.round;
    return (
        <div>
            {/* header  */}
            <HeaderBar />
            {rowData.map((data, index) => {
                return <DataRow key={index} {...data} />;
            })}
        </div>
    );
};

const HeightExpand = () => {
    return (
        <div>
            <Btns />
            <ExpandDataRows />
        </div>
    );
};

export default HeightExpand;
