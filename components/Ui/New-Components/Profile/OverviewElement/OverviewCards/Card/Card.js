import React, { useContext, useEffect, useState } from "react";
import StatusCard from "../StatusCard/StatusCard";
import RankCard from "../RankCard/RankCard";
import PlayerList from "../PlayerList/PlayerList";
import ExpandCard from "../../OverviewExpand/ExpandCard/ExpandCard";
import "./Card.module.css";
import CardContext from "../../../../../../../Context/CardContext";
import FullCardContext from "../../../../../../../Context/CardContext";
import { BiExpand } from "react-icons/bi";
import HeightExpand from "./Height-expand/HeightExpand";
import BuildCard from "../../OverviewExpand/BuildCard/BuildCard";

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
                            <StatusCard expand={expandFull} {...props} />
                            {!expandFull ? (
                                <>
                                     <RankCard expand={expandFull} {...props} />
                                    <PlayerList
                                        index={props.index}
                                        {...props}
                                    />
                                </>
                            ) : (
                                <BuildCard {...props} expand={expandFull} />
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
                        {expandFull ? <HeightExpand {...props}/> : null}
                    </>
                )}
            </FullCardContext.Provider>
        </>
    );
};

export default Card;
