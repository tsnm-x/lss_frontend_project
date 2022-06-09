import React, {useEffect} from "react";
import Image from "next/image";
import SuggestedImage from "../../../../public/assets/Live/suggestedBuild.png";
import SuggestedContents from "./SuggestedContent";
import StartingItem1 from "../../../../public/assets/Live/suggested-builds/starting-item 1.png";
import StartingItem2 from "../../../../public/assets/Live/suggested-builds/starting-item 2.png";
import CoreItem1 from "../../../../public/assets/Live/suggested-builds/core-items 1.png";
import CoreItem2 from "../../../../public/assets/Live/suggested-builds/core-items 2.png";
import BuildItem1 from "../../../../public/assets/Live/suggested-builds/build-items 1.png";
import BuildItem2 from "../../../../public/assets/Live/suggested-builds/build-items 2.png";
import BuildItem3 from "../../../../public/assets/Live/suggested-builds/build-items 3.png";
import BuildItem4 from "../../../../public/assets/Live/suggested-builds/build-items 4.png";
import { useSelector } from "react-redux";
import ItemsWithName from "../ItemsWithName/ItemsWithName";
import LiveContentWrap from "../../../HOC/LiveContentWrapHoc/LiveContentWrapHoc";
import ProfileImage from "../../../../public/assets/profile-image.png";

const SuggestedBuild = (props) => {
    const matches = useSelector((state) => state.profile.profile);
    let mainPlayer = matches[0]?.players.find((player) => {
        return player.mainPlayer == true;
    });

    useEffect(() => {
        // console.log(mainPlayer);
        // console.log(matches[0]);
    }, [mainPlayer]);

    const BuildItems = [
        {
            name: "starting items",
            itemsList: [
                `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item0}.png`,
                `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item1}.png`,
            ],
        },
        {
            name: "core items",
            itemsList: [
                `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item2}.png`,
                `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item3}.png`,
            ],
        },
        {
            name: "full build path",
            itemsList: [
                `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item4}.png`,
                `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item5}.png`,
                `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item6}.png`,
            ],
        },
    ];

    return (
        <div className=" relative ">
            <div className={`${props.className}`}>
                <div className=" font-gotham-book text-[10px] leading-[12px] mb-[6px]  ">
                    <p className=" capitalize text-full-dark ">
                        suggested build
                    </p>
                    <p className=" capitalize  text-white-blue">{mainPlayer?.championName}</p>
                </div>
                {/* bottom line  */}
                <div className=" flex items-center">
                    {/* profile image  */}
                    <div className=" w-[50px] h-[50px] relative mr-4">
                        <Image className="rounded-full" src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${mainPlayer?.championName}.png`} alt="profile image" width={"100%"} height={"100%"} />
                    </div>
                    {/* rank images  */}
                    <div className=" flex gap-x-2 justify-end">
                        {BuildItems.map((items, index) => {
                            return (
                                <ItemsWithName
                                    key={index}
                                    name={items.name}
                                    itemList={items.itemsList}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveContentWrap(SuggestedBuild);
