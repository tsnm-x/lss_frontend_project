import React, { useEffect, useState } from "react";
import ProfileImg from "../../../../../public/assets/new-images/Profile/Jhin.png";
import batch1 from "../../../../../public/assets/new-images/Profile/card/batch1.png";
import batch2 from "../../../../../public/assets/new-images/Profile/card/batch2.png";
import power1 from "../../../../../public/assets/new-images/Profile/card/SummonerFlash.png";
import power2 from "../../../../../public/assets/new-images/Profile/card/SummonerHeal.png";
import Image from "next/image";
import Classess from "./DataRowGrid.module.css";
import useHttp from "../../../../../hook/useHttp";
import PlayerRow from "../../Profile/OverviewElement/OverviewExpand/PlayerCompare/PlayerRow";
import { useRouter } from "next/router";

const HeaderRow = (props) => {
    return (
        <div
            className={` grid w-[640px] ${
                props.reverce
                    ? "grid-cols-[101px_106px_124px_165px_144px]"
                    : "grid-cols-[144px_165px_154px_76px_101px]"
            }`}
        >
            <div
                className={
                    props.reverce
                        ? " order-5 mr-[15px] text-right "
                        : " order-1 ml-[15px] "
                }
            >
                <h4 className=" font-sf-pro-text font-bold text-[14px] leading-[17px] text-grayed-text capitalize ">
                    Damage Dealt
                </h4>
            </div>
            <div className={props.reverce ? " order-4 " : "order-2"}>
                <h4 className=" font-sf-pro-text font-bold text-[14px] leading-[17px] text-grayed-text capitalize text-center ">
                    Items
                </h4>
            </div>
            <div className={props.reverce ? "order-3" : "order-3"}>
                <h4
                    className={`font-sf-pro-text font-bold text-[14px] leading-[17px] text-grayed-text capitalize ${
                        props.reverce ? " ml-[36px] " : " ml-[52px] "
                    }`}
                >
                    Score
                </h4>
            </div>
            <div className={props.reverce ? "order-2" : "order-4 "}>
                <h4
                    className={`font-sf-pro-text font-bold text-[14px] leading-[17px] text-grayed-text uppercase ${
                        props.reverce ? " ml-[48px] " : ""
                    }`}
                >
                    cs
                </h4>
            </div>
            <div className={props.reverce ? "order-1 text-right " : "order-5"}>
                <h4 className=" font-sf-pro-text font-bold text-[14px] leading-[17px] text-grayed-text capitalize ">
                    {props.reverce ? "blue team" : "red team "}
                </h4>
            </div>
        </div>
    );
};

const DataRow = (props) => {
    
    return (
        <div className=" flex flex-col gap-y-[11px] ">
            {props.players && props.players?.map((player, index) => {
                return (
                    <PlayerRow
                        key={index}
                        match={props.match}
                        reverce={props.reverce}
                        player={player}
                        region={props?.region}
                        setSelectedPlayer={props.setSelectedPlayer}
                        selectedPlayer={props.selectedPlayer}
                        players={props.players}
                        setPlayers={props.setPlayers}
                        selectedFrame={props.selectedFrame}
                        matchTimelineData={props.matchTimelineData}
                        simulatorPlayer={props.simulatorPlayer}
                        setSimulatorPlayer={props?.setSimulatorPlayer}
                    />
                )
            })}
        </div>
    );
};

const DataRowGrid = (props) => {
    const router = useRouter();
    return (
        <div className=" px-[18px] mt-[6px] ">
            {/* header row  */}
            <div className=" grid grid-cols-2 bg-[#1b1425] py-2 rounded-[5px] gap-x-5 ">
                <HeaderRow />
                <HeaderRow reverce={true} />
            </div>
            {/* data  */}
            <div className=" grid grid-cols-2 gap-x-5 mt-[6px] ">
                {/* data row  */}
                <DataRow
                    reverce={false}
                    match={props.match}
                    region={router?.query?.region}
                    frames={props.matchTimelineData?.frames}
                    matchTimelineData={props.matchTimelineData}
                    selectedFrame={props.selectedFrame}
                    selectedPlayer={props.selectedPlayer}
                    setSelectedPlayer={props.setSelectedPlayer}
                    players={props?.leftTeam}
                    simulatorPlayer={props.simulatorPlayerRed}
                    setSimulatorPlayer={props?.setSimulatorPlayerRed}
                />
                <DataRow
                    region={router?.query?.region}
                    reverce={true}
                    match={props.match}
                    frames={props.matchTimelineData?.frames}
                    matchTimelineData={props.matchTimelineData}
                    selectedFrame={props.selectedFrame}
                    selectedPlayer={props.selectedPlayer}
                    setSelectedPlayer={props.setSelectedPlayer}
                    players={props?.rightTeam}
                    simulatorPlayer={props.simulatorPlayerBlue}
                    setSimulatorPlayer={props?.setSimulatorPlayerBlue}
                />
            </div>
            {/* game statics graph  */}
        </div>
    );
};

export default DataRowGrid;
