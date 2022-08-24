import React from "react";
import { BiMessageAlt } from "react-icons/bi";

const OverviewReport = (props) => {
    return (
        <div className=" flex items-center ">
            {/* btn  */}
            <div className=" mr-[88px] ">
                <h6 className=" mazin-bold-16 text-white ">
                    Have you encountered a problem during your visit?
                </h6>
                {props.listenTxt && (
                    <h6 className=" mazin-bold-14 text-[#8e8a94] mt-[6px] tracking-[0.3px] ">
                        We listen better than League’s Balance Team :)
                    </h6>
                )}
            </div>
            {/* button  */}
            <div className=" flex gap-x-[5px] ">
                <button
                    className=" bg-white hover:bg-[rgba(227,227,242,0.3)] w-[103px] h-[32px] flex items-center justify-center rounded-5px  "
                    onClick={props.reportBtn}
                >
                    {" "}
                    <div className=" mr-2 px-[1px] py-[0.5px]  ">
                        <BiMessageAlt className=" text-accent-color text-[17px] " />{" "}
                    </div>
                    <h5 className=" sf-bold-14 text-accent-color capitalize ">
                        report
                    </h5>
                </button>
                {props.leaveBtn && (
                    <button
                        className={`px-4 pt-[6px] pb-[8px] rounded-[8px] font-sf-pro-text
                    font-bold  text-[14px] leading-5 capitalize
                    bg-accent-color text-white `}
                        onClick={props.goHome}
                    >
                        Leave
                    </button>
                )}
            </div>
        </div>
    );
};

export default OverviewReport;
