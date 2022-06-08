import React from "react";
import classes from "./LiveContentCard.module.css";
import LiveWhiteCardWrapHoc from "../../HOC/LiveWhiteCardWrapHoc/LiveWhiteCardWrapHoc";
import SuuusanooCard from "../../Ui/Live_page/SuuusanoCard/SuuusanoCard";
import LiveGameAvgRank from "../../Ui/Live_page/LiveGameAvgRank/LiveGameAvgRank";
import NowPlaying from "../../Ui/Live_page/NowPlaying/NowPlaying";
import SuggestedBuild from "../../Ui/Live_page/SuggestedBuild/SuggestedBuild";
import Image from "next/image";
import ProfileWithBatch from "../../Ui/ProfileWithBatch/ProfileWithBatch";
import VS_img from "../../../public/assets/Live/suggested-builds/vs.png";
// image links
import MainImg from "../../../public/assets/Live/profile-face/NoPath - Copy (25).png";
import Rank1 from "../../../public/assets/playerCard/NoPath - Copy (33).png";
import Rank2 from "../../../public/assets/playerCard/NoPath - Copy (32).png";
import Rank3 from "../../../public/assets/playerCard/NoPath - Copy (31).png";
import Rank4 from "../../../public/assets/playerCard/NoPath - Copy (30).png";
import Rank5 from "../../../public/assets/playerCard/NoPath - Copy (29).png";
import Rank6 from "../../../public/assets/playerCard/NoPath - Copy (28).png";
import PredectionCard from "./PredectionCard/PRedectionCard";
import PlayerRankRow from "../../Ui/Live_page/PlayerRankRow/PlayerRankRow";
import BottomChart from "./BottomChart/BottomChart";

const LiveContentCard = (props) => {
    const predictBuildsList = [
        {
            main: MainImg,
            list: [Rank1, Rank2, Rank3, Rank4, Rank5, Rank6],
            active: true,
        },
        {
            main: MainImg,
            list: [Rank1, Rank2, Rank3, Rank4, Rank5, Rank6],
            active: false,
        },
        {
            main: MainImg,
            list: [Rank1, Rank2, Rank3, Rank4, Rank5, Rank6],
            active: false,
        },
        {
            main: MainImg,
            list: [Rank1, Rank2, Rank3, Rank4, Rank5, Rank6],
            active: false,
        },
        {
            main: MainImg,
            list: [Rank1, Rank2, Rank3, Rank4, Rank5, Rank6],
            active: false,
        },
    ];

    return (
        <div className=" w-full px-2 ">
            {/* top content  */}
            <div className=" flex items-end w-full justify-between mb-3 ">
                <SuuusanooCard
                    hocStyle={" px-[20px] pt-[12px] pb-[20px] "}
                    summonerName={props.summonerName}
                    profileIcon={props.profileIcon}
                />
                <div className=" w-[190px] ">
                    <div className=" mb-[3px] text-[6px] leading-[8px] flex capitalize px-3 justify-between w-full ">
                        <p>live-game avg rank</p>
                        <p>ranked solo/duo</p>
                    </div>
                    <LiveGameAvgRank
                        hocStyle={` pl-[15px] pr-[12px] pt-[16px] pb-[19px] `}
                    />
                </div>
                <NowPlaying />
                <SuggestedBuild
                    hocStyle={
                        " w-[375px] pr-[28px] pl-[32px] pb-[14px] pt-[12px] "
                    }
                />
            </div>
            {/* bottom content  */}
            <div className=" bg-white rounded-[20px] w-full relative   ">
                {/* timeline  */}
                <div className=" rounded-tl-[10px] bg-white-blue inline-block absolute z-50 left-0 top-0 ">
                    <p className=" gotham-9px-mid capitalize text-white py-[7px] px-[28px] ">
                        timetable
                    </p>
                </div>
                {/* top  */}
                <div className=" relative w-full ">
                    {/* team tittle  */}
                    <div className=" flex justify-center items-center font-gotham-mid text-[12px] capitalize gap-x-4 pt-[53px] pb-[35px] w-[245px] mx-auto ">
                        <h3 className=" text-white-blue ">blue team</h3>
                        <div className=" w-[18px] h-[27px] relative ">
                            <Image src={VS_img} alt="vs image" layout="fill" />
                        </div>
                        <h3 className=" text-red-yellow-gold ">red team</h3>
                    </div>
                </div>
                {/* bottom predection card  */}
                <div className=" bg-[#47516c] flex ">
                    {/* left rank  */}
                    <div className=" w-[285px] flex items-center justify-center py-[25px] ">
                        <PlayerRankRow className=" w-[205px] h-[125px] " />
                    </div>
                    {/* center content  */}
                    <div className=" w-[375px] pt-6">
                        <PredectionCard
                            predictBuildsList={predictBuildsList}
                            VS_img={VS_img}
                        />
                    </div>

                    {/* right rank  */}
                    <div className=" w-[285px] flex items-center justify-center py-[25px] ">
                        <PlayerRankRow className=" w-[205px] h-[125px] " />
                    </div>
                </div>
                {/* bottom chart card  */}
                <BottomChart />
            </div>
        </div>
    );
};

export default LiveWhiteCardWrapHoc(LiveContentCard);
