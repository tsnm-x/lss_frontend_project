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
                            container mobile:relative  mobile:w-[332px] mobile:h-[206px]
                            mobile:flex mobile:items-end mobile:justify-center smTablet:container smTablet:h-[402px] tablet:max-w-[745px] tablet:h-[463px]
                            laptop:items-center "
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
                <div
                    className=" 
                                relative z-30 mobile:mb-[6px] mobile:w-[255px] mobile:mx-auto smTablet:w-full 
                                smTablet:max-w-[initial] smTablet:mb-[52px]
                                laptop:mb-0 laptop:w-[728px] laptop:mr-0 laptop:-ml-12
                                
                                "
                >
                    <div className=" block mb-[40px]  ">
                        <Logo className=" nedgen-regular-60 leading-[57px] font-[400] text-center mb-[10px] " />
                        <p className=" font-mazin font-[500] text-[#AAA0A8] text-[30px] leading-[38px] text-center flex flex-col items-center  ">
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
