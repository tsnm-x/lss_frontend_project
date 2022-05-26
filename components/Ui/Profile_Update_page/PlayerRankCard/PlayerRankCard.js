import React from "react";
import PlayerRankRow from "../PlayerRankRow/PlayerRankRow";
import PlayerFaceRow from "../PlayerFaceRow/PlayerFaceRow";

const PlayerRankCard = (props) => {
    return (
        <div className=" grid grid-cols-[55%_39%] justify-between">
            {/* left side  */}
            <PlayerRankRow />
            {/* right side  */}
            <PlayerFaceRow  group ={props.firstGroup}/>
        </div>
    );
};

export default PlayerRankCard;
