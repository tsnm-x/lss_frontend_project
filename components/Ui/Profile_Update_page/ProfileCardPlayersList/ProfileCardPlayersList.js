import React from "react";
import Image from "next/image";

const ProfileCardPlayersList = (props) => {
	const orderedPlayersList = [];
	orderedPlayersList[0] = props.playerList[5];
	orderedPlayersList[1] = props.playerList[0];
	orderedPlayersList[2] = props.playerList[6];
	orderedPlayersList[3] = props.playerList[1];
	orderedPlayersList[4] = props.playerList[7];
	orderedPlayersList[5] = props.playerList[2];
	orderedPlayersList[6] = props.playerList[8];
	orderedPlayersList[7] = props.playerList[3];
	orderedPlayersList[8] = props.playerList[9];
	orderedPlayersList[9] = props.playerList[4];

	return (
		<div className=" flex bg-full-dark grow shrink basis-0 justify-between -ml-8 pl-6 ">
			{/* left side list  */}
			<div className=" grid grid-cols-2 gap-y-2 w-[300px] py-5 ">
				{orderedPlayersList.map((player, index) => {
					return (
						<div key={"player-" + index} className="flex items-center gap-x-3">
							<div className=" w-5 h-5 rounded-full border border-mix-white-black-100 relative ">
								<Image
									className="rounded-full border border-mix-white-black-100"
									src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${player?.championName}.png`}
									alt="player image"
									layout="fill"
								/>
							</div>
							<h6 className=" gotham-10px-mid text-[10px] text-mix-white-black-100 capitalize ">
								{player?.summonerName}
							</h6>
						</div>
					);
				})}
			</div>
			{/* right side indicator  */}
			{/* <div className={` w-4 h-full ${props.indicatorColor}`}></div> */}
		</div>
	);
};

export default ProfileCardPlayersList;
