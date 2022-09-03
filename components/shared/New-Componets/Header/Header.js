import React from "react";
import classes from "./Header.module.css";
import SearchBar from "./SearchBar";
import LanguageSelect from "../HeaderWithSearchbar/LanguageSelect/LanguageSelect";
// components
import Logo from "../../../Ui/New-Components/universal/logo/Logo";

const Header = (props) => {
    const menuBtnHandler = () => {
        props.menuBtnClick();
    };

    return (
        <header className=" h-[54px] border-b border-[#282728] flex items-center ">
            {/* <div className={`${classes.header__container}`}> */}
            {/* resp menu btn  */}
            {/* <div className={`  ${classes.btnWrap} gap-x-[30px] `}>
                    <LanguageSelect />
                </div> */}

            {/* logo  */}
            {/* <div className={`${classes.logo__wrapper}`}>
                    <Logo
                        className={` text-[32px] leading-[30.4px] font-[400] `}
                    />
                </div> */}
            {/* </div> */}
            {/* left logo  */}
            <div className=" w-[150px] flex items-center border-r border-headBorder h-full pl-[22px]  ">
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
            <div className=" flex justify-between w-full pl-[15px] pr-[20px] ">
                {/* search bar  */}
                <SearchBar />
                <LanguageSelect />
            </div>
        </header>
    );
};

export default Header;
