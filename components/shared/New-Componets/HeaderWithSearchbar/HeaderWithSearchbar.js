import React from "react";
import ProfileSearchBox from "../../../Ui/New-Components/universal/ProfileSearchBox/ProfileSearchBox";

const HeaderWithSearchbar = () => {
    return (
        <header>
            <div className="container flex relative ">
                {/* resp btn  */}
                <button
                    className={` absolute left-0 inline-block w-[12px] smTablet:w-[35px] desktop:order-6 `}
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
                {/* profile search box  */}
                <ProfileSearchBox className="" />
            </div>
        </header>
    );
};

export default HeaderWithSearchbar;
