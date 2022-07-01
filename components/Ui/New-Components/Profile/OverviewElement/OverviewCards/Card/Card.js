import React, { useContext } from "react";
import StatusCard from "../StatusCard/StatusCard";
import RankCard from "../RankCard/RankCard";
import PlayerList from "../PlayerList/PlayerList";
import ExpandCard from "../../OverviewExpand/ExpandCard/ExpandCard";
import "./Card.module.css";
import CardContext from "../../../../../../../Context/CardContext";
import { useEffect } from "react";
import { useState } from "react";

const Card = (props) => {
    const [addClass, setAddClass] = useState(false);
    const { expandCardNo, expand, cardProps } = useContext(CardContext);

    return (
        <>
            {props.index === expandCardNo ? (
                <ExpandCard {...props}/>
            ) : (
                <div
                    className={` rounded-5px overflow-hidden grid  border-b border-background ${
                        expand ? "grid-cols-[35%_24%_41%]" : " grid-cols-[37%_23%_40%]"
                    } ${props.className}`}
                >
                    <StatusCard expand={expand} {...props} />
                    <RankCard expand={expand} {...props}/>
                    <PlayerList index={props.index} {...props} />
                </div>
            )}
        </>
    );
};

export default Card;