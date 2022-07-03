import React, { useEffect, useState } from "react";
import LiveWhiteCardWrapHoc from "../../HOC/old-components/LiveWhiteCardWrapHoc/LiveWhiteCardWrapHoc";
import SuuusanooCard from "../../Ui/Live_page/SuuusanoCard/SuuusanoCard";
import LiveGameAvgRank from "../../Ui/Live_page/LiveGameAvgRank/LiveGameAvgRank";
import NowPlaying from "../../Ui/Live_page/NowPlaying/NowPlaying";
import SuggestedBuild from "../../Ui/Live_page/SuggestedBuild/SuggestedBuild";
import Image from "next/image";
import VS_img from "../../../public/assets/old-images/Live/suggested-builds/vs.png";
// image links
import PredectionCard from "./PredectionCard/PredectionCard";
import PlayerRankRow from "../../Ui/Live_page/PlayerRankRow/PlayerRankRow";
import BottomChart from "./BottomChart/BottomChart";




const LiveContentCard = (props) => {

    const [btnClicked, setBtnClicked] = useState({
        power: false,
        goldDiff: false,
        levelDiff: false
    });

    useEffect(()=>{
        console.log(props.players)
    }, []);

    const changeFormat = (btnLabel) => {
        if(btnLabel === 'power'){
            setBtnClicked({power: true, goldDiff: false, levelDiff: false})
        } else if(btnLabel === 'goldDiff'){
            setBtnClicked({power: false, goldDiff: true, levelDiff: false})
        } else if(btnLabel == 'levelDiff'){
            setBtnClicked({power: false, goldDiff: false, levelDiff: true})
        }
    }

    return (
        <div className=" w-full ">
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
            <div className=" bg-white rounded-[20px] w-full relative pb-[43px] ">
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
                    <div className=" w-[375px] pt-6 relative ">
                        <PredectionCard
                            players={props.players}
                            VS_img={VS_img}
                        />
                        {/* bottom shadow element  */}
                        {/* <div className=" h-12 absolute ">
                            <Image
                                src={BottomWhiteShadow}
                                alt="bottom white shadow"
                                layout="fill"
                            />
                        </div> */}
                    </div>

                    {/* right rank  */}
                    <div className=" w-[285px] flex items-center justify-center py-[25px] ">
                        <PlayerRankRow className=" w-[205px] h-[125px] " />
                    </div>
                </div>
                {/* bottom chart card  */}
                <BottomChart />
                <div className=" flex justify-center py-[25px]">
                    <button className={`rounded-[5px] py-[5px] px-[10px] w-[110px] flex justify-between m-[25px] ${btnClicked.power? "text-white bg-red-500" : "text-gray-800 bg-[#47516c]"}`} onClick={() => changeFormat('power')}><div className="text-[15px] self-center">Power</div><div className={`w-[8px] h-[8px] rounded self-center ${btnClicked.power? "bg-white": "bg-gray-800"}`}></div></button>
                    <button className={`rounded-[5px] py-[5px] px-[10px] w-[110px] flex justify-between m-[25px] ${btnClicked.goldDiff? "text-white bg-red-500" : "text-gray-800 bg-[#47516c]"}`} onClick={() => changeFormat('goldDiff')}><div className="text-[15px] self-center">Gold Diff</div><div className={`w-[8px] h-[8px] rounded self-center  ${btnClicked.goldDiff? "bg-white": "bg-gray-800"}`}></div></button>
                    <button className={`rounded-[5px] py-[5px] px-[10px] w-[110px] flex justify-between m-[25px] ${btnClicked.levelDiff? "text-white bg-red-500" : "text-gray-800 bg-[#47516c]"}`} onClick={() => changeFormat('levelDiff')}><div className="text-[15px] self-center">Level Diff</div><div className={`w-[8px] h-[8px] rounded self-center  ${btnClicked.levelDiff? "bg-white": "bg-gray-800"}`}></div></button>
                </div>
            </div>
        </div>
    );
};

export default LiveWhiteCardWrapHoc(LiveContentCard);
