import React, { useState } from "react";
import Image from "next/image";
import Classes from "./SimulateComponents.module.css";
// green icons
import SordB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/sord-r.png";
import BaronB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-baron-r.png";
import DragonB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-dragon-r.png";
import TowerB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-tower-r.png";
import KiloB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/kilo.png";
import RoundB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/round.png";
// Red icons
import SordR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/sord-r.png";
import BaronR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-baron-r.png";
import DragonR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-dragon-r.png";
import TowerR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-tower-r.png";
import KiloR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/kilo-r.png";
import RoundR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/round-r.png";

const Batch = (props) => {
    const [red, setRed] = useState(true);

    return (
        <div
            className={` w-[200px] py-[15px] px-[20px] rounded-[5px] grid
             grid-cols-[2fr_1fr_1fr] grid-rows-2 bg-[#251122] gap-y-3 `}
        >
            {/* sord  */}
            <div className=" flex ">
                <div className=" relative w-[12.5px] h-[12.5px] mr-[10px] ">
                    <Image
                        src={red ? SordR : SordB}
                        alt="sord icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>26</h6>
            </div>
            {/* tower  */}
            <div className=" flex ">
                <div className=" relative w-[9.5px] h-[12.5px] mr-[6px] ">
                    <Image
                        src={red ? TowerR : TowerB}
                        alt="sord icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>7</h6>
            </div>
            {/* round b  */}
            <div className=" flex ">
                <div className=" relative w-[12.5px] h-[12.5px] mr-[6px] ">
                    <Image
                        src={red ? RoundR : RoundB}
                        alt="sord icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>2</h6>
            </div>
            {/* kilo  */}
            <div className=" flex ">
                <div className=" relative w-[14.5px] h-[11.8px] mr-[10px] ">
                    <Image
                        src={red ? KiloR : KiloB}
                        alt="Kilo icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>62.2k</h6>
            </div>
            {/* dragon  */}
            <div className=" flex ">
                <div className=" relative w-[9.5px] h-[12.5px] mr-[6px] ">
                    <Image
                        src={red ? DragonR : DragonB}
                        alt="sord icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>7</h6>
            </div>
            {/* barn  */}
            <div className=" flex ">
                <div className=" relative w-[12.5px] h-[12.5px] mr-[6px] ">
                    <Image
                        src={red ? BaronR : BaronB}
                        alt="sord icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>2</h6>
            </div>
        </div>
    );
};

const SimulateComponets = () => {
    return (
        <div className=" flex justify-around items-center my-3 ">
            <Batch />
            {/* simulate btn  */}
            <button className=" font-sf-pro-text text-[14px] leading-[16px] font-bold 
             capitalize px-[25px] py-[15px] rounded-[5px]
              bg-accent-color text-light-text ">simulate game</button>
            <Batch />
        </div>
    );
};

export default SimulateComponets;
