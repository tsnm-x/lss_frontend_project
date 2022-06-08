import React from "react";
import Image from "next/image";
import ProfileWithBatch from "../../../Ui/ProfileWithBatch/ProfileWithBatch";
import VS_img from "../../../../public/assets/Live/suggested-builds/vs.png";

const LeftRankList = (props) => {

    return (
        <div className=" w-full flex flex-col mt-3 gap-y-4 ">
            {props.blueTeam?.map((player, index) => {
                return (
                    <div
                        className={`flex items-center w-full justify-between pl-[30px] pr-[12px] rounded-tr-xl rounded-br-xl border-[0.1px] border-[#198cff3d] ${
                            player?.mainPlayer && "bg-white-blue"
                        }`}
                        key={index}
                    >
                        <div className=" order-1 ">
                            <ProfileWithBatch 
                            imgLink={player?.championName}  
                            rune1={
                                player
                                    ?.perks
                                    .styles[0].style
                            }
                            rune2={
                                player
                                    ?.perks
                                    .styles[1].style
                            }
                            perks={
                                player
                                    ?.perks
                            }
                            />
                        </div>

                        <div className=" flex gap-x-3 bg-full-dark p-[3px] rounded-full ">
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item0}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item1}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item2}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item3}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item4}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                key={player?.item5}
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item5}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item6}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const RightRankList = (props) => {

    return (
        <div className=" w-full flex flex-col mt-3 gap-y-4 ">
            {props.redTeam?.map((player, index) => {
                return (
                    <div
                        className={`flex items-center w-full justify-between pl-[30px] pr-[12px] rounded-tr-xl rounded-br-xl border-[0.1px] border-[#198cff3d]  ${
                            player?.mainPlayer && "bg-white-blue"
                        }`}
                        key={index}
                    >
                        <div className=" order-1 ">
                            <ProfileWithBatch borderColor={'blue'} imgLink={player.championName} />
                        </div>

                        <div className=" flex gap-x-3 bg-full-dark p-[3px] rounded-full ">
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item0}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item1}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item2}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item3}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item4}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item5}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
                            <div
                                className=" relative w-4 h-4 "
                            >
                                <Image
                                    className="rounded-full"
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${player?.item6}.png`}
                                    alt="award list"
                                    layout="fill"
                                />
                            </div>
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

    const blueTeam = [
        orderedPlayersList[0],
        orderedPlayersList[1],
        orderedPlayersList[2],
        orderedPlayersList[3],
        orderedPlayersList[4]
    ]

    const redTeam = [
        orderedPlayersList[5],
        orderedPlayersList[6],
        orderedPlayersList[7],
        orderedPlayersList[8],
        orderedPlayersList[9]
    ]

    return (
        <div className=" flex flex-col bg-white items-start pb-8 rounded-t-lg  ">
            {/* top header  */}
            <div className=" flex justify-between w-5/6 mx-auto -mt-[15px] ">
                <h1 className=" gotham-10px-mid capitalize text-white px-8 py-[10px] bg-white-blue ">
                    predicted builds
                </h1>
                <h1 className=" gotham-10px-mid capitalize text-white px-8 py-[10px] bg-red-yellow-gold ">
                    predicted builds
                </h1>
            </div>
            <div className=" grid grid-cols-[1fr_50px_1fr] items-center w-full justify-between ">
                {/* left  */}
                <LeftRankList blueTeam={blueTeam} />
                {/* center vs  */}
                <div className=" relative w-[26px] h-[41px] ">
                    <Image src={VS_img} alt="vs icon" />
                </div>
                {/* right  */}
                {/* <RightRankList redTeam={redTeam} /> */}
                <h1>hello Mohd Rejoan</h1>
            </div>
        </div>
    );
};

export default PredectionCard;
