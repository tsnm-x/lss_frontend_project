import React, { useContext } from "react";
import { BiExpand } from "react-icons/bi";
import Image from "next/image";
import CardContext from "../../../../../../../Context/CardContext";
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

    const orderedPlayersList = [];
	orderedPlayersList[0] = props.match.players[5];
	orderedPlayersList[1] = props.match.players[0];
	orderedPlayersList[2] = props.match.players[6];
	orderedPlayersList[3] = props.match.players[1];
	orderedPlayersList[4] = props.match.players[7];
	orderedPlayersList[5] = props.match.players[2];
	orderedPlayersList[6] = props.match.players[8];
	orderedPlayersList[7] = props.match.players[3];
	orderedPlayersList[8] = props.match.players[9];
	orderedPlayersList[9] = props.match.players[4];

    let mainPlayer = props.match.players.find((player) => {
        return player.mainPlayer == true;
    });

    return (
        <div
            className={`bg-card-&-content-box grid grid-cols-[auto_30px] 
            smDesktop:grid-cols-[auto_33px] desktop:grid-cols-[auto_36px]
            ${props.expand ? " desktop:pl-[34px] " : ""} `}
        >
            {/* player lists  */}
            <div className="h-full relative py-[10px] pl-[18px] pr-[60px] desktop:pl-[24px] ">
                {props.index === 0 ? (
                    <div
                        className=" font-sf-pro-text text-[10px] leading-3 font-bold text-accent-color bg-[#2F2937] py-[3px] px-[28px]
                 rounded-bl-[18px] absolute top-0 right-0 "
                    >
                        Ace
                    </div>
                ) : null}

                {/* players  */}
                <div className=" grid grid-cols-2 gap-x-1 desktop:content-center desktop:h-full ">
                    {orderedPlayersList.map((player, index) => {
                        return (
                            <div
                                className={`flex items-center justify-start mb-1 ${props.expand ? " desktop:mb-[6px] " : ""}`}
                                key={index}
                            >
                                <div
                                    className={`border border-[#707070] relative w-[22px] h-[22px] rounded-full mr-[8px] 
                                    desktop:w-[24px] desktop:h-[24px] ${
                                        props.expand
                                            ? " desktop:w-[43px] desktop:h-[43px] desktop:mr-6 "
                                            : ""
                                    }`}
                                >
                                    <Image
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${player?.championName}.png`}
                                        alt={player?.summonerName + "image"}
                                        layout="fill"
                                        className=" rounded-full"
                                    />
                                </div>
                                <h6
                                    className={`gotham-mid-15 capitalize ${
                                        player?.mainPlayer
                                            ? player?.win
                                                ? "text-accent-color-2"
                                                : "text-accent-color"
                                            : "text-grayed-text"
                                    } ${props.expand ? " desktop:text-[20px] desktop:leading-[22px] " : ""}`}
                                >
                                    {player?.summonerName?.slice(0, 7)}
                                    {player?.summonerName?.length >= 7 && "..."}
                                </h6>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* right side expand btn  */}
            <div
                onClick={() => CardExpand.expandControl(props.index, props)}
                className={`h-full w-[30px] flex items-center justify-center
              rounded-tr-5px rounded-br-5px cursor-pointer smDesktop:w-[33px]  ${
                  mainPlayer?.win ? "bg-accent-color-2" : "bg-accent-color"
              }`}
            >
                <BiExpand className=" border-[2px] border-[#141726] rounded-5px text-[18px] smDesktop:text-[20px] desktop:text-[22px] " />
            </div>
        </div>
    );
};

export default PlayerList;
