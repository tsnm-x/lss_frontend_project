import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
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
                    className="absolute left-0 top-[12px] w-[12px]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 13">
                        <g data-name="Group 1" fill="none" stroke="#f65d68">
                            <path data-name="Line 1" d="M0 .5h10" />
                            <path data-name="Line 2" d="M0 6.5h8" />
                            <path data-name="Line 3" d="M0 12.5h10" />
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
