import React, { useContext } from "react";
import StatusCard from "../StatusCard/StatusCard";
import RankCard from "../RankCard/RankCard";
import PlayerList from "../PlayerList/PlayerList";

const Card = (props) => {
    return (
        <div
            className={`rounded-5px overflow-hidden flex justify-start border-b border-background ${props.className}`}
        >
            <StatusCard {...props} />
            <RankCard />
            <PlayerList index={props.index} {...props} />
        </div>
    );
};

export default Card;
