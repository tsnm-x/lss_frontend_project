import React, { useState, useReducer } from "react";
import classes from "./PlayerCards.module.css";
// import ProfileImage from "../../../../public/assets/season most played champs/leeSin.png";
// import useHttp from "../../../../hook/useHttp";
// import { profileAction } from "../../../../store/profile";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";
// import Loader from "../../../shared/loader/Loader";

import { BiExpand } from "react-icons/bi";
import ProfileWithBatch from "../../ProfileWithBatch/ProfileWithBatch";
import RewardCard from "../RewardCard/RewardCard";
import ProfileCardPlayersList from "../ProfileCardPlayersList/ProfileCardPlayersList";
import PlayerRankCard from "../PlayerRankCard/PlayerRankCard";
import PlayerRankCardReverse from "../PlayerRankCard/PlayerRankCardReverse";
import Image from "next/image";
import LineGraph1 from "../../../../public/assets/graph/line-graph-1.png";
import LineGraph2 from "../../../../public/assets/graph/line-graph-2.png";
import ArchadeImg from "../../../../public/assets/graph/archade-img.png";

// bottom graph component

const GraphOneComponent = () => {
    return (
        <div className=" relative w-[800px] h-[320px] mx-auto ">
            <Image
                src={LineGraph1}
                layout="fill"
                alt="Line graph placeholder"
            />
        </div>
    );
};

const GraphTwoComponent = () => {
    return (
        <div className="relative w-[800px] h-[320px] mx-auto ">
            <Image
                src={LineGraph2}
                layout="fill"
                alt="Line graph placeholder"
            />
        </div>
    );
};

const ArchadeComponent = () => {
    return (
        <div className=" relative w-[150px] h-[205px] mx-auto ">
            <Image src={ArchadeImg} layout="fill" alt="archande image" />
        </div>
    );
};

