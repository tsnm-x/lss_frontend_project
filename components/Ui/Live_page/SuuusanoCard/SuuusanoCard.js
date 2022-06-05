import React from "react";
import LiveContentWrap from "../../../HOC/LiveContentWrapHoc/LiveContentWrapHoc";
import Image from "next/image";
import SuuuImg from "../../../../public/assets/Live/suuusanoo.png";

const SuuusanoCard = () => {
    return (
        <>
            {/* image  */}
            <div className=" w-[70px] h-[70px] rounded-full p-[3px] border-[5px] border-[#198cff] mb-3 mx-auto ">
                <Image src={SuuuImg} alt="Suuu image" />
            </div>
            {/* profile name  */}
            <div>
                <h6 className=" gotham-10px-mid text-white-blue text-center">Suuusanoo</h6>
                <p className=" sf-7px-regular text-nav-text text-center">
                    Ladder Rank: 423.211
                </p>
            </div>
        </>
    );
};

export default LiveContentWrap(SuuusanoCard);
