import React from "react";
import ProfileCardWrapHoc from "../../HOC/ProfileCardWrapHoc";
import Image from "next/image";
import LeeSin from "../../../public/assets/season most played champs/leeSin.png";
import Sejuani from "../../../public/assets/season most played champs/sejuani.png";
import Poppy from "../../../public/assets/season most played champs/poppy.png";

const ChampList = () => {
    const champPlayerList = [
        {
            name: "lee sin",
            image: LeeSin,
            cs: "199,3",
            csRate: 6.4,
            winrate: 55,
            matchPlayed: 277,
            kda: "2.37",
            lastPoint: "7.3/5.3/5.0",
        },
        {
            name: "sejuani",
            image: Sejuani,
            cs: "173,3",
            csRate: 5.7,
            winrate: 48,
            matchPlayed: 23,
            kda: "2.03",
            lastPoint: "7.3/5.3/5.0",
        },
        {
            name: "poppy",
            image: Poppy,
            cs: "200,3",
            csRate: 6.9,
            winrate: 44,
            matchPlayed: 12,
            kda: "2.37",
            lastPoint: "7.3/5.3/5.0",
        },
        {
            name: "lee sin",
            image: LeeSin,
            cs: "199,3",
            csRate: 6.4,
            winrate: 55,
            matchPlayed: 277,
            kda: "2.37",
            lastPoint: "7.3/5.3/5.0",
        },
        {
            name: "sejuani",
            image: Sejuani,
            cs: "173,3",
            csRate: 5.7,
            winrate: 48,
            matchPlayed: 23,
            kda: "2.03",
            lastPoint: "7.3/5.3/5.0",
        },
        {
            name: "poppy",
            image: Poppy,
            cs: "200,3",
            csRate: 6.9,
            winrate: 44,
            matchPlayed: 12,
            kda: "2.37",
            lastPoint: "7.3/5.3/5.0",
        },
        {
            name: "lee sin",
            image: LeeSin,
            cs: "199,3",
            csRate: 6.4,
            winrate: 55,
            matchPlayed: 277,
            kda: "2.37",
            lastPoint: "7.3/5.3/5.0",
        },
        {
            name: "sejuani",
            image: Sejuani,
            cs: "173,3",
            csRate: 5.7,
            winrate: 48,
            matchPlayed: 23,
            kda: "2.03",
            lastPoint: "7.3/5.3/5.0",
        },
        {
            name: "poppy",
            image: Poppy,
            cs: "200,3",
            csRate: 6.9,
            winrate: 44,
            matchPlayed: 12,
            kda: "2.37",
            lastPoint: "7.3/5.3/5.0",
        },
    ];
    return (
        <div className=" relative">
            {/* sidebar  */}
            <div className=" absolute -left-[32px]  btn flex flex-col gap-y-4 w-6 px-0 py-9 rounded-full items-center  ">
                <span className=" gotham-7px-mid">2</span>
                <span className=" gotham-7px-mid">0</span>
                <span className=" gotham-7px-mid">2</span>
                <span className=" gotham-7px-mid">2</span>
            </div>
            {/* player list  */}
            <div className=" flex flex-col gap-y-3 ">
                {champPlayerList.map((player, index) => {
                    return (
                        <div
                            key={"player" + index}
                            className=" flex gap-x-4 items-center justify-between w-full max-w-[250px] "
                        >
                            <div className=" w-10 h-10 rounded-full border border-mix-white-black">
                                <Image src={player.image} alt="player image" />
                            </div>
                            {/* profile details  */}
                            <div className=" grow ">
                                <div className=" text-liquid-white flex justify-between gotham-12px-mid text-[10px] ">
                                    <p className=" capitalize ">
                                        {player.name}
                                    </p>
                                    <p>
                                        <span className=" text-white-blue ">{player.kda}</span>
                                        :1 kda
                                    </p>
                                </div>
                                <div className=" sf-10px-regular text-liquid-white flex justify-between ">
                                    <p className=" uppercase ">
                                        cs {player.cs}{" "}
                                        <span className=" text-mix-white-black-100 ">
                                            {player.csRate}
                                        </span>{" "}
                                    </p>
                                    <p className=" text-mix-white-black-100 ">
                                        {player.lastPoint}
                                    </p>
                                </div>
                                <div className=" sf-10px-regular text-liquid-white flex justify-start ">
                                    <p className=" capitalize ">
                                        {player.winrate}% winrate
                                    </p>
                                    <p className=" text-mix-white-black-100 capitalize ml-4 ">
                                        {player.matchPlayed} played
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProfileCardWrapHoc(ChampList);
