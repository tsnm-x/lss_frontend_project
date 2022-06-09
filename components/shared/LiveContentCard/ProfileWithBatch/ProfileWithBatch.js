import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileImage from "../../../../public/assets/Live_simulator/profile-image.png";
import LargeBatch from "../../../../public/assets/Live_simulator/large-batch.png";
import SmallBatch from "../../../../public/assets/Live_simulator/small-batch.png";

const ProfileWithBatch = (props) => {
    return (
        <div className=" relative ">
            {/* image  */}
            <div
                className={`border bg-white-blue  ${
                    props.className ? props.className : "border-[#FC2300] "
                } rounded-full w-[25px] h-[25px] relative overflow-hidden`}
            >
                <Image
                    className=" block rounded-full"
                    src={ProfileImage}
                    alt="player image"
                    layout="fill"
                />
            </div>
            {/* batchs  */}
            <div className=" flex justify-start items-end absolute left-[15px] bottom-[1px]  ">
                <div
                    className={`relative w-[8px] h-[8px] rounded-full border-[0.3px] bg-full-dark overflow-hidden border-white-blue flex justify-center items-center mr-[1px] `}
                >
                    <Image
                        className=" inline-block "
                        src={LargeBatch}
                        alt="rank icon"
                        layout="fill"
                    />
                </div>
                <div
                    className={`relative w-[6px] h-[6px] rounded-full border-[0.3px] bg-full-dark overflow-hidden border-white-blue flex justify-center items-center`}
                >
                    <Image
                        className=" inline-block "
                        src={SmallBatch}
                        alt="rank icon"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileWithBatch;
