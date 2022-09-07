import Link from "next/link";
import React, { useState } from "react";
import Classess from "./AnalyticsViewBtns.module.css";
import Router, { useRouter } from "next/router";
import ReportBtn from "../../Profile/OverviewChampionBtns/ReportBtn";
import Image from "next/image";

const AnalyticsViewBtns = (props) => {
    const btnClickHandler = (activeIndex) => {
        props.setBtns((prevState) => {
            const modifyedState = [];
            prevState.map((btn, index) => {
                modifyedState.push({
                    txt: btn.txt,
                    active: activeIndex === index ? true : false,
                });
            });
            return modifyedState;
        });
    };

    const goHome = () => {
        Router.push({
            pathname: "/summoner/[region]/[summonerName]",
            query: { region: props?.region, summonerName: props?.summonerName },
        });
    };
    return (
        <section className=" bg-cardBg border-headBorder border-t-[2px] border-b ">
            <div className=" w-[1536px] h-[72px]  mx-auto rounded-tr-5px rounded-br-5px relative  ">
                {/* indicator left  */}
                {/* <div className={`${Classess.indicator}`}></div> */}
                <div className=" w-full h-full flex justify-between items-center pl-[55px] pr-[64px] absolute z-20 ">
                    {/* right side  */}
                    <div className="  flex items-center ">
                        {/* texts  */}
                        <div className=" font-inter font-bold leading-[20px] mr-[52px] ">
                            <h3 className=" text-white text-[20px] ">
                                Post-Game Analytics
                            </h3>
                            <p className=" text-btnGrayTxt text-[10px] ">
                                Dive deep and analyse your games
                            </p>
                        </div>
                        {/* buttons  */}
                        <div className=" flex gap-x-[18px] ">
                            {props.btns.map((btn, index) => {
                                return (
                                    <button
                                        onClick={() => btnClickHandler(index)}
                                        key={index}
                                        className={` ${Classess.btn} ${
                                            btn.active
                                                ? " border border-white text-white bg-btnBg "
                                                : " bg-btnBg text-grayed-text"
                                        }  `}
                                    >
                                        {btn.txt}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* leave btn  */}
                    {/* <Link href={
                        {
                            pathname: "/summoner/[region]/[summonerName]",
                            query: {region: router.query?.region, summonerName: router.query?.summonerName}
                        }
                    }
                    >
                        <button
                            className={`${Classess.btn} bg-accent-color text-white `}
                        >
                            Leave
                        </button>
                    </Link>  */}
                    <ReportBtn
                        leaveBtn={true}
                        goHome={goHome}
                        reportBtn={props.report}
                        listenTxt={false}
                    />
                </div>
                {/* background image  */}
                {props.championId && (
                    <div
                        className={`${Classess.background}`}
                        style={{
                            background: `linear-gradient(90deg, #161416 0%, rgba(0, 0, 0, 0) 100%),url('/assets/new-images/Profile/championBackgrounds/champId ${props.championId}.png')`,
                        }}
                    ></div>
                )}
            </div>
        </section>
    );
};

export default AnalyticsViewBtns;
