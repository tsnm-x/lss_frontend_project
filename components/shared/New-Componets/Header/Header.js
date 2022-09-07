import React from "react";
import classes from "./Header.module.css";
import SearchBar from "./SearchBar";
import LanguageSelect from "../HeaderWithSearchbar/LanguageSelect/LanguageSelect";
import Image from "next/image";
import ProfileImg from "../../../../public/assets/now-playing.png";
// components
import Logo from "../../../Ui/New-Components/universal/logo/Logo";

const Header = (props) => {
    const menuBtnHandler = () => {
        props.menuBtnClick();
    };

    return (
        <header className=" h-[54px] border-b border-[#282728] relative  ">
            <div className=" h-full px-[22px] flex items-center relative z-30 ">
                <div className=" w-[150px] flex items-center border-r border-headBorder h-full  ">
                    <div className=" w-[14px] h-[11px] mr-[11px] ">
                        <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 11"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14 0H0v1h14V0ZM0 5h14v1H0V5Zm0 5h14v1H0v-1Z"
                                fill="#FF4256"
                            />
                        </svg>
                    </div>
                    <Logo className=" text-[19px] leading-[18px] " />
                </div>
                {/* right searchbar and language bar */}
                <div className=" flex justify-between w-full pl-[15px] ">
                    {/* search bar  */}
                    <SearchBar />
                    <LanguageSelect />
                </div>
            </div>
            {true ? (
                <div className=" w-full h-full absolute left-0 top-0 flex items-center justify-center gap-x-[10px] z-20 ">
                    {/* image  */}
                    <div className=" rounded-[7px] relative w-[25px] h-[25px] border border-red">
                        <Image
                            src={ProfileImg}
                            alt="profile image"
                            layout="fill"
                        />
                    </div>
                    <p className=" mazin-mid-15 text-white">
                        Ranked Solo / 31:48 / 3 days ago
                    </p>
                    <div className=" h-[27px] px-[14px] rounded-[3px] flex items-center
                     justify-center mazin-mid-15 font-bold text-red bg-[rgba(255,66,86,0.2)] ">
                        Defeat
                    </div>
                </div>
            ) : null}
        </header>
    );
};

export default Header;
