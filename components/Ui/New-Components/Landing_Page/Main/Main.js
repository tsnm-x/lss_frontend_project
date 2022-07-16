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
                            relative h-[186px] z-10 mobile:absolute mobile:w-full mobile:h-full smTablet:opacity-[36%] smTablet:w-[650px] smTablet:h-[402px] tablet:w-full tablet:h-[463px]
                            laptop:w-[745px] laptop:h-[464px]  "
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
                                relative z-30 mobile:mb-[6px] mobile:w-[255px] mobile:mx-auto smTablet:w-full smTablet:max-w-[initial] smTablet:mb-[52px]
                                laptop:mb-0 laptop:w-[728px] laptop:mr-0 laptop:-ml-12
                                
                                "
                >
                    <div className=" mb-[39px] hidden smTablet:block smTablet:mb-[30px]  ">
                        <Logo className=" smTablet:text-[53px] smTablet:leading-[61px] tablet:nedgen-regular-60  text-center mb-[6px] " />
                        <p className=" gotham-mid-30 text-light-text opacity-60 max-w-[545px] mx-auto text-center smTablet:text-[19px] smTablet:leading-[22px]
                                        smTablet:max-w-[342px] tablet:gotham-mid-22 tablet:max-w-[405px] 
                                    ">
                            Reach your potential with powerful LoL Simulation
                            tools
                        </p>
                    </div>
                    <ProfileSearch className=" -mt-[40px] relative smTablet:mt-0  " />
                </div>
            </div>
        </main>
    );
};

export default Main;
