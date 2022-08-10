import React from "react";
import Image from "next/image";

const DataRow = (props) => {
    console.log(props);
    return (
        <div
            className={` max-w-[351px] h-[45px] flex items-center gap-x-[32.7px] px-[30px] rounded-5px cursor-pointer ${
                props.reverse
                    ? " flex-row-reverse bg-[#191531]"
                    : " bg-[#251122] "
            }`}
        >
            {/* img list  */}
            <div className=" flex gap-x-[3px] ">
                {props.list.map((img, index) => {
                    return (
                        <div
                            key={index}
                            className={` w-[25px] h-[25px] rounded-5px ${
                                props.reverse ? " bg-[#2c2942]" : "bg-[#372534]"
                            }`}
                        ></div>
                    );
                })}
            </div>
            {/* profile img  */}
            <div className=" flex gap-x-[3px] ">
                <div className=" relative w-[45px] h-[45px] rounded-5px ">
                    <Image
                        src={props.profile.img}
                        alt="profile image"
                        layout="fill"
                    />
                </div>
                <div className="flex flex-col gap-y-[3px] ">
                    {props.profile.power.map((power, index) => {
                        return (
                            <div
                                key={index}
                                className=" relative w-[21px] h-[21px] "
                            >
                                <Image
                                    src={power}
                                    alt="batch img"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-y-[3px] ">
                    {props.profile.batch.map((batch, index) => {
                        return (
                            <div
                                key={index}
                                className=" relative w-[21px] h-[21px] "
                            >
                                <Image
                                    src={batch}
                                    alt="power image"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DataRow;
