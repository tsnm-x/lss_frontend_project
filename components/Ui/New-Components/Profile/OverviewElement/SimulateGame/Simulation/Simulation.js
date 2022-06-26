import React, { useReducer } from "react";
import AnalyticsBtns from "../AnalyticsBtns/AnalyticsBtns";
import PowerChart from "./PowerChart/PowerChart";
import LevelChart from "./LevelDiffChart/LevelDiffChart";
import GoldChart from "./GoldDiffChart/GoldDiffChart";
import SimulationData from "./SimulationData/SimulationData";

const initialState = <PowerChart />;
const Reducer = (state, action) => {
    switch (action) {
        case "power":
            return <PowerChart />;
        case "gold diff":
            return <LevelChart />;
        case "level diff":
            return <GoldChart />;
        default:
            return state;
    }
};

const SimulateDataCard = () => {
    const [ChartComponent, chartDispatch] = useReducer(Reducer, initialState);

    return (
        <div className=" text-white text-5xl">
            <AnalyticsBtns click={chartDispatch} />
            {/* all generated data  */}
            <div className="">
                <div>
                    {ChartComponent}
                </div>
                <SimulationData />
            </div>
        </div>
    );
};

export default SimulateDataCard;
