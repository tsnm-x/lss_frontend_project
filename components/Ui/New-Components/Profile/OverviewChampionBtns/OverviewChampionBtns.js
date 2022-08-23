import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiMessageAlt } from "react-icons/bi";
import OverviewReport from "./ReportBtn";

const OverviewChampionBtns = (props) => {
    const { controller, currentView } = props;
    const router = useRouter();

    return (
        <section className=" bg-[#1e1629] py-3 ">
            <div className=" container flex justify-between max-w-sm-container ">
                {/* buttons  */}
                <div className=" flex items-center  ">
                    <div className=" relative mr-[40px] ">
                        <Link
                            href={{
                                pathname: "/summoner/[region]/[summonerName]",
                                query: {
                                    region: router?.query?.region,
                                    summonerName: router?.query?.summonerName,
                                },
                            }}
                        >
                            <button
                                onClick={() => controller("overview")}
                                className={` mazin-bold-21 capitalize  ${
                                    currentView === "overview"
                                        ? " text-accent-color"
                                        : "text-grayed-text"
                                } `}
                            >
                                overview
                            </button>
                        </Link>
                        {currentView === "overview" ? (
                            <div className=" bg-accent-color w-full h-[4px] absolute -bottom-[20.5px]  "></div>
                        ) : null}
                    </div>
                    <div className=" relative ">
                        <button
                            onClick={() => controller("champPool")}
                            className={` mazin-bold-21 capitalize ${
                                currentView === "champPool"
                                    ? " text-accent-color"
                                    : "text-grayed-text"
                            } `}
                        >
                            champion pool
                        </button>
                        {currentView === "champPool" ? (
                            <div className=" bg-accent-color w-full h-[4px] absolute -bottom-[20.5px] "></div>
                        ) : null}
                    </div>
                </div>
                {/* report texts and btn  */}
                <OverviewReport {...props} />
            </div>
        </section>
    );
};

export default OverviewChampionBtns;
