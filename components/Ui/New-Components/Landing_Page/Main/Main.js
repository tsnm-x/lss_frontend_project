import React from "react";
import Image from "next/image";
import AnimatedImage from "../../../../../public/assets/new-images/landing-page/main-bg-sm.png";
import ProfileSearch from "../ProfileSearch/ProfileSearch";
import Logo from "../../universal/logo/Logo";

const Main = (props) => {
    return (
        <main className={` smTablet:mb-[180px] ${props.className}`}>
            <div className="
                            container mobile:relative  mobile:w-[332px] mobile:h-[206px]
                            mobile:flex mobile:items-end mobile:justify-center smTablet:container smTablet:h-[402px]
                            desktop:max-w-[1070px] desktop:h-[666px] ">
                {/* hightlight img  */}
                <div
                    className=" 
                            relative h-[186px] z-10 mobile:absolute mobile:w-full mobile:h-full smTablet:opacity-[36%] smTablet:w-[650px] smTablet:h-[402px]
                            desktop:w-[1035px] desktop:h-[666px] desktop:absolute "
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
                                relative z-30 mobile:mb-[6px] mobile:w-[255px] mobile:mx-auto smTablet:w-full smTablet:max-w-[initial] smTablet:mb-[52px] desktop:pt-[120px]
                                desktop:max-w-[980px] desktop:ml-11
                                "
                >
                    <div className=" mb-[39px] hidden smTablet:block smTablet:mb-[30px] ">
                        <Logo className=" smTablet:text-[53px] smTablet:leading-[61px] desktop:nedgen-regular-80 text-center mb-[6px] " />
                        <p className=" gotham-mid-30 text-light-text opacity-60 max-w-[545px] mx-auto text-center italic smTablet:text-[19px] smTablet:leading-[22px] smTablet:max-w-[342px] ">
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
