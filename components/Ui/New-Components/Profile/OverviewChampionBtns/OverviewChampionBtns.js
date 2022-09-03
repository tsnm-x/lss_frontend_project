import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiMessageAlt } from "react-icons/bi";
import OverviewReport from "./ReportBtn";
import SmallBtn from "../../../../shared/Btn/SmallBtn";

const OverviewChampionBtns = (props) => {
    const { controller, currentView } = props;
    const router = useRouter();

    return (
        <section className=" bg-[#161416] py-3 ">
            <div className=" container flex justify-between max-w-sm-container ">
                {/* buttons  */}
                <div className=" flex items-center  ">
                    <div className=" relative mr-[18px] ">
                        <Link
                            href={{
                                pathname: "/summoner/[region]/[summonerName]",
                                query: {
                                    region: router?.query?.region,
                                    summonerName: router?.query?.summonerName,
                                },
                            }}
                        >
                            <SmallBtn
                                click={() => controller("overview")}
                                active={currentView === "overview"}
                            >
                                Overview
                            </SmallBtn>
                        </Link>
                    </div>
                    <div className=" relative ">
                        <SmallBtn
                            click={() => controller("champPool")}
                            active={currentView === "champPool"}
                        >
                            Champion pool
                        </SmallBtn>
                    </div>
                </div>
                {/* report texts and btn  */}
                <OverviewReport {...props} />
            </div>
        </section>
    );
};

export default OverviewChampionBtns;
