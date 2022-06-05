import React from "react";
import RankImg from "../../../../public/assets/rank-icon.png";
import Image from "next/image";
import LiveContentWrap from "../../../HOC/LiveContentWrapHoc/LiveContentWrapHoc";

const LiveGameAvgRank = () => {
    return (
        <div className=" text-red-800 flex items-center ">
            {/* image  */}
            <div className=" w-24 ">
                <Image src={RankImg} alt="Rank Image Icon" />
            </div>
            {/* texts  */}
            <div>
                <div className=" flex items-center mb-[2px] ">
                    <h3 className=" gotham-10px-mid text-full-dark px-2 ">Gold IV</h3>
                    <div className=" flex flex-col gotham-5px-mid mr-1 ">
                        <span className=" uppercase text-white-blue ">
                            +18lp
                        </span>
                        <span className=" uppercase text-red-yellow-gold">
                            -15lp
                        </span>
                    </div>
                    <div className=" gotham-2px-mid text-full-dark flex flex-col justify-center">
                        <span>Predicted</span>
                        <span>LP Gain/Loss</span>
                    </div>
                </div>
                <div className=" gotham-5px-mid text-full-dark ">
                    <p>
                        Your winrate:{" "}
                        <span className=" text-white-blue">54.62%</span>
                    </p>
                    <p className=" ">
                        <span className=" uppercase mr-1">
                            65<span className=" text-white-blue">w</span>
                        </span>
                        <span className=" uppercase">
                            54<span className=" text-red-yellow-gold">l</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LiveContentWrap(LiveGameAvgRank);
