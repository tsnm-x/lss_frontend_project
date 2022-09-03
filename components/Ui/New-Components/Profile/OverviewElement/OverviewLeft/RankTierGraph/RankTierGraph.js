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
import SmallBtn from "../../../../../../shared/Btn/SmallBtn";

// top buttons
const Btns = (props) => {
    const [rank, setRank] = useState({});
    const [active, setActive] = useState("SOLO");
    const [rankMatch, setRankMatch] = useState("848CA3");

    useEffect(() => {
        rankHandler("SOLO");
        props?.rankSolo ? setRank(props?.rankSolo) : setRank({});
    }, [props]);

    const textColor = (id) => {
        switch (id) {
            case "IRON":
                return "text-[#7B6D6D]";
            case "BRONZE":
                return "text-[#D09989]";
            case "SILVER":
                return "text-[#A8B9E4]";
            case "GOLD":
                return "text-[#F8CA80]";
            case "PLATINUM":
                return "text-[#4DC7BE]";
            case "DIAMOND":
                return "text-[#4FADDF]";
            case "MASTER":
                return "text-[#CA70F2]";
            case "GRANDMASTER":
                return "text-[#EB3649]";
            case "CHALLENGER":
                return "text-[#3C8DB4]";
            default:
                return "transparent";
        }
    };

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

    const colorSelector = (id) => {
        switch (id) {
            case "IRON":
                return "#7B6D6D";
            case "BRONZE":
                return "#D09989";
            case "SILVER":
                return "#A8B9E4";
            case "GOLD":
                return "#F8CA80";
            case "PLATINUM":
                return "#4DC7BE";
            case "DIAMOND":
                return "#4FADDF";
            case "MASTER":
                return "#CA70F2";
            case "GRANDMASTER":
                return "#EB3649";
            case "CHALLENGER":
                return "#3C8DB4";
            default:
                return "transparent";
        }
    };

    const bgSelector = (id) => {
        switch (id) {
            case "IRON":
                return "bg-[#7B6D6D]";
            case "BRONZE":
                return "bg-[#D09989]";
            case "SILVER":
                return "bg-[#A8B9E4]";
            case "GOLD":
                return "bg-[#F8CA80]";
            case "PLATINUM":
                return "bg-[#4DC7BE]";
            case "DIAMOND":
                return "bg-[#4FADDF]";
            case "MASTER":
                return "bg-[#CA70F2]";
            case "GRANDMASTER":
                return "bg-[#EB3649]";
            case "CHALLENGER":
                return "bg-[#3C8DB4]";
            default:
                return "transparent";
        }
    };

    const determineProgress = (lp) => {
        if (rank || lp) {
            if (rank?.tier === "MASTER") {
                const progress = (600 - lp) / 600;

                if (progress >= 1) {
                    return `${1 * (2 * Math.PI * 48)}`;
                }

                return `${progress * (2 * Math.PI * 48)}`;
            } else if (rank?.tier === "GRANDMASTER") {
                const progress = (900 - 600 - (lp - 600)) / (900 - 600);
                if (progress >= 1) {
                    return `${1 * (2 * Math.PI * 48)}`;
                }
                return `${progress * (2 * Math.PI * 48)}`;
            } else if (rank?.tier === "CHALLENGER") {
                const progress = (1700 - 900 - (lp - 900)) / (1700 - 900);

                if (progress >= 1) {
                    return `${1 * (2 * Math.PI * 48)}`;
                }

                return `${progress * (2 * Math.PI * 48)}`;
            }

            const progress = (100 - lp) / 100;

            return `${progress * (2 * Math.PI * 48)}`;
        }
    };

    const matchElement =
        rank?.miniSeries?.progress &&
        [...rank?.miniSeries?.progress]?.map((match, index) => {
            return (
                <div
                    key={index}
                    className={` w-5 h-5 rounded-full bg-[#272131] `}
                >
                    {match === "W" ? (
                        <CgCheckO
                            className={` text-[20px] text-[#848CA3] bg-[#3e3847] rounded-full  `}
                        />
                    ) : match === "L" ? (
                        <CgCloseO
                            className={` text-[20px] text-[#848CA3] bg-[#3e3847] rounded-full   `}
                        />
                    ) : (
                        <div
                            className={` text-[20px] text-[#848CA3] bg-[#3e3847] rounded-full   `}
                        ></div>
                    )}
                </div>
            );
        });
    return (
        <>
            {/* buttons  */}
            <div className={`flex gap-x-3 justify-center ${props.className}`}>
                <SmallBtn
                    click={() => rankHandler("SOLO")}
                    active={active === "SOLO"}
                >
                    Ranked Solo
                </SmallBtn>

                <SmallBtn
                    click={() => rankHandler("FLEX")}
                    active={active === "FLEX"}
                >
                    Ranked Flex
                </SmallBtn>
            </div>
            {/* graph component  */}
            {/* {rank && (<div className=" grid grid-cols-[100px_125px] gap-x-[5px] mt-[30px] "> */}
            <div className=" grid grid-cols-[100px_125px] gap-x-[5px] mt-[30px] ">
                {/* rank icon  */}
                <div className={`${Classess.rankIcon} relative ml-[3px]`}>
                    <div className={`row-start-2 col-start-1`}>
                        <svg
                            width="108"
                            height="108"
                            viewBox="0 0 100 100"
                            style={{ display: "block" }}
                        >
                            <circle
                                r="48"
                                cx="50%"
                                cy="50%"
                                fill="transparent"
                                strokeDasharray="301.59289474462014"
                                strokeDashoffset="1"
                                strokeWidth="0.5"
                                stroke="#AAA0A8"
                                shapeRendering="geometricPrecision"
                            ></circle>
                            {rank?.leaguePoints && (
                                <circle
                                    r="48"
                                    cx="50%"
                                    cy="50%"
                                    fill="transparent"
                                    strokeDasharray={`${2 * Math.PI * 48}`}
                                    strokeDashoffset={`${determineProgress(
                                        rank?.leaguePoints
                                    )}`}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    stroke={`${colorSelector(rank?.tier)}`}
                                    shapeRendering="geometricPrecision"
                                    style={{
                                        transform: "rotate(-90deg)",
                                        transformOrigin: "center center",
                                    }}
                                ></circle>
                            )}
                        </svg>
                    </div>
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
                    <div
                        className={` ${bgSelector(rank?.tier)} ${
                            Classess.rankMask
                        }`}
                        style={{
                            opacity: `${
                                (rank?.leaguePoints >= 101
                                    ? 80 / 100
                                    : rank?.leaguePoints / 100) * 0.65
                            }`,
                        }}
                    ></div>
                </div>
                {/* match  */}
                <div className=" mt-3 ">
                    <div className=" flex flex-col text-center ">
                        <h3
                            className={`font-mazin text-[18px] leading-[23px] font-bold ${textColor(
                                rank?.tier
                            )}`}
                        >
                            {rank?.tier
                                ? rank?.tier?.charAt(0) +
                                  rank?.tier?.slice(1).toLowerCase()
                                : "-"}
                            {rank?.tier
                                ? rank?.tier === "GRANDMASTER" ||
                                  rank?.tier === "MASTER" ||
                                  rank?.tier === "CHALLENGER"
                                    ? ""
                                    : ` ${rank?.rank}`
                                : ""}
                        </h3>
                        <h1 className=" font-sf-pro-text text-[21px] leading-[25px] text-white font-bold uppercase ">
                            {rank?.leaguePoints ? rank?.leaguePoints : 0} lp
                        </h1>
                        <h4 className=" font-sf-pro-text text-[11px] leading-[13.1px] font-[500] text-[#5d7cf6] mr-[3px] ">
                            {rank?.wins || rank?.losses
                                ? (
                                      (rank?.wins /
                                          (rank?.wins + rank?.losses)) *
                                      100
                                  ).toFixed(2)
                                : 0}
                            % <span className=" text-white ">WR</span>
                        </h4>
                    </div>
                    {/* match result  */}
                    {rank?.miniSeries && (
                        <div className=" flex gap-x-[6px] justify-end mt-[18px]  ">
                            {matchElement}
                        </div>
                    )}
                </div>
            </div>
            {/* text   */}
            <div className=" flex items-center mt-[30px] ">
                <h6 className=" mazin-bold-12 font-[600] mr-[30px] text-white ">
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
                                    props.rank?.tier?.slice(1).toLowerCase()}
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
// const TierGraph = (props) => {
//     return (
//         <div
//             className={`  relative w-[163px] h-[70px] mt-3 ${props.className}
//          smDesktop:w-full smDesktop:h-[105px] smDesktop:mt-4 desktop:mt-6 `}
//         >
//             <Image
//                 src={TierGraphImg}
//                 alt="tier graph component"
//                 layout="fill"
//                 className=" rounded-5px  "
//             />
//         </div>
//     );
// };

const RankTierGraph = (props) => {
    return (
        <div
            className=" bg-cardBg rounded
            px-[25px] pt-5 pb-[36px] "
        >
            {/* top btns  */}
            <Btns rankSolo={props?.rankSolo} rankFlex={props?.rankFlex} />
        </div>
    );
};

export default RankTierGraph;
