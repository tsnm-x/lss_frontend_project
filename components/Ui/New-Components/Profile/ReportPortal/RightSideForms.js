import React, { useState } from "react";
import Classess from "./ReportPortal.module.css";
import GoBackIcon from "../../../../../public/assets/new-images/Profile/ReportBackdrop/go back.png";
import Image from "next/image";
import ReportIssue from "./Form/ReportIssue";
import WriteReview from "./Form/WriteAReview";

const RightImg = (props) => {
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

    const btnHandler = (id) => {
        setFormBtn((prevState) => {
            const newState = [...prevState];
            newState.forEach((item, index) => {
                index === id ? (item.active = true) : (item.active = false);
            });
            return newState;
        });
    };

    return (
        <div className=" w-[697px] h-screen overflow-y-auto overflow-x-hidden bg-[#1e1629] pt-[28px] pb-[140px] pl-[75px] pr-[85px] ">
            <div className=" w-[537px] ">
                {/* go back btn  */}
                <button className={`${Classess.goBackBtn} ml-auto mr-[10px] `} onClick={props.back}>
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
                <div className=" flex gap-x-[70px] mt-[44px]  ">
                    {formBtn.map((btn, index) => {
                        return (
                            <div
                                key={index}
                                className=" cursor-pointer"
                                onClick={() => btnHandler(index)}
                            >
                                <p
                                    className={`text-[#D55460] ${
                                        btn.active ? "" : "text-[#8e8a94]"
                                    } font-mazin font-bold 
                                        text-[16px] leading-[20px] capitalize  `}
                                >
                                    {btn.text}
                                </p>
                                {btn.active ? (
                                    <div className=" w-[90%] mx-auto mt-2 h-[3px] bg-[#D55460] "></div>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
                {formBtn[0].active ? <ReportIssue /> : <WriteReview />}
            </div>
        </div>
    );
};

export default RightImg;