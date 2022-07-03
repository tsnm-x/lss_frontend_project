import React from "react";
import Image from "next/image";
import Level from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Graph/level-diff.png";

const LevelDiffCard = () => {
    return (
        <div className={`w-[782px] h-[452px] relative`}>
            <Image src={Level} alt="level chart" layout="fill" />
        </div>
    );
};

export default LevelDiffCard;
