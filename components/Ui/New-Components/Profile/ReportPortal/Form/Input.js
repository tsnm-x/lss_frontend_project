import React, { useState } from "react";
import Classess from "../ReportPortal.module.css";

const TextArea = (props) => {
    return (
        <div>
            <textarea
                className={`${Classess.textarea} w-full h-[270px] `}
                name="description"
                placeholder={props.placeholder}
            ></textarea>
        </div>
    );
};

const Input = (props) => {
    const [value, setValue] = useState("");

    const valueHandler = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className=" flex flex-col ">
            <label className=" text-white font-inter font-[500] text-[14px] leading-[20px] ">
                {props.title}
            </label>
            {props.type === "textarea" ? (
                <TextArea {...props} />
            ) : (
                <input
                    className={`${Classess.input}`}
                    type="text"
                    value={value}
                    onChange={valueHandler}
                    placeholder={props.placeholder}
                />
            )}

            {/* alert  */}
            {props.alert && (
                <p className={Classess.inputAlert}>{props.alert}</p>
            )}
        </div>
    );
};

export default Input;
