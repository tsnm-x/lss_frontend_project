import React, { useContext } from "react";
import StatusCard from "../StatusCard/StatusCard";
import RankCard from "../RankCard/RankCard";
import PlayerList from "../PlayerList/PlayerList";
import ExpandCard from "../../OverviewExpand/ExpandCard/ExpandCard";
import "./Card.module.css";
import { CardContext } from "../../../../../../../pages/summoner/[region]/[summonerName]/index";
import { useEffect } from "react";
import { useState } from "react";

const Card = (props) => {
    const [addClass, setAddClass] = useState(false);
    const { expandCardNo, expand } = useContext(CardContext);

    return (
        <>
            {props.index === expandCardNo ? (
                <ExpandCard />
            ) : (
                <div
                    className={` rounded-5px overflow-hidden grid grid-cols-[35%_24%_41%] border-b border-background ${
                        expand ? "" : " "
                    } ${props.className}`}
                >
                    <StatusCard expand={expand} {...props} />
                    <RankCard expand={expand} />
                    <PlayerList index={props.index} {...props} />
                </div>
            )}
        </>
    );
};

export default Card;
