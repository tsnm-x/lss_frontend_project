import React from "react";
import Profile from "../../universal/Profile/Profile";
import CoverPhoto from "../../../../../public/assets/new-images/Profile/profile-cover-image.png";
import Image from "next/image";
import Classes from './PlayerInfo.module.css'

const PlayerInfo = (props) => {
    console.log(CoverPhoto)
    return (
        <section className=" relative">
            <div
                className=" container relative z-30 laptop:flex laptop:items-end 
             laptop:pt-[67px] laptop:pb-[31px] desktop:pt-[150px]  "
            >
                <Profile
                    btnDetails={props?.btnDetails}
                    summonerName={props?.summonerName}
                    profileIcon={props?.profileIcon}
                    summonerLevel={props?.summonerLevel}
                    region={props?.region}
                />
            </div>
            {/* cover photo  */}
            <div
                className={` w-full h-full ${Classes.bgImg} absolute left-0 top-0 `}
                
            >
                
            </div>
            {/* cover photo mask  */}
            <div className="w-full h-full absolute left-0 top-0 z-20 coverImg_mask"></div>
        </section>
    );
};

export default PlayerInfo;
