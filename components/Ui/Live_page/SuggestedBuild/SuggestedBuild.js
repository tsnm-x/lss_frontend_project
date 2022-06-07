import React, { useEffect } from "react";
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

const SuggestedBuild = () => {
    const matches = useSelector((state) => state.profile.profile);
	let mainPlayer = matches[0]?.players.find((player) => {
		return player.mainPlayer == true;
	});

    useEffect(()=>{

        console.log(mainPlayer);
        console.log(matches[0]);

    }, [mainPlayer])

    const BuildItems = [
        { name: "starting items", itemsList: [`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item0}.png`, `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item1}.png`] },
        { name: "core items", itemsList: [`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item2}.png`, `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item3}.png`] },
        {
            name: "full build path",
            itemsList: [`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item4}.png`, `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item5}.png`, `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${mainPlayer?.item6}.png`],
        },
    ];

    return (
        <div className=" relative w-[525px] ">
            {/* suggested contents  */}
            <SuggestedContents items={BuildItems} hocStyle={` px-7 py-6 rounded-[30px] w-[460px] ml-auto  `} championName={mainPlayer?.championName}/>
            {/* suggested build img  */}
            <div className=" w-48 absolute -left-3 -bottom-[80px] ">
                <Image src={SuggestedImage} alt="Suggested build image" />
            </div>
        </div>
    );
};

export default SuggestedBuild;
