import React from "react";
import OverviewCenter from "../OverviewCenter/OverviewCenter";
import OverviewLeft from "../OverviewLeft/OverviewLeft";
import AdsImg from "../../../../../../public/assets/new-images/Profile/ads.png";
import Image from "next/image";

const Overview = () => {

  const cardList = [
    {
      won: false,
    },
    {
      won: false,
    },
    {
      won: false,
    },
    {
      won: true,
    },
    {
      won: false,
    },
    {
      won: false,
    },
    {
      won: false,
    },
    {
      won: true,
    },
  ]


    return (
        <section className=" my-[60px] relative ">
            <div className="container laptop:grid laptop:grid-cols-[220px_825px] laptop:gap-x-[22px]">
                {/* left side  */}
                <OverviewLeft />
                {/* center  */}
                <OverviewCenter cards={cardList} />
            </div>
            <div className=" absolute right-0 top-[60px] w-[170px] h-full max-h-[1105px] ">
                <Image src={AdsImg} alt="ads image" layout="fill" />
            </div>
        </section>
    );
};

export default Overview;
