import React from "react";
import Image from "next/image";
import AnimatedImage from "../../../../../public/assets/new-images/landing-page/main-bg-sm.png";
import ProfileSearch from "../ProfileSearch/ProfileSearch";
import Logo from "../../universal/logo/Logo";

const Main = (props) => {
    return (
        <main className={`${props.className}`}>
            <div className="container desktop:max-w-[1070px] desktop:relative desktop:h-[666px] ">
                {/* hightlight img  */}
                <div className=" relative smTablet:opacity-[36%] desktop:w-[1035px] h-[186px] z-10 desktop:h-[666px] desktop:absolute ">
                    <Image
                        src={AnimatedImage}
                        alt="highlight image"
                        layout="fill"
                    />
                </div>
                {/* profile search  */}
                <div className=" relative z-30 desktop:pt-[120px] desktop:max-w-[980px] desktop:ml-11  ">
                    <div className=" mb-[39px] hidden smTablet:block ">
                        <Logo className=" desktop:nedgen-regular-80 text-center mb-[6px] " />
                        <p className=" gotham-mid-30 text-light-text opacity-60 max-w-[545px] mx-auto text-center italic ">
                            Reach your potential with powerful LoL Simulation
                            tools
                        </p>
                    </div>
                    <ProfileSearch className=" -mt-[40px] relative desktop:mt-0  " />
                </div>
            </div>
        </main>
    );
};

export default Main;
