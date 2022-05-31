import React from "react";
import ProfileWithBatch from "../../ProfileWithBatch/ProfileWithBatch";
import Image from "next/image";
import FaceOne from "../../../../public/assets/face-batch-row/NoPath - Copy (2).png";
import FaceTwo from "../../../../public/assets/face-batch-row/NoPath - Copy (3).png";
import FaceThree from "../../../../public/assets/face-batch-row/NoPath - Copy (4).png";
import FaceFour from "../../../../public/assets/face-batch-row/NoPath - Copy (8).png";
import FaceFive from "../../../../public/assets/face-batch-row/NoPath - Copy.png";
import FaceSix from "../../../../public/assets/face-batch-row/NoPath.png";

const PlayerFaceRow = (props) => {
	const faceList = [FaceOne, FaceTwo, FaceThree, FaceFour, FaceFive, FaceSix];
	const profileBatchList = ["", "", "", "", ""];

	return (
		<div className={`flex justify-between ${props.className}`}>
			<div className={`grid content-between gap-y-4 ${props.faceStyle}`}>
				{props.group.map((player, index) => {
					console.log(player, index, "player");
					const items = [
						player.item0,
						player.item1,
						player.item2,
						player.item3,
						player.item4,
						player.item5,
					];
					return (
						<div
							key={index}
							className=" grid grid-cols-[repeat(3,24px)] gap-[6px] "
						>
							{items.map((item, index) => {
								if (item === 0) {
									return (
										<div className=" w-6 h-6 relative  " key={index}></div>
									);
								}
								return (
									<div
										className=" w-6 h-6 relative border border-white-blue rounded-full "
										key={index}
									>
										<Image
											className="rounded-full"
											src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${item}.png`}
											alt="face icons"
											layout="fill"
										/>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>

			<div className={`grid content-between ${props.batchStyle}`}>
				{props.group.map((player, index) => {
					return (
						<ProfileWithBatch
							key={index}
							imgLink={player.championName}
							summoner1Id={player.summoner1Id}
							summoner2Id={player.summoner2Id}
							perks={player.perks}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default PlayerFaceRow;
