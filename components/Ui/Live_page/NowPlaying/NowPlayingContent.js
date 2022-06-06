import React from "react";
import LiveContentWrap from "../../../HOC/LiveContentWrapHoc/LiveContentWrapHoc";
import { BsClock } from "react-icons/bs";

const NowPlayingContent = (props) => {
    return (
        <div className={`${props.className}`}>
            <p className=" gotham-4px-mid capitalize flex flex-col mb-3 ">
                <span className=" capitalize text-full-dark ">now playing</span>
                <span className=" capitalize text-red-yellow ">{props.championName}</span>
            </p>
            <div className=" gotham-4px-mid capitalize text-full-dark flex justify-between items-center  ">
                <p>time</p>
                <p className=" text-white-blue ">{Math.floor(props.ingameTime / 60 )}:{parseInt(((props.ingameTime / 60 ) - Math.floor(props.ingameTime / 60)) * 60)} </p>
                <BsClock className=" text-white-blue" />
            </div>
        </div>
    );
};

export default LiveContentWrap(NowPlayingContent);
