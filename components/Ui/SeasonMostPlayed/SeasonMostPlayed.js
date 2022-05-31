import React, { useState } from "react";
import Image from "next/image";
import PlayerOne from "../../../public/assets/players/NoPath - Copy (10).png";
import PlayerTwo from "../../../public/assets/players/NoPath - Copy (11).png";
import PlayerThree from "../../../public/assets/players/NoPath - Copy (12).png";
import { HiArrowDown } from "react-icons/hi";
import ChampList from "./ChampList";
import ProfileCardWrapHoc from "../../HOC/ProfileCardWrapHoc";

const SeasonMostPlayed = () => {
	const [expand, setExpand] = useState(false);

	const player = [
		{ name: "141 games", img: PlayerOne },
		{ name: "43 games", img: PlayerTwo },
		{ name: "15 games", img: PlayerThree },
	];

	const expandHandler = () => {
		setExpand(!expand);
	};

	return (
		<React.Fragment>
			{/* <aside className="card_wrap "> */}
			{/* top slider  */}
			<div className=" pb-6 ">
				<div className=" flex mb-6 justify-between  ">
					{/* {player.map((player, index) => {
                        return (
                            <div key={"player" + index}>
                                <div className=" relative mx-auto w-[61px] h-[61px] border border-mix-white-black rounded-full mb-[15px]">
                                    <Image
                                        src={player.img}
                                        alt="player image"
                                        layout="fill"
                                    />
                                </div>
                                <p className=" gotham-15px-book text-[#8D919F] ">
                                    {player.name}
                                </p>
                            </div>
                        );
                    })} */}
				</div>
				{/* <div className=" flex gap-x-[2px] justify-end">
					<div className=" w-10 h-[3px] bg-liquid-white rounded-full"></div>
					<div className=" w-6 h-[3px] bg-mix-white-black rounded-full"></div>
					<div className=" w-6 h-[3px] bg-mix-white-black rounded-full"></div>
					<div className=" w-6 h-[3px] bg-mix-white-black rounded-full"></div>
				</div> */}
			</div>
			{/* player champ list  */}
			{/* {expand && (
				<ChampList
					title="season most played champs"
					className=" -mx-[16px] pt-[14px] pb-[30px] px-[27px] "
				/>
			)} */}
			{/* bottom button  */}
			{/* <button
				onClick={expandHandler}
				className=" btn rounded-full w-[55px] h-[55px] p-0 flex justify-center items-center border-0 cursor-pointer mx-auto mt-5 hover:bg-btn-hover hover:rotate-45 "
			>
				<HiArrowDown className=" text-[20px]" />
			</button> */}
			{/* </aside> */}
		</React.Fragment>
	);
};

export default ProfileCardWrapHoc(SeasonMostPlayed);
