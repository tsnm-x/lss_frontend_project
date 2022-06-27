import React, { useState } from "react";

const Buttons = (props) => {
    const [btns, setBtns] = useState([
        {
            text: "overview",
            active: true,
        },
        {
            text: "skirmish log",
            active: false,
        },
    ]);

    const btnClickHandler = (btnTxt) => {
        // console.log(btnTxt)
        setBtns((prevState) => {
            const modifyedState = [];
            prevState.forEach((item) => {
                item.text === btnTxt ? (item.active = true) : (item.active = false);
                modifyedState.push(item);
            });
            return modifyedState;
        });
    };

    return (
        <div className=" flex ml-[28px] ">
            {btns.map((btn, index) => {
                return (
                    <div className=" mr-10" key={index}>
                        <button
                            onClick={() => btnClickHandler(btn.text)}
                            className={` sf-bold-11 capitalize ${
                                btn.active
                                    ? "text-accent-color"
                                    : "text-grayed-text"
                            }`}
                        >
                            {btn.text}
                        </button>
                        {btn.active && (
                            <div className=" bg-accent-color w-3/6 h-[1px] mx-auto "></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const SimulationData = () => {
    return (
        <div className="  rounded-5px bg-[#4777fc0f] w-[325px] h-[371px]  ">
            <h4 className=" sf-bold-19 text-light-text capitalize pt-[24px] pl-[25px] ">
                simulation data
            </h4>
            <Buttons />
            {/* damage card  */}
            <div className=" w-full rounded-5px bg-card-&-content-box  px-[45px] py-2 italic">
                <div className=" grid grid-cols-2">
                    <h6 className=" font-gotham text-[8px] leading-[9px] font-bold text-grayed-text capitalize">
                        damage type
                    </h6>
                    <h6 className=" font-gotham text-[8px] leading-[9px] font-bold text-grayed-text capitalize">
                        fight length
                    </h6>
                </div>
                <div className=" grid grid-cols-2 font-gotham text-[11px] leading-[12px] text-light-text font-bold mt-[10px] ">
                    <div className="">
                        <span className=" text-accent-color mr-1 ">38%</span>
                        <span className=" text-accent-color-2 mr-1 ">62%</span>
                        <span className=" ">0%</span>
                    </div>
                    <p>8.58s</p>
                </div>

                <div className=" grid grid-cols-2 mt-5">
                    <p className=" font-gotham text-[8px] leading-[9px] text-grayed-text font-bold">
                        CC Duration{" "}
                    </p>
                    <p className=" font-gotham text-[11px] leading-[12px] text-light-text font-bold">
                        8.58s
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SimulationData;
