import React, { useState } from "react";
import Image from "next/image";
import PlayerOne from "../../../public/assets/players/NoPath - Copy (10).png";
import PlayerTwo from "../../../public/assets/players/NoPath - Copy (11).png";
import PlayerThree from "../../../public/assets/players/NoPath - Copy (12).png";
import { HiArrowDown } from "react-icons/hi";
import ChampList from "./ChampList";
import ProfileCardWrapHoc from "../../HOC/ProfileCardWrapHoc";

const SeasonMostPlayed = () => {
    const [expand, setExpand] = useState(false);

    const player = [
        { name: "141 games", img: PlayerOne },
        { name: "43 games", img: PlayerTwo },
        { name: "15 games", img: PlayerThree },
    ];

    const expandHandler = () => {
        setExpand(!expand);
    };

    return (
        <React.Fragment>
            {/* <aside className="card_wrap "> */}
                {/* top slider  */}
                <div className=" pb-6 ">
                    <div className=" flex mb-6 justify-between  ">
                        {player.map((player, index) => {
                            return (
                                <div key={"player" + index}>
                                    <div className=" mx-auto w-10 h-10 border border-mix-white-black rounded-full mb-3 ">
                                        <Image
                                            src={player.img}
                                            alt="player image"
                                        />
                                    </div>
                                    <p className=" gotham-10px-mid text-[#8D919F] ">
                                        {player.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className=" flex gap-x-[2px] justify-end">
                        <div className=" w-10 h-[3px] bg-liquid-white rounded-full"></div>
                        <div className=" w-6 h-[3px] bg-mix-white-black rounded-full"></div>
                        <div className=" w-6 h-[3px] bg-mix-white-black rounded-full"></div>
                        <div className=" w-6 h-[3px] bg-mix-white-black rounded-full"></div>
                    </div>
                </div>
                {/* player champ list  */}
                {expand && <ChampList title="season most played champs" />}
                {/* bottom button  */}
                <button
                    onClick={expandHandler}
                    className=" btn rounded-full w-12 h-12 p-0 flex justify-center items-center border-0 cursor-pointer mx-auto mt-5 hover:bg-btn-hover hover:rotate-45 "
                >
                    <HiArrowDown className=" text-[22px]" />
                </button>
            {/* </aside> */}
        </React.Fragment>
    );
};

export default ProfileCardWrapHoc(SeasonMostPlayed);
