import React from "react";
import RankCard from "../../OverviewCards/RankCard/RankCard";

const BuildCard = (props) => {
    return (
        <div
            className={`text-white text-4xl py-[35px] px-[40px] bg-card-&-content-box flex flex-col w-full smDesktop:pl-[45px] ${props.className}`}
        >
            <h4 className=" font-sf-pro-text text-[23px] leading-[28px] text-accent-color font-bold  desktop:text-[28px] desktop:leading-[34px] ">
                Build
            </h4>
            <RankCard
                className=" bg-transparent flex border-transparent w-full justify-center smDesktop:mt-3 desktop:justify-start desktop:ml-[150px]  "
                imgClassName=" w-[63px] h-[63px] mr-[20px] last:mr-0 smDesktop:w-[69px] smDesktop:h-[69px] desktop:w-[77px] desktop:h-[77px] desktop:mr-[27px]  "
                {...props}
            />
        </div>
    );
};

export default BuildCard;
