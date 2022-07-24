import React from "react";
import ProfileImg from "../../../../../../../public/assets/new-images/Profile/Jhin.png";
import batch1 from "../../../../../../../public/assets/new-images/Profile/card/batch1.png";
import batch2 from "../../../../../../../public/assets/new-images/Profile/card/batch2.png";
import power1 from "../../../../../../../public/assets/new-images/Profile/card/SummonerFlash.png";
import power2 from "../../../../../../../public/assets/new-images/Profile/card/SummonerHeal.png";
import Image from "next/image";
import Classess from "./DataRowGrid.module.css";

const HeaderRow = (props) => {
    return (
        <div
            className={` grid ${
                props.reverce
                    ? "grid-cols-[1.2fr_2fr_1fr_1fr_1.2fr]"
                    : "grid-cols-[1.2fr_1fr_1fr_2fr_1.2fr]"
            }`}
        >
            <div
                className={
                    props.reverce
                        ? "order-1 text-center"
                        : " order-5 text-right "
                }
            >
                <h4 className=" font-sf-pro-text font-bold text-[14px] leading-[17px] text-grayed-text capitalize ">
                    Damage Dealt
                </h4>
            </div>
            <div className={props.reverce ? "order-2" : " order-4 "}></div>
            <div className={props.reverce ? "order-3" : "order-3"}>
                <h4 className=" font-sf-pro-text font-bold text-[14px] leading-[17px] text-grayed-text capitalize ">
                    Score
                </h4>
            </div>
            <div className={props.reverce ? "order-4" : "order-2"}>
                <h4 className=" font-sf-pro-text font-bold text-[14px] leading-[17px] text-grayed-text uppercase ">
                    cs
                </h4>
            </div>
            <div className={props.reverce ? "order-5" : "order-1 text-right "}>
                <h4 className=" font-sf-pro-text font-bold text-[14px] leading-[17px] text-grayed-text capitalize ">
                    {props.reverce ? "blue team" : "red team "}
                </h4>
            </div>
        </div>
    );
};

