import React, { useEffect, useState } from "react";
import Image from "next/image";
import TierGraphIcon from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Profile-page/on-the-way-icon.svg";
import SilverRankIcon from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/Rank-Icon/Silver.png";
import Classess from "./RankTierGraph.module.css";
import { CgCheckO, CgCloseO, CgAbstract } from "react-icons/cg";
import BatchImg from "../../../../../../../public/assets/new-images/Profile/batch-img.png";
import Emblem_Iron from "../../../../../../../public/assets/new-images/Profile/Ranks/ranked-tier-iron.png";
import Emblem_Bronze from "../../../../../../../public/assets/new-images/Profile/Ranks/ranked-tier-bronze.png";
import Emblem_Silver from "../../../../../../../public/assets/new-images/Profile/Ranks/ranked-tier-silver.png";
import Emblem_Gold from "../../../../../../../public/assets/new-images/Profile/Ranks/ranked-tier-gold.png";
import Emblem_Platinum from "../../../../../../../public/assets/new-images/Profile/Ranks/ranked-tier-platinum.png";
import Emblem_Diamond from "../../../../../../../public/assets/new-images/Profile/Ranks/ranked-tier-diamond.png";
import Emblem_Master from "../../../../../../../public/assets/new-images/Profile/Ranks/ranked-tier-master.png";
import Emblem_Grandmaster from "../../../../../../../public/assets/new-images/Profile/Ranks/ranked-tier-grandmaster.png";
import Emblem_Challenger from "../../../../../../../public/assets/new-images/Profile/Ranks/ranked-tier-challenger.png";
import Emblem_Unranked from "../../../../../../../public/assets/new-images/Profile/Ranks/unranked.png";

// top buttons
const Btns = (props) => {
    const [rank, setRank] = useState({});
    const [active, setActive] = useState("SOLO");
    const [rankMatch, setRankMatch] = useState({
        color: "848CA3",
        borderColor: "A8B9E4",
        mask: {
            color: "A0ACB4",
            progress: 50,
        },
        match: [
            {
                victory: true,
            },
            {
                victory: true,
            },
            {
                victory: false,
            },
            {
                victory: false,
            },
            {
                victory: undefined,
            },
        ],
    });

    const iconColor = "#" + rankMatch.color;

    useEffect(() => {
        setRank(props?.rankSolo);
    }, [props]);

    const rankHandler = (rankType) => {
        if (rankType === "SOLO") {
            setRank(props?.rankSolo);
            setActive("SOLO");
        } else if (rankType === "FLEX") {
            setRank(props?.rankFlex);
            setActive("FLEX");
        }
    };

    const iconSelector = (id) => {
        switch (id) {
            case "IRON":
                return Emblem_Iron;
            case "BRONZE":
                return Emblem_Bronze;
            case "SILVER":
                return Emblem_Silver;
            case "GOLD":
                return Emblem_Gold;
            case "PLATINUM":
                return Emblem_Platinum;
            case "DIAMOND":
                return Emblem_Diamond;
            case "MASTER":
                return Emblem_Master;
            case "GRANDMASTER":
                return Emblem_Grandmaster;
            case "CHALLENGER":
                return Emblem_Challenger;
            default:
                return Emblem_Unranked;
        }
    };

    const matchElement = rank?.miniSeries?.progress && [...rank?.miniSeries?.progress]?.map((match, index) => {
        return (
            <div key={index} className={` w-5 h-5 rounded-full bg-[#272131] `}>
                {match === "W"? (
                    <CgCheckO
                        className={` text-[20px] text-[#848CA3] bg-[#3e3847] rounded-full  `}
                    />
                ) : match === "L"? (
                    <CgCloseO
                        className={` text-[20px] text-[#848CA3] bg-[#3e3847] rounded-full   `}
                    />
                ) : (<div className={` text-[20px] text-[#848CA3] bg-[#3e3847] rounded-full   `}></div>)
                }
            </div>
        );
    });
    return (
        <>
            {/* buttons  */}
            <div className={`flex ${props.className}`}>
                <button
                    className={` ${
                        active === "SOLO"
                            ? "text-light-text"
                            : "text-grayed-text"
                    } font-sf-pro-text font-medium text-[9px] leading-[11px] rounded-[5px]
                                bg-[#3e3847] px-[10px] py-[12px] capitalize smDesktop:text-[14px] smDesktop:leading-[17px] mr-3 `}
                    onClick={() => rankHandler("SOLO")}
                >
                    Ranked solo
                </button>
                <button
                    className={` ${
                        active === "FLEX"
                            ? "text-light-text"
                            : "text-grayed-text"
                    } font-sf-pro-text font-medium text-[9px] leading-[11px] rounded-[5px]
                                bg-[#3e3847] px-[10px] py-[12px]  smDesktop:text-[14px] smDesktop:leading-[17px] `}
                    onClick={() => rankHandler("FLEX")}
                >
                    Ranked FLEX
                </button>
            </div>
            {/* graph component  */}
            {rank && (<div className=" grid grid-cols-[100px_125px] gap-x-[5px] mt-[30px] ">
                {/* rank icon  */}
                <div className={`${Classess.rankIcon}`}>
                    {/* img  */}
                    <div className={`${Classess.rankImg}`}>
                        <Image
                            src={iconSelector(rank?.tier)}
                            alt="rank icon"
                            className=" rounded-full"
                            layout="fill"
                        />
                    </div>
                    {/* bg mask  */}
                    <div className={`${Classess.rankMask}`}></div>
                </div>
                {/* match  */}
                <div className=" mt-3 ">
                    <div className=" flex flex-col items-end mr-[26px] ">
                        <h3
                            className={`font-mazin text-[18px] leading-[23px] text-[#${rankMatch.color}]`}
                        >
                            {rank?.tier?.charAt(0) +
                                    rank?.tier
                                        ?.slice(1)
                                        .toLowerCase()}{" "}
                                {rank?.rank}
                        </h3>
                        <h1 className=" font-sf-pro-text text-[21px] leading-[25px] text-white font-bold uppercase ">
                            {rank?.leaguePoints? rank?.leaguePoints: 0}lp
                        </h1>
                        <h4 className=" font-sf-pro-text text-[11px] leading-[13.1px] font-[500] text-[#5d7cf6] mr-[3px] ">
                        {(
                                    (rank?.wins /
                                        (rank?.wins +
                                            rank?.losses)) *
                                    100
                                ).toFixed(2)}
                                % <span className=" text-white ">WR</span>
                        </h4>
                    </div>
                    {/* match result  */}
                    {rank?.miniSeries && (<div className=" flex gap-x-[6px] justify-end mt-[18px]  ">
                        {matchElement}
                    </div>)}
                </div>
            </div>)}
            {/* text   */}
            <div className=" flex items-center mt-[30px] ">
                <h6 className=" mazin-bold-12 mr-[30px] text-white ">
                    Tier Graph is on the way!
                </h6>
                <button className=" relative w-[23px] h-[23px] ">
                    <Image
                        src={TierGraphIcon}
                        alt="tier graph icon"
                        layout="fill"
                    />
                </button>
            </div>
            {/* <Batch rank={rank} /> */}
        </>
    );
};

