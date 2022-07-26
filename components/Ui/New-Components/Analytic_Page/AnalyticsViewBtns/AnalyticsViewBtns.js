import Link from "next/link";
import React, { useState } from "react";
import Classess from "./AnalyticsViewBtns.module.css";
import Router, { useRouter } from "next/router";

const AnalyticsViewBtns = (props) => {
    const [btns, setBtns] = useState([
        {
            txt: "overview",
            active: true,
        },
        {
            txt: "runes",
            active: false,
        },
        {
            txt: "map details",
            active: false,
        },
    ]);

    const btnClickHandler = (activeIndex) => {
        setBtns((prevState) => {
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

    return (
        <section>
            <div className="container flex items-center bg-card-&-content-box ">
                {/* indicator left  */}
                <div className={`${Classess.indicator}`}></div>
                <div className=" flex justify-between items-center w-full pl-[30px] pr-[25px] py-5 ">
                    {/* right side  */}
                    <div className="  flex items-center ">
                        {/* texts  */}
                        <div className=" mr-[50px] ">
                            <h3 className=" sf-bold-20 text-white ">
                                Post-Game Analytics
                            </h3>
                            <p className=" sf-bold-10 text-grayed-text mb-1 ">
                                Dive deep and analyse your games
                            </p>
                        </div>
                        {/* buttons  */}
                        <div className=" flex gap-x-[10px] ">
                            {btns.map((btn, index) => {
                                return (
                                    <button
                                        onClick={() => btnClickHandler(index)}
                                        key={index}
                                        className={` ${Classess.btn} ${
                                            btn.active
                                                ? " border border-white text-white "
                                                : "border border-grayed-text text-grayed-text"
                                        }  `}
                                    >
                                        {btn.txt}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* leave btn  */}
                    <Link href={
                        {
                            pathname: "/summoner/[region]/[summonerName]",
                            query: {region: props?.region, summonerName: props?.summonerName}
                        }
                    }
                    >
                        <button
                            className={`${Classess.btn} bg-accent-color text-white `}
                        >
                            Leave
                        </button>
                    </Link> 
                </div>
            </div>
        </section>
    );
};

export default AnalyticsViewBtns;
