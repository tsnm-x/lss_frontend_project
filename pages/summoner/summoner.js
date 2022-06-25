import React, { useState } from "react";
import HeaderWithSearchbar from "../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar";
import PlayerInfo from "../../components/Ui/New-Components/Profile/PlayerInfo/PlayerInfo";
import OverviewChampion from "../../components/Ui/New-Components/Profile/OverviewChampionBtns/OverviewChampionBtns";
import Table from "../../components/Ui/New-Components/Profile/TableElement/Table/Table";
import Overview from "../../components/Ui/New-Components/Profile/OverviewElement/Overview/Overview";

// contexts
export const CardContext = React.createContext();

const Summoner = () => {
    const [view, setView] = useState("overview");
    const [cardExpand, setCardExpand] = useState(false);
    const [expandCardNo, setExpandCardNo] = useState(null)

    const viewController = (action) => {
        console.log(action);
        view === action ? null : setView(action);
    };

    const CardsExpandHandler = (ClickedCardIndexNo) => {
        setExpandCardNo(ClickedCardIndexNo);
        console.log("card expand handler");
        cardExpand ? null : setCardExpand(true);
    };

    return (
        <div>
            <HeaderWithSearchbar className=" laptop:py-[16px] " />
            <PlayerInfo />
            <OverviewChampion controller={viewController} currentView={view} />
            {view === "overview" ? (
                <CardContext.Provider
                    value={{
                        expand: cardExpand,
                        expandControl: CardsExpandHandler,
                        expandCardNo: expandCardNo
                    }}
                >
                    <Overview />
                </CardContext.Provider>
            ) : (
                <Table />
            )}
        </div>
    );
};

export default Summoner;
