import React, { useContext, useEffect, useState } from "react";
import OverviewCards from "../OverviewCards/OverviewCards";
import OverviewLeft from "../OverviewLeft/OverviewLeft";
import AdsImg from "../../../../../../public/assets/new-images/Profile/ads.png";
import Image from "next/image";
import CardContext from "../../../../../../Context/CardContext";
import Ads from "../../../../../shared/New-Componets/Ads/Ads";
import { useRouter } from "next/router";

const Overview = (props) => {
    const { expand, setCardExpand, expandControl } = useContext(CardContext);
    const router = useRouter();

    return (
        <section className=" my-[20px] mb-[240px] relative ">
            <div
                className={`container grid 
                grid-cols-[300px_885px]
                gap-x-[31px] max-w-sm-container `}
            >
                {/* left side  */}
                {!expand && (
                    <OverviewLeft
                        rankSolo={props?.rankSolo}
                        rankFlex={props?.rankFlex}
                    />
                )}
                {/* center  */}
                <OverviewCards
                    region={props?.region}
                    matches={props?.matches}
                    expand={expand}
                    setExpand={setCardExpand}
                    expandControl={expandControl}
                    ControlBtnLists={props?.ControlBtnLists}
                    selectedMatchType={props?.selectedMatchType}
                    setSelectedMatchType={props?.setSelectedMatchType}
                    summonerName={props?.summonerName}
                    className={`{${
                        expand ? "smDesktop:ml-0" : "smDesktop:ml-[61px]"
                    }`}
                />
            </div>
        </section>
    );
};

export default Overview;
