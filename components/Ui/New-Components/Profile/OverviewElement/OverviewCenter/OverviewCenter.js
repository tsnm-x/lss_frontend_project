import React from "react";
import Image from "next/image";
import AdsImg from "../../../../../../public/assets/new-images/Profile/ads.png";
import CardControlBtns from "./CardControlBtns/CardControlBtns";
import Card from "./Card/Card";

const OverviewCenter = () => {
    const CardData = ["", "", "", "", "", "", "", ""];
    return (
        <aside className=" w-full ">
            <CardControlBtns />
            <div className=" mt-5 relative">
                {/* card container  */}
                <div className=" max-w-[825px] ">
                    {CardData.map((card, index) => {
                        return <Card key={index} index={index} />;
                    })}
                </div>
            </div>
        </aside>
    );
};

export default OverviewCenter;
