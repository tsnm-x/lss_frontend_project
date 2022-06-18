import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GrMenu } from 'react-icons/gr'
import { AiOutlineMenu } from 'react-icons/ai'
// components
import Logo from "../../../Ui/New-Components/universal/logo/Logo";

const Header = (props) => {
    const menuBtnHandler = () => {
        props.click ? props.click : console.log("no click function available");
    };

    return (
        <header className=" py-[36px] ">
            <div className="container mx-auto flex relative">
                {/* resp menu btn  */}
                <button
                    onClick={menuBtnHandler}
                    className="
                            absolute left-0 top-[12px] w-[12px] 
                            tablet:w-[35px] 
                            "
                >
                    <svg
                        className=" tablet:hidden"
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
                    <svg className=" hidden tablet:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 26">
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
                {/* logo  */}
                <div className="text-center w-full">
                    <Logo />
                </div>
            </div>
        </header>
    );
};

export default Header;
