import React from 'react'
import RankCard from '../../OverviewCards/RankCard/RankCard'


const BuildCard = (props) => {
  return (
      <div
          className={`text-white text-4xl py-[35px] px-[40px] bg-card-&-content-box flex flex-col w-full smDesktop:pl-[45px] ${props.className}`}
      >
          <h4 className=" font-sf-pro-text text-[23px] leading-[28px] text-accent-color font-bold  ">
              Build
          </h4>
          <RankCard
              className=" bg-transparent flex border-transparent w-full justify-center smDesktop:mt-3 "
              imgClassName=" w-[63px] h-[63px] mr-[20px] last:mr-0 smDesktop:w-[69px] smDesktop:h-[69px]  "
              {...props}
          />
      </div>
  );
}

export default BuildCard