import React, { useState } from "react";
import classes from "./PlayerCards.module.css";
import ProfileImage from "../../../../public/assets/season most played champs/leeSin.png";

import { BiExpand } from "react-icons/bi";
import ProfileWithBatch from "../../ProfileWithBatch/ProfileWithBatch";
import RewardCard from "../RewardCard/RewardCard";
import ProfileCardPlayersList from "../ProfileCardPlayersList/ProfileCardPlayersList";
import PlayerRankCard from "../PlayerRankCard/PlayerRankCard";
import PlayerRankCardReverse from "../PlayerRankCard/PlayerRankCardReverse";
import Domination from "../../../../public/assets/runes/7200_Domination.png";
import Inspiration from "../../../../public/assets/runes/7203_Whimsy.png";
import Precision from "../../../../public/assets/runes/7201_Precision.png";
import Resolve from "../../../../public/assets/runes/7204_Resolve.png";
import Sorcery from "../../../../public/assets/runes/7202_Sorcery.png";

const PlayerCards = (props) => {
	const [cardDetailsExpand, setCardDetailsExpand] = useState(false);

	const selectRune = (runeId) => {
		switch (runeId) {
			case "8100":
				return Domination;
			case "8300":
				return Inspiration;
			case "8000":
				return Precision;
			case "8400":
				return Resolve;
			case "8200":
				return Sorcery;
		}
	};

	const expandHandler = () => {
		setCardDetailsExpand(!cardDetailsExpand);
	};
	// console.log(props.mainPlayer, "props");
	return (
		<React.Fragment>
			<div className="relative bg-full-dark rounded-bl-[35px]  ">
				<div className="relative flex flex-col gap-y-12 ">
					{/* top section  */}
					<div className=" flex justify-between">
						{/* profile section  */}
						<div
							className={` relative grow shrink basis-0 pr-7 ${classes.card}`}
						>
							<div className={` ${props.color} ${classes.indicator}`}></div>
							<div
								className={` ml-[8px] py-4 pl-4 pr-12 pb-10  ${classes.card_content}`}
							>
								{/* left profile  */}
								<div>
									{/* small title  */}
									<div className=" flex ml-3 mb-4 ">
										<p className=" sf-7px-regular text-liquid-white capitalize ">
											ranked solo
										</p>
										<p className=" sf-7px-regular capitalize text-mix-white-black-100 ml-4  ">
											{props.gameStartDate}
										</p>
									</div>
									{/* profile  */}
									<div className=" flex  gap-x-8 items-stretch ">
										{/* profile details  */}
										<div className=" w-56 ">
											<div className=" flex items-center gap-x-8 bg-full-dark pt-5 pb-4 pl-6 pr-8 rounded-3xl mb-3  ">
												{/* profile image  */}
												<ProfileWithBatch
													imgLink={props.mainPlayer?.championName}
													rune1={props.mainPlayer?.perks.styles[0].style}
													rune2={props.mainPlayer?.perks.styles[1].style}
													perks={props.mainPlayer?.perks}
												/>

												{/* date  */}
												<h2 className=" gotham-14px text-[22px] text-mix-white-black-100  ">
													<span className=" text-white-blue">
														{props.mainPlayer?.kills}
													</span>
													/
													<span className=" text-red-yellow-gold">
														{props.mainPlayer?.deaths}
													</span>
													/{props.mainPlayer?.assists}
												</h2>
											</div>
											{/* bottom status bar  */}
											<div
												className={` bg-full-dark rounded-full px-8 ${
													props.type === "victory"
														? "text-white-blue"
														: "text-red-700"
												} py-[6px] flex items-center justify-between `}
											>
												<p className=" capitalize ">{props.type}</p>
												<p className=" capitalize ">{props.duration}</p>
												<span className=" sf-7px-regular text-mix-white-black uppercase ">
													23:cs
												</span>
											</div>
										</div>
										{/* kill details  */}
										<RewardCard
											items={[
												props.mainPlayer?.item0,
												props.mainPlayer?.item1,
												props.mainPlayer?.item2,
												props.mainPlayer?.item3,
												props.mainPlayer?.item4,
												props.mainPlayer?.item5,
												props.mainPlayer?.item6,
											]}
											level={props.mainPlayer?.largestMultiKill}
											// killReward={[
											// 	props.mainPlayer?.item0,
											// 	props.mainPlayer?.item1,
											// ]}
											summonerSpellsId={[
												props.mainPlayer?.summoner1Id,
												props.mainPlayer?.summoner2Id,
											]}
											summonerRiotId={props.mainPlayer?.summonerRiotId}
											// still not founded this two images so is fack data
										/>
										{/* right side blank  */}
										{cardDetailsExpand && (
											<div className=" bg-full-dark rounded-3xl w-full"></div>
										)}
									</div>
								</div>
							</div>
						</div>
						{/* list section  */}
						{!cardDetailsExpand && (
							<ProfileCardPlayersList
								playerList={props.playerList}
								indicatorColor={props.color}
							/>
						)}
					</div>
					{/* player rank card  */}
					{cardDetailsExpand && (
						<div className=" grid grid-cols-2 gap-x-16 pl-6 mr-6 pb-10 ">
							{<PlayerRankCard firstGroup={props.playerList.slice(0, 5)} />}
							{
								<PlayerRankCardReverse
									secondGroup={props.playerList.slice(5, 10)}
								/>
							}
						</div>
					)}
					{/* expand button  */}
					<button
						onClick={expandHandler}
						className={`w-5 h-5 flex justify-center items-center rounded-full absolute -bottom-2 right-16 text-black ${props.color}`}
					>
						<BiExpand className=" text-[12px] " />
					</button>
				</div>
				{/* right side indicator  */}
				<div
					className={` w-4 h-full absolute right-0 top-0 ${props.color}`}
				></div>
			</div>
		</React.Fragment>
	);
};

export default PlayerCards;
