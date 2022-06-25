import React from 'react'
import RankCard from '../../OverviewCards/RankCard/RankCard'


const BuildCard = (props) => {
  return (
      <div
          className={`text-white text-4xl py-[35px] px-[40px] bg-card-&-content-box flex flex-col w-full ${props.className}`}
      >
          <h4 className=" font-sf-pro-text text-[23px] leading-[28px] text-accent-color font-bold  ">
              Build
          </h4>
          <RankCard
              className=" bg-transparent flex border-transparent w-full justify-center "
              imgClassName=" w-[63px] h-[63px] mr-[20px] last:mr-0 "
          />
      </div>
  );
}

export default BuildCard