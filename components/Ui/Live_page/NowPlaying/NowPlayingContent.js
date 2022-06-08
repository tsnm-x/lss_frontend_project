import React from "react";
import LiveContentWrap from "../../../HOC/LiveContentWrapHoc/LiveContentWrapHoc";
import { BsClock } from "react-icons/bs";

const NowPlayingContent = (props) => {
    return (
        <div
            className={`${props.className} font-gotham-book text-[4px] leading-[5px]`}
        >
            <p className=" capitalize flex flex-col mb-[4px] ">
                <span className=" capitalize text-full-dark ">now playing</span>
                <span className=" capitalize text-red-yellow ">
                    {props.championName}
                </span>
            </p>
            <div className=" capitalize text-full-dark flex justify-between items-center  ">
                <p>time</p>
                <div className=" flex ">
                    <p className=" text-white-blue mr-[8px]  ">
                        {Math.floor(props.ingameTime / 60)}:
                        {parseInt(
                            (props.ingameTime / 60 -
                                Math.floor(props.ingameTime / 60)) *
                                60
                        )}{" "}
                    </p>
                    <BsClock className=" text-white-blue" />
                </div>
            </div>
        </div>
    );
};

export default LiveContentWrap(NowPlayingContent);
