import React, { useEffect, useState } from "react";
import Image from 'next/image'
import BatchImg from '../../../../../../../public/assets/new-images/Profile/batch-img.png'
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
    const [active, setActive] = useState("SOLO")

    useEffect(()=>{
        setRank(props?.rankSolo)
    }, [props])

    const rankHandler = (rankType) => {
        if(rankType === "SOLO"){
            setRank(props?.rankSolo)
            setActive("SOLO")
        } else if(rankType === "FLEX"){
            setRank(props?.rankFlex)
            setActive("FLEX")
        }
    }

    return (
        <>
            <div className={`flex ${props.className}`}>
                <button
                    className={` ${active === "SOLO" ? 'text-light-text': 'text-grayed-text'} font-sf-pro-text font-medium text-[9px] leading-[11px] rounded-[5px]
                                bg-[#3e3847] px-[10px] py-[12px] capitalize smDesktop:text-[14px] smDesktop:leading-[17px] mr-3 `}
                    onClick={() => rankHandler("SOLO")}
                >
                    Ranked solo
                </button>
                <button
                    className={` ${active === "FLEX" ? 'text-light-text': 'text-grayed-text'} font-sf-pro-text font-medium text-[9px] leading-[11px] rounded-[5px]
                                bg-[#3e3847] px-[10px] py-[12px] capitalize  smDesktop:text-[14px] smDesktop:leading-[17px] `}
                    onClick={() => rankHandler("FLEX")}
                >
                    ranked flex
                </button>
                
            </div>
            <Batch 
                rank={rank}
            />
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
    }

    useEffect(()=>{
        console.log(props.rank)
    }, [props.rank])
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
                                {props.rank?.tier?.charAt(0) + props.rank?.tier?.slice(1).toLowerCase()}{" "}
                                {props.rank?.rank}
                            </h4>
                            <p className=" text-text-gray-200 uppercase laptop:gotham-mid-9 mt-[4px]  ">
                                {props.rank?.leaguePoints} lp
                            </p>
                        </div>
                        {/* percentage  */}
                        <div>
                            <h5 className=" text-light-text laptop:gotham-mid-9 uppercase text-right">
                                {props.rank?.wins}w {props.rank?.losses}
                                l
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
}

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
}

const RankTierGraph = (props) => {
    return (
        <div
            className="  p-[20px_17px_10px_17px]  bg-[#1e1728] rounded
            smDesktop:p-[20px_25px] "
        >
            {/* top btns  */}
            <Btns rankSolo={props?.rankSolo} rankFlex={props?.rankFlex} />
        </div>
    );
};

export default RankTierGraph;
