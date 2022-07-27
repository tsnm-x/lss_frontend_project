import React, { useContext } from "react";
import { BiExpand } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const PlayerList = (props) => {
    const router = useRouter();

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
            smDesktop:grid-cols-[auto_33px] `}
        >
            {/* player lists  */}
            <div className="h-full relative py-[10px] pl-[18px] pr-[60px]  ">
                {props.index === 0 ? (
                    <div
                        className=" font-sf-pro-text text-[10px] leading-3 font-bold text-accent-color bg-[#2F2937] py-[3px] px-[28px]
                 rounded-bl-[18px] absolute top-0 right-0 "
                    >
                        Ace
                    </div>
                ) : null}

                {/* players  */}
                <div className=" grid grid-cols-2 gap-x-1 ">
                    {orderedPlayersList.map((player, index) => {
                        return (
                            <div
                                className={`flex items-center justify-start mb-1`}
                                key={index}
                            >
                                <div
                                    className={`border border-[#707070] relative w-[22px] h-[22px] rounded-full mr-[8px] 
                                    `}
                                >
                                    <Image
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${player?.championName}.png`}
                                        alt={player?.summonerName + "image"}
                                        layout="fill"
                                        className=" rounded-full"
                                    />
                                </div>
                                <Link href={{
                                    pathname:'/summoner/[region]/[summonerName]',
                                    query: {region: router?.query.region, summonerName: player?.summonerName}

                                }}>
                                    <h6
                                        className={`gotham-mid-15 capitalize cursor-pointer ${
                                            player?.mainPlayer
                                                ? player?.win
                                                    ? "text-accent-color-2"
                                                    : "text-accent-color"
                                                : "text-grayed-text"
                                        } `}
                                    >
                                        {player?.summonerName?.slice(0, 7)}
                                        {player?.summonerName?.length >= 7 && "..."}
                                    </h6>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* right side expand btn  */}
            <div
                onClick={() => props.ExpandFullHandler()}
                className={`h-full w-[30px] flex items-center justify-center
                rounded-tr-5px rounded-br-5px cursor-pointer smDesktop:w-[33px]  ${
                mainPlayer?.win ? "bg-accent-color-2" : "bg-accent-color"
            }`}
            >
                <BiExpand className=" border-[2px] border-[#141726] rounded-5px text-[18px] smDesktop:text-[20px] " />
            </div>
        </div>
    );
};

export default PlayerList;
