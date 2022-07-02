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
// inspiration icons -----------------------------------------------------
import InspirationParent from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/Inspiration_icon.png";
// icons
import HextechFlashtraption from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/HextechFlashtraption.png";
import MagicalFootwear from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/MagicalFootwear.png";
import PerfectTiming from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/PerfectTiming.png";
import FuturesMarket from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/FuturesMarket.png";
import MinionDematerializer from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/MinionDematerializer.png";
import BiscuitDelivery from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/BiscuitDelivery.png";
import TimeWarpTonic from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/TimeWarpTonic.png";
import CosmicInsight from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/CosmicInsight.png";
import ApproachVelocity from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Inspiration/ApproachVelocity.png";
// runes icons
import StatModsAdaptiveForceIcon from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/RunStats/StatModsAdaptiveForceIcon.png";
import StatModsArmorIcon from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/RunStats/StatModsArmorIcon.png";
import StatModsAttackSpeedIcon from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/RunStats/StatModsAttackSpeedIcon.png";
import StatModsCDRScalingIcon from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/RunStats/StatModsCDRScalingIcon.png";
import StatModsHealthScalingIcon from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/RunStats/StatModsHealthScalingIcon.png";
import StatModsMagicResIcon_MagicResist_Fix from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/RunStats/StatModsMagicResIcon.MagicResist_Fix.png";

// precision component
const Precision = (props) => {
    // placeholder object

    const [precisionData, setPrecisionData] = useState({
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
                    {precisionData.optionBatch.map((option, index) => {
                        return (
                            <div
                                className={` relative w-8 h-8 rounded-full mr-1 last:mr-0 ${
                                    option.active
                                        ? "border border-nav-btn "
                                        :  "opacity-30"
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
                    {precisionData.batchList.map((batch, index) => {
                        return (
                            <div
                                className={`relative w-7 h-7 rounded-full ${
                                    batch.active
                                        ? "border border-nav-btn"
                                        : " opacity-30"
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
    const [inspirationData, setInspirationData] = useState({
        batchList: [
            {
                name: "HextechFlashtraption",
                img: HextechFlashtraption,
                active: true,
            },
            {
                name: "MagicalFootwear",
                img: MagicalFootwear,
                active: false,
            },
            {
                name: "PerfectTiming",
                img: PerfectTiming,
                active: false,
            },
            {
                name: "FuturesMarket",
                img: FuturesMarket,
                active: false,
            },
            {
                name: "MinionDematerializer",
                img: MinionDematerializer,
                active: false,
            },
            {
                name: "BiscuitDelivery",
                img: BiscuitDelivery,
                active: true,
            },
            {
                name: "TimeWarpTonic",
                img: TimeWarpTonic,
                active: false,
            },
            {
                name: "CosmicInsight",
                img: CosmicInsight,
                active: false,
            },
            {
                name: "ApproachVelocity",
                img: ApproachVelocity,
                active: true,
            },
        ],
    });
    return (
        <div
            className={`${Classes.InspirationWrap} h-full p-[22px] rounded-5px `}
        >
            <h1 className=" sf-bold-11 text-light-text capitalize text-center">
                inspiration
            </h1>
            {/* batches  */}
            <div className=" mt-[74px] flex flex-col items-center">
                <div className=" relative w-8 h-8 rounded-full border border-[#201929]  ">
                    <Image
                        src={InspirationParent}
                        alt="precision parent icon"
                        layout="fill"
                    />
                </div>
                {/* all the batches  */}
                <div className=" grid grid-cols-3 grid-rows-3 gap-3 mt-3 ">
                    {inspirationData.batchList.map((batch, index) => {
                        return (
                            <div
                                className={`relative w-5 h-5 rounded-full ${
                                    batch.active
                                        ? "border border-nav-btn"
                                        : " opacity-30"
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

const RunesState = () => {
    const [RunesStateData, setRunesStateData] = useState({
        batchList: [
            {
                name: "StatModsAdaptiveForceIcon",
                img: StatModsAdaptiveForceIcon,
                active: true,
            },
            {
                name: "StatModsArmorIcon",
                img: StatModsArmorIcon,
                active: false,
            },
            {
                name: "StatModsAttackSpeedIcon",
                img: StatModsAttackSpeedIcon,
                active: false,
            },
            {
                name: "StatModsCDRScalingIcon",
                img: StatModsCDRScalingIcon,
                active: false,
            },
            {
                name: "StatModsHealthScalingIcon",
                img: StatModsHealthScalingIcon,
                active: false,
            },
            {
                name: "StatModsMagicResIcon_MagicResist_Fix",
                img: StatModsMagicResIcon_MagicResist_Fix,
                active: true,
            },
            {
                name: "StatModsMagicResIcon_MagicResist_Fix",
                img: StatModsMagicResIcon_MagicResist_Fix,
                active: false,
            },
            {
                name: "StatModsCDRScalingIcon",
                img: StatModsCDRScalingIcon,
                active: true,
            },
            {
                name: "StatModsHealthScalingIcon",
                img: StatModsHealthScalingIcon,
                active: false,
            },
        ],
    });
    return (
        <div
            className={`${Classes.RunesStateWrap} h-full p-[14px] rounded-5px flex flex-col justify-center `}
        >
            {/* all the batches  */}
            <div className=" grid grid-cols-3 grid-rows-3 gap-[6px] mt-3 ">
                {RunesStateData.batchList.map((batch, index) => {
                    return (
                        <div
                            className={`relative w-4 h-4 rounded-full ${
                                batch.active
                                    ? "border border-nav-btn"
                                    : " opacity-40"
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
            <p className=" font-sf-pro-text text-grayed-text text-[6px] leading-[7px] capitalize font-bold text-center mt-5 ">rune stats</p>
        </div>
    );
};

// main component
const RunesOverview = (props) => {
    return (
        <div className=" text-2xl text-whit flex-grow grid grid-cols-[49%_31%_20%] ">
            <Precision />
            <Inspiration />
            <RunesState />
        </div>
    );
};

export default RunesOverview;
