import React, { useState } from "react";
import Image from "next/image";

const RewardCard = (props) => {
	const selectSpell = (id) => {
		switch (id) {
			case 21:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerBarrier.png";

			case 4:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerFlash.png";

			case 1:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerBoost.png";

			case 14:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerDot.png";

			case 3:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerExhaust.png";

			case 6:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerHaste.png";

			case 7:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerHeal.png";

			case 13:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerMana.png";

			case 30:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerPoroRecall.png";

			case 31:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerPoroThrow.png";

			case 11:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerSmite.png";

			case 39:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerSnowURFSnowball_Mark.png";

			case 32:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerSnowball.png";

			case 12:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerTeleport.png";

			case 54:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/Summoner_UltBookPlaceholder.png";

			case 55:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/Summoner_UltBookSmitePlaceholder.png";

			default:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerBarrier.png";
		}
	};

	function largestMultiKill(largestMultiKill) {
		switch (largestMultiKill) {
			case 0:
			case 1:
				return "";
			case 2:
				return "Double Kill";
			case 3:
				return "Triple Kill";
			case 4:
				return "Quadra Kill";
			case 5:
				return "Penta Kill";
		}
	}

	return (
		<div className=" bg-full-dark pt-5 pb-4 pl-6 pr-8 rounded-3xl  ">
			{/* reward  */}
			<div className=" flex gap-x-3 mb-4 ">
				{props.items.map((item, index) => {
					if (item === 0) return <div className=" w-8 h-8 " key={index}></div>;
					return (
						<div className=" w-8 h-8 " key={index}>
							<img
								className=" rounded-full "
								src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${item}.png`}
								alt="reward item"
							/>
						</div>
					);
				})}
			</div>
			{/* kill reward  */}
			<div className=" flex gap-x-2 ">
				{props.summonerSpellsId.map((spellId, index) => {
					return (
						<div className=" w-7 h-7 " key={"reward" + index}>
							<img
								className="rounded-md "
								src={selectSpell(spellId)}
								alt="kill reward item"
							/>
						</div>
					);
				})}
				{props.largestMultiKill > 1 ? (
					<button className=" btn bg-red-yellow border-0 text-[12px] h-7 py-0 px-7 rounded-full  ">
						{largestMultiKill(props.largestMultiKill)}
					</button>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default RewardCard;
