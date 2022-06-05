import React from "react";
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

const SuggestedBuild = () => {
    const BuildItems = [
        { name: "starting items", itemsList: [StartingItem1, StartingItem2] },
        { name: "core items", itemsList: [CoreItem1, CoreItem2] },
        {
            name: "full build path",
            itemsList: [BuildItem1, BuildItem2, BuildItem3, BuildItem4],
        },
    ];

    return (
        <div className=" relative w-[525px] ">
            {/* suggested contents  */}
            <SuggestedContents items={BuildItems} hocStyle={` px-7 py-6 rounded-[30px] w-[460px] ml-auto  `} />
            {/* suggested build img  */}
            <div className=" w-48 absolute -left-3 -bottom-[80px] ">
                <Image src={SuggestedImage} alt="Suggested build image" />
            </div>
        </div>
    );
};

export default SuggestedBuild;
