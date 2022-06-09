import React from "react";
import Image from "next/image";
import ProfileWithBatch from "../../../Ui/ProfileWithBatch/ProfileWithBatch"
import VS_img from "../../../../public/assets/Live/suggested-builds/vs.png";

const LeftRankList = (props) => {
    return (
        <div className={`w-[170px] flex flex-col ${props.className}`}>
            {props.blueTeam.map((player, index) => {
                return (
                    <div
                        className={`relative py-[2.5px] flex items-center w-full justify-start rounded-tr-xl rounded-br-xl border-[0.1px] border-[#198cff3d] pl-[15px] pr-[35px] mb-[4px] ${
                            index == 0 && " bg-white-blue"
                        }`}
                        key={index}
                    >
                        <div className=" flex bg-full-dark  items-center p-[1px] pr-[3px] rounded-full mr-[20px] ">
                            {[player.item0, player.item1, player.item2, player.item3, player.item4, player.item5, player.item6].map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=" relative w-[13px] h-[13px] border-0_3 border-white-blue first:border first:border-[#FFD700] mr-[1px] first:mr-[0] last:mr-[0] first:w-[16px] first:h-[16px] rounded-full   "
                                    >
                                        <Image
                                            src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${item}.png`}
                                            alt="award list"
                                            className="rounded-full"
                                            layout="fill"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <div className=" w-[7px] h-[7px] bg-white border-[0.1px] border-[#707070] rounded-full"></div>

                        <div className=" absolute right-[6px] bottom-0">
                            <ProfileWithBatch borderColor={
                                    "red"
                                }
                                imgLink={
                                    player.championName
                                }
                                rune1={
                                    player.perks
                                        .styles[0].style
                                }
                                rune2={
                                    player.perks
                                        .styles[1].style
                                }
                                perks={
                                    player.perks
                                } className="border-white-blue" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const RightRankList = (props) => {
    return (
        <div className={`w-[170px] flex flex-col ${props.className}`}>
            {props.redTeam.map((player, index) => {
                return (
                    <div
                        className={` relative py-[2.5px] flex items-center w-full justify-end rounded-tl-xl rounded-bl-xl border-[0.1px] border-[#198cff3d] pr-[15px] pl-[35px] mb-[4px] ${
                            index == 0 && " bg-[#FC2300]"
                        }`}
                        key={index}
                    >
                        <div className=" absolute left-[6px] bottom-0 ">
                            <ProfileWithBatch
                                 borderColor={
                                    "red"
                                }
                                imgLink={
                                    player.championName
                                }
                                rune1={
                                    player.perks
                                        .styles[0].style
                                }
                                rune2={
                                    player.perks
                                        .styles[1].style
                                }
                                perks={
                                    player.perks
                                }
                                className="border-[#FC2300] bg-[#FC2300]"
                            />
                        </div>
                        <div className=" w-[7px] h-[7px] bg-white border-[0.1px] border-[#707070] rounded-full mr-[20px] "></div>
                        <div className=" flex bg-full-dark  items-center p-[1px] pr-[3px] rounded-full ">
                            {[player.item0, player.item1, player.item2, player.item3, player.item4, player.item5, player.item6].map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=" relative w-[13px] h-[13px] border-0_3 border-white-blue first:border first:border-[#FFD700] mr-[1px] first:mr-[0] last:mr-[0] first:w-[16px] first:h-[16px] rounded-full   "
                                    >
                                        <Image
                                            src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${item}.png`}
                                            alt="award list"
                                            className="rounded-full"
                                            layout="fill"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const PredectionCard = (props) => {

    const orderedPlayersList = [];
    orderedPlayersList[0] = props.players[5];
    orderedPlayersList[1] = props.players[0];
    orderedPlayersList[2] = props.players[6];
    orderedPlayersList[3] = props.players[1];
    orderedPlayersList[4] = props.players[7];
    orderedPlayersList[5] = props.players[2];
    orderedPlayersList[6] = props.players[8];
    orderedPlayersList[7] = props.players[3];
    orderedPlayersList[8] = props.players[9];
    orderedPlayersList[9] = props.players[4];

    const redTeam = [props.players[0], props.players[1], props.players[2], props.players[3], props.players[4]]
    const blueTeam = [props.players[5], props.players[6], props.players[7], props.players[8], props.players[9]]
    return (
        <div
            className={`flex flex-col bg-white items-start pb-[14px] rounded-t-lg relative bg-[#F6FBFD] ${props.className}`}
        >
            {/* top header  */}
            <div
                className="
                        flex justify-between w-[369px] font-sf-pro text-[5px] leading-[10px] text-center text-white capitalize
                        absolute px-[26px] -top-2
            "
            >
                <h1 className=" bg-white-blue w-[80px] ">predicted builds</h1>
                <h1 className=" bg-red-yellow-gold w-[80px] ">
                    predicted builds
                </h1>
            </div>
            <div className=" grid grid-cols-[170px_auto_170px] items-center w-full justify-between pt-[5px] ">
                {/* left  */}
                <LeftRankList {...props} blueTeam={blueTeam} />
                {/* center vs  */}
                <div className=" relative w-[18px] h-[26px] ">
                    <Image src={VS_img} alt="vs icon" layout="fill" />
                </div>
                {/* right  */}
                <RightRankList {...props} redTeam={redTeam} />
            </div>
        </div>
    );
};

export default PredectionCard;
