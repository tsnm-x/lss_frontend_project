import React from "react";
import { SiNuxtdotjs } from "react-icons/si";
import Image from "next/image";
import ProfileImg from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";

import KiloIconRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/kilo.png";
import AlienRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-dragon-r.png";
import baronRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-baron-r.png";
import towerRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-tower-r.png";
import roundRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/round.png";
import KiloIconBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/kilo.png";
import AlienBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-dragon-r.png";
import baronBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-baron-r.png";
import towerBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-tower-r.png";
import roundBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/round.png";

const IconAndCount = (props) => {
    return (
        <div className={` flex first:mr-[10px] ${props.className}`}>
            <div className={` relative w-4 h-4 mr-3 ${props.imgClassName}`}>
                <Image src={props.img} alt="icon" layout="fill" />
            </div>
            <p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text ">
                {props.txt}
            </p>
        </div>
    );
    // return null;
};

// const Icon = (props) => {
//     return (
//         <div className={` relative ${props.className}`}>
//             <Image src={props.img} alt="icon" layout="fill" />
//         </div>
//     );
// };

const LosAndWinRow = (props) => {
    return (
        <div className=" mb-[37px] bg-card-&-content-box px-[25px] h-10 flex justify-center items-center gap-x-10 ">
            {/* loss  */}
            <div className=" text-accent-color flex justify-between items-center w-3/6 font-bold ">
                <div>
                    <IconAndCount txt="62.8k" img={KiloIconRed} />
                </div>
                <div className=" flex items-center gap-x-5 ">
                    <IconAndCount txt="5" img={AlienRed} />
                    <IconAndCount txt="2" img={baronRed} />
                </div>
                <div className=" flex items-center gap-x-5 ">
                    <IconAndCount txt="7" img={towerRed} />
                    <IconAndCount txt="2" img={roundRed} />
                </div>
                <p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text  ">
                    24/28/26
                </p>
                {/* indicator  */}
            </div>
            {/* los and wind  */}
            {props.showProfile ? (
                <div className=" relative overflow-hidden rounded w-10 h-10 ">
                    <Image src={ProfileImg} alt="Profile image" layout="fill" />
                </div>
            ) : (
                <div className=" flex gap-x-12 items-center">
                    <p className=" font-sf-pro-text text-[14px] leading-[16px] text-accent-color font-bold  ">
                        Loss
                    </p>
                    <p className=" font-sf-pro-text text-[14px] leading-[16px] text-accent-color-2 font-bold  ">
                        Win
                    </p>
                </div>
            )}

            {/* win  */}
            <div className=" text-accent-color-2 flex justify-between items-center w-3/6 font-bold ">
                {/* indicator  */}
                <p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text  ">
                    24/28/26
                </p>
                <div className=" flex items-center gap-x-5 ">
                    <IconAndCount txt="7" img={towerBlue} />
                    <IconAndCount txt="2" img={towerBlue} />
                </div>
                <div className=" flex items-center gap-x-5 ">
                    <IconAndCount txt="5" img={AlienBlue} />
                    <IconAndCount txt="2" img={baronBlue} />
                </div>
                <div>
                    <IconAndCount txt="62.8k" img={KiloIconBlue} />
                </div>
            </div>
        </div>
    );
};

export default LosAndWinRow;
