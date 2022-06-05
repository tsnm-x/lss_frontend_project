import React from "react";
import ProfileCard from "../profileCard/ProfileCard";
import RankStatus from "../../Ui/RankStatus/RankStatus";

const ProfileWithRank = (props) => {
    return (
        <div className="container mx-auto z-30 relative px-4 flex gap-x-32  ">
            <ProfileCard btn={props.btn} />
            {/* rank status  */}
            <div className={` flex gap-x-7 items-end `}>
                <RankStatus title="Ranked Solo/Duo" />
                <RankStatus title="Ranked Flex" />
            </div>
        </div>
    );
};

export default ProfileWithRank;
