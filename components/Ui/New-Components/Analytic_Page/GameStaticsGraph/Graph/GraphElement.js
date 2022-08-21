import React, { useState } from "react";
import Graph from "./Graph";

const GraphElement = (props) => {
    const [btnList, setBtnList] = useState([
        {
            txt: "Damage Dealt",
            active: true,
        },
        {
            txt: "CS/Time",
            active: false,
        },
        {
            txt: "Gold/Time",
            active: false,
        },
        {
            txt: "XP/Time",
            active: false,
        },
    ]);

    const btnHandler = (id) => {
        setBtnList((prevState) => {
            const modifyedBtn = [...prevState];
            modifyedBtn.filter((btn, index) => {
                return id === index
                    ? (btn.active = true)
                    : (btn.active = false);
            });
            return modifyedBtn;
        });
    };

    return (
        <div
            className={`  rounded-5px w-full mt-[20px] ${
                !props.expand ? "h-0" : "h-[290px]"
            } [transition:height_0.4s] `}
        >
            {/* graph btns  */}
            <div>
                {/* btns  */}
                <div className=" flex gap-x-[15px]  ">
                    {btnList.map((btn, index) => {
                        return (
                            <button
                                onClick={() => btnHandler(index)}
                                key={index}
                                className={` font-inter font-bold text-[10px] leading-[14px] rounded-full
                         text-white py-[5px] px-[15px] ${
                             btn.active
                                 ? " bg-[#d55460] border border-[#d55460]"
                                 : "bg-[#120c1d] border border-white "
                         } `}
                            >
                                {btn.txt}
                            </button>
                        );
                    })}
                </div>
            </div>
            {/* graph component  */}
            <div
                className={` ${!props.expand ? "opacity-[0]" : "opacity-[1] "}`}
            >
                <Graph
                    frames={props.frames}
                    selectedPlayers={props.selectedPlayers}
                />
            </div>
        </div>
    );
};

export default GraphElement;
