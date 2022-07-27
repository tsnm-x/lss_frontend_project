import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const OverviewChampionBtns = (props) => {
    const { controller, currentView } = props;
    const router = useRouter();

    return (
        <section className=" laptop:mt-[9px] ">
            <div className=" container flex ">
                <div className=" mr-[21px] ">
                    <Link href={{
                        pathname:"/summoner/[region]/[summonerName]",
                        query: {region: router?.query?.region, summonerName: router?.query?.summonerName}
                    }}>
                        <button
                            onClick={() => controller("overview")}
                            className={`laptop:sf-mid-21 laptop:capitalize 
                        text-grayed-text ${
                            currentView === "overview"
                                ? " text-accent-color"
                                : "text-grayed-text"
                        } `}
                        >
                            overview
                        </button>
                    </Link>
                    {currentView === "overview" ? (
                        <div className=" bg-accent-color w-3/6 h-[1px] mx-auto mt-[2px] "></div>
                    ) : null}
                </div>
                <div>
                    <button
                        onClick={() => controller("champPool")}
                        className={`laptop:sf-mid-21 laptop:capitalize 
                    text-grayed-text  ${
                        currentView === "champPool"
                            ? " text-accent-color"
                            : "text-grayed-text"
                    } `}
                    >
                        champion pool
                    </button>
                    {currentView === "champPool" ? (
                        <div className=" bg-accent-color w-3/6 h-[1px] mx-auto mt-[2px] "></div>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default OverviewChampionBtns;
