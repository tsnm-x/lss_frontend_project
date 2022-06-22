import React, { useState } from "react";

const OverviewChampion = () => {
    const [btnActive, setBtnActive] = useState(false);

    const btnHandler = () => {
        setBtnActive(!btnActive);
    };

    return (
        <section className=" laptop:mt-[9px] ">
            <div className=" container flex ">
                <div className=" mr-[21px] ">
                    <button
                        onClick={btnHandler}
                        className={`laptop:sf-mid-21 laptop:capitalize 
                    text-grayed-text ${
                        !btnActive ? "text-grayed-text" : "text-accent-color"
                    }`}
                    >
                        overview
                    </button>
                    {btnActive && (
                        <div className=" bg-accent-color w-3/6 h-[1px] mx-auto mt-[2px] "></div>
                    )}
                </div>
                <div>
                    <button
                        onClick={btnHandler}
                        className={`laptop:sf-mid-21 laptop:capitalize 
                    text-grayed-text  ${
                        btnActive ? "text-grayed-text" : "text-accent-color"
                    }`}
                    >
                        champion pool
                    </button>
                    {!btnActive && (
                        <div className=" bg-accent-color w-3/6 h-[1px] mx-auto mt-[2px] "></div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OverviewChampion;
