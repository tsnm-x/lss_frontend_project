import React from "react";
import Image from "next/image";

const ProfileCardPlayersList = (props) => {
    return (
        <div className=" flex bg-full-dark grow shrink basis-0 justify-between -ml-8 pl-6 ">
            {/* left side list  */}
            <div className=" grid grid-cols-2 gap-y-2 w-[300px] py-5 ">
                {props.playerList.map((player, index) => {
                    return (
                        <div
                            key={"player-" + index}
                            className="flex items-center gap-x-3"
                        >
                            <div className=" w-5 h-5 rounded-full border border-mix-white-black-100 relative ">
                                {" "}
                                <Image
                                    className="rounded-full border border-mix-white-black-100"
                                    src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${player.profileIcon}.png`}
                                    alt="player image"
                                    layout="fill"
                                />
                            </div>
                            <h6 className=" gotham-10px-mid text-[10px] text-mix-white-black-100 capitalize ">
                                {player.summonerName}
                            </h6>
                        </div>
                    );
                })}
            </div>
            {/* right side indicator  */}
            {/* <div className={` w-4 h-full ${props.indicatorColor}`}></div> */}
        </div>
    );
};

export default ProfileCardPlayersList;
