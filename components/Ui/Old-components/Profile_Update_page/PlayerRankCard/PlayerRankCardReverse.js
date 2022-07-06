import React from "react";
import PlayerRankRow from "../PlayerRankRow/PlayerRankRow";
import PlayerFaceRow from "../PlayerFaceRow/PlayerFaceRow";

const PlayerRankCard = (props) => {
	return (
        <div className=" grid grid-cols-[39%_55%] justify-between">
            {/* right side  */}
            <PlayerFaceRow
                group={props.secondGroup}
                className=" gap-x-[13px] "
                faceStyle=" order-2 "
                profileBatchBorder="border-[#FA361A]"
            />
            {/* left side  */}
            <PlayerRankRow />
        </div>
    );
};

export default PlayerRankCard;