const DataRow = (props) => {
    const data = [
        {
            damage: 45.259,
            batches: ["", "", "", "", "", ""],
            score: {
                main: "5/9/1",
                kda: 0.77,
            },
            cs: {
                cs: 189,
                csMin: 7.5,
            },
            team: {
                profile: {
                    img: ProfileImg,
                    id: 25,
                },
                power: [power1, power2],
                batch: [batch1, batch2],
            },
        },
        {
            damage: 45.259,
            batches: ["", "", "", "", "", ""],

            score: {
                main: "5/9/1",
                kda: 0.77,
            },
            cs: {
                cs: 189,
                csMin: 7.5,
            },
            team: {
                profile: {
                    img: ProfileImg,
                    id: 25,
                },
                power: [power1, power2],
                batch: [batch1, batch2],
            },
        },
        {
            damage: 45.259,
            batches: ["", "", "", "", "", ""],

            score: {
                main: "5/9/1",
                kda: 0.77,
            },
            cs: {
                cs: 189,
                csMin: 7.5,
            },
            team: {
                profile: {
                    img: ProfileImg,
                    id: 25,
                },
                power: [power1, power2],
                batch: [batch1, batch2],
            },
        },
        {
            damage: 45.259,
            batches: ["", "", "", "", "", ""],

            score: {
                main: "5/9/1",
                kda: 0.77,
            },
            cs: {
                cs: 189,
                csMin: 7.5,
            },
            team: {
                profile: {
                    img: ProfileImg,
                    id: 25,
                },
                power: [power1, power2],
                batch: [batch1, batch2],
            },
        },
        {
            damage: 45.259,
            batches: ["", "", "", "", "", ""],

            score: {
                main: "5/9/1",
                kda: 0.77,
            },
            cs: {
                cs: 189,
                csMin: 7.5,
            },
            team: {
                profile: {
                    img: ProfileImg,
                    id: 25,
                },
                power: [power1, power2],
                batch: [batch1, batch2],
            },
        },
    ];
    return (
        <div className=" flex flex-col gap-y-3">
            {data.map((data, index) => {
                return (
                    <div
                        key={index}
                        className={`  grid items-center  ${
                            props.reverce
                                ? "grid-cols-[1.2fr_1fr_1fr_2fr_1.2fr] bg-[#191531]  "
                                : "grid-cols-[1.2fr_2fr_1fr_1fr_1.2fr] bg-[#251122] "
                        }`}
                    >
                        <div>
                            <h1 className=" sf-bold-14 text-white text-center  ">
                                {data.damage}
                            </h1>
                            <div className=" w-[80px] h-[6px] rounded-full bg-accent-color mx-auto"></div>
                        </div>
                        {/* batches  */}
                        <div className=" flex gap-x-[3px] ">
                            {data.batches.map((batch, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=" bg-[#372534] w-[25px] h-[25px] rounded-[5px] relative  "
                                    >
                                        {batch.length ? (
                                            <Image
                                                src={""}
                                                alt="batch image"
                                                layout="fill"
                                            />
                                        ) : null}
                                    </div>
                                );
                            })}
                        </div>
                        {/* kda  */}
                        <div>
                            <h1 className=" sf-bold-14 text-white   ">
                                {data.score.main}
                            </h1>
                            <h1 className=" sf-bold-10 text-grayed-text   ">
                                KDA {data.score.kda}
                            </h1>
                        </div>
                        {/* cs  */}
                        <div>
                            <h1 className=" sf-bold-14 text-white   ">
                                {data.cs.cs} cs
                            </h1>
                            <h1 className=" sf-bold-10 text-grayed-text   ">
                                {data.cs.csMin} cs/min
                            </h1>
                        </div>
                        {/* profile with batch  */}
                        <div className=" flex gap-x-2 "> 
                            {/* profile  */}
                            <div className=" relative w-[45px] h-[45px] rounded-[5px]  ">
                                <Image
                                    src={data.team.profile.img}
                                    alt=" profile image"
                                    layout="fill"
                                    className="rounded-[5px] "
                                />
                                {/* batch  */}
                                <div className=" flex justify-center absolute -bottom-1 left-0 w-full ">
                                    <div className=" font-sf-pro-text text-[9px] leading-[11px] font-[500]  w-[15px] h-[15px] rounded-full border border-grayed-text flex justify-center items-center text-white bg-card-border ">
                                        {data.team.profile.id}
                                    </div>
                                </div>
                            </div>
                            {/* power  */}
                            <div>
                                {data.team.power.map((pwr, index) => {
                                    return (
                                        <div
                                            className=" relative w-[22px] h-[22px] rounded-[5px] "
                                            key={index}
                                        >
                                            <Image
                                                src={pwr}
                                                alt=" power img"
                                                layout="fill"
                                                className=" rounded-[5px] "
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            {/* batch  */}
                            <div>
                                {data.team.batch.map((batch, index) => {
                                    return (
                                        <div
                                            className=" relative w-[22px] h-[22px] rounded-[5px] "
                                            key={index}
                                        >
                                            <Image
                                                src={batch}
                                                alt=" batch img"
                                                layout="fill"
                                                className=" rounded-[5px] "
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const DataRowGrid = () => {
    return (
        <section>
            <div className="container">
                {/* header row  */}
                <div className=" grid grid-cols-2 bg-[#1b1425] py-2 rounded-[5px] gap-x-5 mb-[6px] ">
                    <HeaderRow reverce={true} />
                    <HeaderRow />
                </div>
                {/* data  */}
                <div className=" grid grid-cols-2 gap-x-5 ">
                    {/* data row  */}
                    <DataRow />
                    <DataRow reverce={true} />
                </div>
            </div>
        </section>
    );
};

export default DataRowGrid;
