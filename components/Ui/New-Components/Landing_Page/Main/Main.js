import React from "react";
import Image from "next/image";
import AnimatedImage from "../../../../../public/assets/new-images/landing-page/main-bg-sm.png";
import ProfileSearch from "../ProfileSearch/ProfileSearch";
import Logo from "../../universal/logo/Logo";

const Main = (props) => {
    return (
        <main className={` ${props.className}`}>
            <div
                className="
                            container mobile:relative w-[730px] h-[454px] flex justify-center
                             "
            >
                {/* hightlight img  */}
                <div
                    className=" 
                            z-10 absolute  opacity-[80%] laptop:w-[730px] laptop:h-[455px]  "
                >
                    <Image
                        src={AnimatedImage}
                        alt="highlight image"
                        layout="fill"
                    />
                </div>
                {/* profile search  */}
                <div className=" relative z-30 pt-[80px] ">
                    <div className=" block mb-[40px]  ">
                        <Logo className=" nedgen-regular-60 leading-[57px] font-[400] text-center mt-[45px] " />
                        <p className=" font-mazin font-[600] text-[#AAA0A8] text-[31px] leading-[38px] text-center flex flex-col items-center mt-[16px] mr-2  ">
                            <span>Reach your potential with powerful</span>
                            <span>LoL Simulation tools</span>
                        </p>
                    </div>
                    <ProfileSearch className="" />
                </div>
            </div>
        </main>
    );
};

export default Main;
