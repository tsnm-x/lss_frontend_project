import React from "react";

const SmallBtn = (props) => {
    const clickHandler = () => {
        props.click();
    };
    return (
        <button
            onClick={clickHandler}
            className=" rounded-[7px] p-[11px_13px] bg-[#242326]
         text-white font-inter font-[700]
             text-[12px] leading-[20px] flex items-center justify-center "
        >
            {props.children}
        </button>
    );
};

export default SmallBtn;
