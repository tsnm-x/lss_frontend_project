import React from "react";
import Image from "next/image";
import ProfileSearch from "../ProfileSearch/ProfileSearch";
import Logo from "../../universal/logo/Logo";
import Classess from './Main.module.css'
import HighlightImg from '../../../../../public/assets/new-images/landing-page/highlight-img.png'

const Main = (props) => {
    return (
        <main className={` ${props.className}`}>
            <div className=" w-[955px] h-[570px] mx-auto ">
                {/* hightlight img  */}
                <div className=" w-full h-full ">
                    <div className=" w-full h-[564px] relative ">
                        <Image
                            src={HighlightImg}
                            alt="highlight image"
                            layout="fill"
                        />
                        <div className={`${Classess.highImgMask}`}></div>
                    </div>
                </div>

                {/* profile search  */}
                {/* <div className=" relative z-30 pt-[80px] ">
                    <div className=" block mb-[40px]  ">
                        <Logo className=" nedgen-regular-60 leading-[57px] font-[400] text-center mt-[45px] " />
                        <p className=" font-mazin font-[600] text-[#AAA0A8] text-[31px] leading-[38px] text-center flex flex-col items-center mt-[16px] mr-2  ">
                            <span>Reach your potential with powerful</span>
                            <span>LoL Simulation tools</span>
                        </p>
                    </div>
                    <ProfileSearch className="" />
                </div> */}
            </div>
        </main>
    );
};

export default Main;
