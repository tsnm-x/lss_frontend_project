import React from "react";
import Classess from "./ReportPortal.module.css";
import GoBackIcon from "../../../../../public/assets/new-images/Profile/ReportBackdrop/go back.png";
import { BsArrowReturnLeft } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";

const RightImg = () => {
    const [formBtn, setFormBtn] = useState([
        {
            text: "report issue",
            active: true,
        },
        {
            text: "write a review",
            active: false,
        },
    ]);
    return (
        <div className=" w-[697px] bg-[#1e1629] pt-[28px] pl-[75px] pr-[100px] ">
            <div className=" ">
                {/* go back btn  */}
                <button className={`${Classess.goBackBtn} ml-auto `}>
                    <div className=" relative w-[14px] h-[12.5px] mr-[9px] ">
                        <Image
                            src={GoBackIcon}
                            alt="go back icon"
                            layout="fill"
                        />
                    </div>
                    Go Back
                </button>
                {/* feedback form  */}
                <div className=" mt-[96px] ">
                    <div>
                        <h2 className={`${Classess.fromHeading}`}>
                            Leave your feedback
                        </h2>
                        <p className={`${Classess.headMsg}`}>
                            Your user experience is valuable and your reports
                            help us improve it.{" "}
                        </p>
                    </div>
                </div>
                {/* form btn  */}
                <div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightImg;
