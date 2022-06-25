import React from "react";
import Image from "next/image";
import AdsImg from "../../../../../../public/assets/new-images/Profile/ads.png";
import CardControlBtns from "./CardControlBtns/CardControlBtns";
import Card from "./Card/Card";
import ShowMore from "../../../universal/Btn/ShowMore/ShowMore";

const OverviewCenter = (props) => {
  const { cards } = props;
    return (
        <aside className=" w-full ">
            <CardControlBtns />
            <div className=" mt-5 relative">
                {/* card container  */}
                <div className=" max-w-[825px] ">
                    {cards.map((card, index) => {
                        return <Card key={index} index={index} {...card} />;
                    })}
                </div>
                {/* show more btn  */}
                <ShowMore />
            </div>
        </aside>
    );
};

export default OverviewCenter;
