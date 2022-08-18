import React from "react";
import Input from "./Form/Input";
import Classess from "./ReportPortal.module.css";
import { BiMessageRounded } from "react-icons/bi";
import { RiCheckboxCircleFill } from "react-icons/ri";

const ReportIssue = () => {
    return (
        <form className=" mt-5 flex flex-col gap-y-[20px] ">
            <div className=" grid grid-cols-[320px_auto] gap-x-[30px] ">
                <div className=" ">
                    <Input title="Email" placeholder="olivia@untitledui.com" />
                </div>
                <div className=" flex items-end mb-[12px]  ">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        className=" mr-[10px] mb-[5px] cursor-pointer "
                    />

                    <label
                        htmlFor="checkbox"
                        className=" font-sf-pro-text font-[500] text-[16px] leading-[24px] text-white"
                    >
                        Report anonymously
                    </label>
                </div>
            </div>
            <div className={Classess.inputWrap}>
                <Input
                    title="Title *"
                    placeholder="Give your ticket a title"
                    alert="A title could be something like: BUG - Missing CS/min on Profile Page"
                    about={true}
                    tooltip="hello"
                />
            </div>
            <div className={Classess.inputWrap}>
                <Input
                    title="How to reproduce? (Optional) *"
                    placeholder="Explain your feedback "
                    alert="Specify steps to reproduce the issue"
                    about={true}
                />
            </div>
            <div className={Classess.inputWrap}>
                <Input
                    title="Where does the issue occur (Optional)"
                    placeholder="Paste the link here"
                    about={true}
                />
            </div>
            <div className="">
                <Input
                    title="Description *"
                    placeholder="Enter a description..."
                    alert="Give any details you find relevant."
                    type="textarea"
                    about={true}
                />
            </div>
            <div>
                <button
                    type="submit"
                    className=" bg-[#d55460] text-[#FFFFFE] flex items-center rounded-[4px] gap-x-[8px] px-[32px] py-[14px] ml-auto mt-[44px]  "
                >
                    <RiCheckboxCircleFill className=" text-[18px] " />
                    <p className=" font-inter font-[700] text-[14px] leading-[20px] capitalize ">
                        send report
                    </p>
                </button>
            </div>
        </form>
    );
};

export default ReportIssue;
