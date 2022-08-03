import React, { useState } from "react";
// import ProfileSearchBox from "../../../Ui/New-Components/universal/ProfileSearchBox/ProfileSearchBox";
import Logo from "../../../Ui/New-Components/universal/logo/Logo";
import SkirmishSimulatorAppBtn from "../../../Ui/New-Components/universal/Btn/SkirmishSimulatorAppBtn/SkirmishSimulatorAppBtn";
import { useRouter } from "next/router";
import Link from "next/link";
import LanguageSelect from "./LanguageSelect/LanguageSelect";
import ProfileSearch from "./ProfileSearch/ProfileSearch";




const HeaderWithSearchbar = (props) => {
    return (
        <header className={`py-[24px]`}>
            <div
                className={`container pl-0 flex relative h-[45px] items-center justify-between`}
            >
                {/* logo  */}
                <Link href={"/"}>
                    <Logo className=" hidden smTablet:block smTablet:text-[32px] smTablet:leading-[37px] cursor-pointer" />
                </Link>
                {/* resp btn  */}
                <div className=" flex items-center gap-x-[76px] ">
                    <ProfileSearch />
                    {/* language select  */}
                    <LanguageSelect />
                    {/* resp nav bar  */}
                    <button className=" w-[35px] flex flex-col justify-between h-[27px]  ">
                        {["", "", ""].map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" w-full h-[3px] bg-[#D55460] "
                                ></div>
                            );
                        })}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default HeaderWithSearchbar;
