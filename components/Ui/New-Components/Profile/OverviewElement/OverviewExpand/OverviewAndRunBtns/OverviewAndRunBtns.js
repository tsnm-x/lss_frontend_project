import React, { useState } from "react";

const OverviewAndRunBtns = (props) => {
    const [btns, setBtns] = useState([
        { text: "overview", active: true },
        { text: "runes", active: false },
    ]);

    const ClickHandler = (txt) => {
        setBtns((prevState) => {
            const modifyedArray = [];
            prevState.forEach((item, index) => {
                item.text === txt
                    ? (item.active = true)
                    : (item.active = false);
                modifyedArray.push(item);
            });
            return modifyedArray;
        });
        txt === "runes" ? props.runesHandler(true) : props.runesHandler(false);
    };

    return (
        <div className=" mt-[18px] mb-[30px] text-center ">
            {btns.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => ClickHandler(item.text)}
                        className={`font-sf-pro-text text-[19px]
             leading-[23px] font-bold capitalize mx-[40px] ${
                 item.active ? "text-accent-color" : "text-grayed-text"
             } `}
                    >
                        {item.text}
                    </button>
                );
            })}
        </div>
    );
};

export default OverviewAndRunBtns;
