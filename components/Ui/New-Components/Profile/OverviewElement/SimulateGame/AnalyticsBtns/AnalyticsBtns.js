import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";

const AnalyticsBtns = (props) => {
    const [btns, setBtns] = useState([
        {
            txt: "power",
            active: true,
        },
        {
            txt: "gold diff",
            active: false,
        },
        {
            txt: "level diff",
            active: false,
        },
    ]);

    const clickHandler = (btnTxt) => {
        props.click(btnTxt);
        setBtns((prevState) => {
            const modifyedBtns = [];
            prevState.forEach((item, index) => {
                item.txt === btnTxt
                    ? (item.active = true)
                    : (item.active = false);
                modifyedBtns.push(item);
            });
            return modifyedBtns;
        });
    };

    return (
        <div className=" flex items-center justify-center gap-x-[27px] ">
            {btns.map((btn, index) => {
                return (
                    <button
                        onClick={() => clickHandler(btn.txt)}
                        className={` py-[5px] px-4 pr-2 flex items-center rounded-5px ${
                            btn.active
                                ? "bg-accent-color text-light-text "
                                : " bg-buttons-gray text-grayed-text"
                        }`}
                        key={index}
                    >
                        <p
                            className={`sf-bold-15 capitalize  rounded-5px mr-2 ${
                                btn.active ? "" : ""
                            }`}
                        >
                            {btn.txt}
                        </p>
                        <GoPrimitiveDot
                            size={18}
                            className={`${
                                btn.active ? "" : "text-card-&-content-box"
                            }`}
                        />
                    </button>
                );
            })}
        </div>
    );
};

export default AnalyticsBtns;
