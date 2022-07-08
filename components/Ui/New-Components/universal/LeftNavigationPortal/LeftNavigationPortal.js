import React from "react";
import classes from "./LeftNavigationPortal.module.css";
import Logo from "../logo/Logo";
import ProfileSearch from "../../Landing_Page/ProfileSearch/ProfileSearch";
import Footer from "../../../../shared/New-Componets/Footer/Footer";

const LeftNavigationPortal = (props) => {
    const menuBtnHandler = () => {
        props.menuBtnClick();
    };

    return (
        <div onClick={menuBtnHandler} className={`${classes.portal}`}>
            <div className={`${classes.portalWrap}`}>
                {/* top navigation  */}
                <div className=" flex justify-between ">
                    <Logo className=" nedgen-regular-14 " />
                    <button
                        onClick={menuBtnHandler}
                        className="w-[10px] h-[13px] mt-[2px] mr-[3px] "
                    >
                        <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 13"
                        >
                            <g data-name="Group 1" fill="none" stroke="#f65d68">
                                <path data-name="Line 1" d="M0 .5h10" />
                                <path data-name="Line 2" d="M0 6.5h8" />
                                <path data-name="Line 3" d="M0 12.5h10" />
                            </g>
                        </svg>
                    </button>
                </div>
                <div className=" mobile:mx-[10px]">
                    {/* search and list  */}
                    <ProfileSearch
                        searchBox="sf-bold-10 mt-[30px] "
                        hideSearch={true}
                   />
                    {/* download btn  */}
                    <div>
                        <button
                            className={`mt-[75px] sf-bold-12 ${classes.simulator__app__btn}`}
                        >
                            Skirmish Simulator App
                        </button>
                        <p className=" mt-3 sf-bold-12 text-[#a19aa6] max-w-[125px] ">
                            Simulate Matchups and Analyze your games with the
                            Simulator App
                        </p>
                    </div>
                    {/* footer text  */}
                    <Footer
                        className=" absolute left-[20px] bottom-[20px] max-w-[145px] "
                        textStyle=" text-left text-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftNavigationPortal;
