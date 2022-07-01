import React from "react";
import Image from "next/image";
import Emblem_Iron from "../../../../../public/assets/old-images/ranks/Emblem_Iron.png";
import Emblem_Bronze from "../../../../../public/assets/old-images/ranks/Emblem_Bronze.png";
import Emblem_Silver from "../../../../../public/assets/old-images/ranks/Emblem_Silver.png";
import Emblem_Gold from "../../../../../public/assets/old-images/ranks/Emblem_Gold.png";
import Emblem_Platinum from "../../../../../public/assets/old-images/ranks/Emblem_Platinum.png";
import Emblem_Diamond from "../../../../../public/assets/old-images/ranks/Emblem_Diamond.png";
import Emblem_Master from "../../../../../public/assets/old-images/ranks/Emblem_Master.png";
import Emblem_Grandmaster from "../../../../../public/assets/old-images/ranks/Emblem_Grandmaster.png";
import Emblem_Challenger from "../../../../../public/assets/old-images/ranks/Emblem_Challenger.png";

const RanksList = (props) => {
    let RankIcon;
    switch (props.ranks?.tier) {
        case "IRON":
            RankIcon = Emblem_Iron;
            break;
        case "BRONZE":
            RankIcon = Emblem_Bronze;
            break;
        case "SILVER":
            RankIcon = Emblem_Silver;
            break;
        case "GOLD":
            RankIcon = Emblem_Gold;
            break;
        case "PLATINUM":
            RankIcon = Emblem_Platinum;
            break;
        case "DIAMOND":
            RankIcon = Emblem_Diamond;
            break;
        case "MASTER":
            RankIcon = Emblem_Master;
            break;
        case "GRANDMASTER":
            RankIcon = Emblem_Grandmaster;
            break;
        case "CHALLENGER":
            RankIcon = Emblem_Challenger;
            break;
        default:
            RankIcon = Emblem_Iron;
    }
    return (
        <div className={` laptop:flex ${props.className}`}>
            {props?.rankSolo && (
                <div className=" mr-[35px] ">
                    <h5 className=" text-light-text laptop:sf-bold-21 ">
                        Ranked Solo/Duo
                    </h5>
                    <div className=" laptop:mt-[13px] laptop:flex  ">
                        {/* image  */}
                        <div className=" relative laptop:w-[63px] laptop:h-[59px] ">
                            <Image src={RankIcon} alt="Rank icon" layout="fill" />
                        </div>
                        {/* gold  */}
                        <div className=" laptop:mr-[49px] ">
                            <h4
                                className=" laptop:gotham-mid-21 laptop:italic
                        laptop:text-light-text "
                            >
                                {props.rankSolo?.tier.toLowerCase()} {props.rankSolo?.rank.toLowerCase()}
                            </h4>
                            <p className=" text-text-gray-200 uppercase laptop:gotham-mid-16 mt-[4px] italic  ">
                                {props.rankSolo?.leaguePoints}lp
                            </p>
                        </div>
                        {/* percentage  */}
                        <div>
                            <h5 className=" text-light-text laptop:gotham-mid-16 italic uppercase text-right">
                                {props.rankSolo?.wins}w {props.rankSolo?.losses}l
                            </h5>
                            <p className=" text-light-text laptop:gotham-mid-16 italic uppercase text-right mt-[4px] ">
                                {(
                                    (props.rankSolo?.wins /
                                        (props.rankSolo?.wins + props.rankSolo?.losses)) *
                                    100
                                ).toFixed(2)}%
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {props?.rankFlex && (
                <div>
                    <h5 className=" text-light-text laptop:sf-bold-21 ">
                        Ranked Flex
                    </h5>
                    <div className=" laptop:mt-[13px] laptop:flex  ">
                        {/* image  */}
                        <div className=" relative laptop:w-[63px] laptop:h-[59px] ">
                            <Image src={RankIcon} alt="Rank icon" layout="fill" />
                        </div>
                        {/* gold  */}
                        <div className=" laptop:mr-[49px] ">
                            <h4
                                className=" laptop:gotham-mid-21 laptop:italic
                        laptop:text-light-text "
                            >
                                {props.rankFlex?.tier.toLowerCase()} {props.rankFlex?.rank.toLowerCase()}
                            </h4>
                            <p className=" text-text-gray-200 uppercase laptop:gotham-mid-16 mt-[4px] italic  ">
                                {props.rankFlex?.leaguePoints}lp
                            </p>
                        </div>
                        {/* percentage  */}
                        <div>
                            <h5 className=" text-light-text laptop:gotham-mid-16 italic uppercase text-right">
                                {props.rankFlex?.wins}w {props.rankFlex?.losses}l
                            </h5>
                            <p className=" text-light-text laptop:gotham-mid-16 italic uppercase text-right mt-[4px] ">
                            {(
                                    (props.rankFlex?.wins /
                                        (props.rankFlex?.wins + props.rankFlex?.losses)) *
                                    100
                                ).toFixed(2)}%
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RanksList;
