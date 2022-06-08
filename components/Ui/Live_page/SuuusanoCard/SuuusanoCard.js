import React from "react";
import LiveContentWrap from "../../../HOC/LiveContentWrapHoc/LiveContentWrapHoc";
import Image from "next/image";
import SuuuImg from "../../../../public/assets/Live/suuusanoo.png";

const SuuusanoCard = (props) => {
    return (
        <>
            {/* border  */}
            <div className=" border-[6px] rounded-full border-white-blue ">
                {/* image  */}
                <div className=" relative w-[41px] h-[41px] rounded-full m-[3px] ">
                    <Image
                        src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/${props.profileIcon}.png`}
                        alt="Suuu image"
                        layout="fill"
                        className=" rounded-full"
                    />
                </div>
            </div>

            {/* profile name  */}
            <div className=" mt-[5px] ">
                <h6 className=" gotham-10px-mid text-white-blue text-center">
                    {props.summonerName}
                </h6>
                <p className=" gotham-5px-mid text-nav-text text-center">
                    Ladder Rank: 423.211
                </p>
            </div>
        </>
    );
};

export default LiveContentWrap(SuuusanoCard);
