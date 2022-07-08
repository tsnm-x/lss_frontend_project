import React from "react";
import classes from "./Header.module.css";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GrMenu } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import SkirmishSimulatorAppBtn from "../../../Ui/New-Components/universal/Btn/SkirmishSimulatorAppBtn/SkirmishSimulatorAppBtn";
// components
import Logo from "../../../Ui/New-Components/universal/logo/Logo";

const Header = (props) => {
    const menuBtnHandler = () => {
        props.menuBtnClick()
    };

    return (
        <header className=" py-[36px] ">
            <div className={`${classes.header__container}  `}>
                {/* resp menu btn  */}
                <div className={`  ${classes.btnWrap}`}>
                    <SkirmishSimulatorAppBtn className=" hidden smTablet:block smTablet:sf-bold-20 smTablet:p-[6px_12px] smTablet:mr-[45px] tablet:mr-[80px] desktop:mr-[92px] " />
                    <button
                        onClick={menuBtnHandler}
                        className={` w-full h-full inline-block ${classes.respBtn}`}
                    >
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

                {/* logo  */}
                <div className={`${classes.logo__wrapper}`}>
                    <Logo
                        className={` smMobile:text-[24px] smMobile:leading-[27px] mobile:text-[24px] mobile:leading-[27px]
                                    laptop:text-[24px] laptop:leading-[27px] `}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
