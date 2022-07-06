import React, { useEffect, useState } from "react";
import Image from "next/image";
import AdsImg from "../../../../../../public/assets/new-images/Profile/ads.png";
import CardControlBtns from "./CardControlBtns/CardControlBtns";
import Card from "./Card/Card";
import ShowMore from "../../../universal/Btn/ShowMore/ShowMore";
import ExpandCard from "../OverviewExpand/ExpandCard/ExpandCard";
import Ads from "../../../../../shared/New-Componets/Ads/Ads";


const OverviewCards = (props) => {
    const { cards } = props;
    const [loaderViewer, setLoaderViewer] = useState(true);
    const [rankedSolo, setRankedSolo] = useState([]);
    const [normals, setNormals] = useState([]);
    const [rankedFlex, setRankedFlex] = useState([]);

    useEffect(() => {
        setRankedSolo(
            props.matches?.filter((match) => {
                return match.queueId === 420;
            })
        );

        setNormals(
            props.matches?.filter((match) => {
                return match.queueId !== 420 && match.queueId !== 440;
            })
        );

        setRankedFlex(
            props.matches?.filter((match) => {
                return match.queueId === 440;
            })
        );
    }, [props.matches]);

    useEffect(() => {
        (!rankedSolo.length && props.selectedMatchType === "ranked solo") ||
        (!normals.length && props.selectedMatchType === "normals") ||
        (!rankedFlex.length && props.selectedMatchType === "ranked flex")
            ? setLoaderViewer(false)
            : setLoaderViewer(true);
    }, [rankedSolo, normals, rankedFlex, props.selectedMatchType]);
    return (
        <aside
            className={`w-full smDesktop:w-[initial] ${
                props.expand && "card-expand"
            } ${props.className} `}
        >
            <CardControlBtns
                selectedMatchType={props?.selectedMatchType}
                setSelectedMatchType={props?.setSelectedMatchType}
                ControlBtnLists={props?.ControlBtnLists}
            />
            <div className="smDesktop:flex smDesktop:justify-between ">
                <div
                    className={` mt-5 relative ${
                        props.expand ? "w-full" : "smDesktop:w-[862px] "
                    }`}
                >
                    {/* card container  */}
                    <div className=" ">
                        {props.matches[0] &&
                            props.selectedMatchType === "all" &&
                            props.matches.map((match, index) => {
                                return (
                                    <Card
                                        key={index}
                                        index={index}
                                        match={match}
                                        region={props?.region}
                                        expand={props.expand}
                                        setExpand={props.setExpand}
                                    />
                                );
                            })}

                        {rankedSolo[0] &&
                            props.selectedMatchType === "ranked solo" &&
                            rankedSolo.map((match, index) => {
                                return (
                                    <Card
                                        key={index}
                                        index={index}
                                        match={match}
                                        region={props?.region}
                                        expand={props.expand}
                                        setExpand={props.setExpand}
                                    />
                                );
                            })}

                        {rankedFlex[0] &&
                            props.selectedMatchType === "ranked flex" &&
                            rankedFlex.map((match, index) => {
                                return (
                                    <Card
                                        key={index}
                                        index={index}
                                        match={match}
                                        region={props?.region}
                                        expand={props.expand}
                                        setExpand={props.setExpand}
                                    />
                                );
                            })}

                        {normals[0] &&
                            props.selectedMatchType === "normals" &&
                            normals.map((match, index) => {
                                return (
                                    <Card
                                        key={index}
                                        index={index}
                                        match={match}
                                        region={props?.region}
                                        expand={props.expand}
                                        setExpand={props.setExpand}
                                    />
                                );
                            })}

                        {!loaderViewer && (
                            <div className="text-white flex justify-center">
                                No #
                                {props.selectedMatchType === "all"
                                    ? "ranked solo"
                                    : props.selectedMatchType}
                                # games have een found for this summoner
                            </div>
                        )}
                    </div>
                    {/* show more btn  */}
                    <ShowMore
                        region={props?.region}
                        summonerName={props?.summonerName}
                    />
                </div>
                {!props.expand ? (
                    <Ads className=" smDesktop:w-[105px] smDesktop:h-[1155px] smDesktop:mt-4 " />
                ) : null}
            </div>
        </aside>
    );
};

export default OverviewCards;
