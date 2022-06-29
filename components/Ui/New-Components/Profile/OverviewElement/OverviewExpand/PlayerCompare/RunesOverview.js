import React, { useState, useEffect } from "react";
import Image from "next/image";
import Classes from "./RunesOverview.module.css";
import PrecisionBg from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/CenterPrecisionAndEnspiration/Precision_splash_art.png";
import InspirationBg from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/CenterPrecisionAndEnspiration/Inspiration_splash_art.png";
import RuneStateBg from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/CenterPrecisionAndEnspiration/Hecarim_0.png";
// precision icons ------------------------------------------------
// parent icon
import PrecisionParent from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/7201_Precision.png";
// options
import Conquerer from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/main/Conqueror.png";
import FleetFloot from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/main/FleetFootwork.png";
import LethalTempo from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/main/LethalTempoTemp.png";
import PressTheAttack from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/main/PressTheAttack.png";
// icons
import coupDeGrace from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/CoupDeGrace.png";
import cutDown from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/CutDown.png";
import LegendAlacrity from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/LegendAlacrity.png";
import LegendBloodline from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/LegendBloodline.png";
import LegendTenacity from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/LegendTenacity.png";
import Overheal from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/Overheal.png";
import PresenceOfMind from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/PresenceOfMind.png";
import Triumph from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Precision/Triumph.png";
// precision component
const Precision = (props) => {
    const [precision, setPrecision] = useState({
        optionBatch: [
            {
                name: "conqueror",
                img: Conquerer,
                active: true,
            },
            {
                name: "fleetfootwork",
                img: FleetFloot,
                active: false,
            },
            {
                name: "lethaltempotemp",
                img: LethalTempo,
                active: false,
            },
            {
                name: "presstheattack",
                img: PressTheAttack,
                active: false,
            },
        ],
        batchList: [
            {
                name: "coupdegrace",
                img: coupDeGrace,
                active: false,
            },
            {
                name: "cutdown",
                img: cutDown,
                active: false,
            },
            {
                name: "coupdegrace",
                img: coupDeGrace,
                active: false,
            },
            {
                name: "LegendAlacrity",
                img: LegendAlacrity,
                active: false,
            },
            {
                name: "LegendBloodline",
                img: LegendBloodline,
                active: false,
            },
            {
                name: "LegendTenacity",
                img: LegendTenacity,
                active: true,
            },
            {
                name: "Overheal",
                img: Overheal,
                active: false,
            },
            {
                name: "PresenceOfMind",
                img: PresenceOfMind,
                active: true,
            },
            {
                name: "Triumph",
                img: Triumph,
                active: false,
            },
        ],
    });

    // get user data or empty object
    useEffect(() => {
        // setPrecision((prevState) => {
        //     const modifyedState = {};
        //     // update batch data
        //     if (props.data.optionBatch) {
        //     }
        // });
    }, []);

    // placeholder object

    return (
        <div
            className={`${Classes.PrecisionWrap} h-full p-[22px] rounded-5px `}
        >
            <h1 className=" sf-bold-11 text-light-text capitalize text-center">
                precision
            </h1>
            {/* batches  */}
            <div className=" mt-10 flex flex-col items-center">
                <div className=" relative w-8 h-8 rounded-full border border-[#201929]  ">
                    <Image
                        src={PrecisionParent}
                        alt="precision parent icon"
                        layout="fill"
                    />
                </div>
                {/* options  */}
                <div className=" flex mt-3 ">
                    {precision.optionBatch.map((option, index) => {
                        return (
                            <div
                                className={` relative w-8 h-8 rounded-full mr-1 last:mr-0 ${
                                    option.active
                                        ? "border border-nav-btn "
                                        : null
                                }`}
                                key={index}
                            >
                                <Image
                                    src={option.img}
                                    alt="batch icon"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                </div>
                {/* all the batches  */}
                <div className=" grid grid-cols-3 grid-rows-3 gap-3 mt-3 ">
                    {precision.batchList.map((batch, index) => {
                        return (
                            <div
                                className={`relative w-7 h-7 rounded-full ${
                                    batch.active ? "border border-nav-btn" : " opacity-30"
                                }`}
                                key={index}
                            >
                                <Image
                                    src={batch.img}
                                    alt="batch image"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const Inspiration = () => {
    return <div></div>;
};

const RunesState = () => {
    return <div></div>;
};

// main component
const RunesOverview = (props) => {
    const precisionBatchList = {
        optionBatch: [{ name: "conqueror" }],
        batchList: [
            { name: "triumph" },
            { name: "legendTenacity" },
            { name: "coupDeGrace" },
        ],
    };
    return (
        <div className=" text-2xl text-whit flex-grow h-[340px]  grid grid-cols-[49%_31%_20%] ">
            <Precision data={precisionBatchList} />
            <Inspiration />
            <RunesState />
        </div>
    );
};

export default RunesOverview;
