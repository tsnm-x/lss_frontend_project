import React, { useContext, useEffect, useState } from "react";
import StatusCard from "../StatusCard/StatusCard";
import RankCard from "../RankCard/RankCard";
import PlayerList from "../PlayerList/PlayerList";
import "./Card.module.css";
import { BiExpand } from "react-icons/bi";
import HeightExpand from "./Height-expand/HeightExpand";
import BuildCard from "../../OverviewExpand/BuildCard/BuildCard";
import CardContext from "../../../../../../../Context/CardContext";

const Card = (props) => {
    const [addClass, setAddClass] = useState(false);
    const CardContextObj = useContext(CardContext)

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
        props.index === CardContextObj.expandCardNo? 
        CardContextObj.expandControl(-1) 
        : CardContextObj.expandControl(props.index);
    };
    return (
        <>
            <div
                className={` rounded-5px overflow-hidden grid  border-b border-background ${
                    props.index == CardContextObj.expandCardNo
                        ? "grid-cols-[37%_auto_33px]"
                        : " grid-cols-[336px_186px_361px]"
                } ${props.className}`}
            >
                <StatusCard expand={props.index == CardContextObj.expandCardNo} {...props} />
                {props.index == CardContextObj.expandCardNo?
                (
                    <BuildCard {...props} />
                ) : (
                    <>
                            <RankCard {...props} />
                            <PlayerList
                                index={props.index}
                                ExpandFullHandler={ExpandFullHandler}
                                {...props}
                            />
                            
                    </>
                )}
                {/* right side expand bar  */}
                {props.index == CardContextObj.expandCardNo && (
                    <div
                        onClick={() => {
                            ExpandFullHandler();
                        }}
                        className={`h-full w-[30px] flex items-center justify-center
                                                    rounded-tr-5px rounded-br-5px cursor-pointer smDesktop:w-[50px]  ${
                                                        mainPlayer?.win
                                                            ? "bg-accent-color-2"
                                                            : "bg-accent-color"
                                                    }`}
                    >
                        <BiExpand className=" border-[2px] border-[#141726] rounded-5px text-[18px] smDesktop:text-[20px] " />
                    </div>
                )}
            </div>
            {props.index === CardContextObj.expandCardNo? <HeightExpand {...props}/> : null}
        </>
    );
};

export default Card;
