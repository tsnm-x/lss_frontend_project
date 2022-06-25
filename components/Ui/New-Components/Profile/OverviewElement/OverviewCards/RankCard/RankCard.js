import React from "react";
import Image from "next/image";
import One from "../../../../../../../public/assets/new-images/Profile/card/one.png";
import Two from "../../../../../../../public/assets/new-images/Profile/card/two.png";
import Three from "../../../../../../../public/assets/new-images/Profile/card/three.png";
import Four from "../../../../../../../public/assets/new-images/Profile/card/four.png";
import Five from "../../../../../../../public/assets/new-images/Profile/card/five.png";
import Six from "../../../../../../../public/assets/new-images/Profile/card/six.png";

const RankCard = () => {
    const imageList = [One, Two, Three, Four, Five, Six, null];

    return (
        <div className=" px-[17px] py-[27px] grid grid-cols-4 grid-rows-2 gap-3 bg-card-&-content-box w-[200px] border-r border-background  ">
            {imageList.map((img, index) => {
                return (
                    <div
                        className=" w-[32px] h-[32px] relative rounded-full bg-[#2f2936] "
                        key={index}
                    >
                        {img && (
                            <Image src={img} alt="batch image" layout="fill" />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default RankCard;
