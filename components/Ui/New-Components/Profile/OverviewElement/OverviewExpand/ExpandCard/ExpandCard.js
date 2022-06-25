import React from "react";
import StatusCard from "../../OverviewCards/StatusCard/StatusCard";
import BuildCard from "../BuildCard/BuildCard";
import OverviewAndRunBtns from "../OverviewAndRunBtns/OverviewAndRunBtns";
import LosAndWinRow from "../LosAndWinRow/LosAndWinRow";
import PlayerCompare from "../PlayerCompare/PlayerCompare";
import SimulateBtn from "../../../../universal/Btn/SimulateBtn/SimulateBtn";

const ExpandCard = () => {
    return (
        <div className=" relative">
            {/* top row  */}
            <div>
                {/* defeat and build card  */}
                <div className=" grid grid-cols-[420px_800px] ">
                    <StatusCard />
                    <BuildCard />
                </div>
                {/* overview and runes btn  */}
                <OverviewAndRunBtns />
                {/* los and win row  */}
                <LosAndWinRow />
                {/* player compare  */}
                <PlayerCompare />
                {/* simulate btn  */}
                <div className=" text-center mt-16 pb-[85px] ">
                    <SimulateBtn />
                </div>
            </div>
            <div className=" absolute right-0 top-0 w-[2px] h-full bg-accent-color "></div>
        </div>
    );
};

export default ExpandCard;
