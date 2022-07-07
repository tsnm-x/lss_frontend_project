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
                return Emblem_Iron;
        }
    }
    return (
        <div className={` ml-[250px] laptop:flex laptop:ml-[260px] desktop:ml-[275px]  ${props.className}`}>
            {props?.rankSolo && (
                <div className=" mr-[35px] ">
                    <h5 className=" text-light-text laptop:sf-bold-21 ">
                        Ranked Solo/Duo
                    </h5>
                    <div className=" laptop:mt-[13px] laptop:flex  ">
                        {/* image  */}
                        <div className=" relative laptop:w-[63px] laptop:h-[59px] ">
                            <Image
                                src={iconSelector(props.rankSolo?.tier)}
                                alt="Rank icon"
                                layout="fill"
                            />
                        </div>
                        {/* gold  */}
                        <div className=" laptop:mr-[49px] ">
                            <h4
                                className=" laptop:gotham-mid-21 
                        laptop:text-light-text "
                            >
                                {props.rankSolo?.tier?.charAt(0) + props.rankSolo?.tier?.slice(1).toLowerCase()}{" "}
                                {props.rankSolo?.rank}
                            </h4>
                            <p className=" text-text-gray-200 uppercase laptop:gotham-mid-16 mt-[4px]  ">
                                {props.rankSolo?.leaguePoints} lp
                            </p>
                        </div>
                        {/* percentage  */}
                        <div>
                            <h5 className=" text-light-text laptop:gotham-mid-16 uppercase text-right">
                                {props.rankSolo?.wins}w {props.rankSolo?.losses}
                                l
                            </h5>
                            <p className=" text-light-text laptop:gotham-mid-16 uppercase text-right mt-[4px] ">
                                {(
                                    (props.rankSolo?.wins /
                                        (props.rankSolo?.wins +
                                            props.rankSolo?.losses)) *
                                    100
                                ).toFixed(2)}
                                %
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
                            <Image
                                src={iconSelector(props.rankFlex?.tier)}
                                alt="Rank icon"
                                layout="fill"
                            />
                        </div>
                        {/* gold  */}
                        <div className=" laptop:mr-[49px] ">
                            <h4
                                className=" laptop:gotham-mid-21 
                        laptop:text-light-text "
                            >
                                {props.rankFlex?.tier?.charAt(0) + props.rankFlex?.tier?.slice(1).toLowerCase()}{" "}
                                {props.rankFlex?.rank}
                            </h4>
                            <p className=" text-text-gray-200 uppercase laptop:gotham-mid-16 mt-[4px]  ">
                                {props.rankFlex?.leaguePoints} lp
                            </p>
                        </div>
                        {/* percentage  */}
                        <div>
                            <h5 className=" text-light-text laptop:gotham-mid-16 uppercase text-right">
                                {props.rankFlex?.wins}w {props.rankFlex?.losses}
                                l
                            </h5>
                            <p className=" text-light-text laptop:gotham-mid-16 uppercase text-right mt-[4px] ">
                                {(
                                    (props.rankFlex?.wins /
                                        (props.rankFlex?.wins +
                                            props.rankFlex?.losses)) *
                                    100
                                ).toFixed(2)}
                                %
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RanksList;
