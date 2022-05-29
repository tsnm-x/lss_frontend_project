import React from "react";
import ProfileWithBatch from "../../ProfileWithBatch/ProfileWithBatch";
import Image from "next/image";
import FaceOne from "../../../../public/assets/face-batch-row/NoPath - Copy (2).png";
import FaceTwo from "../../../../public/assets/face-batch-row/NoPath - Copy (3).png";
import FaceThree from "../../../../public/assets/face-batch-row/NoPath - Copy (4).png";
import FaceFour from "../../../../public/assets/face-batch-row/NoPath - Copy (8).png";
import FaceFive from "../../../../public/assets/face-batch-row/NoPath - Copy.png";
import FaceSix from "../../../../public/assets/face-batch-row/NoPath.png";

const PlayerFaceRow = (props) => {
    const faceList = [FaceOne, FaceTwo, FaceThree, FaceFour, FaceFive, FaceSix];
    const profileBatchList = ["", "", "", "", ""];
    const faceBatchList = ["", "", "", "", ""];

    return (
        <div className={`flex justify-between ${props.className}`}>
            <div className={`grid content-between gap-y-4 ${props.faceStyle}`}>
                {faceBatchList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className=" grid grid-cols-[repeat(3,24px)] gap-[6px] "
                        >
                            {props.group.map((player, index) => {
                                return (
                                    <div
                                        className=" w-6 h-6 relative border border-white-blue rounded-full "
                                        key={index}
                                    >
                                        <Image
                                            className="rounded-full"
                                            src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${player.profileIcon}.png`}
                                            alt="face icons"
                                            layout="fill"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            <div className={`grid content-between ${props.batchStyle}`}>
                {profileBatchList.map((batch, index) => {
                    return (
                        <ProfileWithBatch
                            key={index}
                            imgLink={props.group[0].championName}
                            summoner1Id={props.group[0].summoner1Id}
                            summoner2Id={props.group[0].summoner2Id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PlayerFaceRow;
