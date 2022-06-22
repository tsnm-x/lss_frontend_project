import React from "react";
import Profile from "../../universal/Profile/Profile";
import RanksList from "../RanksList/RanksList";
import CoverPhoto from "../../../../../public/assets/new-images/Profile/profile-cover-image.png";
import Image from "next/image";

const PlayerInfo = (props) => {
    return (
        <section className=" laptop:relative">
            <div
                className=" container laptop:flex laptop:items-center laptop:justify-between
             laptop:pt-[67px] laptop:pb-[31px] relative z-30 "
            >
                <Profile />
                <RanksList />
            </div>
            {/* cover photo  */}
            <div className=" w-full h-full absolute left-0 top-0 z-10">
                <Image
                    src={CoverPhoto}
                    alt="profile cover image"
                    layout="fill"
                />
            </div>
            {/* cover photo mask  */}
            <div className=" w-full h-full absolute left-0 top-0 z-20 coverImg_mask"></div>
        </section>
    );
};

export default PlayerInfo;
