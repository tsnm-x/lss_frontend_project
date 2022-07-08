import React from "react";
import Image from 'next/image'
import BatchImg from '../../../../../../../public/assets/new-images/Profile/batch-img.png'
import TierGraphImg  from '../../../../../../../public/assets/new-images/Profile/tier-graph.png'



// top buttons 
const Btns = (props) => {
    return (
        <div className={`flex ${props.className}`}>
            <button
                className=" text-light-text font-sf-pro-text font-medium text-[9px] leading-[11px] rounded-[5px]
                              bg-buttons-gray px-[7px] py-[9px] capitalize smDesktop:text-[11px] smDesktop:leading-[13px] mr-[3px] desktop:text-[18px] desktop:leading-[21px] desktop:p-3 desktop:mr-[6px]  "
            >
                Ranked solo
            </button>
            <button
                className=" text-light-text font-sf-pro-text font-medium text-[9px] leading-[11px] rounded-[5px]
                              bg-buttons-gray px-[7px] py-[9px] capitalize smDesktop:text-[11px] smDesktop:leading-[13px] desktop:text-[18px] desktop:leading-[21px] desktop:p-3 "
            >
                ranked flex
            </button>
        </div>
    );
};

// center batch 
const Batch = (props) => {
    return (
        <div
            className={` flex items-center justify-between mt-[14px] desktop:mt-[30px]  ${props.className}`}
        >
            <div
                className="  relative w-[53px] h-[53px] rounded-full border border-[#fffaff52]
                 smDesktop:w-[68px] smDesktop:h-[68px] desktop:w-[95px] desktop:h-[95px] "
            >
                <Image
                    src={BatchImg}
                    alt="batch image"
                    layout="fill"
                    className="rounded-full"
                />
            </div>
            <div>
                <h4
                    className=" font-sf-pro-text font-bold text-[13px] leading-[15px] text-light-text
                     smDesktop:text-base desktop:text-[25px] desktop:leading-[30px] "
                >
                    Gold IV
                </h4>
                <h3
                    className=" font-sf-pro-text font-bold text-[16px] leading-[19px]
                 text-light-text smDesktop:text-xl desktop:text-[30px] desktop:leading-[36px] "
                >
                    71 LP
                </h3>
            </div>
            <div
                className="font-sf-pro-text font-bold text-[8px] leading-[10px] 
            text-accent-color-2 smDesktop:text-[10px] smDesktop:leading-[12px] desktop:text-[16px] desktop:leading-[19px]  "
            >
                <p>
                    54.62%<span className=" text-grayed-text">WR</span>
                </p>
                <p>
                    65<span className=" text-grayed-text">W</span>
                    <span className=" text-nav-btn">54</span>
                    <span className=" text-grayed-text">L</span>
                </p>
            </div>
        </div>
    );
}

// tier graph 
const TierGraph = (props) => {
    return (
        <div
            className={`  relative w-[163px] h-[70px] mt-3 ${props.className}
         smDesktop:w-full smDesktop:h-[105px] smDesktop:mt-4 desktop:mt-8 desktop:w-[335px] desktop:h-[150px] `}
        >
            <Image
                src={TierGraphImg}
                alt="tier graph component"
                layout="fill"
                className=" rounded-5px  "
            />
        </div>
    );
}

const RankTierGraph = (props) => {
    return (
        <div
            className="  p-[20px_17px_10px_17px]  bg-card-&-content-box rounded
            smDesktop:p-[25px_22px_15px_22px] desktop:p-[38px_32px] "
        >
            {/* top btns  */}
            <Btns />
            {/* batches  */}
            <Batch />
            {/* tier graph  */}
            <TierGraph />
        </div>
    );
};

export default RankTierGraph;
