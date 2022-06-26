import React, { useEffect } from "react";
import ProfileWithBatchSmall from "../../ProfileWithBatch/ProfileWithBatchSmall";
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

    useEffect(()=>{
        console.log(props.group)
    }, [props.group])

    return (
        <div className={`flex justify-between ${props.className}`}>
            <div className={`grid content-between gap-y-2  ${props.faceStyle}`}>
                {props.group.map((player, index) => {
                    const items = [
                        player.item0,
                        player.item1,
                        player.item2,
                        player.item3,
                        player.item4,
                        player.item5,
                    ];
                    return (
                        <div key={index} className=" flex items-center ">
                            {items.map((item, index) => {
                                if (item === 0) {
                                    return null;
                                }
                                return (
                                    <div
                                        className=" first:w-[15px] first:h-[15px] first:border first:mr-0 mr-[1px] first:border-[#FFD700] border-[0.3px] border-white-blue w-[12px] h-[12px] relative rounded-full "
                                        key={index}
                                    >
                                        <Image
                                            className="rounded-full"
                                            src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${item}.png`}
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
                {props.group.map((player, index) => {
                    return (
                        <ProfileWithBatchSmall
                            key={index}
                            imgLink={player.championName}
                            summoner1Id={player.summoner1Id}
                            summoner2Id={player.summoner2Id}
                            perks={player.perks}
                            profileBatchBorder={props.profileBatchBorder}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PlayerFaceRow;
