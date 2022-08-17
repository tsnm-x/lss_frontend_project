import React from "react";
import Classess from "./ReportPortal.module.css";
import Image from "next/image";
import LeftImg from "./LeftImg";
import RightSideForms from './RightSideForms'

const ReportPortal = (props) => {
    return (
        <div
            className={` absolute left-0 top-0 w-screen min-h-screen bg-[rgba(20,23,38,0.25)] [backdrop-filter:blur(4px)] z-[60] `}
        >
            {/* content container  */}
            <div className=" w-[1150px] ml-auto flex  ">
                {/* bg img container  */}
                <LeftImg />
                {/* right side form  */}
                <RightSideForms back={props.back} />
            </div>
        </div>
    );
};

export default ReportPortal;
