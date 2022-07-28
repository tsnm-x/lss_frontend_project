import React from "react";

const CardControlBtns = (props) => {
    const filterMatches = (btn) => {
        props.setSelectedMatchType(btn);
    };
    return (
        <div className="">
            {props?.ControlBtnLists.map((btnName, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => filterMatches(btnName)}
                        className={` sf-mid-14 text-center capitalize  bg-[#3e3847] rounded-5px mr-[10px] h-10  ${
                            index ? "w-[140px] " : "w-[100px]"
                        } ${
                            btnName === props.selectedMatchType
                                ? "text-light-text"
                                : "text-grayed-text"
                        }`}
                    >
                        {btnName}
                    </button>
                );
            })}
        </div>
    );
};

export default CardControlBtns;
