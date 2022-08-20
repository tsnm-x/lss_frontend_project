import React, { useState, useEffect } from "react";
import Image from "next/image";
import Batch from '../../../../../../../public/assets/new-images/Profile/Vector.png'


const DrakeBatches = (props) => {
    const [centralImg, setCenteralImg] = useState("");

    const imgHandler = (type) => {
        switch (type) {
            case "AIR_DRAGON":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Cloud_Dragon_buff.png/revision/latest?cb=20191117184201";
            case "WATER_DRAGON":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Ocean_Dragon_buff.png/revision/latest?cb=20191117184400";
            case "FIRE_DRAGON":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/3/3f/Infernal_Dragon_buff.png/revision/latest?cb=20191117184224";
            case "EARTH_DRAGON":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/9/9e/Mountain_Dragon_buff.png/revision/latest?cb=20191117184251";
            case "HEXTECH_DRAGON":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Hextech_Dragon_buff.png/revision/latest?cb=20211231073400";
            default:
                return "https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Cloud_Dragon_buff.png/revision/latest?cb=20191117184201";
        }
    };

    const centralImgHandler = (type) => {
        switch (type) {
            case "AIR_DRAGON":
                return cloudDragon;
            case "WATER_DRAGON":
                return oceanDragon;
            case "FIRE_DRAGON":
                return infernalDragon;
            case "EARTH_DRAGON":
                return mountainDragon;
            case "HEXTECH_DRAGON":
                return hextechDragon;
            default:
                return cloudDragon;
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
        if (props.dragonDataBlue?.length === 4) {
            setCenteralImg(
                centralImgHandler(
                    props.dragonDataBlue[props.dragonDataBlue.length - 1]?.type
                )
            );
        } else if (props.dragonDataRed?.length === 4) {
            setCenteralImg(
                centralImgHandler(
                    props.dragonDataRed[props.dragonDataRed.length - 1]?.type
                )
            );
        } else {
            setCenteralImg(null);
        }
    }, [props.dragonDataBlue, props.dragonDataRed]);

    return (
        <div className=" w-full h-[40px] bg-card-&-content-box grid grid-cols-1 grid-rows-1 rounded-t-[10px] ">
            {/* center items  */}
            <div className=" relative">
                {/* left batch  */}
                <div className=" w-[300px] h-[40px] border-[#4895C1] border-[1px]  absolute left-0 top-0 "></div>
                {/* center element  */}
                <div className=" w-[40px] h-[40px] absolute left-[280px] top-0 flex justify-center  ">
                    <svg
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
                    </svg>
                    {/* batch img  */}
                    <div className=" left-0 top-0 relative w-[16px] h-[18px]  mt-2  ">
                        <Image
                            src={Batch}
                            alt="batch img"
                            layout="fill"
                            className=" w-full h-full"
                        />
                    </div>
                </div>
                {/* right batch  */}
                <div className=" w-[300px] h-[40px] absolute right-0 top-0  "></div>
            </div>
            {/* center batch  */}
            {/* <div className=" flex justify-center items-end row-start-1 col-start-1 ">
                <div className=" relative w-[100px] h-[47px] ">
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
            {/* <div className=" row-start-1 col-start-1 grid grid-cols-2 bg-transparent rounded-t-[10px] ">
                <div
                    className={`rounded-tr-[10px] flex items-center justify-center gap-x-[6px] ${
                        props.dragonDataRed?.length === 4
                            ? "border-[#72B2E3] border"
                            : ""
                    }`}
                >
                    {props.dragonDataRed?.length < 4
                        ? addEmptyBatches(4 - props.dragonDataRed?.length)?.map(
                              (elem) => {
                                  return (
                                      <div
                                          key={elem}
                                          className={`w-[30px] h-[30px] relative rounded-full bg-mix-white-black`}
                                      ></div>
                                  );
                              }
                          )
                        : null}
                    {props.dragonDataRed
                        ?.slice()
                        .reverse()
                        .map((event, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`w-[30px] h-[30px] relative rounded-full ${
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
                <div
                    className={`rounded-tr-[10px] flex items-center justify-center gap-x-[6px] ${
                        props.dragonDataBlue?.length === 4
                            ? "border-[#72B2E3] border"
                            : ""
                    } `}
                >
                    {props.dragonDataBlue?.map((event, index) => {
                        return (
                            <div
                                key={index}
                                className={`w-[30px] h-[30px] relative rounded-full ${
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
                                      className={`w-[30px] h-[30px] relative rounded-full bg-mix-white-black`}
                                  ></div>
                              );
                          })
                        : null}
                </div>
            </div> */}
        </div>
    );
};

export default DrakeBatches;
