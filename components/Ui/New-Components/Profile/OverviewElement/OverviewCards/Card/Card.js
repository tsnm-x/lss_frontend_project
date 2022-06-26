import React, { useContext } from "react";
import StatusCard from "../StatusCard/StatusCard";
import RankCard from "../RankCard/RankCard";
import PlayerList from "../PlayerList/PlayerList";
import ExpandCard from "../../OverviewExpand/ExpandCard/ExpandCard";
import { CardContext } from "../../../../../../../pages/summoner/summoner";

const Card = (props) => {
    const { expandCardNo } = useContext(CardContext);

    return (
        <>
            {props.index === expandCardNo ? (
                <ExpandCard />
            ) : (
                <div
                    className={`rounded-5px overflow-hidden flex justify-start border-b border-background ${props.className}`}
                >
                    <StatusCard {...props} />
                    <RankCard />
                    <PlayerList index={props.index} {...props} />
                </div>
            )}
        </>
    );
};

export default Card;
