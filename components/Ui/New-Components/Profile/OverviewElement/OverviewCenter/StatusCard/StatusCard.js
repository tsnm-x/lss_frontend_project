import React from "react";
import Image from "next/image";
import CardImage from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";
import SummonerFlash from "../../../../../../../public/assets/new-images/Profile/card/SummonerFlash.png";
import SummonerHeal from "../../../../../../../public/assets/new-images/Profile/card/SummonerHeal.png";
import BatchImg1 from "../../../../../../../public/assets/new-images/Profile/card/batch1.png";
import BatchImg2 from "../../../../../../../public/assets/new-images/Profile/card/batch2.png";

const LeftSide = (props) => {
    console.log(props);
    return (
        <div className="font-sf-pro-text font-bold mr-[30px] ">
            <h4 className={` capitalize ${props.won ? 'text-accent-color-2': 'text-accent-color'}`}>
                <span className=" text-[17px] leading-[20px] ">
                    {props.won ? "Victory" : "Defeat"}
                </span>{" "}
                <span className=" text-[12px] leading-[14px] text-light-text ">
                    24:14
                </span>
            </h4>
            <h6 className=" text-[12px] leading-[14px] text-grayed-text mt-1">
                Ranked solo
            </h6>
            <h2 className=" text-light-text text-[25px] leading-[30px] mt-[10px] ">
                6/8/10
            </h2>
            <h6 className=" text-[12px] leading-[14px] text-grayed-text mt-[10px] ">
                2 Days ago
            </h6>
        </div>
    );
};

const RightSide = (props) => {
    return (
        <div>
            {/* top images  */}
            <div className=" flex items-center ">
                <div className="laptop:w-[62px] laptop:h-[62px] relative mr-1 ">
                    <div className=" relative overflow-hidden laptop:w-full laptop:h-full laptop:rounded-[23px]  ">
                        <Image
                            src={CardImage}
                            alt="profile image"
                            layout="fill"
                        />
                    </div>
                    <div
                        className=" text-white font-gotham font-medium text-[6px] leading-[7px]  laptop:w-[18px] 
                          laptop:h-[18px] laptop:rounded-full laptop:border laptop:border-grayed-text laptop:italic
                          laptop:absolute laptop:left-[40%] laptop:-bottom-[6px]
                          laptop:bg-background flex items-center justify-center"
                    >
                        92
                    </div>
                </div>
                {/* power and batches  */}
                <div className=" flex ">
                    {/* powers  */}
                    <div className=" mr-2 ">
                        <div className=" relative w-[29px] h-[29px] rounded-5px ">
                            <Image
                                src={SummonerFlash}
                                alt="summoner flash image"
                                layout="fill"
                                className=" rounded-5px "
                            />
                        </div>
                        <div className=" relative w-[29px] h-[29px] rounded-5px mt-1 ">
                            <Image
                                src={SummonerHeal}
                                alt=" summoner heal image"
                                layout="fill"
                                className=" rounded-5px "
                            />
                        </div>
                    </div>
                    {/* batch  */}
                    <div>
                        <div className=" relative w-[29px] h-[29px] rounded-5px ">
                            <Image
                                src={BatchImg1}
                                alt=" batch image"
                                layout="fill"
                                className=" rounded-5px "
                            />
                        </div>
                        <div className=" relative w-[29px] h-[29px] rounded-5px mt-1 ">
                            <Image
                                src={BatchImg2}
                                alt=" batch image"
                                layout="fill"
                                className=" rounded-5px "
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom texts  */}
            <div className=" font-sf-pro-text font-bold text-[9.5px] leading-[11px] pl-2 mt-[17px] ">
                <p className=" text-grayed-text ">
                    <span className=" text-accent-color-2">2:1</span> KDA
                </p>
                <p className=" text-grayed-text mt-[2px] ">47.05% KP</p>
            </div>
        </div>
    );
};

const StatusCard = (props) => {
    return (
        <div className=" p-5 pt-[15px] bg-card-&-content-box flex items-center w-[300px] border-r border-background  ">
            {/* left side  */}
            <LeftSide {...props} />
            {/* right side  */}
            <RightSide />
        </div>
    );
};

export default StatusCard;
