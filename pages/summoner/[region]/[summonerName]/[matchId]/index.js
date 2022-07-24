import React from "react";
import HeaderWithSearchbar from "../../../../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar";
import ProfileIntro from "../../../../../components/Ui/New-Components/Analytic_Page/ProfileIntro/ProfileIntro";
import AnalyticsViewBtns from "../../../../../components/Ui/New-Components/Analytic_Page/AnalyticsViewBtns/AnalyticsViewBtns";
import ProfileCompareBar from "../../../../../components/Ui/New-Components/Profile/OverviewElement/OverviewExpand/ProfileCompareBar/ProfileCompareBar";
import LosAndWinRow from "../../../../../components/Ui/New-Components/Profile/OverviewElement/OverviewExpand/LosAndWinRow/LosAndWinRow";
import DataRowGrid from "../../../../../components/Ui/New-Components/Profile/OverviewElement/OverviewExpand/DataRowGrid/DataRowGrid";


const MatchSimulator = () => {
    return (
        <>
            <HeaderWithSearchbar />
            <ProfileIntro />
            <div className=" bg-[#140a22] mb-[100px] ">
                <AnalyticsViewBtns />
                <ProfileCompareBar />
                <LosAndWinRow />
                <DataRowGrid />
            </div>
        </>
    );
};

export default MatchSimulator;