const PlayerCards = (props) => {
    // reducer state for bottom graph component
    const initialGraphComponent = {
        component: <GraphOneComponent />,
        nextComponent: "graphTwo",
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "graphOne":
                return {
                    component: <GraphOneComponent />,
                    nextComponent: "graphTwo",
                };
            case "graphTwo":
                return {
                    component: <GraphTwoComponent />,
                    nextComponent: "archade",
                };
            case "archade":
                return {
                    component: <ArchadeComponent />,
                    nextComponent: "graphOne",
                };
        }
    };

    const [simulationDetails, setSimulationDetails] = useState(false);
    const [graphElement, graphDispath] = useReducer(
        reducer,
        initialGraphComponent
    );

    // other state
    const [cardDetailsExpand, setCardDetailsExpand] = useState(false);

    // onclick graph and card handler
    const expandHandler = () => {
        setCardDetailsExpand(!cardDetailsExpand);
        setSimulationDetails(false);
    };
    const [openDetails, setOpenDetails] = useState(false);
    const simulateBtnHanlder = () => {
        setOpenDetails(!openDetails);
        !simulationDetails
            ? setSimulationDetails(true)
            : graphDispath({ type: graphElement.nextComponent });
    };

    const selectGameType = () => {
        switch (props.queueId) {
            case 76:
                return "Ultra Rapid Fire";
            case 100:
                return "5v5 ARAM";
            case 400:
                return "5v5 Draft Pick";
            case 420:
                return "5v5 Ranked Solo";
            case 430:
                return "5v5 Blind Pick";
            case 440:
                return "5v5 Ranked Flex";
            case 450:
                return "5v5 ARAM";
            case 470:
                return "3v3 Ranked Flex";
            case 900:
                return "URF";

            default:
                return "Normal Game";
        }
    };

    return (
        <React.Fragment>
            <div className=" w-full max-w-[610px]">
                <div className="relative rounded-bl-[35px]  ">
                    <div className="relative flex flex-col bg-full-dark rounded-[24px] w-[97%] ">
                        {/* top section  */}
                        <div className={`flex ${cardDetailsExpand && 'mb-6'}`}>
                            {/* profile section  */}
                            <div
                                className={` relative ${
                                    cardDetailsExpand && "w-full"
                                } ${classes.card}`}
                            >
                                <div
                                    className={` ${"bg-" + props.color} ${
                                        classes.indicator
                                    }`}
                                ></div>
                                <div
                                    className={` ml-[3px]  relative ${
                                        !cardDetailsExpand
                                            ? "w-[296px]"
                                            : "w-full"
                                    }  ${classes.card_content} ${
                                        props.type === "victory"
                                            ? classes.blue_gradient
                                            : classes.red_gradient
                                    }`}
                                >
                                    {/* left profile  */}
                                    <div>
                                        {/* small title  */}
                                        <div className=" flex font-sf-pro text-[3px] leading-[3px] mb-[6px] ml-[7px]  ">
                                            <p className=" text-[#F3F4F8] mr-[3px] ">
                                                {selectGameType()}
                                            </p>
                                            <p className=" text-[#8D919F]">
                                                {props.gameStartDate}
                                            </p>
                                        </div>
                                        {/* profile  */}
                                        <div className=" flex items-stretch ">
                                            {/* profile details  */}
                                            <div className=" ">
                                                <div className=" flex items-center justify-between w-[86px] bg-full-dark p-[6px_12px_7px_8px] rounded-[8px] mb-[5px]  ">
                                                    {/* profile image  */}
                                                    <ProfileWithBatch
                                                        borderColor={
                                                            props.color
                                                        }
                                                        imgLink={
                                                            props.mainPlayer
                                                                ?.championName
                                                        }
                                                        rune1={
                                                            props.mainPlayer
                                                                ?.perks
                                                                .styles[0].style
                                                        }
                                                        rune2={
                                                            props.mainPlayer
                                                                ?.perks
                                                                .styles[1].style
                                                        }
                                                        perks={
                                                            props.mainPlayer
                                                                ?.perks
                                                        }
                                                    />

                                                    {/* date  */}
                                                    <h2 className=" ml-3 gotham-10px-mid text-[#47516C]  ">
                                                        <span className=" text-white-blue">
                                                            {
                                                                props.mainPlayer
                                                                    ?.kills
                                                            }
                                                        </span>
                                                        /
                                                        <span className=" text-red-yellow-gold">
                                                            {
                                                                props.mainPlayer
                                                                    ?.deaths
                                                            }
                                                        </span>
                                                        /
                                                        {
                                                            props.mainPlayer
                                                                ?.assists
                                                        }
                                                    </h2>
                                                </div>
                                                {/* bottom status bar  */}
                                                <div
                                                    className={` bg-full-dark rounded-full px-[14px] ${
                                                        props.type === "victory"
                                                            ? "text-white-blue"
                                                            : "text-red-700"
                                                    } py-[3px] flex items-center justify-between `}
                                                >
                                                    <p className=" capitalize gotham-5px-mid text-white-blue mr-[15px] ">
                                                        {props.type}
                                                    </p>
                                                    <p className=" capitalize gotham-5px-mid text-white-blue mr-[7px] ">
                                                        {props.duration}
                                                    </p>
                                                    <span className=" gotham-2px-mid text-mix-white-black uppercase ">
                                                        {
                                                            props.mainPlayer
                                                                ?.totalMinionsKilled
                                                        }
                                                        :cs
                                                    </span>
                                                </div>
                                            </div>
                                            {/* kill details  */}
                                            <RewardCard
                                                items={[
                                                    props.mainPlayer?.item0,
                                                    props.mainPlayer?.item1,
                                                    props.mainPlayer?.item2,
                                                    props.mainPlayer?.item3,
                                                    props.mainPlayer?.item4,
                                                    props.mainPlayer?.item5,
                                                    props.mainPlayer?.item6,
                                                ]}
                                                largestMultiKill={
                                                    props.mainPlayer
                                                        ?.largestMultiKill
                                                }
                                                // killReward={[
                                                // 	props.mainPlayer?.item0,
                                                // 	props.mainPlayer?.item1,
                                                // ]}
                                                summonerSpellsId={[
                                                    props.mainPlayer
                                                        ?.summoner1Id,
                                                    props.mainPlayer
                                                        ?.summoner2Id,
                                                ]}
                                                summonerRiotId={
                                                    props.mainPlayer
                                                        ?.summonerRiotId
                                                }
                                                // still not founded this two images so is fack data
                                            />
                                            {/* right side blank  */}
                                            {cardDetailsExpand && (
                                                <div className=" bg-full-dark rounded-8px w-full ml-5"></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* list section  */}
                            {!cardDetailsExpand && (
                                <ProfileCardPlayersList
                                    playerList={props.playerList}
                                    indicatorColor={props.color}
                                />
                            )}
                        </div>
                        {/* player rank card  */}
                        {cardDetailsExpand && (
                            <div className=" grid grid-cols-2 gap-x-[22px]  pl-[14px] mr-2 pb-6 max-w-[1000px] ">
                                {
                                    <PlayerRankCard
                                        firstGroup={props.playerList.slice(
                                            5,
                                            10
                                        )}
                                    />
                                }
                                {
                                    <PlayerRankCardReverse
                                        secondGroup={props.playerList.slice(
                                            0,
                                            5
                                        )}
                                    />
                                }
                            </div>
                        )}
                        {/* expand button  */}
                        <button
                            onClick={expandHandler}
                            className={`w-[17px] h-[17px] flex justify-center items-center rounded-full absolute -bottom-2 right-[60px] text-black z-20 ${
                                "bg-" + props.color
                            }`}
                        >
                            <BiExpand className=" text-[12px] " />
                        </button>
                    </div>
                    {/* right side indicator  */}
                    <div
                        className={` w-[12px] h-full absolute right-0 top-0 ${
                            "bg-" + props.color
                        }`}
                    ></div>
                    {/* bottom button  */}
                    {cardDetailsExpand && (
                        <div className=" w-full absolute left-0 -bottom-[6px] flex justify-center z-10">
                            <button
                                onClick={simulateBtnHanlder}
                                className=" rounded-[5px] sf-5px-reg px-2 py-[3px] bg-[#FC2300] text-center text-liquid-white "
                            >
                                simulate game
                            </button>
                        </div>
                    )}
                </div>
                {/* bottom chart  */}
                {simulationDetails && openDetails && (
                    <div className=" mt-[70px] mb-[40px] ">
                        <div className=" relative w-[85%] mx-auto ">
                            {/* {graphElement.component} */}
                            <p
                                className="
                            text-white 
                            font-extrabold 
                            rounded-full
                            p-5
                            border-red-900 w-[250px] border-2 mx-auto"
                            >
                                Feature is coming soon!
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default PlayerCards;
