import React from "react";

const StatusCard = () => {
    return (
        <div className=" p-5 pt-[15px] bg-card-&-content-box  ">
            {/* left side  */}
            <div className="font-sf-pro-text font-bold">
                <h4 className="  text-accent-color capitalize ">
                    <span className=" text-[17px] leading-[20px] ">Defeat</span>{" "}
                    <span className=" text-[12px] leading-[14px] text-light-text ">
                        24:14
                    </span>
                </h4>
                <h6 className=" text-[12px] leading-[14px] text-grayed-text mt-1">
                    Ranked solo
                </h6>
                <h2 className=" text-light-text text-[25px] leading-[30px] mt-[10px] ">
                    6/8/10
                </h2>
                <h6 className=" text-[12px] leading-[14px] text-grayed-text mt-[10px] ">
                    2 Days ago
                </h6>
            </div>
            {/* right side  */}
        </div>
    );
};

export default StatusCard;
