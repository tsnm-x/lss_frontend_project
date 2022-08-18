import React, { useState } from "react";
import Classess from "../ReportPortal.module.css";
import { BsQuestionCircle } from "react-icons/bs";
import ReactTooltip from "react-tooltip";

const TextArea = (props) => {
    return (
        <textarea
            className={`${Classess.textarea} w-full h-[270px] `}
            name="description"
            placeholder={props.placeholder}
        ></textarea>
    );
};

const Input = (props) => {
    const [value, setValue] = useState("");

    const valueHandler = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className=" flex flex-col gap-y-[6px] ">
            <label className=" text-white font-inter font-[500] text-[14px] leading-[20px] ">
                {props.title}
            </label>
            {props.type === "textarea" ? (
                <TextArea {...props} />
            ) : (
                <div className=" relative ">
                    <input
                        className={`${Classess.input} w-full `}
                        type="text"
                        value={value}
                        onChange={valueHandler}
                        placeholder={props.placeholder}
                    />
                    {props.about && (
                        <>
                            <button className=" absolute right-[15px] top-[13px] ">
                                <BsQuestionCircle className=" text-[#98A2B3] " />
                            </button>
                        </>
                    )}
                </div>
            )}
            {/* alert  */}
            {props.alert && (
                <p className={Classess.inputAlert}>{props.alert}</p>
            )}
        </div>
    );
};

export default Input;
