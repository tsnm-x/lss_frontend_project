import React from "react";
import Image from "next/image";
import SimulateDataBg from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/SimulatedData/bg.png";

const HeaderOnSimulateGameMode = () => {
    return (
        <div className=" text-6xl text-white mt-2 mb-[17px] ">
            <div className=" relative w-full h-[67px] ">
                <Image
                    src={SimulateDataBg}
                    alt="simulate data bg"
                    layout="fill"
                />
            </div>
            <div className=" w-full flex justify-around py-6 bg-card-&-content-box ">
                <h3 className=" sf-bold-24">Post-Game Analytics</h3>
                <h3 className=" sf-bold-24 flex items-center">
                    You're on Analytics mode{" "}
                    <button
                        className={` ml-[60px] font-sf-pro-text text-[14px] leading-[16px] text-nav-btn
                         capitalize font-bold tracking-wider border-b-[2px]
                          border-nav-btn pb-1 `}
                    >
                        Leave
                    </button>
                </h3>
            </div>
        </div>
    );
};

export default HeaderOnSimulateGameMode;
