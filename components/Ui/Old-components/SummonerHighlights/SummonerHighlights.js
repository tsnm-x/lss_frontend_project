import React from "react";
import ProfileCardWrapHoc from "../../HOC/ProfileCardWrapHoc";
import Image from "next/image";
import RoundChartOne from "../../../public/assets/graph/rounded/Sharts - Charts -1.png";
import RoundChartTwo from "../../../public/assets/graph/rounded/Sharts - Charts -2.png";
import RoundChartThree from "../../../public/assets/graph/rounded/Sharts - Charts 1.png";

const SummonerHighlights = () => {
	return (
		<div className=" flex gap-x-5 ">
			{/* <div className=" w-[70px] h-[70px] ">
                <Image src={RoundChartOne} alt="rounded chart" />
            </div>
            <div className=" w-[70px] h-[70px] ">
                <Image src={RoundChartTwo} alt="rounded chart" />
            </div>
            <div className=" w-[70px] h-[70px] ">
                <Image src={RoundChartThree} alt="rounded chart" />
            </div> */}
		</div>
	);
};

export default ProfileCardWrapHoc(SummonerHighlights);
