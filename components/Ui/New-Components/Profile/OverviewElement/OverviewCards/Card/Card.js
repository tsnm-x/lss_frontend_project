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

    let mainPlayer = props.match.players.find((player) => {
        return player.mainPlayer == true;
    });

    const convertM = (value) => {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
        return minutes  // Return is MM : SS
    }

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
                        ? "grid-cols-[336px_498px_50px]"
                        : " grid-cols-[336px_186px_361px]"
                } ${props.className}`}
            >
                <StatusCard expand={props.index == CardContextObj.expandCardNo} {...props} convertM={convertM}/>
                {props.index == CardContextObj.expandCardNo?
                (
                    <BuildCard {...props}  convertM={convertM}/>
                ) : (
                    <>
                            <RankCard {...props}  convertM={convertM}/>
                            <PlayerList
                                index={props.index}
                                ExpandFullHandler={ExpandFullHandler}
                                {...props}
                                convertM={convertM}
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
                                                    rounded-tr-5px rounded-5px cursor-pointer smDesktop:w-[50px]  ${
                                                        convertM(props.match.duration) <= 5 ? "bg-yellow-50" :
                                                        mainPlayer?.win
                                                            ? "bg-accent-color-2"
                                                            : "bg-accent-color"
                                                    }`}
                    >
                        <BiExpand className=" border-[2px] border-[#141726] rounded-5px text-[18px] smDesktop:text-[20px] " />
                    </div>
                )}
            </div>
            {props.index === CardContextObj.expandCardNo? <HeightExpand {...props} convertM={convertM}/> : null}
        </>
    );
};

export default Card;
