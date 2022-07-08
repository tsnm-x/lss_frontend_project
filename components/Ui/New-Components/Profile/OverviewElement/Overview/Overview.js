import React, { useContext } from "react";
import OverviewCards from "../OverviewCards/OverviewCards";
import OverviewLeft from "../OverviewLeft/OverviewLeft";
import AdsImg from "../../../../../../public/assets/new-images/Profile/ads.png";
import Image from "next/image";
import CardContext from "../../../../../../Context/CardContext";
import Ads from "../../../../../shared/New-Componets/Ads/Ads";

const Overview = (props) => {
    const { expand, setCardExpand, expandControl } = useContext(CardContext);

    return (
        <section className=" my-[60px] relative ">
            <div
                className={`container laptop:grid ${
                    expand
                        ? "laptop:grid-cols-1"
                        : "laptop:grid-cols-[220px_825px] smDesktop:grid-cols-[280px_auto] smDesktop:gap-x-[61px] desktop:grid-cols-[415px_auto] desktop:gap-x-[56px] "
                }  laptop:gap-x-[22px] `}
            >
                {/* left side  */}
                {!expand && <OverviewLeft />}
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

            {!expand && (
                <div className="absolute right-0 top-[60px] w-[170px] h-full smDesktop:hidden ">
                    <Ads className="w-[170px] h-[1105px]" />
                </div>
            )}
        </section>
    );
};

export default Overview;
