import React, { useState, useEffect } from "react";
import Image from "next/image";
import Batch from "../../../../../../../public/assets/new-images/Profile/Vector.png";
import CloudDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Cloud_Dragon.svg";
import OceanDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Ocean_Dragon.svg";
import InfernalDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Infernal_Dragon.svg";
import MountainDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Mountain_Dragon.svg";
import HextechDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Hextech_Dragon.svg";
import mutedCloudDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Muted_Cloud_Dragon.svg";
import mutedOceanDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Muted_Ocean_Dragon.svg";
import mutedInfernalDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Muted_Infernal_Dragon.svg";
import mutedMountainDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Muted_Mountain_Dragon.svg";
import mutedHextechDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Muted_Hextech_Dragon.svg";
import coloredCloudDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Colored_Cloud_Dragon.svg";
import coloredOceanDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Colored_Ocean_Dragon.svg";
import coloredInfernalDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Colored_Infernal_Dragon.svg";
import coloredMountainDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Colored_Mountain_Dragon.svg";
import coloredHextechDragon from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Colored_Hextech_Dragon.svg";
import emptyDragonImg from "../../../../../../../public/assets/new-images/simulation/Dragon_SVGs/Centeral_Empty_Img.svg"
const DrakeBatches = (props) => {
    const [centralImg, setCenteralImg] = useState("");

    const imgHandler = (type) => {
        switch (type) {
            case "AIR_DRAGON":
                return CloudDragon;
            case "WATER_DRAGON":
                return OceanDragon;
            case "FIRE_DRAGON":
                return InfernalDragon;
            case "EARTH_DRAGON":
                return MountainDragon;
            case "HEXTECH_DRAGON":
                return HextechDragon;
            default:
                return CloudDragon;
        }
    };

    const centralColoredImgHandler = (type) => {
        switch (type) {
            case "AIR_DRAGON":
                return coloredCloudDragon;
            case "WATER_DRAGON":
                return coloredOceanDragon;
            case "FIRE_DRAGON":
                return coloredInfernalDragon;
            case "EARTH_DRAGON":
                return coloredMountainDragon;
            case "HEXTECH_DRAGON":
                return coloredHextechDragon;
            default:
                return coloredCloudDragon;
        }
    };

    const centralMutedImgHandler = (type) => {
        switch (type) {
            case "AIR_DRAGON":
                return mutedCloudDragon;
            case "WATER_DRAGON":
                return mutedOceanDragon;
            case "FIRE_DRAGON":
                return mutedInfernalDragon;
            case "EARTH_DRAGON":
                return mutedMountainDragon;
            case "HEXTECH_DRAGON":
                return mutedHextechDragon;
            default:
                return mutedCloudDragon;
        }
    };



    const addEmptyBatches = (length) => {
        let arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(i);
        }
        return arr;
    };

    useEffect(() => {
        if(props.dragonDataBlue?.length === 4 || props.dragonDataRed?.length === 4){
            if (props.dragonDataBlue?.length === 4) {
                setCenteralImg(
                    centralColoredImgHandler(
                        props.dragonDataBlue[props.dragonDataBlue.length - 1]?.type
                    )
                );
            } else if (props.dragonDataRed?.length === 4) {
                setCenteralImg(
                    centralColoredImgHandler(
                        props.dragonDataRed[props.dragonDataRed.length - 1]?.type
                    )
                );
            }
        } else if(props.dragonDataBlue?.length === 3 || props.dragonDataRed?.length === 3){
            if (props.dragonDataBlue?.length === 3) {
                setCenteralImg(
                    centralMutedImgHandler(
                        props.dragonDataBlue[props.dragonDataBlue.length - 1]?.type
                    )
                );
            } else if (props.dragonDataRed?.length === 3) {
                setCenteralImg(
                    centralMutedImgHandler(
                        props.dragonDataRed[props.dragonDataRed.length - 1]?.type
                    )
                );
            }
        }
        else {
            setCenteralImg(emptyDragonImg);
        }
    }, [props.dragonDataBlue, props.dragonDataRed]);

    return (
        <div className=" w-full h-[40px] bg-card-&-content-box rounded-t-[10px] relative ">
            {/* center items  */}
            <div className=" relative">
                {/* center element  */}
                <div className=" w-[40px] h-[40px] absolute left-[280px] top-0 flex justify-center z-50">
                    {/* <svg
                        className=" absolute left-0 top-0"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.707107 20L20 0.707107L39.2929 20L20 39.2929L0.707107 20Z"
                            stroke="#4895C1"
                            fill="#241e2c"
                        />
                    </svg> */}
                    {/* batch img  */}
                    <div className=" flex justify-center items-end row-start-1 col-start-1 ">
                        <div className=" relative w-[100px] h-[40px] z-50">
                            {centralImg && (
                                <Image
                                    src={centralImg}
                                    alt="center batch"
                                    layout="fill"
                                />
                            )}
                        </div>
                    </div>
                </div>
                {/* right batch  */}
                <div className=" w-[300px] h-[40px] absolute right-0 top-0  "></div>
            </div>
            {/* batch  */}

            {/* center batch  */}
            {/* <div className=" flex justify-center items-end row-start-1 col-start-1 ">
                <div className=" relative w-[100px] h-[47px] z-50">
                    {centralImg && (
                        <Image
                            src={centralImg}
                            alt="center batch"
                            layout="fill"
                        />
                    )}
                </div>
            </div> */}
            {/* left right batch  */}
            <div className=" absolute left-0 top-0 w-full h-full grid grid-cols-2 bg-transparent rounded-t-[10px] ">
                <div
                    className={`rounded-tr-[10px] flex items-center ${
                        props.dragonDataRed?.length === 4
                            ? "border-[#72B2E3] border"
                            : ""
                    }`}
                >
                    <div className=" flex items-center gap-x-[5px] ml-[110px] ">
                        {props.dragonDataRed?.length < 4
                            ? addEmptyBatches(
                                  4 - props.dragonDataRed?.length
                              )?.map((elem) => {
                                  return (
                                      <div
                                          key={elem}
                                          className={`w-[26px] h-[26px] relative rounded-full bg-[#2b2c41]`}
                                      ></div>
                                  );
                              })
                            : null}
                        {props.dragonDataRed
                            ?.slice()
                            .reverse()
                            .map((event, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`w-[26px] h-[26px] relative rounded-full ${
                                            !event.type
                                                ? "bg-mix-white-black"
                                                : "  bg-transparent "
                                        }`}
                                    >
                                        {imgHandler(event.type) ? (
                                            <Image
                                                src={imgHandler(event.type)}
                                                alt={event.type}
                                                layout="fill"
                                            />
                                        ) : null}
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div
                    className={`rounded-tr-[10px] flex items-center justify-end ${
                        props.dragonDataBlue?.length === 4
                            ? "border-[#72B2E3] border"
                            : ""
                    } `}
                >
                    <div className=" flex items-center gap-x-[5px] mr-[110px] ">
                        {props.dragonDataBlue?.map((event, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`w-[26px] h-[26px] relative rounded-full ${
                                        !event.type
                                            ? "bg-mix-white-black"
                                            : "  bg-transparent "
                                    }`}
                                >
                                    {imgHandler(event.type) ? (
                                        <Image
                                            src={imgHandler(event.type)}
                                            alt={event.type}
                                            layout="fill"
                                        />
                                    ) : null}
                                </div>
                            );
                        })}
                        {props.dragonDataBlue?.length < 4
                            ? addEmptyBatches(
                                  4 - props.dragonDataBlue?.length
                              )?.map((elem) => {
                                  return (
                                      <div
                                          key={elem}
                                          className={`w-[26px] h-[26px] relative rounded-full bg-[#2b2c41]`}
                                      ></div>
                                  );
                              })
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrakeBatches;
