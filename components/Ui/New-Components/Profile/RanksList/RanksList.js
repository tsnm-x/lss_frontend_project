import React from "react";
import Image from "next/image";
import RankIcon from "../../../../../public/assets/new-images/Profile/rank-icon.png";

const RanksList = (props) => {
    return (
        <div className={` laptop:flex ${props.className}`}>
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
                            Gold IV
                        </h4>
                        <p className=" text-text-gray-200 uppercase laptop:gotham-mid-16 mt-[4px] italic  ">
                            61lp
                        </p>
                    </div>
                    {/* percentage  */}
                    <div>
                        <h5 className=" text-light-text laptop:gotham-mid-16 italic uppercase text-right">
                            65w 54l
                        </h5>
                        <p className=" text-light-text laptop:gotham-mid-16 italic uppercase text-right mt-[4px] ">
                            54.62%
                        </p>
                    </div>
                </div>
            </div>
            <div>
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
                            Gold IV
                        </h4>
                        <p className=" text-text-gray-200 uppercase laptop:gotham-mid-16 mt-[4px] italic  ">
                            61lp
                        </p>
                    </div>
                    {/* percentage  */}
                    <div>
                        <h5 className=" text-light-text laptop:gotham-mid-16 italic uppercase text-right">
                            65w 54l
                        </h5>
                        <p className=" text-light-text laptop:gotham-mid-16 italic uppercase text-right mt-[4px] ">
                            54.62%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RanksList;
