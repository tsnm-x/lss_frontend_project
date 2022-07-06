import React, { useState } from "react";
import StatusCard from "../../OverviewCards/StatusCard/StatusCard";
import BuildCard from "../BuildCard/BuildCard";
import OverviewAndRunBtns from "../OverviewAndRunBtns/OverviewAndRunBtns";
import LosAndWinRow from "../LosAndWinRow/LosAndWinRow";
import PlayerCompare from "../PlayerCompare/PlayerCompare";
import SimulateBtn from "../../../../universal/Btn/SimulateBtn/SimulateBtn";
import AnalyticsBtns from "../../SimulateGame/AnalyticsBtns/AnalyticsBtns";
import Simulation from "../../SimulateGame/Simulation/Simulation";
import HeaderOnSimulateGameMode from "../../SimulateGame/Simulation/HeaderOnSimulateGameMode/HeaderOnSimulateGameMode";

// runes context menu
export const RunesContext = React.createContext();

const ExpandCard = (props) => {
    const [showRunes, setShowRunes] = useState(false);
    const [showSimulatedGraph, setShowSimulateGraph] = useState(false);

    const showRunesHandler = (btnState) => {
        setShowRunes(btnState);
    };

    const simulateDataHandler = () => {
        console.log("render");
        setShowSimulateGraph(true);
    };

    return (
        <div className=" relative">
            {/* top row  */}
            <div className="mr-[5px]">
                {/* defeat and build card  */}
                <div className=" grid grid-cols-[420px_800px] ">
                    <StatusCard {...props} />
                    <BuildCard {...props}/>
                </div>
                <div>
                    {!showSimulatedGraph ? (
                        <>
                            {/* overview and runes btn  */}
                            <OverviewAndRunBtns
                                runesHandler={showRunesHandler}
                                currentRunes={showRunes}
                            />
                            {/* los and win row  */}
                            <LosAndWinRow showProfile={showRunes} {...props} />
                        </>
                    ) : (
                        <HeaderOnSimulateGameMode setShowSimulateGraph={setShowSimulateGraph} setExpand={props.setExpand} expand={props.expand} />
                    )}
                </div>
                {/* player compare  */}
                <RunesContext.Provider value={{ runes: showRunes }}>
                    <PlayerCompare showRunes={showRunes} {...props} showSimulatedGraph={showSimulatedGraph} />
                </RunesContext.Provider>
                {/* simulate btn and simulation card  */}
                <div className=" text-center mt-16 pb-[73px] mb-4 ">
                    {!showSimulatedGraph ? (
                        <SimulateBtn click={simulateDataHandler} />
                    ) : (
                        <Simulation />
                    )}
                </div>
            </div>
            <div className=" absolute right-0 top-0 w-[2px] h-full bg-accent-color "></div>
        </div>
    );
};

export default ExpandCard;
