import React from "react";
import Input from "./Form/Input";
import Classess from "./ReportPortal.module.css";
import { BiMessageRounded } from "react-icons/bi";
import { RiCheckboxCircleFill } from "react-icons/ri";

const ReportIssue = () => {
    return (
        <form className=" mt-5 flex flex-col gap-y-[20px] ">
            <div className={Classess.inputWrap}>
                <div className=" w-[320px_auto] gap-x-[30px] ">
                    <Input title="Email" placeholder="olivia@untitledui.com" />
                </div>
            </div>
            <div className={Classess.inputWrap}>
                <Input
                    title="Title *"
                    placeholder="Give your ticket a title"
                    alert="A title could be something like: BUG - Missing CS/min on Profile Page"
                />
            </div>
            <div className={Classess.inputWrap}>
                <Input
                    title="How to reproduce? (Optional) *"
                    placeholder="Explain your feedback "
                    alert="Specify steps to reproduce the issue"
                />
            </div>
            <div className={Classess.inputWrap}>
                <Input
                    title="Where does the issue occur (Optional)"
                    placeholder="Paste the link here"
                />
            </div>
            <div className="">
                <Input
                    title="Description *"
                    placeholder="Enter a description..."
                    alert="Give any details you find relevant."
                    type="textarea"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className=" bg-[#d55460] text-[#FFFFFE] flex items-center rounded-[4px] gap-x-[8px] px-[32px] py-[14px] ml-auto mt-[44px]  "
                >
                    <RiCheckboxCircleFill className=" text-[16px] " />
                    <p className=" font-inter font-[700] text-[14px] leading-[20px] capitalize ">
                        send report
                    </p>
                </button>
            </div>
        </form>
    );
};

export default ReportIssue;
