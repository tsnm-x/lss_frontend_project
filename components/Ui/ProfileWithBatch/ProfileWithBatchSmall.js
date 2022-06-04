import React, { useEffect, useState } from "react";
import Image from "next/image";
import BatchOne from "../../../public/assets/batches/Conqueror_rune (1).png";
import BatchTwo from "../../../public/assets/batches/inspiration.png";

// import domination
import Domination from "../../../public/assets/runes/7200_Domination.png";
import DarkHarvest from "../../../public/assets/runes/Domination/DarkHarvest.png";
import Electrocute from "../../../public/assets/runes/Domination/Electrocute.png";
import HailOfBlades from "../../../public/assets/runes/Domination/HailOfBlades.png";
import Predator from "../../../public/assets/runes/Domination/Predator.png";
// import inspiration
import Inspiration from "../../../public/assets/runes/7203_Whimsy.png";
import GlacialAugment from "../../../public/assets/runes/Inspiration/GlacialAugment.png";
import MasterKey from "../../../public/assets/runes/Inspiration/MasterKey.png";
import UnsealedSpellbook from "../../../public/assets/runes/Inspiration/UnsealedSpellbook.png";

import Precision from "../../../public/assets/runes/7201_Precision.png";
import Conqueror from "../../../public/assets/runes/Precision/Conqueror.png";
import FleetFootwork from "../../../public/assets/runes/Precision/FleetFootwork.png";
import LethalTempoTemp from "../../../public/assets/runes/Precision/LethalTempoTemp.png";
import PressTheAttack from "../../../public/assets/runes/Precision/PressTheAttack.png";

import Resolve from "../../../public/assets/runes/7204_Resolve.png";
import GraspOfTheUndying from "../../../public/assets/runes/Resolve/GraspOfTheUndying.png";
import Guardian from "../../../public/assets/runes/Resolve/Guardian.png";
import VeteranAftershock from "../../../public/assets/runes/Resolve/VeteranAftershock.png";

import Sorcery from "../../../public/assets/runes/7202_Sorcery.png";
import ArcaneComet from "../../../public/assets/runes/Sorcery/ArcaneComet.png";
import PhaseRush from "../../../public/assets/runes/Sorcery/PhaseRush.png";
import SummonAery from "../../../public/assets/runes/Sorcery/SummonAery.png";

const ProfileWithBatchSmall = (props) => {
    const select1stRune = (runeId) => {
        switch (runeId) {
            // domination
            case 8112:
                return Electrocute;
            case 8124:
                return Predator;
            case 8128:
                return DarkHarvest;
            case 9923:
                return HailOfBlades;

            // Precision
            case 8005:
                return PressTheAttack;
            case 8008:
                return LethalTempoTemp;
            case 8021:
                return FleetFootwork;
            case 8010:
                return Conqueror;

            // Sorcery
            case 8229:
                return ArcaneComet;
            case 8230:
                return PhaseRush;
            case 8214:
                return SummonAery;

            // Resolve
            case 8437:
                return GraspOfTheUndying;
            case 8439:
                return VeteranAftershock;
            case 8465:
                return Guardian;

            // Inspiration
            case 8351:
                return GlacialAugment;
            case 8358:
                return MasterKey;
            case 8360:
                return UnsealedSpellbook;

            // todo: add image placeholder as default
            default:
                return Precision;
        }
    };

    const select2ndRune = (runeId) => {
        switch (runeId) {
            case 8100:
                return Domination;
            case 8300:
                return Inspiration;
            case 8000:
                return Precision;
            case 8400:
                return Resolve;
            case 8200:
                return Sorcery;

            // todo: add image placeholder as default
            default:
                return Precision;
        }
    };

    let championName = props.imgLink;

    if (props.imgLink === "FiddleSticks") championName = "Fiddlesticks";

    return (
        <div className=" relative ">
            {/* image  */}
            <div
                className={`border border-white-blue rounded-full w-[17px] h-[17px] relative`}
            >
                <Image
                    className=" block rounded-full"
                    src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${championName}.png`}
                    alt="player image"
                    layout="fill"
                />
            </div>
            {/* batchs  */}
            <div className=" flex justify-start items-end absolute -right-[6px] bottom-0 w-[10px]  ">
                <div className=" relative w-[6px] h-[6px] rounded-full border-[0.3px] border-white-blue bg-full-dark flex justify-center items-center    ">
                    <Image
                        className=" inline-block "
                        src={select1stRune(
                            props?.perks?.styles[0]?.selections[0]?.perk
                        )}
                        alt="rank icon"
                        layout="fill"
                    />
                </div>
                <div className=" relative w-[3px] h-[3px] rounded-full border-[0.3px] border-white-blue bg-full-dark flex justify-center items-center  ">
                    <Image
                        className=" inline-block "
                        src={select2ndRune(props?.perks?.styles[1]?.style)}
                        alt="rank icon"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileWithBatchSmall;
