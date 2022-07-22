import React, { useState } from "react";
import ProfileSearchBox from "../../../Ui/New-Components/universal/ProfileSearchBox/ProfileSearchBox";
import Logo from "../../../Ui/New-Components/universal/logo/Logo";
import SkirmishSimulatorAppBtn from "../../../Ui/New-Components/universal/Btn/SkirmishSimulatorAppBtn/SkirmishSimulatorAppBtn";
import { useRouter } from "next/router";


const HeaderWithSearchbar = (props) => {
    
    return (
        <header className={`py-[31px] ${props.className}`}>
            <div
                className={`container pl-0 flex relative h-[22px] smTablet:h-[45px]`}
            >
                {/* logo  */}
                <Logo className=" hidden smTablet:block smTablet:text-[32px] smTablet:leading-[37px] smTablet:order-1 cursor-pointer"/>
                {/* resp btn  */}
                <div
                    className=" absolute left-0 inline-block smTablet:static smTablet:order-3 smTablet:flex 
                smTablet:items-center smTablet:justify-end"
                >
                    {/* skirmish btn  */}
                    {/* <SkirmishSimulatorAppBtn className=" hidden laptop:block laptop:mr-[70px] " /> */}
                    {/* responsive nav btn  */}
                    <button className={` w-[12px] smTablet:w-[35px]  `}>
                        <svg
                            className=" smTablet:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 13"
                        >
                            <g data-name="Group 1" fill="none" stroke="#f65d68">
                                <path data-name="Line 1" d="M0 .5h10" />
                                <path data-name="Line 2" d="M0 6.5h8" />
                                <path data-name="Line 3" d="M0 12.5h10" />
                            </g>
                        </svg>
                        {/* <GrMenu size={35} className="bg-red-400" /> */}
                        <svg
                            className=" hidden smTablet:block smTablet:w-[35px] smTablet:h-6 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 35 26"
                        >
                            <g
                                data-name="Group 507"
                                fill="none"
                                stroke="#d55460"
                                strokeWidth="2"
                            >
                                <path data-name="Line 52" d="M35 25H0" />
                                <path data-name="Line 53" d="M35 13H0" />
                                <path data-name="Line 54" d="M35 1H0" />
                            </g>
                        </svg>
                    </button>
                </div>

                {/* profile search box  */}
                <ProfileSearchBox
                    searchBox=" desktop:pl-[200px] "
                    className=" smTablet:w-[340px] smTablet:order-2 tablet:w-[450px] desktop:w-[650px] "
                />
            </div>
        </header>
    );
};

export default HeaderWithSearchbar;
