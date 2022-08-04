import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiMessage } from "react-icons/bi";

const OverviewChampionBtns = (props) => {
    const { controller, currentView } = props;
    const router = useRouter();

    return (
        <section className=" bg-[#1e1629] py-3 ">
            <div className=" container flex justify-between ">
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
                <div className=" flex items-center mr-[180px] ">
                    {/* btn  */}
                    <div className=" mr-[88px] ">
                        <h6 className=" mazin-bold-16 text-white ">
                            Have you encountered a problem during your visit?
                        </h6>
                        <h6 className=" mazin-bold-14 text-[#8e8a94] mt-[6px] ">
                            Have you encountered a problem during your visit?
                        </h6>
                    </div>
                    {/* button  */}
                    <button className=" bg-[#e3e3f2] w-[103px] h-[32px] flex items-center justify-center rounded-5px  ">
                        {" "}
                        <div className=" bg-white mr-2 px-[1px] py-[0.5px]  ">
                            <BiMessage className=" text-accent-color text-[17px] " />{" "}
                        </div>
                        <h5 className=" sf-bold-14 text-accent-color capitalize ">
                            report
                        </h5>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OverviewChampionBtns;
