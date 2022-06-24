import React, { useState } from "react";
import HeaderWithSearchbar from "../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar";
import PlayerInfo from "../../components/Ui/New-Components/Profile/PlayerInfo/PlayerInfo";
import OverviewChampion from "../../components/Ui/New-Components/Profile/OverviewChampion/OverviewChampion";
import Table from "../../components/Ui/New-Components/Profile/TableElement/Table/Table";
import Overview from "../../components/Ui/New-Components/Profile/OverviewElement/Overview/Overview";

const Summoner = () => {
    const [view, setView] = useState("overview");

    const viewController = (action) => {
        console.log(action);
        view === action ? null : setView(action);
    };

    return (
        <div>
            <HeaderWithSearchbar className=" laptop:py-[16px] " />
            <PlayerInfo />
            <OverviewChampion controller={viewController} currentView={view} />
            {view === "overview" ? <Overview /> : <Table />}
        </div>
    );
};

export default Summoner;
