import React, { useContext } from "react";
import OverviewCards from "../OverviewCards/OverviewCards";
import OverviewLeft from "../OverviewLeft/OverviewLeft";
import AdsImg from "../../../../../../public/assets/new-images/Profile/ads.png";
import Image from "next/image";
import CardContext from "../../../../../../Context/CardContext";

const Overview = (props) => {
    const { expand, expandControl } = useContext(CardContext);

    return (
        <section className=" my-[60px] relative ">
            <div
                className={`container laptop:grid ${
                    expand
                        ? "laptop:grid-cols-1"
                        : "laptop:grid-cols-[220px_825px]"
                }  laptop:gap-x-[22px] `}
            >
                {/* left side  */}
                {!expand && <OverviewLeft />}
                {/* center  */}
                <OverviewCards region={props?.region} matches={props?.matches} expand={expand} ControlBtnLists={props?.ControlBtnLists} selectedMatchType={props?.selectedMatchType} setSelectedMatchType={props?.setSelectedMatchType} summonerName={props?.summonerName}/>
            </div>
            {!expand && (
                <div className=" absolute right-0 top-[60px] w-[170px] h-full max-h-[1105px] ">
                    <Image src={AdsImg} alt="ads image" layout="fill" />
                </div>
            )}
        </section>
    );
};

export default Overview;