// center batch
const Batch = (props) => {
    const iconSelector = (id) => {
        switch (id) {
            case "IRON":
                return Emblem_Iron;
            case "BRONZE":
                return Emblem_Bronze;
                break;
            case "SILVER":
                return Emblem_Silver;
                break;
            case "GOLD":
                return Emblem_Gold;
                break;
            case "PLATINUM":
                return Emblem_Platinum;
                break;
            case "DIAMOND":
                return Emblem_Diamond;
                break;
            case "MASTER":
                return Emblem_Master;
                break;
            case "GRANDMASTER":
                return Emblem_Grandmaster;
                break;
            case "CHALLENGER":
                return Emblem_Challenger;
                break;
            default:
                return Emblem_Unranked;
        }
    };

    useEffect(() => {
        console.log(props.rank);
    }, [props.rank]);
    return (
        <>
            {props.rank && (
                <div className=" mr-[5px] ">
                    <div className=" laptop:mt-[13px] laptop:flex  ">
                        {/* image  */}
                        <div className=" relative laptop:w-[30px] laptop:h-[29px] ">
                            <Image
                                src={iconSelector(props.rank?.tier)}
                                alt="Rank icon"
                                layout="fill"
                            />
                        </div>
                        {/* gold  */}
                        <div className=" laptop:mr-[2px] ">
                            <h4
                                className=" laptop:gotham-mid-15
                        laptop:text-light-text "
                            >
                                {props.rank?.tier?.charAt(0) +
                                    props.rank?.tier
                                        ?.slice(1)
                                        .toLowerCase()}{" "}
                                {props.rank?.rank}
                            </h4>
                            <p className=" text-text-gray-200 uppercase laptop:gotham-mid-9 mt-[4px]  ">
                                {props.rank?.leaguePoints} lp
                            </p>
                        </div>
                        {/* percentage  */}
                        <div>
                            <h5 className=" text-light-text laptop:gotham-mid-9 uppercase text-right">
                                {props.rank?.wins}w {props.rank?.losses}l
                            </h5>
                            <p className=" text-light-text laptop:gotham-mid-9 uppercase text-right mt-[4px] ">
                                {(
                                    (props.rank?.wins /
                                        (props.rank?.wins +
                                            props.rank?.losses)) *
                                    100
                                ).toFixed(2)}
                                %
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

// tier graph
const TierGraph = (props) => {
    return (
        <div
            className={`  relative w-[163px] h-[70px] mt-3 ${props.className}
         smDesktop:w-full smDesktop:h-[105px] smDesktop:mt-4 desktop:mt-6 `}
        >
            <Image
                src={TierGraphImg}
                alt="tier graph component"
                layout="fill"
                className=" rounded-5px  "
            />
        </div>
    );
};

const RankTierGraph = (props) => {
    return (
        <div
            className="   bg-[#1e1728] rounded
            px-[25px] pt-5 pb-[36px] "
        >
            {/* top btns  */}
            <Btns rankSolo={props?.rankSolo} rankFlex={props?.rankFlex} />
        </div>
    );
};

export default RankTierGraph;
