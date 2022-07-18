import React, { useContext, useEffect, useState } from "react";
import StatusCard from "../StatusCard/StatusCard";
import RankCard from "../RankCard/RankCard";
import PlayerList from "../PlayerList/PlayerList";
import ExpandCard from "../../OverviewExpand/ExpandCard/ExpandCard";
import "./Card.module.css";
import CardContext from "../../../../../../../Context/CardContext";
import FullCardContext from "../../../../../../../Context/CardContext";
import { BiExpand } from "react-icons/bi";
import Image from "next/image";
import HeightExpand from "./Height-expand/HeightExpand";
// img list
import Rank1 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/rank-1.png";
import Rank2 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/rank-2.png";
import Rank3 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/rank-3.png";
import Rank4 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/rank-4.png";
import Rank5 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/rank-5.png";
import Rank6 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/rank-6.png";

const Card = (props) => {
    const [expandFull, setExpandFull] = useState(false);
    const [addClass, setAddClass] = useState(false);
    const { expandCardNo, expand, cardProps } = useContext(CardContext);

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

    const ExpandFullHandler = () => {
        setExpandFull(!expandFull);
    };
    return (
        <>
            <FullCardContext.Provider
                value={{
                    fullExpand: expandFull,
                    expandTrue: ExpandFullHandler,
                }}
            >
                {props.index === expandCardNo ? (
                    <ExpandCard {...props} />
                ) : (
                    <>
                        {/* top card  */}
                        <div
                            className={` rounded-5px overflow-hidden grid  border-b border-background ${
                                expand
                                    ? "grid-cols-[35%_24%_41%] mb-2"
                                    : expandFull
                                    ? "grid-cols-[37%_auto_33px]"
                                    : " grid-cols-[37%_23%_40%]"
                            } ${props.className}`}
                        >
                            <StatusCard expand={expand} {...props} />
                            {!expandFull ? (
                                <>
                                    <RankCard expand={expand} {...props} />
                                    <PlayerList
                                        index={props.index}
                                        {...props}
                                    />
                                </>
                            ) : (
                                <div className=" px-5 py-4 bg-[#241e2c] ">
                                    <h3 className=" text-accent-color font-sf-pro-text font-bold text-[15px] capitalize leading-[18px] ">
                                        build
                                    </h3>
                                    <div className=" flex justify-center gap-x-3 mt-5 ">
                                        {/* large  */}
                                        {[
                                            Rank1,
                                            Rank2,
                                            Rank3,
                                            Rank4,
                                            Rank5,
                                            undefined,
                                        ].map((img, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className=" w-[46px] h-[46px] rounded-full relative bg-[#2f2937]"
                                                >
                                                    {img ? (
                                                        <Image
                                                            src={img}
                                                            alt="image"
                                                            layout="fill"
                                                            className=" rounded-full "
                                                        />
                                                    ) : null}
                                                </div>
                                            );
                                        })}
                                        {/* small img  */}
                                        <div className=" w-[33px] h-[33px] relative rounded-full ">
                                            <Image
                                                src={Rank6}
                                                alt=" rank img"
                                                layout="fill"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* right side expand bar  */}
                            {expandFull && (
                                <div
                                    onClick={() => {
                                        ExpandFullHandler();
                                    }}
                                    className={`h-full w-[30px] flex items-center justify-center
																rounded-tr-5px rounded-br-5px cursor-pointer smDesktop:w-[33px]  ${
                                                                    mainPlayer?.win
                                                                        ? "bg-accent-color-2"
                                                                        : "bg-accent-color"
                                                                }`}
                                >
                                    <BiExpand className=" border-[2px] border-[#141726] rounded-5px text-[18px] smDesktop:text-[20px] " />
                                </div>
                            )}
                        </div>
                        {expandFull ? <HeightExpand /> : null}
                    </>
                )}
            </FullCardContext.Provider>
        </>
    );
};

export default Card;
