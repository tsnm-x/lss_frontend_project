import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiMessage } from "react-icons/bi";

const OverviewChampionBtns = (props) => {
    const { controller, currentView } = props;
    const router = useRouter();

    return (
        <section className=" laptop:mt-[9px] bg-[#1e1629] pt-[15px] ">
            <div className=" container flex ">
                {/* buttons  */}
                <div className=" flex ">
                    <div className=" mr-[21px] ">
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
                            <div className=" bg-accent-color w-full h-[4px] mx-auto mt-[20px] "></div>
                        ) : null}
                    </div>
                    <div>
                        <button
                            onClick={() => controller("champPool")}
                            className={` font-mazin laptop:capitalize 
                    text-grayed-text  ${
                        currentView === "champPool"
                            ? " text-accent-color"
                            : "text-grayed-text"
                    } `}
                        >
                            champion pool
                        </button>
                        {currentView === "champPool" ? (
                            <div className=" bg-accent-color w-full h-[4px] mx-auto mt-[20px] "></div>
                        ) : null}
                    </div>
                </div>
                {/* report text  */}
                <div>
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
