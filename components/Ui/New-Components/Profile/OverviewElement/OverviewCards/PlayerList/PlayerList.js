import React, { useContext } from "react";
import { BiExpand } from "react-icons/bi";
import Image from "next/image";
import { CardContext } from "../../../../../../../pages/summoner/[region]/[summonerName]/index";
// player list
import Atrox from "../../../../../../../public/assets/new-images/Profile/card/playerlist/Aatrox.png";
import Akali from "../../../../../../../public/assets/new-images/Profile/card/playerlist/Akali.png";
import Amumu from "../../../../../../../public/assets/new-images/Profile/card/playerlist/Amumu.png";
import Hecarim from "../../../../../../../public/assets/new-images/Profile/card/playerlist/Hecarim.png";
import Irelia from "../../../../../../../public/assets/new-images/Profile/card/playerlist/Irelia.png";
import Jayce from "../../../../../../../public/assets/new-images/Profile/card/playerlist/Jayce.png";
import Jhin from "../../../../../../../public/assets/new-images/Profile/card/playerlist/Jhin.png";
import Rell from "../../../../../../../public/assets/new-images/Profile/card/playerlist/Rell.png";
import Seraphine from "../../../../../../../public/assets/new-images/Profile/card/playerlist/Seraphine.png";

const PlayerList = (props) => {
    const CardExpand = useContext(CardContext);

    const playerList = [
        { name: "Avatorio", img: Atrox, marked: false },
        { name: "ZeroCha", img: Akali, marked: false },
        {
            name: "amumu",
            img: Amumu,
            marked: false,
        },
        {
            name: "hecarim",
            img: Hecarim,
            marked: false,
        },
        {
            name: "iralia",
            img: Irelia,
            marked: true,
        },
        {
            name: "jayce",
            img: Jayce,
            marked: false,
        },
        {
            name: "jhin",
            img: Jhin,
            marked: false,
        },
        {
            name: "rell",
            img: Rell,
            marked: false,
        },
        {
            name: "SSGP",
            img: Seraphine,
            marked: false,
        },
    ];

    return (
        <div className=" bg-card-&-content-box grid grid-cols-[auto_35px]">
            {/* player lists  */}
            <div className="h-full relative py-[10px] pl-[18px] pr-[60px] ">
                {props.index === 0 ? (
                    <div
                        className=" font-sf-pro-text text-[10px] leading-3 font-bold text-accent-color bg-[#2F2937] py-[3px] px-[28px]
                 rounded-bl-[18px] absolute top-0 right-0 "
                    >
                        Ace
                    </div>
                ) : null}

                {/* players  */}
                <div className=" grid grid-cols-2 gap-x-1">
                    {playerList.map((player, index) => {
                        return (
                            <div
                                className=" flex items-center justify-start mb-1"
                                key={index}
                            >
                                <div className=" relative w-[22px] h-[22px] rounded-full mr-[8px] ">
                                    <Image
                                        src={player.img}
                                        alt={player.name + "image"}
                                        layout="fill"
                                        className=" rounded-full"
                                    />
                                </div>
                                <h6
                                    className={`gotham-mid-15 capitalize ${
                                        player.marked
                                            ? props.won
                                                ? "text-accent-color-2"
                                                : "text-accent-color"
                                            : "text-grayed-text"
                                    }`}
                                >
                                    {player.name}
                                </h6>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* right side expand btn  */}
            <div
                onClick={() => CardExpand.expandControl(props.index)}
                className={`h-full w-[30px] flex items-center justify-center
              rounded-tr-5px rounded-br-5px cursor-pointer ${
                  props.won ? "bg-accent-color-2" : "bg-accent-color"
              }`}
            >
                <BiExpand
                    size={18}
                    className=" border-[2px] border-[#141726] rounded-5px"
                />
            </div>
        </div>
    );
};

export default PlayerList;
